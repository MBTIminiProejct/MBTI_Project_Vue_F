<template>
  <div class="mypage">
    <h1 class="title">This is Mypage</h1>
    <div class="user-profile">
      <img :src="this.$store.state.mbtiresult.mbtiimgurl">
    </div>
    <div class="info-container">
      <div class="user-info">
        <div class="user-info-row">
          <div class="user-info-label">유저번호 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userNum }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">nickname :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userName }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">email :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userEmail }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">mbti :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userMBTI }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">승 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userWin }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">패 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userDefeat }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">점수 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userPoint }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">아이템 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userName }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">대결허용 :</div>
          <div class="user-info-value">{{ $store.state.userinfo.userAcceptance }}</div>
        </div>
      </div>
      <div class="battle-info">
        <div class="battle-info-row">
          <div class="battle-info-label">대결 상대 유저번호 :</div>
          <input type="text" v-model="battleUserNum" class="battle-info-input">
        </div>
        <div class="battle-info-row">
          <button @click="perpBattle()" class="battle-info-button">대결준비</button>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';

  export default {
	name: 'Mypage',
	methods:{
		perpBattle() {
			if (this.battleUserNum == this.$store.getters.getMyNum) {
				alert("나 외의 상대번호를 입력해주세요");
			} else if (this.battleUserNum > 0 && this.battleUserNum < 1000000) {
				axios.get(this._baseUrl + "mypage/battleuser", {
        			params : {
          			battleUserNum : this.battleUserNum
        			}
				})
				.then(result=> {
					if (result.data == "nonUser") {
						alert("존재하지않는 유저 번호입니다.")
					} else {
						this.$store.commit("setCompetionUserInfo",JSON.parse(result.data.competionUserInfo));
						this.$store.commit("setCompetionCharacterInfo",JSON.parse(result.data.competionCharacterInfo));
						this.$router.push({
								name : "matchroom"
						})
					}
				})
				.catch(function () {
					alert("실패")
					console.log("실패");
				});
			} else {
				alert("대결상대의 번호를 입력해주세요!! \n 1 ~ 1000000 숫자만 입력가능합니다")
			}
		}
    },
	data() {
    	return {
			battleUserNum : ''
   		}
  	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .mypage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}
  
  .user-profile img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  top: 0;
  left: 0;
  border-radius: 50%; 
}
  
  .info-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  width: 100%;
}
  
  .user-info, .battle-info {
    width: 45%;
    margin: 0 10px;
  }
  
  .user-info-row, .battle-info-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }
  
  .user-info-label, .battle-info-label {
    font-weight: bold;
    margin-right: 10px;
    width: 30%;
    text-align: right;
  }
  
  .user-info-value, .battle-info-input {
  width: 70%;
  align-items: center;
  white-space: nowrap; 
}
  
  .battle-info-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  
  .title {
    text-align: center;
  }
</style>
  