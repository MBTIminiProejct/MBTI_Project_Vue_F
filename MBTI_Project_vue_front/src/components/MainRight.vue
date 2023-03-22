<template>
    <div id="rank">  
        <h1>랭킹표</h1>
        <button @click="showRank()">랭킹 보기</button>
        {{$store.state.ranklist.userNum}}
          <ul>
            <li v-for="(rank, index) in $store.state.ranklist" v-bind:key="index">
              {{index+1}}등 ID : <router-link to="/userpage"><button @click="userPage(index)">{{rank.userName}}</button></router-link>
              , {{rank.userWin}}승, {{rank.userPoint}}점
          </li>
        </ul>
    </div> 
</template>


<script>
import axios from 'axios';

export default {
  name:'MainRight',
  data() {
  return {
    userNum: null,
    index : ''
  }
},
  methods:{
    showRank(){
      axios.get(this._baseUrl + "battle/ranking")
      .then(result=> {
        console.log("test");
        console.log(result);
        this.$store.commit("setRankList",result.data);
      })
      .catch(function () {
        console.log("랭킹 가져오기 실패");
        
      });
          
    },
    userPage(index) {
      let cmd = this;
      console.log("제발");
      axios.get(this._baseUrl + "userpage/readUserPage" , {
      params: { 
        index: index
      }
   })
   .then(function (response) {

      cmd.$store.commit("setAnotherUserInfo",response.data)
     
   }).catch(function (error) {
      console.log(error);
   })
      
    }
  }
}


</script>
<style scoped>
h1 {
  color: rgb(78, 69, 78);
  font-weight: 900; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
h2 {
  color: rgb(78, 69, 78);
  font-weight: 500; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
</style>
