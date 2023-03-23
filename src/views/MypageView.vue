<template>
	<div class="mypage">
		<Mypage msg="Welcome to Your Vue.js App"/>
		<MainFooter></MainFooter>
	</div>
  </template>
  
  <script>
  import Mypage from '@/components/Mypage.vue';
  import MainFooter from '@/components/MainFooter.vue'

  export default {
	name: 'MypageView',
	components: {
		Mypage,
		MainFooter
	}
}
  </script>