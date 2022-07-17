exports.handler = function (event, context, callback) {
      const Midtrans = require('midtrans-client');
      const header = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Cpntent-Type',
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
      };

      const snap = Midtrans.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
            clientKey: process.env.MIDTRANS_CLIENT_KEY,
      });

      const { id, name , amount } = JSON.parse(event.body);
      const names = name.split('');
      let fisrt_name, last_name;

      if (names && names.length > 1) {
            fisrt_name = [0],
            last_name = [1];
      } else if(names.length > 1) {
            fisrt_name = [0],
                  last_name = '';
      }

      const parameters = {
            transaction_details: {
                  order_id: `BWACHA-${id}-${+new Date()}`,
                  gross_amount: parseInt(amount)
            },
            customer_details: {
                  fisrt_name,
                  last_name,
            },
            credit_card: {
                  secure: true
            }
      }

      snap.createTransaction(parameters)
            .then(function (transaction){
                  const { token, redirect_url } = transaction;
                  console.log(`Token: ${token}`);
                  console.log(`Redirect_url: ${redirect_url}`);

                  callback(null, {
                        statusCode: 200,
                        headers,
                        body: JSON.stringify({
                              URL: redirect_url,
                              params: parameters
                        })
                  })
            }).catch(function (err) {
                  console.error(`Error: ${e.message}`);
                  callback(null, {
                        statusCode: 400,
                        headers,
                        body: JSON.stringify({ error : err.message})
                  })
            })
}