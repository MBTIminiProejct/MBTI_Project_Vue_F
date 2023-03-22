<template>
    <div>
      <h2>{{$store.state.anotheruserinfo.userName}}님의 상세 페이지</h2>
          <ul>
            <img src="">
            <h2>유저번호 : {{$store.state.anotheruserinfo.userName}}</h2>
            <h2>mbti : {{$store.state.anotheruserinfo.userMBTI}}</h2>
            <h2>승 : {{$store.state.anotheruserinfo.userWin}}</h2>
            <h2>패 : {{$store.state.anotheruserinfo.userDefeat}}</h2>
            <h2>점수 : {{$store.state.anotheruserinfo.userPoint}}</h2>
            <h2>아이템 : {{$store.state.anotheruserinfo.userItem}}</h2>
            <h2>대결허용 : {{$store.state.anotheruserinfo.userAcceptance}}</h2>
        </ul>
    </div> 
</template>
<script>

export default {
  name:'UserPageBody',
  
}
</script>
<style scoped>
h1 {
  color: rgb(78, 69, 78);
  font-weight: 900; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
h2 {
  color: rgb(78, 69, 78);
  font-weight: 500; /* 텍스트 굵기 */
  margin: 2.5rem 0 1.5rem;
}
</style>
