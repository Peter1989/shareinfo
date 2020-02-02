<template>
<div>
    <home-header></home-header>
    <tab></tab>
    <tab v-if="showTab"></tab>
    <router-view/>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import Tab from './components/Tab'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    Tab
  },
  computed: {
    showTab: function () {
      return false
    }
  }
}
</script>
<style>
</style>
