<script>
      import {onMount} from 'svelte';
      import axios from 'axios';

	import Header from "../components/Header.svelte";
      import Slider from "../components/Slider.svelte";
      import Category from "../components/Category.svelte";
      import Campaign from "../components/Campaign.svelte";
      import Post from "../components/Post.svelte";
     

      let charities = [];


      const fetchDataPosts = async () => {
        
        //fetch data from Rest API
        await axios.get('https://backend.quranesia.or.id/api/sidaq')
        .then(response => {

            //assign response data to variable posts
            charities = response.data.data.data
        })
        
    }

    //run hook "onMount"
    onMount(async () => {

        //call method "fetchDataPosts"
        fetchDataPosts();
    });

</script>

<main>
      <div class="home" style="background-color:#F6FBFF;"></div>
      <div class="jumbotron" ></div>
    
	<Header />
      <Slider />
      <Category />
      <Campaign {charities}/>
      <Post />
                
        
</main>

