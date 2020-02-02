<template>
    <div>
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
      list: [{
        id: 0,
        type: 1,
        text: '字节跳动向中国红十字基金捐赠2亿元，所有因抗击新型冠状病毒而不幸感染的一线医务工作者，均可申请',
        link: 'https://i.snssdk.com/magic/page/ejs/5e2d3c3709985f029cbb91b5?appType=article_news'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
</style>
