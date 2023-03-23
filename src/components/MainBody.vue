<template>
    <div class="mainbody" style="font-family:verdana;">
        <img src='https://i.imgur.com/A4ER5es.gif'><br><br>
            <!-- <template v-if="this.$store.getters.isExist>1">
                <button id="clicktwo"><router-link to="/mypage">마이페이지</router-link></button>
                <form :disabled="isDisabled">
                    <input id="clickone" type="submit" value="설문조사"><br>
                </form>
            </template>
            <template v-else> -->

                    <!--<router-link to="/survey/partone"><input id="clickone" type="submit" value="설문조사"><br></router-link>-->
                                    
                    <button class="btn-primary" @click="showModal = true">설문조사</button>
                        <!-- <Modal v-if="showModal" @close-modal="showModal = false"> -->
                    <!-- <button @click="$emit('close-modal')">Close Modal</button> -->
                    <!-- </Modal>                <button disabled="disabled" class="btn-secondary" id="clickthree">캐릭터 삭제하기</button><br>
 -->
                <!-- <button class="btn-primary" disabled="disabled">마이페이지</button><br> -->
                <button class="btn-primary"><router-link to="/mypage">마이페이지</router-link></button>
            <!-- </template> -->
            캐릭터 num : {{this.$store.getters.getUserCharacterNum}}
            <!-- <button class="btn-secondary" id="deleteUser" @click="deleteUser()">회원탈퇴</button> -->
          <vue-confirm-dialog></vue-confirm-dialog>
        <router-view></router-view>
    </div>
</template>
<script>
import Modal from '@/components/SurveyModal.vue';


export default{
    
    components: {
    Modal,
    },
    data() {
    return {
      showModal: false
      
    }},
    computed: {
        isDisabled() {
        return false;
        }
    },
    methods: {
        deleteCharacter() {
            this.$confirm(
                {
                    message:'캐릭터를 삭제하시겠습니까?',
                    button:{
                        no : '취소',
                        yes: '삭제'
                    },
                    callback:confirm=>{
                        if(confirm){
                            this.$axios.delete(this._baseUrl + "mypage/character",{
                                params : {
                                    userCharacterNum : this.$store.getters.getUserCharacterNum
                                    }
                            })
                            .then(result=> {
                                alter("성공")
                            })
                            .catch(function(){
                                console.log("캐릭터 삭제 연결 실패");
                            })
                        }else{
                            return
                        }
                    }
                }
            ) 
        },
        deleteUser(){
            this.$confirm(
                {
                    message:'"MBTI 싸우자"에서 정말 탈퇴하시겠습니까?',
                    button:{
                        no : '취소',
                        yes: '탈퇴'
                    },
                    callback:confirm=>{
                        if(confirm){
                            this.$axios.delete(this._baseUrl + "mypage/deleteUser",{
                                data:{
                                    userEmail:this.$store.getters.getUserEmail
                                }
                            })
                            .then(result=> {
                                console.log(result.data);
                                localStorage.removeItem('vuex');
                                location.reload();
                            })
                            .catch(function(){
                                console.log("회원 탈퇴 연결 실패");
                            })
                        }else{
                            return //이전화면 돌아가기
                        }
                    }
                }
            )             
        }
    }
}
</script>
<style scoped>
.mainbody {
    position : relative;
}

img{
    padding-top: 35%;
    width: 40%;
    height:50%;
    margin: auto;
    display: block;

}
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');

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

  
  .btn-secondary {
    background-color: #f44336;
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

  #clickone {
    margin: 10px;
  }

  #clicktwo {
    margin: 10px;
  }

  #clickthree {
    margin: 10px;
  }

</style>

