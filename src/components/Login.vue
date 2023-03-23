<template>
  <div class="hello">
    <div style="font-family:verdana; text-align: center"> 
		  <h2>나만의  MBTI 캐릭터 만들기</h2>
		  <h3 style="font-family:courier">모두 덤벼라!</h3>
		  <h1>MBTI 미니 대전</h1>
	  </div>
    <!-- <div class="kakaologin">
      <img class="main" src="https://i.imgur.com/y4HuMAZ.jpeg">
      <br>
      <a class="kakaoa" @click="kakaoLogin()">
      <img class="kakaoimg" src="../assets/kakao_login_medium_narrow.png">
      </a>
    </div>
  </div> -->
  <img class="main" src="https://i.imgur.com/y4HuMAZ.jpeg">
  <div class="kakaologin">
    <a class="kakaoa" @click="kakaoLogin()">
    <img class="kakaoimg" src="../assets/kakao_login_medium_narrow.png" style="max-width: 30%; height: auto;">
  </a>
  </div>
</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  methods:{
    
    kakaoLogin(){
      
      console.log(window.Kakao)
      window.Kakao.Auth.login({
          scope:'profile_nickname,profile_image,account_email',
          success:this.getKakaoAccount,
      });
    },
    getKakaoAccount(){
      window.Kakao.API.request({
        url:'/v2/user/me',
        success:res=>{
          const kakao_account=res.kakao_account;
          const nickname=res.properties.nickname;
          const profile=res.properties.profile_image;
          const email=kakao_account.email;
          console.log("nickname",nickname);
          console.log('email',email);
          console.log('profile',profile);
          console.log('res',res);
          axios.get(this._baseUrl + "login/", {
              params : {
                nickname : nickname,
                profile : profile,
                email : email
              }
            })
              .then(result=> {
                this.$store.commit("setUserInfo",JSON.parse(result.data.userInfo));
                this.$store.commit("setCharacterInfo",JSON.parse(result.data.characterInfo));
                this.$store.commit("setMBTIResult",JSON.parse(result.data.mbtiresultInfo));
                console.log(result.data);
                this.$router.push({name:"main"});
              
              })
              .catch(function () {
                console.log("로그인 실패");
              });
          
        },
        fail : error=>{
          console.log(error);
        }
      })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img.main {
    border: none;
    width: 45%;
    margin: 45px;
    box-shadow: 0px 0px 0.5px #d8d8d8;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a.kakaoa {
    color: #42b983;
  }
  div.kakaologin { 
    /* width: 200px;  */
    /* height:0px;  */
    /* background-color:#fdd101;  */
    /* color:white; display:flex;  */
    /* align-items: center;  */
    /* justify-content: center;  */
    /* cursor:pointer;  */
  }
</style>