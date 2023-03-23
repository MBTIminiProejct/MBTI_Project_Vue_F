<template>
    <div>
        <img src='../img/01.jpg'><br><br>
             <template v-if="this.$store.getters.isExist > 1">
                <button @click="deleteCharacter()">캐릭터 삭제하기</button>
                  <button id="clicktwo"><router-link to="/mypage">마이페이지</router-link></button>
                    <form :disabled="isDisabled">
                        <input id="clickone" type="submit" value="설문조사"><br>
                    </form>
            </template>
            <template v-else>
                    <!--<router-link to="/survey/partone"><input id="clickone" type="submit" value="설문조사"><br></router-link>-->
                                    
                    <button @click="showModal = true">설문조사</button>
                        <Modal v-if="showModal" @close-modal="showModal = false">
                    <!-- <button @click="$emit('close-modal')">Close Modal</button> -->
                    </Modal>                <button disabled="disabled">캐릭터 삭제하기</button><br>
                <button disabled="disabled">마이페이지</button><br>
            </template>
            <button id="deleteUser" @click="deleteUser()">회원탈퇴</button>
          <vue-confirm-dialog></vue-confirm-dialog>
        <router-view></router-view>
    </div>
</template>
<script>
import Modal from '@/components/SurveyModal.vue';
import axios from 'axios'

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
                            $axios.delete(this._baseUrl + "mypage/character",{
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
                            $axios.delete(this._baseUrl + "mypage/deleteUser",{
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
img{
    width: 300px;
    height: 300px;
}

</style>

