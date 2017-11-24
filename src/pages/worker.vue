<template>
  <div class="worker-header">
    <head-nav></head-nav>
  </div>
  <div id="m-right-container">
    <router-view></router-view>
  </div>
  <div id="loading">
    <span class="icon-spinner icon-spin icon-2x"></span>
    <span class="label">加载中...</span>
  </div>
  <foot-guide class="foot"></foot-guide>
  <foot-activity></foot-activity>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import FootGuide from '../../src/components/footer/foot.vue';
  import FootActivity from '../../src/components/footer/activity-foot.vue';
  import HeadNav from '../../src/components/header/head.vue';
//  import state from '../store/state'
//  import mutations from '../store/mutations'
  import state from '../store/state'
  import mutations from '../store/mutations'

export default {
    store: new Vuex.Store({
      state,
      mutations
    }),
    data() {
      return {
        pager: {
          study_page: false
        }
      }
    },
    ready: function(){
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        $('html').addClass('body-img');
        $('body').addClass('body-img');
    },
    components: {
      HeadNav,
      FootGuide,
      FootActivity
    },
    computed: {
        loading: function () {
            return Vue.$xz.sloading
        }
    }
}
</script>
<style>
  /*@import "../assets/font/PingFang Regular.otf";*/
  html {
    height: 100%;
    width: 100%;
    font-family: PingFangSC-Regular;
  }
  body {
    font-size: 14px;
    background: #FFFFFF !important;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
  li {
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  .study_headWrap {
    background: #000;
  }
/*@font-face {
  font-family: PingFang-SC-Semibold;
  src: url("../../fonts/PingFang-SC-Semibold.ttf");
}*/

  @font-face {
  /* font-family: PingFangSC-Regular ;*/
    /*src: url("../../src/assets/font/PingFang Regular.otf");*/
  }
  *{
  /* font-family: PingFangSC-Regular, sans-serif;*/
    padding: 0;
    margin: 0;
  }

/* header style*/
  .worker-header {
    width: 100%;
    height: 80px;
  }
  #m-right-container {
    width: 100%;
    height: auto;
  }
  input:focus,
  select:focus{
    /*border: 1px solid #7ED321 !important;*/
    outline: none;
  }
  /* footer style*/

  .foot{
    display: flex;
    margin-top: auto;
  }
  #loading {
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 145px;
    height: 56px;
    line-height: 56px;
    z-index: 1001;
    color: white;
    background-color: #000;
    border-radius: 10px;
    opacity: 0.7;
    display: none;
  }

  .icon-spinner {
    margin: 13px 0 0 15px;
    float: left;
  }

  #loading .label {
    margin: 18px 0 0 5px;
    float: left;
    font-size: 12pt;
  }
  .contenteditable-input:empty:before{
    content: attr(placeholder);
    color:#bbb;
  }
  .h1, .h2, .h3, h1, h2, h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
  ol, ul {
      margin-top: 0;
      margin-bottom: 0;
  }
  p {
      margin: 0px;
  }
  button {
    outline:none;
    border: none;
  }
</style>
