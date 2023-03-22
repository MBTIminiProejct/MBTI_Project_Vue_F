<template>
    <div id="surveyviewfour">
      <SurveyFourHeader></SurveyFourHeader>
      <SurveyFourBody></SurveyFourBody>
    </div>
  </template>

<script>
import SurveyFourHeader from '@/components/SurveyFourHeader.vue'
import SurveyFourBody from '@/components/SurveyFourBody.vue'


export default {
    name: 'SurveyViewFour',
    components: {
      SurveyFourHeader,
      SurveyFourBody
        
    }
}
</script>
  