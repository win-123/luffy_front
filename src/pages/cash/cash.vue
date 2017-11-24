<template>
  <div style="width: 1200px; margin: 47px auto;">
    <div style="width: 100%; height: 80px; background: #FAFAFA; display: flex; align-items: center;">
      <h3 class="cash-tit">贝里提现</h3>
      <span class="account-cash">我的贝里：<span class="cash-num">3000</span>个</span>
    </div>
    <div class="cash-main-cont">
      <ul class="charge-type">
        <li class="charge-type-item" style="border: 1px solid #78C63F;">
          <div style="width:36px; height: 36px; border-radius: 18px;">
            <img src="../../assets/img/select-icon.png" width="36" height="36" alt="">
          </div>
          <span class="type-detail">提现到微信</span>
          <span class="cash-detail"><span class="money-num">300.00</span>元</span>
        </li>
        <li class="charge-type-item">
          <div style="width:36px; height: 36px; border-radius: 18px; border: 1px dashed #D0D0D0;">
          </div>
          <span class="type-detail">支付宝</span>
          <span class="cash-detail"><span class="money-num">0.00</span>元</span>
        </li>
      </ul>
      <p class="bind-account">没有绑定帐户，<a class="go-bind" href="#">去绑定</a></p>
      <div class="want-cash-number">
        <ul class="want-cash-top">
          <li style="list-style: none;">
            <label class="c-tit" for="balance-number">提现数量：</label>
            <input class="c-number" id="balance-number" type="number" min="0">&nbsp;个
          </li>
          <li style="list-style: none;">
            <label class="c-tit">到账金额：</label>
            <span>0.01元</span>
          </li>
          <li style="list-style: none;">
            <label class="c-tit"></label>
            <span class="c-tip">到账时间3-5个工作日</span>
          </li>
        </ul>

        <div class="want-cash-bottom">
          <button class="cash-next-btn" v-link="{name:'submit-cash'}">下一步</button>
        </div>
      </div>
    </div>

  </div>
</template>
<style scoped>
  .cash-tit {
    margin:0 30px 0 35px;
    font-size: 24px;
    color: #4A4A4A;
  }
  .account-cash {
    font-size: 14px;
    color: #4A4A4A;
  }
  .cash-main-cont {
    width: 1138px;
    margin: 0 auto;
  }
  .cash-num {
    font-size: 20px;
    color: #EB5733;
  }
  .charge-type {
    width: 100%;
    margin-top: 50px;
    display: flex;
    padding: 0;
    justify-content: space-between;
  }
  .charge-type-item {
    list-style: none;
    width: 536px;
    height: 108px;
    padding: 0 36px;
    border: 1px dashed #D0D0D0;
    border-radius: 3px;
    display: flex;
    align-items: center;
  }
  .type-detail {
    font-size: 16px;
    color: #333333;
    display: block;
    width: 320px;
    margin-left: 35px;
  }
  .cash-detail {
    font-size: 16px;
    color: #333333;
    display: block;
  }
  .cash-detail>.money-num {
    color: #7ED321;
  }
  .bind-account {
    font-size: 14px;
    color: #4A4A4A;
    margin: 37px 0;
  }
  .bind-account>.go-bind {
    cursor: pointer;
    color: #78C63F;
  }
  .want-cash-number {
    border: 1px solid #D0D0D0;
    width: 100%;
    margin-bottom: 170px;
  }
  .want-cash-top {
    width: 100%;
    height: 225px;
    padding: 53px 101px;
  }
  .want-cash-bottom {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FAFAFA;
    border-top: 1px solid #D0D0D0;
  }
  .c-number {
    width: 92px;
    height: 28px;
    border: 1px solid #E9E9E9;
    padding-left: 3px;
  }
  .c-tit {
    width: 70px;
    text-align: right;
    margin-right: 25px;
    margin-bottom: 25px;
  }
  .c-tip {
    color: #E9E9E9;
  }
  .cash-next-btn {
    background: #78C63F;
    font-size: 14px;
    color: #FFFFFF;
    width: 104px;
    height: 38px;
    outline: none;
    border: none;
  }
</style>
