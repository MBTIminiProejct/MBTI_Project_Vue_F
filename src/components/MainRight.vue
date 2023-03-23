<template>
    <div id="rank">  
        <h1>랭킹표</h1>
        <button @click="showRank()">랭킹 보기</button>
        {{$store.state.ranklist.userNum}}
          <ul>
            <li v-for="(rank, index) in $store.state.ranklist" v-bind:key="index">
              {{index+1}}등 ID : <router-link to="/userpage"><a @click="userPage(index)">{{rank.userName}}</a></router-link>
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
      let cmd =this;
      this.index = index
      //console.log("제발");
      axios.get(this._baseUrl + "userpage/readUserPage" , {
      params: { 
        index: index
      }
   })
   .then(function (response) {
      console.log(response.data);
      //let cmd =this;
      // console.log(response.data.mbtiImg);
      // cmd.$store.commit("setAnotherUserInfo",response.data['userInfo'])
      // cmd.$store.commit("setAnotherUserInfo",response.data['mbtiImg'])
      cmd.$store.commit("setAnotherUserInfo",response.data)
      //let cmc =this;
        axios.get('http://192.168.0.195:8085/springmbti/userpage/readMbtiPage' , {
            params: {
              index: cmd.index
            }
          })
          .then(function (response) {
            console.log(response.data.mbtiimgurl);
            cmd.$store.commit("setMbtiAnotherUserImg",response.data.mbtiimgurl)
          }).catch(function (error) {

          }) 
        
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
