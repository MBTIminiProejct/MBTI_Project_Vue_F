<template>
  <div style="font-family:verdana; text-align: center">
    <MainHeader></MainHeader>
      <div class="right"><MainRight></MainRight></div>
        <div class="body"><MainBody></MainBody></div>
          <MainFooter></MainFooter>
          <div class="btnbox1" style="font-family:verdana;">
          <!-- <button @click="goResultPage()">결과페이지로 이동</button><br><br> -->
       <div><a href="https://kauth.kakao.com/oauth/logout?client_id=26c4c3e8460d88a695130b78307910f4&logout_redirect_uri=http://192.168.0.195/login" @click="logout()">로그아웃</a></div>
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

div.right {
    float: right;
    box-sizing: border-box;         
    }
div.body {
    max-width : 900px;     
    }
div.btnbox1{
    color : white;
}
a {
    position: absolute;
    top:12.5px;
    right:12.5px;
}

</style>