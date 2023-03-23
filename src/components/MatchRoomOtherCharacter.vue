<template>
	<div class="othercharacter">
		<h1>{{$store.state.competionuserinfo.userName}} 캐릭터</h1>
		<h2>HP : {{$store.state.competioncharacterinfo.characterHP}}</h2>
		<h2>물리공격력 : {{$store.state.competioncharacterinfo.characterAD}}</h2>
		<h2>마법공격력 : {{$store.state.competioncharacterinfo.characterAP}}</h2>
		<h2>물리방어력 : {{$store.state.competioncharacterinfo.characterADDefence}}</h2>
		<h2>마법방어력 : {{$store.state.competioncharacterinfo.characterAPDefence}}</h2>
		<h2>속도 : {{$store.state.competioncharacterinfo.characterSpeed}}</h2>
		<h2>명중률 : {{$store.state.competioncharacterinfo.characterHitRate}}</h2>
		<h2>회피율 : {{$store.state.competioncharacterinfo.characterAvoidanceRate}}</h2>
		<h2>치명확률 : {{$store.state.competioncharacterinfo.characterCritical}}</h2>
		<h2>추가공격력 : {{$store.state.competioncharacterinfo.characterAdditionalDmg}}</h2>

	</div>
  </template>
  
  <script>
  export default {
	name: 'OtherCharacter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.othercharacter {
	    text-align: left;
}
h1 {
	  font-size: 30px;
}
</style>
  