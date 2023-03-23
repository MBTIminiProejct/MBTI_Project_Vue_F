import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import ResultPageView from '../views/ResultPageView.vue'
import MyPageView from '../views/MypageView.vue'
import SurveyViewOne from '../views/SurveyViewOne.vue'
import SurveyViewTwo from '../views/SurveyViewTwo.vue'
import SurveyViewThree from '../views/SurveyViewThree.vue'
import SurveyViewFour from '../views/SurveyViewFour.vue'
import MatchRoomView from '../views/MatchRoomView'
import BattleResultView from '../views/BattleResultView.vue'
import store from "../store/index.js"
import UserPageView from "../views/UserPageView.vue"
import LoadingView from "../views/LoadingView.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/result',
        name: 'result',
        component: ResultPageView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/main',
        name: 'main',
        component: MainView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }

    },
    {
        path: '/mypage',
        name: 'mypage',
        component: MyPageView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/survey/partone',
        name: 'surveypartone',
        component: SurveyViewOne,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/survey/parttwo',
        name: 'surveyparttwo',
        component: SurveyViewTwo,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/survey/partthree',
        name: 'surveypartthree',
        component: SurveyViewThree,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/survey/partfour',
        name: 'surveypartfour',
        component: SurveyViewFour,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/matchroom',
        name: 'matchroom',
        component: MatchRoomView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/userpage',
        name: 'userpage',
        component: UserPageView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    },
    {
        path: '/loading',
        name: 'loading',
        component: LoadingView,
        props: true
    },
    {
        path: '/battleresult',
        name: 'battleresult',
        component: BattleResultView,
        props: true,
        beforeEnter: function(to, from, next) {
            if (!store.getters["isLogin"]) {
                alert("로그인 정보 없음, 로그인 페이지로 이동합니다.");
                next('/login');
            } else {
                next();
            }

        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router