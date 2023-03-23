<template>
    <div class="user" style= "text-align: center">
      <h2>{{$store.state.anotheruserinfo.userName}}님의 상세 페이지</h2>
          <ul>
            <img v-bind:src= '$store.state.mbtianotheruserimg'>
            <h2>유저번호 : {{$store.state.anotheruserinfo.userName}}</h2>
            <h2>mbti : {{$store.state.anotheruserinfo.userMBTI}}</h2>
            <h2>승 : {{$store.state.anotheruserinfo.userWin}}</h2>
            <h2>패 : {{$store.state.anotheruserinfo.userDefeat}}</h2>
            <h2>점수 : {{$store.state.anotheruserinfo.userPoint}}</h2>
            <h2>아이템 : {{$store.state.anotheruserinfo.userItem}}</h2>
            <h2>대결허용 : {{$store.state.anotheruserinfo.userAcceptance}}</h2>
            <button class="btn-primary" @click="perpBattle">싸우자!</button>
        </ul>
    </div> 
</template>
<script>
import {mapState} from 'vuex';
import axios from 'axios';
export default {
  name:'UserPageBody',
  computed:{
        ...mapState({
            profile:state => state.anotheruserinfo.userProfile
        })
    },
    methods:{
		perpBattle() {
			axios.get(this._baseUrl + "mypage/battleuser", {
        			params : {
          			battleUserNum : this.$store.getters.getOtherUserNum
        			}
				})
				.then(result=> {
						this.$store.commit("setCompetionUserInfo",JSON.parse(result.data.competionUserInfo));
						this.$store.commit("setCompetionCharacterInfo",JSON.parse(result.data.competionCharacterInfo));
						this.$router.push({
								name : "matchroom"
						})
				})
				.catch(function () {
					alert("실패")
					console.log(result.data);
				});
		},
  }
  
}
</script>
<style scoped>
.btn-primary {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
}
h1 {
  color: rgb(78, 69, 78);
  font-weight: 900; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
h2 {
  color: rgb(78, 69, 78);
  font-weight: 500; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
  text-align: left;
}
div.user {
    text-align: left;
    padding-top: 15%;
    padding-right: 15%;
    padding-bottom: 0%;
    padding-left: 15%;
}
</style>
