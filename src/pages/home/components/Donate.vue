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
        text: '武大北京校友会众筹防护服发往武汉',
        link: 'https://mp.weixin.qq.com/s/Sm2N4KwZfYIbk0yDGPnjUA'
      },
      {
        id: 1,
        type: 2,
        title: '山西省汾阳医院急需防护服，N95及外科口罩，一次性手术衣',
        content: '联系人：张沛刚 15935862678 宋建敏 18635817077'
      }]
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
</style>
