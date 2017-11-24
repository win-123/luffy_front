<template>
  <main class="common-problem-wrap">
    <!--<h3 class="pro-cont-tit">关于课程</h3>-->
    <div class="pro-main-wrap">
      <ul class="problem-list" >
        <li class="problem-item curse-point" v-link="{name:'help-course'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">如何购买观看</span>
        </li>
        <!--<li class="problem-item curse-point">-->
          <!--<em class="problem-item-icon"></em>-->
          <!--<span class="problem-item-tit">课程套餐</span>-->
        <!--</li>-->
        <li class="problem-item curse-point" v-link="{name:'coupons'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit" >优惠券介绍</span>
        </li>
        <li class="problem-item curse-point"  v-link="{name:'bance'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">贝里介绍</span>
        </li>
        <li class="problem-item curse-point"  v-link="{name:'luffy_x'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">luffyX学位</span>
        </li>
        <li class="problem-item curse-point"  v-link="{name:'mentor'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">导师介绍</span>
        </li>

        <li class="problem-item curse-point"  v-link="{name:'scholarship'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">奖学金制度</span>
        </li>

        <li class="problem-item curse-point"  v-link="{name:'homework-help'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">学位作业要求</span>
        </li>

        <li class="problem-item curse-point"  v-link="{name:'copyright'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">版权提示</span>
        </li>

        <li class="problem-item curse-point"  v-link="{name:'payment'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">课程购买协议</span>
        </li>
        <li class="problem-item curse-point"  v-link="{name:'useragreemen'}">
          <em class="problem-item-icon"></em>
          <span class="problem-item-tit">X学位购买协议</span>
        </li>

      </ul>
      <router-view></router-view>
    </div>

  </main>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
      }
    },
    ready: function(){
      // Chrome
      document.body.scrollTop = 0;
      // Firefox
      document.documentElement.scrollTop = 0;
      // Safari
      window.pageYOffset = 0;
    },
    computed: {

    },
    components: {},
    methods: {
      load: function(url) {
      }

    }



  }
</script>
<style scoped>
  .common-problem-wrap {
    width: 1200px;
    margin: 0 auto;
    padding-top: 57px;
    padding-bottom: 100px;
    text-align: center;
  }
  .pro-cont-tit {
    font-size: 30px;
    color: #000000;
    letter-spacing: 4.86px;
    margin: 0;
  }
  .pro-main-wrap {
    display: flex;
    /*width: 60px;*/
  }
  .problem-list {

  }
  .problem-item {
    list-style: none;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .curse-point{
    cursor: pointer;
  }
  .active{
    color: #84CC39;
  }

  .help-tittle{
    text-align: center;
    margin-bottom: 50px;
  }
  .problem-item-icon {
    width: 23px;
    border-top: 1px solid #979797;
  }
  .problem-item-tit {
    margin-left: 27px;
    display: block;
  }
  .active .problem-item-icon{

  }
  .problem-content {
    width: 990px;
    margin-left: 60px;
    text-align: left;
  }
  .pro-cont-item {
    list-style: none;
    background: #FFFFFF;
    border-bottom: 1px solid #E9E9E9;
    padding-bottom: 40px;
  }
  .pro-cont-add {
    padding-top: 40px;
  }
  .pro-cont-item-tit {
    font-family: PingFangSC-Light;
    font-size: 21px;
    color: #333333;
    letter-spacing: 1.09px;
    margin: 0 0 13px;
  }
  .pro-cont-item-dec {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    letter-spacing: 0.58px;
    line-height: 28px;
    margin: 0;
  }
</style>
