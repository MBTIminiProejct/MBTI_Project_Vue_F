<template>
	<div class="battleresultlose">
		<h1>패자</h1>
		<a href='https://ifh.cc/v-BoR06x' target='_blank'><img src='https://ifh.cc/g/BoR06x.jpg' border='0'></a>
		<h3>패자 닉네임 : {{ $store.state.battleloginfo.loserName }}</h3>
		<h3>패자 MBTI : {{ $store.state.battleloginfo.loserMBTI }}</h3>
		<h3>{{ $store.state.battleloginfo.loserName }}은(는) {{ $store.state.battleloginfo.losePoint }} 만큼 점수를 잃었습니다 ㅜ</h3>
	</div>
</template>

<script>

export default {
name: 'BattleResultLose',
}

</script>



<style scoped>
img{
    width: 300px;
    height: 300px;
}
</style>
  