<template>
    <div class="modal">
        <div class="overlay" @click="$emit('close-modal')">
            <div class="modal-card">
                <img :src="gifUrl" v-if="gifUrl" />
            </div>
        </div>
    </div> 
</template>
<script>
import loadingGif from '@/assets/loading.gif';

export default {
    data(){
        return {
            gifUrl : '',
        }
    },
    mounted() {
    this.gifUrl = loadingGif;
    setTimeout(() => {
      this.gifUrl = '';
      this.$router.push('/battleresult'); // 2초 후에 BattleResultView로 이동
    }, 2000); // 2초 후에 GIF URL 초기화
  },
    beforeDestroy() {
        // 컴포넌트가 파괴되기 전에 실행되는 로직
        this.gifUrl = '';
    },
}

</script>
<style>
.modal,
.overlay{
    width: 100%;
    height: 100%;
    position:fixed;
    left: 0;
    top: 0;
}
.overlay{
    opacity: 0.5;
    background-color: white;
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