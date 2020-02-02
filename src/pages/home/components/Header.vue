<template>
<div>
    <div class="top_head">
      <div class="top_text">新型冠状病毒肺炎</div>
      <div class="btm_text">信息共享平台</div>
    </div>
</div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.top_head
  width: 100%;
  height: 180px;
  background-image : url("~@/assets/images/top_head.png");
  background-size : 100% 180px;
  .top_text
    color: #fff;
    font-size: .37rem;
    padding-top: .8rem;
    margin-left: .7rem;
  .btm_text
    color: #fff;
    font-size: .7rem;
    margin-top: .3rem;
    margin-left: .7rem;
</style>
