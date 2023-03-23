<template>
    <div id="surveyviewtwo">
      <SurveyTwoHeader></SurveyTwoHeader>
      <SurveyTwoBody></SurveyTwoBody>
      <MainFooter></MainFooter>
    </div>
  </template>

<script>
import SurveyTwoHeader from '@/components/SurveyTwoHeader.vue'
import SurveyTwoBody from '@/components/SurveyTwoBody.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
    name: 'SurveyViewTwo',
    components: {
      SurveyTwoHeader,
      SurveyTwoBody,
      MainFooter
        
    }
}
</script>
  