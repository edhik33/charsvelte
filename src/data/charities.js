const mixins = {
 
      methods: {

          formatPrice(value) {
              let val = (value/1).toFixed(0).replace('.', ',')
              return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
          },

          percentage(partialValue, totalValue) {
              return (100 * partialValue) / totalValue;
          },
  
          maxDate(maxDate) {
              
              let date = new Date()
              let now =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
  
              //if same date
              if(now == maxDate) {
                  return true
              }
  
              //if now > max date
              if(now > maxDate) {
                  return true
              }
              return false
          },
  
          countDay(maxDate) {
  
              let date = new Date()
              let now =  date.getFullYear() + '-' + ('0' + (date.getMonth()+1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
  
              let dt1 = new Date(now);
              let dt2 = new Date(maxDate);
  
              let result = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - 
              Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  
              if(result < 0) {
                  return 0
              }
  
              return result
  
          }
      },
      
  }
  
  export default mixins