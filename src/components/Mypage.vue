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
    <button class="btn-secondary" @click="deleteCharacter()">캐릭터 삭제하기</button>
    <br>
    <button class="btn-secondary" id="deleteUser" @click="deleteUser()">회원탈퇴</button>
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
		},
    deleteCharacter() {
            this.$confirm(
                {
                    message:'캐릭터를 삭제하시겠습니까?',
                    button:{
                        no : '취소',
                        yes: '삭제'
                    },
                    callback:confirm=>{
                        if(confirm){
                            this.$axios.delete(this._baseUrl + "mypage/character",{
                                params : {
                                    userCharacterNum : this.$store.getters.getUserCharacterNum
                                    }
                            })
                            .then(result=> {
                                alter("성공")
                            })
                            .catch(function(){
                                console.log("캐릭터 삭제 연결 실패");
                            })
                        }else{
                            return
                        }
                    }
                }
            ) 
        },
        deleteUser(){
            this.$confirm(
                {
                    message:'"MBTI 싸우자"에서 정말 탈퇴하시겠습니까?',
                    button:{
                        no : '취소',
                        yes: '탈퇴'
                    },
                    callback:confirm=>{
                        if(confirm){
                            this.$axios.delete(this._baseUrl + "mypage/deleteUser",{
                                data:{
                                    userEmail:this.$store.getters.getUserEmail
                                }
                            })
                            .then(result=> {
                                console.log(result.data);
                                localStorage.removeItem('vuex');
                                location.reload();
                            })
                            .catch(function(){
                                console.log("회원 탈퇴 연결 실패");
                            })
                        }else{
                            return //이전화면 돌아가기
                        }
                    }
                }
            )             
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
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');

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

  
  .btn-secondary {
    background-color: #f44336;
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
</style>
  