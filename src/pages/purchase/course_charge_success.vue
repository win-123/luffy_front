<template>
  <main style="width: 1200px; margin: 120px auto 0; text-align: center;">
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="../../assets/img/select-icon.png" width="55" height="55" alt="">
      <p class="charge-success-msg">支付成功，已收到您的款项2888.00元</p>
    </div>
    <span class="course-auto-link">{{timeTotal}}秒后自动跳转到<span v-link="{name: 'mine-older'}">订单中心</span></span>
    <button class="go-study-btn" v-link="{name: 'study'}">立即学习</button>
  </main>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex'
  import login from '../../components/login/login.vue';
  import register from '../../components/register/register.vue'

  export default {
    data() {
      return {
          timeTotal:'',
          timeout:''
      }
    },
    computed: {},
    components: {},
    ready: function () {
      this.countDown();
    },
    methods: {
      load: function() {
      },
      countDown: function () {
          var $this=this;
        $this.timeTotal=5;
        clearInterval(timeout);
        var timeout=setInterval(function () {
          if($this.timeTotal>0){
            $this.timeTotal-=1;
          }else {
            $this.$route.router.go({name: 'mine-older'});
            clearInterval(timeout);
          }
        },1000)
      }

    }
  }
</script>
<style scoped>
  .charge-success-msg {
    font-size: 30px;
    color: #333333;
    margin:0 0 0 30px;
  }
  .course-auto-link {
    display: inline-block;
    font-size: 18px;
    color: #333333;
    margin-top: 48px;
  }
  .course-auto-link span {
    color: #4990E2;
    cursor: pointer;
  }
  .go-study-btn {
    display: block;
    margin: 58px auto 34px;
    width: 180px;
    height: 60px;
    border: 1px solid #84CC39;
    border-radius: 2px;
    background: #fff;
    font-size: 24px;
    color: #84CC39;
    letter-spacing: 2px;
  }
</style>
