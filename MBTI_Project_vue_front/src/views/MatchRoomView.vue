<template>
	<div class="mypage">
		<transition name="fade">
			<p v-if="show"><a class ="loading" href='https://ifh.cc/v-Q2J5M4' target='_blank'><img src='https://ifh.cc/g/Q2J5M4.gif' border='0'></a></p>
		</transition>
		<div v-if="show2" class="left"><MatchRoomMyCharacter/></div>
		<div v-if="show2" class="right"><MatchRoomOtherCharacter/></div>
		<div v-if="show2" ><MatchRoomCenterVue></MatchRoomCenterVue></div>
		<button @click="show = !show">
			Toggle render
		</button>
	</div>
  </template>
  
<script>
import MatchRoomMyCharacter from '@/components/MatchRoomMyCharacter';
import MatchRoomOtherCharacter from '@/components/MatchRoomOtherCharacter.vue';
import MatchRoomCenterVue from '@/components/MatchRoomCenter.vue';

  export default {
	name: 'MatchRoomView',
	components: {
		MatchRoomMyCharacter,
		MatchRoomOtherCharacter,
		MatchRoomCenterVue
	},
	data() {
		return {
			show : true,
			show2 : true
		}
	}
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
	.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
img {
    border: 1px solid #d8d8d8;
    width: 100%;
    margin: 100px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
</style>
