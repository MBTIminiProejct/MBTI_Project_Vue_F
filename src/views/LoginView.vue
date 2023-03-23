<template>
  <div class="home">
    <Login msg="Welcome to Your Vue.js App"/>
        <div class="bottom"><MainFooter></MainFooter></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
  name: 'LoginView',
  components: {
    Login,
    MainFooter
  }
}
</script>

