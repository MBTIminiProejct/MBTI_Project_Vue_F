import Vue from 'vue';
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        ranklist: [],
        userinfo: [],
        characterinfo: [],
        competionuserinfo: [],
        competioncharacterinfo: [],
        battleloginfo: [],
        mbtiresult: [],
        anotheruserinfo: [],
        mbtianotheruserimg: [],
        userSpeed : 0 
    },
    getters: {
        getMyNum: function(state) {
            return state.userinfo.userNum;
        },
        getUserInfo: function(state) {
            return state.userinfo;
        },
        getCharacterInfo: function(state) {
            return state.characterinfo;
        },
        isLogin: function(state) {
            return state.userinfo.userNum >= 1;
        },
        isExist: function(state) {
            return state.userinfo.userCharacter;
        },
        getUserEmail: function(state) {
            return state.userinfo.userEmail;
        },
        getUserCharacterNum: function(state) {
            return state.userinfo.userCharacter;
        },
        getBattleLog: function(state) {
            return state.battleloginfo.blog;
        },
        getUserMbti: function(state) {
            return state.userinfo.userMBTI
        },
        getMBTIResult: function(state) {
            return state.mbtiresult;
        },
        getMBTIImg: function(state) {
            return state.mbtianotheruserimg.mbtiimgurl;
        },
        getUserAccept: function(state) {
            return state.userinfo.userAcceptance;
        },
        getBattleUser: function(state) {
            return state.competionuserinfo.userNum
        },
        getUserSpeed:function(state){
            return state.userSpeed;
        },
        getOtherUserNum: function(state) {
            return state.anotheruserinfo.userNum
        },
        getBattleUserAccept: function(state) {
            return state.competionuserinfo.userAcceptance;
        }
    },
    mutations: {
        setUserSpeed(state, num) {
            state.userSpeed = num;
        },
        setRankList(state, list) {
            state.ranklist = list;
        },
        setUserInfo(state, list) {
            state.userinfo = list;
        },
        setCharacterInfo(state, list) {
            state.characterinfo = list;
        },
        setCompetionUserInfo(state, list) {
            state.competionuserinfo = list;
        },
        setCompetionCharacterInfo(state, list) {
            state.competioncharacterinfo = list;
        },

        setUserInfo(state, list) {
            state.userinfo = list;
        },
        setCharacterInfo(state, list) {
            state.characterinfo = list;
        },
        setCompetionUserInfo(state, list) {
            state.competionuserinfo = list;
        },
        setCompetionCharacterInfo(state, list) {
            state.competioncharacterinfo = list;
        },
        setBattleLogInfo(state, list) {
            state.battleloginfo = list;
        },
        setMBTIResult(state, list) {
            state.mbtiresult = list;
        },
        setAnotherUserInfo(state, list) {
            state.anotheruserinfo = list;
        },
        setMbtiAnotherUserImg(state, list) {
            state.mbtianotheruserimg = list;
        },
        setCharacterNum(state, num) {
            state.userinfo.usercharacter = num;
        },
        setUserAcceptChange(state, String) {
            state.userinfo.useracceptance = String;
        },
        

    },
    action: {

    },
    plugins: [
        createPersistedState()
    ]
})

export default store