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
          <div class="user-info-value">{{ $store.state.userinfo.userItem }}</div>
        </div>
        <div class="user-info-row">
          <div class="user-info-label">대결허용 :</div>
          <div class="user-info-value" id="acc">{{ $store.state.userinfo.userAcceptance }}</div>
        </div>
      </div>
      <div class="battle-info">
        <div class="battle-info-row">
          <div class="battle-info-label">대결 상대 유저번호 :</div>
          <div class="battle-info-input-wrapper">
            <input type="text" v-model="battleUserNum" class="battle-info-input">
          </div>
        </div>
        <div class="battle-info-row">
    <button @click="perpBattle()" class="battle-info-button">대결준비</button>
  </div>
</div>
    </div>
    <br>
    <div style="display: flex; justify-content: space-between;">
      <button class= "btn-change" @click="changeAccpet()" style="margin-right: 150px;">대결허용 상태변경</button>
      <button class="btn-secondary" @click="deleteCharacter()" style="margin-left: 300px;">캐릭터 삭제하기</button>
      <button class="btn-secondary" id="deleteUser" @click="deleteUser()" style="margin-left: 20px;">회원탈퇴</button>
    <vue-confirm-dialog></vue-confirm-dialog>
    </div>
  </div>
</template>
  
  <script>
  import axios from 'axios';

  export default {
	name: 'Mypage',
	data() {
		return {
			Accept : "ㅅ"
		}
	},
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
					if (result.data.nonUser == "nonUser") {
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
					console.log(result.data);
				});
			} else {
				alert("대결상대의 번호를 입력해주세요!! \n 1 ~ 1000000 숫자만 입력가능합니다")
			}
		},
    deleteCharacter() {
      let tmp = this;
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
                                data : {
                                    userCharacterNum : this.$store.getters.getUserCharacterNum,
                                    userEmail : this.$store.getters.getUserEmail
                                    }
                            })
                            .then(result=> {
                                alert("캐릭터 삭제 완료!!!");
                                tmp.$store.commit("setUserInfo",result.data);
                                console.log(tmp.$store.getters.getUserCharacterNum);
                                this.$router.push({name:"main"});
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
                    },
        changeAccpet() {
          axios.get(this._baseUrl + "mypage/useraccpet", {
                params : {
                  userNum : this.$store.getters.getMyNum
                }
				      })
              .then(result=> {
                alert("변경 완료")
                if (this.$store.getters.getUserAccept == "대결불가") {
                  this.$store.commit("setUserAcceptChange", "대결허용")
                  this.$router.push({
								    name : "mypage"
						      })
                } else {
                  this.$store.commit("setUserAcceptChange", "대걸불가")
                  this.$router.push({
								    name : "mypage"
						      })
                }
              })
              .catch(function () {
                alert("변경실패 관리자에게 문의해보세요")
              });
              },
            
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
    margin: 10px;
  }
  
  .user-info-row, .battle-info-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 9px;
  }
  
  .user-info-label, .battle-info-label {
    font-weight: bold;
    margin-right: 8px;
    width: 80%;
    text-align: right;
  }
  
  .user-info-value, .battle-info-input {
  width: 70%;
  align-items: center;
  white-space: nowrap; 
}
  
  .battle-info-button {
    background-color: #007bff;
    border: none;
    color: white;
    padding: 9px 22px;
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
    padding: 9px 24px;
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
  .battle-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.battle-info-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.battle-info-label {
  margin-right: 10px;
  font-size: 1.2rem;
}

.battle-info-input-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.battle-info-input {
  padding: 5px;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.battle-info-button {
  padding: 10px;
  font-size: 1.2rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
}
.btn-change {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
}
</style>