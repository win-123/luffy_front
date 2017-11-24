<template>
  <div class="sub-wrap">
    <h3 class="cash-sub-tit">确认提现信息</h3>
    <ul class="cash-sublist">
      <li class="cash-sub-item">
        <label class="item-label">提现到：</label>
        <span class="item-input">微信账户</span>
      </li>
      <li class="cash-sub-item">
        <label class="item-label">账户信息：</label>
        <span class="item-input">赖晓云</span>
      </li>
      <li class="cash-sub-item">
        <label class="item-label">提现数量：</label>
        <span class="item-input">2000个</span>
      </li>
      <li class="cash-sub-item">
        <label class="item-label">到账金额：</label>
        <span class="item-input">200元</span>
      </li>
      <li class="cash-sub-item">
        <label class="item-label" style="">到账时间：</label>
        <span class="item-input" style="color: #E15954;">7月13日24小时前</span>
      </li>
      <li class="cash-sub-item" style="margin-bottom: 45px; margin-top: 70px;">
        <label class="item-label" style="">手机号：</label>
        <input class="item-input input-add" type="text" value="">
        <button class="gain-code-btn">获取验证码</button>
      </li>
      <li class="cash-sub-item" style="margin-bottom: 45px;">
        <label class="item-label" style="">验证码：</label>
        <input class="item-input input-add" type="text" value="">
      </li>
      <li class="cash-sub-item" style="margin-bottom: 45px;">
        <label class="item-label" style="">支付密码：</label>
        <input class="item-input input-add" type="text" value="">
        <a class="forget-password-link" href="#">忘记密码</a>
      </li>
    </ul>
    <div style="margin-top: 44px; margin-left: 280px; padding-bottom: 67px;">
      <button class="sure-get-cash-btn" v-link="{name:'success-cash'}">确认提现</button>
      <a class="forget-password-link" href="#">返回修改</a>
    </div>
  </div>
</template>
<style scoped>
  .sub-wrap {
    width: 754px;
    margin: 57px auto 70px;
    background: #FFFFFF;
    box-shadow: 0 10px 20px 0 #E9E9E9;
  }
  .cash-sub-tit {
    margin:0;
    height: 70px;
    line-height: 70px;
    font-size: 18px;
    color: #333333;
    padding: 0 0 0 53px;
    background: #FAFAFA;
  }
  .cash-sublist {
    padding:0;
    width: 100%;
    margin-top: 40px;
  }
  .cash-sub-item {
    list-style: none;
    width: 100%;
    margin-bottom: 30px;
  }
  .item-label {
    width: 260px;
    text-align: right;
    font-size: 18px;
    color: #9D9D9D;
    font-weight: normal;
  }
  .item-input {
    outline: none;
    border: none;
    background: none;
    margin-left: 16px;
    font-size: 18px;
    color: #333333;
  }
  .input-add {
    width: 200px;
    height:60px;
    border: 1px solid #979797;
  }
  .gain-code-btn {
    margin-left: 25px;
    width: 155px;
    height: 60px;
    border: none;
    outline: none;
    background: #78C63F;
    font-size: 18px;
    color: #FFFFFF;
  }
  .forget-password-link {
    font-size: 18px;
    color: #4A90E2;
    margin-left: 27px;
  }
  .sure-get-cash-btn {
    width: 150px;
    height: 60px;
    background: #78C63F;
    font-size: 18px;
    color: #FFFFFF;
    outline: none;
    border: none;
  }
</style>
