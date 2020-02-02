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
      },
      {
        id: 2,
        type: 2,
        title: '【要求湖北医院】现有4.4万套杜邦防护服可以免费申领',
        content: '提供医生的身份及工号，每家医院申领2000件，如有需要请联系13520488019微信，直接加，必须医生。'
      },
      {
        id: 3,
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
