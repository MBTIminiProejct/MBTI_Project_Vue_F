<template>
	<div class="mycharacter">
		<h1>내 캐릭터</h1>
		<h2>HP : {{$store.state.characterinfo.characterHP}}</h2>
		<h2>물리공격력 : {{$store.state.characterinfo.characterAD}}</h2>
		<h2>마법공격력 : {{$store.state.characterinfo.characterAP}}</h2>
		<h2>물리방어력 : {{$store.state.characterinfo.characterADDefence}}</h2>
		<h2>마법방어력 : {{$store.state.characterinfo.characterAPDefence}}</h2>
		<h2>속도 : {{$store.state.characterinfo.characterSpeed}}</h2>
		<h2>명중률 : {{$store.state.characterinfo.characterHitRate}}</h2>
		<h2>회피율 : {{$store.state.characterinfo.characterAvoidanceRate}}</h2>
		<h2>치명확률 : {{$store.state.characterinfo.characterCritical}}</h2>
		<h2>추가공격력 : {{$store.state.characterinfo.characterAdditionalDmg}}</h2>

	</div>
  </template>
  
  <script>

  export default {
	name: 'MyCharacter',
	data() {
    	return {
			battleField : ''
   		}
  	}
}
</script>

<style scoped>

</style>
  