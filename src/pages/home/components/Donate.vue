<template>
    <div>
        sdf
        <card v-for="content in list" :key="content.id" :content="content"></card>
    </div>
</template>
<script>
import Card from './Card'
export default {
  name: 'Donate',
  components: {
    Card
  },
  data: function () {
    return {
      list: []
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
</style>
