<template>
  <!--<div>-->
    <!--<head-guide></head-guide>-->
  <!--</div>-->
  <div  class="deal-wrap" style="text-align: center;">
    <img style="margin-top: 92px;" src="../../assets/img/no-rights.png" width="270" height="281" alt="">
    <span class="null">未开通的模块，不能观看视频哦！</span>

  </div>


</template>

<script>
  import lazyload from '../../assets/js/jquery.lazyload.min'
  import HeadGuide from '../../../src/components/header/head.vue';

  export default {
    data() {
      return {
      };
    },
    components: {

      HeadGuide,

    },


  }
</script>

<style>
  .deal-wrap {
    /*border-top: 1px solid #E8E8E8;*/
    margin-bottom: 88px;
  }
  .null {
    font-size: 18px;
    color: #9B9B9B;
    letter-spacing: 0.32px;
    display: block;
    margin-top: 62px;
    margin-bottom: 200px;
  }

</style>
