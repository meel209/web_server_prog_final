
<template>

  <form class="container" @submit.prevent="submit">
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
            {{ex.Name}} <input class="input is-rounded" type="text" id=ex.name placeholder="Please Enter Values" size="1">
          </li>
        </ul>
      </div> 
      <div class="control">
          <center><button class="button is-primary" >Submit</button></center>
      </div>
    </div> 

  </form>

</template>

<script>
//import { Players, PictureDeck, CurrentPicture, Init } from "../models/Fitness";
import { Exercises, Init } from "../models/Fitness";

export default {
  name: 'Home',
    created(){
    Init();
  },
  data:()=>({
    Exercises
    //Player,
    //PictureDeck,
    //CurrentPicture
  }),
  data(){
    return{
      Exercises
    }
  },
  methods:{
    submit(){
        try{
          
        }catch (error){
          this.error = error;
        }
      }
  },
  

  
  components: {
    
  }
}
</script>

<style>
  li{
    margin-bottom: 30px;
  }
  button{
    margin-bottom: 20px;
    padding: 20px;
  }
</style>


