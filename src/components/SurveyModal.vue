<template>
    <div class="modal">
    <div class="overlay" @click="$emit('close-modal')">
      <div class="modal-card">
       <h1>주의사항</h1>
       <h3>이 mbti 테스트는 본격적으로 대결을 하기 전 캐릭터를 결정하기 위해 만들어졌습니다. 본 검사는 타 mbti 조사보다 전문성이 다소 떨어집니다. 전문적인 MBTI 결과를 도출하기 위함이 아닌 단순 미니게임형식을 위한 조사입니다. 조사결과는 설문자의 개인적인 성향을 제작자임의로 판단하여 결과를 만들어내 해당 결과물로 만들어진 자신의 캐릭터로 지인과 대결을 즐길 수 있습니다. 
        따라서 단순히 재미로만 봐주시기 바랍니다. 그럴 수 없다면 설문조사를 취소하고 나가주시기를 간곡히 부탁드립니다.</h3>
        
        <button @click="myfunc()">확인</button>
        <button @click="myfunccancel()">취소</button>
      </div>
    </div>
  </div> 
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return {
          
        }
    },
    created() {
    sessionStorage.removeItem("myRadioei1");
    sessionStorage.removeItem("myRadioei2");
    sessionStorage.removeItem("myRadioei3");
    sessionStorage.removeItem("myRadioei4");
    sessionStorage.removeItem("myRadioei5");
    sessionStorage.removeItem("myRadiosn1");
    sessionStorage.removeItem("myRadiosn2");
    sessionStorage.removeItem("myRadiosn3");
    sessionStorage.removeItem("myRadiosn4");
    sessionStorage.removeItem("myRadiosn5");
    sessionStorage.removeItem("myRadioft1");
    sessionStorage.removeItem("myRadioft2");
    sessionStorage.removeItem("myRadioft3");
    sessionStorage.removeItem("myRadioft4");
    sessionStorage.removeItem("myRadioft5");
    sessionStorage.removeItem("efileValue");
    sessionStorage.removeItem("ifileValue");
    sessionStorage.removeItem("sfileValue");
    sessionStorage.removeItem("nfileValue");
    sessionStorage.removeItem("ffileValue");
    sessionStorage.removeItem("tfileValue");
    },
    methods: {
    myfunc() {
    
      var result = confirm("주의사항을 자세히 읽으셨습니까?");
    
    if (result == true){  
              
      this.$router.push('/survey/partone'); 
      axios.get('http://localhost:8080/springmbti/survey/fast',{
        params: {
          fast : 2
        }
      })
      .then(function (response) {
        var data = response.data;
        var values = Object.values(data);
      })
      .catch(function (error) {
        console.log(error);
      })
         

        } else {  
          this.$router.push('/survey/partone'); 
          axios.get('http://localhost:8080/springmbti/survey/slow',{
        params: {
          slow : 1
        }
      })
      .then(function (response) {
        var data = response.data;
        var values = Object.values(data);
      })
      .catch(function (error) {
        console.log(error);
      })
         
         
     }
      
    },
    myfunccancel() {
        
    }
    
  }
}

</script>
<style>
.modal,
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1; /* 투명도 조절 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-card{
    position: relative;
    max-width: 80%;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
    background-color: white;
    min-height: 600px;
    z-index: 10;
    opacity: 1;
}
img{
    width: 500px;
    height: 500px;
}

</style>