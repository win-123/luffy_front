<template>
  <div>
    <common-account></common-account>
    <div style="width: 1200px; margin: 0 auto;">
      <ul class="my-item-wrap">
        <li class="my-item my-active" v-link="{name:'mine-account'}">我的账户</li>
        <li class="my-item" v-link="{name:'mine-older'}">我的订单</li>
        <li class="my-item" v-link="{name:'mine-collection'}">我的收藏</li>
        <li class="my-item" v-link="{name:'mine-profile'}">个人资料</li>
        <li class="my-item" v-link="{name:'mine-safe'}">账号安全</li>
      </ul>
      <div class="deal-wrap">
        <div>
          <ul class="balance-out-wrap">
            <li class="balance-item">
              <span class="my-balance">我的账户余额：</span>
              <span class="balance-num">{{balance}}<span style="font-size: 14px">贝里</span></span>
              <button class="cash-btn" v-link="{name:'get-cash'}" disabled="false">提现</button>
              <a class="what-bei" v-link="{name:'bance'}">什么是贝里？</a>
            </li>
            <li class="balance-item">
              <span class="my-balance">我的优惠券：</span>
              <ul style="padding: 0; margin-top: 31px; display: flex;">
                <li style="width: 189px; height: 110px; background: #FFFFFF;">
                  <span class="can-use">可使用优惠券</span>
                  <a class="can-use-num" v-link="{name:'coupon'}">{{coupons.canuse}}</a>
                </li>
                <li style="width: 141px; height: 110px; background: #FFFFFF; margin-left: 16px;">
                  <span class="can-use">即将过期</span>
                  <a class="can-use-num" v-link="{name:'coupon'}">{{coupons.will_expire_couple}}</a>
                </li>
              </ul>
            </li>
            <li class="balance-item">
              <span class="my-balance">提醒事项：</span>
              <ul style="padding: 0; width: 340px; margin: 15px auto 0;">
                <li class="tip-wrap" v-link="{name:'mine-older'}">
                  <a class="tip-num">{{remind.unpaid_order}}</a>
                  <a class="tip-item">待支付的订单</a>
                </li>
                <li class="tip-wrap"  v-link="{name:'study'}">
                  <a class="tip-num">{{remind.will_expire_course}}</a>
                  <a class="tip-item">即将过期的课程</a>
                </li>
              </ul>
            </li>
          </ul>
          <div  class="balance-out-wrap">
            <table style="width: 100%;">
              <caption class="deal-caption">最近贝里交易记录</caption>
              <thead class="deal-table-head">
              <tr>
                <td class="head-font">交易流水号</td>
                <td class="head-font">发生时间</td>
                <td class="head-font">收入</td>
                <td class="head-font">支出</td>
                <td class="head-font">余额</td>
                <td class="head-font">详情</td>
              </tr>
              </thead>
              <tbody  class="older-record" >
              <tr v-for="record in records" id="{{record.id}}" class="deal-table-body">
                <td class="body-font">{{record.transaction_number}}</td>
                <td class="body-font">{{record.date}}</td>
                <td class="body-font">{{record.income}}</td>
                <td class="body-font">{{record.disbursement}}</td>
                <td class="body-font">{{record.balance}}</td>
                <td class="body-font">
                  {{record.memo}}
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div v-if="result_data===0" class="deal-wrap" style="text-align: center;">
            <img style="margin-top: 92px;" src="../../assets/img/null.png" width="272" height="185" alt="">
            <span class="null">您的账户没有贝里交易记录哦</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if=" false;" class="shadow-wrap">
      <div class="shadow-cont" style="display: flex;">
        <img src="../../assets/img/warn-icon.png" width="24" height="24" alt="">
        <div style="margin-left: 16px; display: flex; flex-direction: column; justify-content: space-between;">
          <h4 class="warn-tit">您的账户还没有实名认证！</h4>
          <p class="warn-cont">
            一系列的信息描述，可能会很长。也可以是很短
            同样也可以带标点。
          </p>
          <div>
            <button class="warn-btn cancel-btn">取消</button>
            <button class="warn-btn sure-btn">去认证</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import commonAccount from '../../pages/my/children/common.vue';


  export default {
    data() {
      return {
        account: '',
        result_data: 1,
        balance: '',
        coupons: '',
        remind: '',
        records:''
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;

      this.load(Vue.http.options.x_root+'/api/v1/personal/personaloverview/');
      this.chargeRecord(Vue.http.options.x_root+'/api/v1/personal/recenttransactionrecord/');

    },
    canReuse: false,
    components: {
      commonAccount
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
            this.account=response.data.data;
            this.balance=response.data.data.balance;
            this.coupons=response.data.data.coupons;
            this.remind=response.data.data.remindthings;
          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      chargeRecord: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.records=response.data.data;
            this.result_data = this.records.length;
          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      }

    }



  }
