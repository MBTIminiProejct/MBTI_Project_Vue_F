<template>
	<div class="matchroom">
		<div class="left"><MatchRoomMyCharacter/></div>
		<div class="right"><MatchRoomOtherCharacter/></div>
		<div><MatchRoomCenterVue></MatchRoomCenterVue></div>
	</div>
  </template>
  
<script>
import MatchRoomMyCharacter from '@/components/MatchRoomMyCharacter';
import MatchRoomOtherCharacter from '@/components/MatchRoomOtherCharacter.vue';
import MatchRoomCenterVue from '@/components/MatchRoomCenter.vue';
import MainFooter from '@/components/MainFooter.vue'

  export default {
	name: 'MatchRoomView',
	components: {
		MatchRoomMyCharacter,
		MatchRoomOtherCharacter,
		MatchRoomCenterVue,
		MainFooter
	},
}
</script>
<style scoped>
div.left {
        width: 30%;
        float: left;
        box-sizing: border-box;
        
    }
div.right {
        width: 30%;
        float: right;
        box-sizing: border-box;
        
    }
</style>
