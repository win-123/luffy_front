<template>
  <div class="loading">
    <img width="65" height="65" src="./loading.gif">
    <!--加载动画-->
    <!--<div  class="loading-wrapp">-->
      <!--<div class="loading-ball-list">-->
        <!--<div class="loading-ball7a"></div>-->
        <!--<div class="loading-ball7b"></div>-->
        <!--<div class="loading-ball7c"></div>-->
        <!--<div class="loading-ball7d"></div>-->
      <!--</div>-->
    <!--</div>-->
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style scoped >

  .loading{
    padding-right: 220px;
    /*padding-top: 40px;*/
    width: 100%;
    text-align: center
  }
  /*.desc{*/
    /*line-height: 20px;*/
    /*font-size: 19px;*/
    /*color: #6effe7;*/
    /*padding-top: 10px;*/
  /*}*/

  /*loading-style-start*/
  .loading-wrapp {
    float: left;
    width: 100%;
    /*height: 600px;*/
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-ball-list {
  }
  .loading-ball7a {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #19A68C;
    animation-delay: -1.5s;
  }
  .loading-ball7b {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #F63D3A;
    animation-delay: -1s;
  }
  .loading-ball7c {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #FDA543;
    animation-delay: -0.5s;
  }
  .loading-ball7d {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #193B48;
  }
  @-webkit-keyframes k-loadingO {
    0%, 100% {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%,160%);
    }
    75% {
      transform: translate(0,160%);
    }
  }
  /*loading-style-end*/
</style>
