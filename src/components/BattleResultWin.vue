<template>
	<div class="battleresultwin">
		<h1>승자</h1>
		<a href='https://ifh.cc/v-L44C7h' target='_blank'><img src='https://ifh.cc/g/L44C7h.jpg' border='0'></a>
		<h3>승자 닉네임 : {{ $store.state.battleloginfo.winnerName }}</h3>
		<h3>승자 MBTI : {{ $store.state.battleloginfo.winnerMBTI }}</h3>
		<h3>{{ $store.state.battleloginfo.winnerName }}은(는) {{ $store.state.battleloginfo.winPoint }} 의 점수를 얻었습니다 :D</h3>
	</div>
</template>

<script>

export default {
name: 'BattleResultWin',
// data() {
// 	return {
// 		battleLog 
// 	}
// },
computed: {
	battleLog() {
		return this.$store.state.battleloginfo.blog.replaceAll("\n", "<br/>")
	}
}
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{
    width: 300px;
    height: 300px;
}
</style>
  