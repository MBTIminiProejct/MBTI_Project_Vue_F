<template>
    <div class="userpage">
            <MainHeader></MainHeader>
            <UserPageBody></UserPageBody>
            <MainFooter></MainFooter>
       <router-view></router-view>
    </div> 
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import UserPageBody from '@/components/UserPageBody.vue'
import MainFooter from '@/components/MainFooter.vue'



export default ({
    components :{
        MainHeader,
        UserPageBody,
        MainFooter
    },
    props:{

    },
    methods: {
        
    },
    
})
</script>
<style scoped>
div.left {
        width: 70%;
        float: left;
        box-sizing: border-box;
        
    }
div.right {
        width: 30%;
        float: right;
        box-sizing: border-box;
        
    }
</style>
