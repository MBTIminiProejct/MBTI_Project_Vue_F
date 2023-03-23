<template>
    <div id="surveyviewfour">
      <SurveyFourHeader></SurveyFourHeader>
      <SurveyFourBody></SurveyFourBody>
      <MainFooter></MainFooter>
    </div>
  </template>

<script>
import SurveyFourHeader from '@/components/SurveyFourHeader.vue'
import SurveyFourBody from '@/components/SurveyFourBody.vue'
import MainFooter from '@/components/MainFooter.vue'

export default {
    name: 'SurveyViewFour',
    components: {
      SurveyFourHeader,
      SurveyFourBody,
      MainFooter
        
    }
}
</script>
  