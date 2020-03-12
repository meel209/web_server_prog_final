
<template>
  <div class="container">
      <div class="card">
        <div class="card-content">
            <h1 class="title is-1">
                Exercises
            </h1>
        </div>
      </div>
    
    <div class="card">
      <div class="card-content">
        <ul>
          <!-- <li v-for="player in Players" :key="player.Name">
            {{player.Name}} {{player.Score}}
          </li>-->
          <li v-for="ex in Exercises" :key="ex.Name">
            {{ex.Name}} <input class="input is-rounded" type="text" placeholder="Rounded input">
          </li>

        </ul>
      </div> 

    </div>  
  </div>

</template>

<script>
//import { Players, PictureDeck, CurrentPicture, Init } from "../models/Fitness";
import { Exercises, Init } from "../models/Fitness";
Init();
export default {
  name: 'Home',
  data:()=>({
    Exercises
    //Player,
    //PictureDeck,
    //CurrentPicture
  }),
  components: {
    
  }
}
</script>

<style>
  li{
    margin-bottom: 30px;
  }
</style>


