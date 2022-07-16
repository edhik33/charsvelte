
<script>
    export let charities;

</script>
<!-- PROGRAM -->
<div class="container">    
      <div class="row mt-3 mb-0 bg-white shadow-sm  mb-3 bg-body rounded " style="border-radius: 17px;">
      <div class="col-md-12 mb-3"></div>

      <div class="container">
          <div class="row mb-3 text-left">
              <div class="col-md-12">
                  <h4>Campaign</h4>
              </div>
          </div>
      </div>


      
      {#each charities as charity }
 <div class="col-12 col-md-4 col-lg-4 mb-3" >
        
              <div class="card h-80 shadow" style="border-radius:12px">
               
                       <img src="{charity.image}" class="w-100 rounded lazy" style="object-fit: cover">
                           <div class="mt-3 " style="height: 40px;background: #fff;">
                              <span class=" text-dark p-2" style="font-size: 15px;">{ charity.title }</span>
                           </div>

                         <div class="p-2">
                            <div class="progress">
                                  <div class="progress-bar progress-bar-striped progress-bar-animated rounded-pill bg-success" role="progressbar" aria-valuemin="0" aria-valuemax="100">90%</div>
                          </div>
                        </div>

                          <div class="mt-2">
                              <div class="row align-items-center jumbotron-santri-koding">
                                  <div class="card-body text-center">
                                     
                                        <div class="row align-items-left jumbotron-santri-koding">
                                             <div class="col-12 col-md-6 text-left">
                                                  <h5 class="font-weight-bolder text-dark p-2">{ charity.crowdfunding }    <img src="{charity.logo}" class="align-items-left" style="width:20px;"></h5> 
                                              </div>                   
                                          </div>

                              <div class="row align-items-center jumbotron-santri-koding">
                                  <div class="col-6 col-md-6 text-left">

                                        <span style="color:grey;padding:6px"> Terkumpul</span> 
                                              <h6 class="mb-3 line-height-1 text-dark font-weight-bold p-2">Rp { charity.donation}</h6> 
                                 </div>
                               
                                <div class="col-6 col-md-6 text-right">
                                 <div 
                                          class="text-dark text-decoration-none">
                                          <a href="/donation/{charity.slug}" type="button" class="btn btn-outline-success m-3" style="border-radius: 15px;margin-right:10px;">Selengkapnya</a>
                                     </div>
                                    
                                </div>

      

                          </div>
                  
                  </div>
              </div>
          </div>
          
          </div>
      
          </div>
          {/each}
          </div>
          
          </div>
          
      
              

          <div class="col-md-12 mb-4">
              <div class="text-center mt-4">
                  <div class="btn btn-success shadow-sm p-2 mb-1 mt-1 bg-white text-success rounded">Lihat Semua Program <i class="fa fa-long-arrow-alt-right"></i>
                  </div>
              </div>
          </div>


<!-- end PROGRAM -->