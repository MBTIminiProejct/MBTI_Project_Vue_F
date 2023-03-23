<template>
    <div>
        <h2 id="ready1">대결 준비 중...</h2>
        <Loading></Loading>
    </div>
</template>
<script>
import Loading from '@/components/Loading.vue'

export default {
    name : 'LoadingView',
    components : {
        Loading
    }
}

</script>
<style>
h2 {
  color: rgb(78, 69, 78);
  font-weight: 900; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
</style>
