<template>
	<div align="center">
		<img v-bind:src='this.imgurl' id="img">
		<br>
		장소를 고르세요
		<br>
		<select v-model="battleField" @change="changeSelect">
			<option selected value="기본">기본</option>
			<option value="놀이동산">놀이동산</option>
			<option value="계획없이 떠나게된 여행">계획없이 떠나게된 여행</option>
			<option value="도서관">도서관</option>
			<option value="꿈속">꿈속</option>
		</select>
	<router-link to="/loading"><button @click="battle">싸우자!</button></router-link>
	</div>
  </template>
  
  <script>
import axios from 'axios'

  export default {
	name: 'selectFiled',
	data() {
		return {
			battleField : '',
			imgurl : '@/src/assets/01.jpg',
			show : true
		}
	},
	methods: {
		changeSelect() {
			if (this.battleField == "놀이동산") {
				this.imgurl = 'https://ifh.cc/g/Nbsmvn.jpg'
			} else if (this.battleField == "계획없이 떠나게된 여행") {
				this.imgurl = 'https://ifh.cc/g/Ky1swT.jpg'
			} else if (this.battleField == "도서관") {
				this.imgurl = 'https://ifh.cc/g/5Xd6Zz.jpg' 
			} else if (this.battleField == "꿈속") {
				this.imgurl = 'http://k.kakaocdn.net/dn/bbwYsm/btrVEp4ADkw/PMaRKTYxgjH8qdOlkCY4qK/img_640x640.jpg'
			} else {
				this.imgurl = '../assets/01.jpg'
			}
		},
		battle() {
			axios.get(this._baseUrl + "battle", {
				params : {
					battleField : this.battleField
				}
			}).then(result=> {
				console.log(result.data);
				this.$store.commit("setBattleLogInfo", result.data)
				this.$router.push({
					name : "battleresult"
				})
			})
		},
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    border: 1px solid #d8d8d8;
    width: 30%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
</style>
  