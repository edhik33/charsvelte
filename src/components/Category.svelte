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
          await axios.get('https://backend.quranesia.or.id/api/category')
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


<div class="container">
      <div class="row bg-white rounded " style="border-radius: 17px;">
          <div class="col-md-12 "></div>

            
                  {#each posts as item }
                  <div class="col-md-3 col-3  text-center " >
                      <img src="{item.image}" class="mt-3 rounded-circle bg-success"  style="width: 50px;text-align:center">
                  <p class="mt-2">{ item.name }</p>
              </div>
              {/each}
          </div>
      </div>
