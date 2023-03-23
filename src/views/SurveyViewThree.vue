<template>
    <div id="surveyviewthree">
      <SurveyThreeHeader></SurveyThreeHeader>
      <SurveyThreeBody></SurveyThreeBody>
      <MainFooter></MainFooter>
    </div>
  </template>

<script>
import SurveyThreeHeader from '@/components/SurveyThreeHeader.vue'
import SurveyThreeBody from '@/components/SurveyThreeBody.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
    name: 'SurveyViewThree',
    components: {
      SurveyThreeHeader,
      SurveyThreeBody,
      MainFooter
      
        
    }
}
</script>
  