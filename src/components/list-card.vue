<template>
  <div class="list_card">
      <cardHeader v-if="cardData.item_type!==2" :headerData="{avatar:cardData.editor_icon,nickname:cardData.editor_nickname,id:cardData.id}" />
      <cardContent :contentData="cardData" />
      <cardfooter v-if="cardData.item_type!==2" :footerData="cardData" />
  </div>
</template>
<script>
import cardHeader from './list-card-header'
import cardContent from './list-card-content'
import cardfooter from './list-card-footer'
export default {
  props: ['cardData'],
  data: function () {
    return {
    }
  },
  components: {
    cardHeader,
    cardContent,
    cardfooter
  },
  methods: {
  }
}
</script>
<style scope lang="scss">

</style>
