<template>
  <main style="width: 800px; margin: 0 auto; padding-top: 50px;">
    <header style="width: 100%; height: 80px; background: #FAFAFA; display: flex; align-items: center; padding-left: 47px;">
      <img src="../../assets/img/waiting.png" width="24" height="30" alt="">
      <h3 class="cash-success-tit">提现申请已经提交，等待银行处理</h3>
    </header>
    <div class="progress-step-wrap">
      <div class="progress-step">
        <span class="progress-step-point"></span>
        <span class="progress-step-line"></span>
        <span class="progress-step-point"></span>
        <span class="progress-step-line" style="border: 1px solid #D0D0D0;"></span>
        <span class="progress-step-point" style="background: #E9E9E9;border: 1px solid #9D9D9D;"></span>
      </div>
      <ul style="padding: 0; width: 710px; margin: 30px auto 0; display: flex; justify-content: space-between;">
        <li style="list-style: none; width: 120px; text-align: center;">
          <span class="cash-step-name">提现申请</span>
          <span class="cash-step-date">2017-08-08 15:11</span>
        </li>
        <li style="list-style: none; width: 120px; text-align: center; margin-left: 163px;">
          <span class="cash-step-name">银行处理</span>
          <span class="cash-step-date">2017-08-08 15:11</span>
        </li>
        <li style="list-style: none; width: 120px; text-align: center; margin-left: 166px;">
          <span class="cash-step-name">提现成功</span>
          <span class="cash-step-date">2017-08-08 15:11</span>
        </li>
      </ul>
    </div>
    <div style="padding-top: 35px;">
      <span class="link-do" v-link="{name:'get-cash'}">继续提现</span>
      <span class="link-do" v-link="{name:'mine-account'}">查看提现记录</span>
      <span class="link-do" v-link="{name:'mine-account'}">返回我的账户</span>
    </div>
  </main>
</template>
<style scoped>
  .cash-success-tit {
    font-size: 18px;
    color: #333333;
    margin:0 0 0 24px;
  }
  .progress-step-wrap {
    width: 100%;
    padding-top: 73px;
    padding-bottom: 65px;
    border-bottom: 1px dashed #D0D0D0;;
  }
  .progress-step {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .progress-step-point {
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: #7ED321;
    display: inline-block;
  }
  .progress-step-line {
    width: 282px;
    height:2px;
    border: 1px solid #7ED321;
    display: inline-block;
  }
  .cash-step-name {
    font-size: 18px;
    color: #333333;
    display: block;
  }
  .cash-step-date {
    font-size: 14px;
    color: #87909B;
    display: block;
    margin-top: 15px;
  }
  .link-do {
    font-size: 14px;
    color: #4A90E2;
    display: inline-block;
    margin-left: 50px;
    cursor: pointer;
  }
</style>
