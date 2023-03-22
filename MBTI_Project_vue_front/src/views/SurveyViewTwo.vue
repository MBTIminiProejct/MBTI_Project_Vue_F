<template>
    <div id="surveyviewtwo">
      <SurveyTwoHeader></SurveyTwoHeader>
      <SurveyTwoBody></SurveyTwoBody>
    </div>
  </template>

<script>
import SurveyTwoHeader from '@/components/SurveyTwoHeader.vue'
import SurveyTwoBody from '@/components/SurveyTwoBody.vue'


export default {
    name: 'SurveyViewTwo',
    components: {
      SurveyTwoHeader,
      SurveyTwoBody
        
    }
}
</script>
  