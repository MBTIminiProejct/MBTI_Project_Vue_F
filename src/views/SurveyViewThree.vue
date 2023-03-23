<template>
    <div id="surveyviewthree">
      <SurveyThreeHeader></SurveyThreeHeader>
      <SurveyThreeBody></SurveyThreeBody>
    </div>
  </template>

<script>
import SurveyThreeHeader from '@/components/SurveyThreeHeader.vue'
import SurveyThreeBody from '@/components/SurveyThreeBody.vue'


export default {
    name: 'SurveyViewThree',
    components: {
      SurveyThreeHeader,
      SurveyThreeBody
        
    }
}
</script>
  