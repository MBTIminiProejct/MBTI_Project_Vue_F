<template>
  <div class="main">
    
    <div class="left"><MainHeader></MainHeader></div>
    <div class="right"><MainRight></MainRight></div>
    <div class="left"><MainBody></MainBody></div>

    <button @click="goResultPage()">결과페이지로 이동</button><br><br>
    <a href="https://kauth.kakao.com/oauth/logout?client_id=26c4c3e8460d88a695130b78307910f4&logout_redirect_uri=http://192.168.0.195/login" @click="logout()">로그아웃</a>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import MainBody from '@/components/MainBody.vue'
import MainRight from '@/components/MainRight.vue'

export default {
  components: { 
    MainHeader, 
    MainBody,
    MainRight
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
    goMyPage(){
      this.$router.push({
                  name : "mypage"
      })
    }
  }
}
</script>
<style scoped>
div.left {
        width: 70%;
        float: left;
        box-sizing: border-box;
        
    }
div.right {
        width: 30%;
        float: right;
        box-sizing: border-box;
        
    }
</style>