<template>
	<div class="battleresult">
		<h1>대결 결과</h1>
		<br><br>
		<h2>스크롤하여 대결 로그를 확인해보세요</h2>
		<div v-html="battleLog" style="overflow:scroll; width:700px; height:400px;"></div>
		<br><br>
	</div>
</template>

<script>

export default {
	name: 'BattleResult',
	computed: {
		battleLog() {
			return this.$store.state.battleloginfo.blog.replaceAll("\n", "<br/>")
		}
	}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.battleresult {
	  text-align: center;
}
</style>
  