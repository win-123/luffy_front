<template>
  <main style="width: 1200px; margin: 120px auto 0; text-align: center;">
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="../../assets/img/select-icon.png" width="55" height="55" alt="">
      <p class="charge-success-msg">支付成功，已收到您的款项2888.00元</p>
    </div>
    <span class="purchase-course">成功报名：LuffyX学位课程《Python全栈开发》</span>
    <button class="go-study-btn" v-link="{name: 'application-success'}">去填报名表</button>
    <span class="remark">备注：报名成功后须 <span>填写报名表>等待分配导师>开始学习</span></span>
  </main>
</template>
<style scoped>
  .charge-success-msg {
    font-size: 30px;
    color: #333333;
    margin:0 0 0 30px;
  }
  .purchase-course {
    display: inline-block;
    font-size: 18px;
    color: #333333;
    margin-top: 54px;
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
  .remark {
    display: block;
    font-size: 14px;
    color: #333333;
  }
  .remark span {
    font-size: 14px;
    color: #4990E2;
  }
  button:active{
    outline: none;
  }
</style>
