<template>
    <div id="surveyviewone">
      <SurveyOneHeader></SurveyOneHeader>
      <SurveyOneBody></SurveyOneBody>
      <MainFooter></MainFooter>
    </div>
  </template>

<script>
import SurveyOneHeader from '@/components/SurveyOneHeader.vue'
import SurveyOneBody from '@/components/SurveyOneBody.vue'
import MainFooter from '@/components/MainFooter.vue'


export default {
    name: 'SurveyViewOne',
    components: {
      SurveyOneHeader,
      SurveyOneBody,
      MainFooter
        
    }
}
</script>
  