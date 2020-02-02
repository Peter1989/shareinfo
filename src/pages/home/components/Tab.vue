<template>
    <div class=tab>
        <router-link tag="div" class="tab-item" to="/donate">
            <span :class="{'active': activeTag === 'donate'}" class="tab-link" @click="click('donate')">募捐财物</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/trans">
            <span :class="{'active': activeTag === 'trans'}" class="tab-link" @click="click('trans')">交通运输</span>
        </router-link>
        <router-link tag="div" class="tab-item" to="/live" @click="click('live')">
            <span :class="{'active': activeTag === 'live'}" class="tab-link" @click="click('live')">生活所需</span>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'Trans',
  data: function () {
    return {
      activeTag: 'donate'
    }
  },
  methods: {
    click: function (tag) {
      this.activeTag = tag
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.tab
    display: flex
    .tab-item
        text-align: center
        flex: 1
    .tab-link
        font-size: .3rem
        line-height: 1rem
        height: 1rem
    .active
        color: $bgColor
        padding-bottom: .1rem
        border-bottom: .05rem solid $bgColor
</style>
