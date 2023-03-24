<template>
  <div class="home">
    <Login msg="Welcome to Your Vue.js App"/>
      <MainFooter></MainFooter>
  </div>
</template>

<script>
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

