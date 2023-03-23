<template>
	<div align="center">
		<img :src= this.imgurl>
		<br>
		장소를 고르세요
		<br>
		<select v-model="battleField" @change="changeSelect">
			<option value="기본">기본</option>
			<option value="놀이동산">놀이동산</option>
			<option value="계획없이 떠나게된 여행">계획없이 떠나게된 여행</option>
			<option value="도서관">도서관</option>
			<option value="꿈속">꿈속</option>
		</select>
	<button class="btn-primary" @click="battle">싸우자!</button>
	</div>
  </template>
  
  <script>
import axios from 'axios'

  export default {
	name: 'selectFiled',
	data() {
		return {
			battleField : '',
			imgurl : ''
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
				this.imgurl = 'https://i.imgur.com/y4HuMAZ.jpeg'
			}
		},
		battle() {
			let tmp = this;
			if (tmp.imgurl == '') {
				alert("싸울장소를 선택해주세요!")
			} else {
				axios.get(tmp._baseUrl + "battle", {
					params : {
						battleField : tmp.battleField,
						userNum : tmp.$store.getters.getMyNum,
						battleUserNum : tmp.$store.getters.getBattleUser
					}
				}).then(result=> {
					console.log(result.data);
					tmp.$store.commit("setBattleLogInfo", result.data)
					tmp.$router.push({
						name : "loading"
					})
				})
			}
		},
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-primary {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
}
  img {
    border: 1px solid #d8d8d8;
    width: 30%;
    margin: 40px;
    box-shadow: 0px .5px 1px #d8d8d8;
  }
</style>
  