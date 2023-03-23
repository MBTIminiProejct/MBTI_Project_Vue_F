<template>
	<div class="battleresult">
		<h1>대결 결과</h1>
		<br><br>
		<h2>스크롤하여 대결 로그를 확인해보세요</h2>
		<div v-html="battleLog" style="overflow:scroll; width:700px; height:400px;"></div>
		<br><br>
		<button class="btn-primary" @click="goMyPage()">MainPage로 이동</button>
	</div>
</template>

<script>

export default {
	name: 'BattleResult',
	computed: {
		battleLog() {
			return this.$store.state.battleloginfo.blog.replaceAll("\n", "<br/>")
		}
	},
	methods:{
		goMyPage() {
            this.$router.push({path:'mypage'});
        }
	}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.battleresult {
	  text-align: center;
}
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
</style>
  