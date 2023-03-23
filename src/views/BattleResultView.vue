<template>
	<div class="showbattleresult">
		<BattleResultWin class="left"/>
		<BattleResultLose class="right"/>
		<BattleResult align="center"/>
	</div>
</template>

<script>
import BattleResult from '@/components/BattleResult.vue'
import BattleResultWin from '@/components/BattleResultWin.vue';
import BattleResultLose from '@/components/BattleResultLose.vue';

export default {
name: 'BattleResultView',
components: {
	BattleResult,
	BattleResultWin,
	BattleResultLose
},
methods: {
	test() {
		alert("test")
	},
	loading() {
		const img = new Image;
		img.src = '../assests/로딩.gif'
		img.addEventListener('load', function () {
			setTimeout(test, 2000);
		})
	}
}
}
</script>

<style scoped>
div.left {
        width: 20%;
        float: left;
        box-sizing: border-box;
        
    }
div.right {
        width: 20%;
        float: right;
        box-sizing: border-box;
        
    }
</style>