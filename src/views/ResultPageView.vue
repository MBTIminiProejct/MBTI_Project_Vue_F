<template>
<div>
    <div align="center"><h3>당신의 MBTI는 ...</h3></div>
    <div align="center"><h3>{{$store.getters.getUserInfo.userMBTI}}입니다.</h3></div>
    <div align="center"><h4>당신의 캐릭터는 HP - {{$store.getters.getCharacterInfo.characterHP}} <br>
            물리공격력 -  {{$store.getters.getCharacterInfo.characterAD}}  <br>
            마법공격력 - {{$store.getters.getCharacterInfo.characterAP}} <br>
            물리방어력 - {{$store.getters.getCharacterInfo.characterADDefence}} <br>
            마법방어력 - {{$store.getters.getCharacterInfo.characterAPDefence}} <br>
               속도 - {{$store.getters.getCharacterInfo.characterSpeed}} <br>
            명중률 - {{$store.getters.getCharacterInfo.characterHitRate}} <br>
            회피율 - {{$store.getters.getCharacterInfo.characterAvoidanceRate}} <br>
            크리티컬 확률 - {{$store.getters.getCharacterInfo.characterCritical}} <br>
            기본추가공격력 - {{$store.getters.getCharacterInfo.characterAdditionalDmg}} <br>입니다.</h4></div>

    <h3><CENTER>
		<img
		width="300"
		v-bind:src="url">
	</CENTER></h3>
    <div>
    	<ul>
            <li>
                {{$store.getters.getMBTIResult.mbticharacter}}
            </li>
    		<li>
    			{{$store.getters.getMBTIResult.mbticomment1}}
    		</li>
    		<li>
    			{{$store.getters.getMBTIResult.mbticomment2}}
    		</li>
    	</ul>
    </div>
    <div class="btn_div">
    	<button class="share_btn" @click="sendLinkDefault()">공유하기</button><br>
    	<button class="battle_btn" @click="goMyPage()">마이페이지</button><br>
    	<button class="myPage_btn" @click="downloadImage">이미지 다운로드 페이지로 이동</button>
    </div>
    <br><MainFooter></MainFooter>
</div>
</template>

<script>
import {mapState} from 'vuex';
import MainFooter from '@/components/MainFooter.vue'

export default {
    name: 'ResultPageView',
    components : {
        MainFooter
    },
    computed:{
        ...mapState({
            url:state => state.mbtiresult.mbtiimgurl
        })
    },
    methods:{
        sendLinkDefault() {
                console.log("공유하기 버튼 클릭");
                
                Kakao.Link.sendDefault({
                    objectType: 'feed',
                    content: {
                        title: 'MBTI결과공유',
                        description: '저의 유저 번호는 '+this.$store.getters.getUserInfo.userNum + '입니다. 설문에 참여하여 대결을 시작해보세요.',
                        imageUrl:
                            this.$store.state.mbtiresult.mbtiimgurl,
                        link: {
                            mobileWebUrl: 'http://192.168.0.195/result',
                            webUrl: 'http://192.168.0.195/result',
                        },
                    },
                    itemContent:{
		    	        profileText:this.$store.getters.getUserInfo.userName,
		    	        profileImageUrl:this.$store.getters.getUserInfo.userProfile
		            },
                    buttons: [
                        {
                            title: '웹으로 보기',
                            link: {
                                mobileWebUrl: 'http://192.168.0.195/result',
                                webUrl: 'http://192.168.0.195/result',
                            },
                        },
                    ],
                })
        },
        downloadImage() {
            window.location.href=this.url;
        },
        goMyPage() {
            this.$router.push({path:'mypage'});
        }
    } 
}
</script>

<style scoped>
    @import "../assets/resultpage.css";
    ul {
		display: table;
		margin-left: auto;
		margin-right: auto;
	}
</style>
