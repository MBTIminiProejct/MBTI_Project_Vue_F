<template>
    <div id="surveyviewone">
      <SurveyOneHeader></SurveyOneHeader>
      <SurveyOneBody></SurveyOneBody>
    </div>
  </template>

<script>
import SurveyOneHeader from '@/components/SurveyOneHeader.vue'
import SurveyOneBody from '@/components/SurveyOneBody.vue'


export default {
    name: 'SurveyViewOne',
    components: {
      SurveyOneHeader,
      SurveyOneBody
        
    }
}
</script>
  