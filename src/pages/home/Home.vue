<template>
<div>
    <home-header></home-header>
    <tab></tab>
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
  }
}
</script>
<style>
</style>
