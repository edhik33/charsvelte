
<script>
    import { onMount } from "svelte";
    import axios from 'axios';
    import Header from "../components/Header.svelte";
    
        export let params;

        let charity;

        async function getCharity(slug) {
            const res = await fetch(`https://backend.quranesia.or.id/api/sidaq/${slug}`)
            return res.json();
        }

       
        // async function getCharity(slug) {
        //     axios.get(`https://backend.quranesia.or.id/api/sidaq/${slug}`)
        //     return charity.value = response.data.data;
        // }
       
                    
                

        onMount(async function() {
            charity = await getCharity(params.slug)
        });
        


    
</script>
      <div class="donation" style="background-color:#F6FBFF;">
          <!-- header -->
          <Header />
       
          <!-- end header -->
        
                <!-- main content -->
              
        <div class="container mt-100">
            {#if charity}
       
            <div class="row justify-content-center">
                <div class="col-md-8 mb-4">
                    <div class="card border-0 rounded shadow-custom" style="border-radius: 20px">
                        <div class="card-body">
                            <h4 class="font-weight-bold text-center" style="margin-top: 0px">{charity.data.title}</h4>
                             <hr>
                              <div class="author">
                                <div class="row">
                                    <div class="col-md-1 col-2"> 
                                    </div>
                                </div>
                            </div>
                         <img src="{charity.data.image}" class="w-100 rounded lazy" style="object-fit: cover" alt="opo">
                          <hr>
                         
                           
                             <div class="progress">
                                <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100">20 %</div>
                            </div>
                                                        
                            <div class="row align-items-center jumbotron-santri-koding">
                                <div class="col-6 col-md-6 text-left">
                                    <span style="color:grey"> Terkumpul</span> 
                                        <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. 20.000</h6> 
                                </div>
                                    <div class="col-6 col-md-6 text-right">
                                    <span style="color:grey">Target Donasi</span>
                                        <h6 class="mb-3 line-height-1 text-dark font-weight-bold ">Rp. 60.000</h6> 
                                    </div>                       
                                </div>

                                <h6> {@html charity.data.description}</h6> 
                                                                                       
                                <form>
                                    <div class="form-group">
                                        <label for="exampleInputAmount">Amount donation</label>
                                        <input required type="number" class="form-control" id="exampleInputAmount"
                                            aria-describedby="amountHelp" placeholder="Enter amount">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputName">Your name</label>
                                        <input required type="text" class="form-control" id="exampleInputName"
                                            aria-describedby="nameHelp" placeholder="Enter full name">
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input required type="email" class="form-control" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" placeholder="Enter email">
                                    </div>
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                        <label class="form-check-label" for="exampleCheck1">I Agree</label>
                                    </div>
                                </form>
                                <div class="modal-footer">
									<button type="button" class="btn btn-primary">Continue</button>
								</div>

                            </div>
                        </div>
                    </div>
            </div>
            {/if}
        </div>
  
            </div>
        
                <!-- main content -->
        
       
        
              
                <!-- end footer -->
          