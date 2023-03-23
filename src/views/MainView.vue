<template>
  <div class="main" style="font-family:verdana; text-align: center">
    <div class="top"><MainHeader></MainHeader></div>
      <div class="right"><MainRight></MainRight></div>
        <div class="left"><MainBody></MainBody></div>
          <div class="bottom"><MainFooter></MainFooter></div>

          <div class="btnbox1">
          <!-- <button @click="goResultPage()">결과페이지로 이동</button><br><br> -->
       <a href="https://kauth.kakao.com/oauth/logout?client_id=26c4c3e8460d88a695130b78307910f4&logout_redirect_uri=http://192.168.0.195/login" @click="logout()">로그아웃</a>
   </div>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainBody from '@/components/MainBody.vue'
import MainRight from '@/components/MainRight.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  components: { 
    MainHeader, 
    MainBody,
    MainRight,
    MainFooter
    },
  name: 'MainView',
  props:{
    nickname : {
      type:String,
      default:''
    },
    email :{
      type:String,
      default:''
    },
    profile:{
      type:String,
      default:''
    }
  },
  methods:{
    logout(){
      localStorage.removeItem('vuex');
      location.reload();
    },
    goResultPage(){
      this.$router.push({
                  name : "result"
      })
    },
    // goMyPage(){
    //   this.$router.push({
    //               name : "mypage"
    //   })
    // }
  }
}
</script>
<style scoped>
div.main {
  background-color: white;
}
div.right {
    width: 30%;
    float: right;
    box-sizing: border-box;
          
    }
div.left {
    width: 70%;
    float: left;
    box-sizing: border-box;
        
    }
div.btnbox1{
    box-sizing: border-box;
    
}
</style>