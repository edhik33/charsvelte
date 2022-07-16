<script>
  //import hook onMount
  import { onMount } from 'svelte';

  //import axios
  import axios from 'axios';

  //define variable
  let sliders = [];

  //method "fetchDataPosts"
  const fetchDataPosts = async () => {
      
      //fetch data from Rest API
      await axios.get('https://backend.quranesia.or.id/api/slider')
      .then(response => {

          //assign response data to variable posts
          sliders = response.data.data.data
      })
  }

  //run hook "onMount"
  onMount(async () => {

      //call method "fetchDataPosts"
      fetchDataPosts();
  });

</script>


<div class="container" >    
      <div class="row mt-3 mb-0 bg-white shadow-sm  mb-3 bg-body rounded " style="border-radius: 17px;">
      <div class="col-md-12 mb-3"></div>
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        {#each sliders as slider }
        <div class="carousel-item active">
          <img src="{slider.image}" class="d-block w-100" alt="...">
      </div>
        {/each}
      
      </div>
    </div>
    </div>
    </div>