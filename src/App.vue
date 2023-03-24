<template>
  <div id="app"> 

    <router-view/>
     
  </div>
</template>

<script>
import MainFooter from '@/components/MainFooter.vue'
import MainHeader from '@/components/MainHeader.vue'

export default {
  components : {
    MainFooter,
    MainHeader
  },
  computed: {
    isLogIn(){
     const fixedViews = ['MainView'];
      return fixedViews.includes(this.$route.name);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
