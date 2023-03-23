<template>
	<div class="battleresult">
		<h1>대결 결과</h1>
		<br><br>
		<h2>스크롤하여 대결 로그를 확인해보세요</h2>
		<div v-html="battleLog" style="overflow:scroll; width:600px; height:400px;"></div>
		<br><br>
		<h3>크리티컬공격로직 - 0 ~ 70 사이의 난수 + 캐릭터크리티컬확률 = 100이상일시 크리티컬공격</h3>
		<h3>회피로직 - 공격캐릭터명중률 - (0 ~ 100 난수 + 방어캐릭터회피율) = 100이상일시 miss판정</h3>
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
	  text-align: left;
}
</style>
  