<template>
    <div>
        <h2 id="ready1">대결 준비 중...</h2>
            <h3 id="ready2">잠시만 기다려주세요</h3>
        <FightLoading></FightLoading>
    </div>
</template>
<script>
import FightLoading from '@/components/FightLoading.vue'

export default {
    name : 'FightLoadingView',
    components : {
        FightLoading
    }
}

</script>
<style>
h2 {
  color: rgb(78, 69, 78);
  font-weight: 900; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
h3 {
  color: rgb(78, 69, 78);
  font-weight: 500; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
</style>
