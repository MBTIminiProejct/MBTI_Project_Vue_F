<template>
	<div class="mypage">
		<Mypage msg="Welcome to Your Vue.js App"/>
	</div>
  </template>
  
  <script>
  import Mypage from '@/components/Mypage.vue';

  export default {
	name: 'MypageView',
	components: {
		Mypage
	}
}
  </script>