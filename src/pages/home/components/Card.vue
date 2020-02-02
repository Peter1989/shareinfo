<template>
    <div class="card_wrap">
        <div class="card" v-if="content.type === 1">
            <a class="link" :href="content.link">
                <div class="link-text">{{content.text}}</div>
                <div>(详情请点击链接)</div>
            </a>
        </div>
        <div class="card" v-else-if="content.type === 2">
            <div class="title">{{content.title}}</div>
            <div class="content">{{content.content}}</div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Card',
  props: {
    content: {}
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.card_wrap
  margin: .2rem
  text-align: center
  .card
    padding: .2rem
    display: inline-block
    height: 3rem
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s
    width: 90%;
    border-radius: 5px;
    text-align: left
    line-height: .7rem
    .link
      font-size: .3rem
      margin-bottom: .3rem
      .link-text
        text-align: middle
    .title
      font-size: .3rem
    .content
      font-size: .2rem
</style>