</script>
<style scoped>
  .my-item-wrap{
    width: 474px;
    height: 31px;
    margin: 41px auto 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .my-active {
    border-bottom: 1px solid #000;
  }
  .deal-wrap {
    border-top: 1px solid #E8E8E8;
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
  .balance-out-wrap {
    padding: 38px 0 0;
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #E8E8E8;
  }
  .balance-item {
    width: 385px;
    height: 240px;
    background: #FAFAFA;
    border-radius: 3px;
    padding: 32px 25px;
  }
  .my-balance {
    font-size: 14px;
    color: #9B9B9B;
    line-height: 28px;
    display: block;
  }
  .balance-num {
    font-size: 34px;
    color: #4A4A4A;
    line-height: 45px;
    margin-top: 27px;
    display: block;
  }
  .cash-btn {
    width: 90px;
    height: 33px;
    /* background: #78C63F; */
    border-radius: 2px;
    outline: none;
    border: none;
    font-size: 16px;
    color: #FFFFFF;
    margin-top: 38px;
    margin-right: 25px;
    cursor: pointer;
  }
  .what-bei {
    font-size: 14px;
    color: #4A90E2;
    cursor: pointer;
  }
  .can-use {
    font-size: 14px;
    color: #9B9B9B;
    margin-top: 11px;
    margin-left: 15px;
    display: block;
  }
  .can-use-num {
    font-size: 24px;
    color: #4A4A4A;
    margin-top: 23px;
    margin-left: 15px;
    display: block;
  }
  .tip-num {
    font-size: 14px;
    color: #333333;
  }
  .tip-item {
    font-size: 12px;
    color: #333333;
    display: inline-block;
    margin-left: 12px;
  }
  .tip-wrap {
    width: 100%;
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #E9E9E9;
  }
  .deal-caption {
    width: 100%;
    margin-bottom: 22px;
    padding: 0 0 0 35px;
  }
  .deal-table-head {
    width: 100%;background: #FAFAFA;
  }
  .deal-table-head>tr {
    width: 100%; height: 60px; line-height: 60px;
  }
  .deal-table-head>tr>td:nth-child(1),
  .older-record>tr>td:nth-child(1){
    width: 200px;
    text-align: left;
    padding-left: 36px !important;
  }
  .older-record>tr>td:nth-child(1) {
    padding:36px 0;
  }
  .deal-table-head>tr>td:nth-child(2),
  .older-record>tr>td:nth-child(2) {
    width: 170px;
    padding-right: 80px !important;
    word-wrap: break-word;
    text-align: center;
  }
  .deal-table-head>tr>td:nth-child(3),
  .deal-table-head>tr>td:nth-child(4),
  .deal-table-head>tr>td:nth-child(5),
  .older-record>tr>td:nth-child(3),
  .older-record>tr>td:nth-child(4),
  .older-record>tr>td:nth-child(5) {
    width: 130px;

    text-align: left;
  }
  .deal-table-head>tr>td:nth-child(6),
  .older-record>tr>td:nth-child(6) {
    width: 467px; text-align: left; padding-left: 35px;
  }
  .deal-table-head>tr>td:nth-child(6) {
    text-align: center;
  }
  .deal-table-body {
    width: 100%; box-shadow: 0 1px 0 0 #F2F2F2;
  }
  .deal-number {
     text-align: left; padding-left: 35px !important;
  }
  .deal-income,
  .deal-pay,
  .deal-remain {
    text-align: center;
  }
  .deal-detail {
    text-align: left; padding-left: 35px !important;
  }
  .head-font {
    font-size: 15px;
    color: #333333;
  }
  .body-font {
    font-size: 14px;
    color: #4A4A4A;
  }
  .shadow-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(51,51,51,0.30);
  }
  .shadow-cont {
    width: 416px;
    height: 228px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -114px;
    margin-left: -208px;
    padding: 40px;
  }
  .warn-tit {
    font-size: 14px;
    color: #666666;
    line-height: 21px;
    margin: 0;
  }
  .warn-cont {
    font-size: 12px;
    color: #666666;
    margin-top: 8px;
    line-height: 21px;
    width: 252px;
    height: 75px;
    text-align: left;
  }
  .warn-btn {
    width: 84px;
    height: 32px;
    border-radius: 6px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 21px;
  }
  .cancel-btn {
    background: #D0D0D0;
  }
  .sure-btn {
    background: #78C63F;
    margin-left: 12px;
  }
  .balance-out-wrap>table>tbody>tr>td {
    display: table-cell !important;
    vertical-align: middle !important;
  }
  .balance-out-wrap>table>thead>tr>th {
    padding: 0 !important;
  }
</style>
