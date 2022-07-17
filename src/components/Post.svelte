<script>
      //import hook onMount
      import { onMount } from 'svelte';
  
      //import axios
      import axios from 'axios';
  
      //define variable
      let posts = [];
  
      //method "fetchDataPosts"
      const fetchDataPosts = async () => {
          
          //fetch data from Rest API
          await axios.get('https://backend.quranesia.or.id/api/post')
          .then(response => {
  
              //assign response data to variable posts
              posts = response.data.data.data
          })
      }
  
      //run hook "onMount"
      onMount(async () => {
  
          //call method "fetchDataPosts"
          fetchDataPosts();
      });
  
  </script>

<!-- POST -->


<div class="container">    
      <div class="row mb-0 bg-white shadow-sm mb-3 bg-body rounded" style="border-radius: 17px;">
          <div class="col-md-12 mb-3"></div>
              <div class="container">
                  <div class="row mb-3 text-left">
                          <div class="col-md-12">
                          <h4>Artikel</h4>
                          </div>
                  </div>
              </div>
 
      
{#each posts as post }
      

              <div class="col-12 col-md-4 col-lg-4 mb-3" >
        
                  <div class="card h-80 shadow" style="border-radius:12px">
                   
                           <img src="{post.image}" class="w-100 rounded lazy" style="object-fit: cover" alt="opo">
                               <div class="mt-3 " style="height: 40px;background: #fff;">
                                  <span class=" text-dark p-2" style="font-size: 15px;">{ post.title }</span>
                               </div>
                      </div>
                     </div>
             
    
    
          
   
 
              {/each}
              </div>
                   
        <div class="col-md-12 mb-3">
         <div class="text-center mt-3">
  
                  <div class="btn btn-success shadow-sm p-2 mb-1 mt-1 bg-white text-success rounded">Lihat Semua Artikel <i class="fa fa-long-arrow-alt-right"></i></div>
  
                  
  
         </div>
      </div>
  </div>
  <!-- END POST PROGRAM --> 
  
  <!-- END POST PROGRAM --> 