<template>
    <div class="userpage">
            <div><MainHeader></MainHeader></div>
            <div><UserPageBody></UserPageBody></div>
       <router-view></router-view>
    </div> 
</template>
<script>
import MainHeader from '@/components/MainHeader.vue'
import UserPageBody from '@/components/UserPageBody.vue'


export default ({
    components :{
        MainHeader,
        UserPageBody
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
