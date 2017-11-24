<template>
  <div  class="deal-wrap" style="text-align: center;">
    <img style="margin-top: 92px;" src="../../assets/img/no-rights.png" width="270" height="281" alt="">
    <!--<span class="null">空空如也</span>-->
    <!--文字由于相关的描述由具名插槽传入-->
    <slot ></slot>
  </div>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
  }


</script>


<style>
  .deal-wrap {
    /*border-top: 1px solid #E8E8E8;*/
    margin-bottom: 88px;
  }
  .null {
    font-size: 20px;
    color: #C5C2C2;
    letter-spacing: 0.32px;
    display: block;
    margin-top: 93px;
    margin-bottom: 200px;
  }
  .null-text {
    display: block;
    margin-top: 50px;
    font-size: 20px;
    color: #C5C3C3;
    letter-spacing: 0.32px;
  }
  .help-text {
    display: block;
    font-size: 15px;
    margin-top: 30px;

  }
</style>
