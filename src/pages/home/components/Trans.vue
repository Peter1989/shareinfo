<template>
    <div>
      <card v-for="content in list" :key="content.id" :content="content"></card>
    </div>
</template>
<script>
import Card from './Card'
export default {
  name: 'Trans',
  components: {
    Card
  },
  data: function () {
    return {
      list: [{
        id: 0,
        type: 2,
        title: '菜鸟联合全球物流企业免费开通向武汉运输救援物资绿色通道',
        content: '全天24小时均可拨打菜鸟武汉物资运输支持热线：400-900-5656，我们将安排专属小二跟进落实。'
      },
      {
        id: 1,
        type: 2,
        title: '武汉红会物资，现都积压于此',
        content: '现在是24小时4班倒人手都不够。 现转发汉阳国博志愿者招募信息： 要求：自带车， 有意前往汉阳国博请联系 18040548490、18171303010、18171313010、19947601710、18986279531。'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
</style>
