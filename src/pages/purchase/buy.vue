<template>
  <div class="purchase-wrap">
    <ul class="purchase-head-wrap">
      <li style="width:455px;" class="purchase-item-name">课程</li>
      <li style="width:140px;" class="purchase-item-name">有效期</li>
      <li style="width:160px;" class="purchase-item-name">原价</li>
      <li style="width:200px;" class="purchase-item-name">优惠券</li>
      <li style="width:160px;" class="purchase-item-name">折后价</li>
    </ul>
    <div class="older-detail-list">
      <ul style="width: 100%;">
        <li v-for="(index,buy) in buyList" id="{{buy.courseId}}" style="border-bottom: 1px solid #E8E8E8; padding: 42px 0; list-style: none;">
          <ul style="width: 100%; padding:0 0 0 30px; display: flex;align-items: center;">
            <li style="width:455px; display: flex; align-items: center; list-style: none;">
              <img :src="buy.courseUrl" width="170" height="115" alt="">
              <span class="product-fonts product-list">{{buy.courseName}}</span>
            </li>
            <li id="{{buy.validPeriodId}}" style="width:140px; text-align: center; list-style: none;">
              {{buy.validPeriod}}
            </li>
            <li class="product-fonts" style="width:160px; text-align: center; list-style: none;">
              &yen;{{buy.courseOriginPrice}}
            </li>
            <li style="width: 200px; text-align: center; list-style: none;">
              <select v-if="buy.courseCouponList.total!=0" v-model="coupon_number[index]" @change="course_coupon($index)" class="coupon-select" name="coupon">
                <option value="">课程优惠券</option>
                <option v-for="coupon in buy.courseCouponList.coupons" value="{{coupon.courseCouponNumber}}" :selected="coupon.default">{{coupon.courseCouponName}}</option>
              </select>
              <select v-else class="coupon-select" name="coupon">
                <option value="">课程优惠券</option>
              </select>
            </li>
            <li class="product-fonts" style="width:160px; text-align: center; list-style: none;">
              &yen;{{buy.courseDiscountPrice}}
            </li>
          </ul>
        </li>
      </ul>
      <div style="text-align: right; margin-top: 30px;">
        <div id="accordion">
          <div style="text-align: left; display: flex;">
            <div style="display: flex;">
              <span class="select-coupon">使用优惠券</span>
              <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                <img style="margin-left: 10px;" src="../../assets/img/coupon-select-icon.png" width="24" height="21" alt="">
              </a>
              <span v-show="couponTotal>0" class="coupon-num">有{{couponTotal}}张可用</span>
            </div>
            <span class="sum-price-wrap" style="margin-right: 86px;">课程总价格：<span class="sum-price">&yen;{{purchaseList.priceSum}}</span></span>
          </div>
          <div style="text-align: left; margin-top: 30px;" id="collapseOne" class="panel-collapse collapse out">
            <ul v-if="couponTotal>0" class="coupon-list">
              <li v-for="(index,item) in couponList" @click="all_coupon(index)" id="{{item.couponNumber}}" class="coupon-cash-wrap">
                <div v-show="!item.default">
                  <!--优惠券详细信息-->
                  <div class="coupon-use-wrap cash-coupon">
                    <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                      <!--0：通用券；1：满减券；2：折扣券-->
                      <span v-if="item.couponTypeId==0 || item.couponTypeId==1" class="coupon-price">&yen;<span class="price-value">{{item.faceVal}}</span>元</span>
                      <span v-if="item.couponTypeId==2" class="coupon-price"><span class="price-value">{{item.faceVal}}</span>折</span>
                      <span class="coupon-type">{{item.couponType}}</span>
                      <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{item.couponTimeLimit}}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                      <span class="coupon-time-limit">{{item.couponContent}}</span>
                      <span class="coupon-time-limit" style="margin-top: 40px;">{{item.couponRestrict}}</span>
                    </div>
                  </div>
                </div>
                <div v-show="item.default">
                  <!--选中状态下的icon图-->
                  <img class="select-img" src="../../assets/img/select-icon.png" width="25" height="25" alt="">
                  <!--优惠券详细信息-->
                  <div class="coupon-use-wrap cash-coupon select-coupon-oth">
                    <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                      <!--0：通用券；1：满减券；2：折扣券-->
                      <span v-if="item.couponTypeId==0 || item.couponTypeId==1" class="coupon-price">&yen;<span class="price-value">{{item.faceVal}}</span>元</span>
                      <span v-if="item.couponTypeId==2" class="coupon-price"><span class="price-value">{{item.faceVal}}</span>折</span>
                      <span class="coupon-type">{{item.couponType}}</span>
                      <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{item.couponTimeLimit}}</span>
                    </div>
                    <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                      <span class="coupon-time-limit">{{item.couponContent}}</span>
                      <span class="coupon-time-limit coupon-limit">{{item.couponRestrict}}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div v-if="couponTotal==0" class="coupon-list" style="width: 100%; height: 126px; display: flex; align-items: center; justify-content: center;">
              <span style="font-size: 14px; color: #9D9D9D; letter-spacing: 0.31px;">你目前没有可用的优惠券哦</span>
            </div>
          </div>
        </div>
        <div style="height: 30px; margin-top: 40px; display: flex; align-items: center; justify-content: flex-end;">
          <input @click="use_balance()" style="margin-right: 10px; width: 16px; height: 16px;" type="checkbox">
          <span v-show="balance_earn" class="discount-num" style="margin-right: 86px;">当前订单可用贝里为0</span>
          <span v-show="!balance_earn" class="discount-num" style="margin-right: 86px;">使用我的贝里<span v-show="purchaseList.balance!=0">{{purchaseList.balance}}</span>抵扣
            <span v-show="purchaseList.balance!=0">{{discount_blance}}</span>
          </span>
        </div>
        <span class="sun-coupon-num" style="margin-right: 86px;">优惠券抵扣：{{purchaseList.discountPrice}}元</span>
      </div>
      <ul class="pad-left" style="width: 100%; height: 125px; background: #F7F7F7; margin: 45px 0 300px; display: flex; align-items: center;">
        <li style="list-style: none;">
          <span class="bot-font bot-font-big" style="margin-left: 30px;">请选择支付方式：</span>
        </li>
       <!-- <li style="margin-left: 58px; list-style: none; display: flex; align-items: center;">
          <span v-show="this.payment!=0" @click="select_weixin()" class="null-select"></span>
          <span v-show="this.payment==0" @click="select_weixin()" class="already-select"><span class="already-select-in"></span></span>
          <img src="../../assets/img/weixin.png" width="25" height="20" alt="">
          <span class="bot-font bot-font-mid" style="margin-left: 15px;">微信支付</span>
        </li>-->
        <li style="margin-left: 58px; list-style: none; display: flex; align-items: center;">
          <span v-show="this.payment!=1" @click="select_alipay()" class="null-select"></span>
          <span v-show="this.payment==1" @click="select_alipay()" class="already-select"><span class="already-select-in"></span></span>
          <img src="../../assets/img/alipay.png" width="21" height="21" alt="">
          <span class="bot-font bot-font-mid" style="margin-left: 15px;">支付宝支付</span>
        </li>
        <li style="margin-left: auto; list-style: none;">
          <span class="bot-font-small" style="margin-right: 62px;">应付款：
            <span v-if="!balance_after" class="true-price">&yen;{{purchaseList.actualPrice}}</span>
            <span v-if="balance_after" class="true-price">&yen;{{balance.actualPrice}}</span>
          </span>
          <button class="go-buy-btn" @click="charge()">立即支付</button>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import bus from '../../assets/js/evenBus'

  export default {
    data() {
      return {
        purchaseList:'',
        discount_blance:'',
        couponList:'',
        buyList:'',
        couponTotal:'',
        useBalanceStatus: 1,
        useBalance:'',
        balance:'',
        sessionKey:'',
        select_index:'',
        weixin: '',
        balance_earn: false,
        alipay: '',
        payment: 1,
        coupon_number:[],
        productArray:[],
        globalCouponNumber:'',
        params:'',
        param:'',
        data:{
        }
      }
    },
    ready: function(){
      this.init_request();
      var that=this;
      bus.$on("loginEvent",function(data){
        if (data==that.$route.name){
          that.init_request();
        }
      });
    },
    components: {},
    methods: {
      init_request:function () {
        this.load(Vue.http.options.root+'/api/v1/order/confirm/');
      },
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.params={
          amount: JSON.parse(Cookies.get('purchase_course_price_sum')),
          productList: JSON.parse(Cookies.get('purchase_course')),
          isDegreeCourse: parseInt(Cookies.get('isDegreeCourse'))
        };

        this.$http.post(url,JSON.stringify(this.params))
          .then(function(response){

            if(response.data.error_no==0){
              this.purchaseList='';
              this.buyList='';
              this.couponList='';
              this.couponTotal='';

              this.purchaseList=response.data.data;
              this.buyList=response.data.data.buyData.data;
              this.coupon_number.length=this.buyList.length;
              this.couponList=response.data.data.couponList.data;
              this.couponTotal=response.data.data.couponList.total;
              this.sessionKey=response.data.sessionKey;

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              //this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      use_balance: function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var param={
          useBalanceStatus:this.useBalanceStatus,
          sessionKey: this.sessionKey
        };
        this.$http.post(Vue.http.options.root+'/api/v1/order/balance/',JSON.stringify(param))
          .then(function(response){

            if(response.data.error_no==0){

              this.purchaseList='';
              this.buyList='';
              this.couponList='';
              this.couponTotal='';
              this.discount_blance='';

              this.purchaseList=response.data.data;
              this.discount_blance=this.changeTwoDecimal(this.purchaseList.balance/10);
              this.buyList=response.data.data.buyData.data;
              this.coupon_number.length=this.buyList.length;
              this.couponList=response.data.data.couponList.data;
              this.couponTotal=response.data.data.couponList.total;

              if(this.purchaseList.balance==0){
                this.balance_earn=true;
              }

              /*1 表示使用贝里  -1 表示取消使用贝里*/
              if(this.useBalanceStatus==1) {
                this.useBalance=1;
                this.useBalanceStatus=-1;

              }else {
                this.useBalance='';
                this.useBalanceStatus=1;
                this.balance_earn=false;

              }
            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      course_coupon: function ($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        if(this.coupon_number[$index]!='') {
          var param={
            changeCouponNumber: this.coupon_number[$index],
            courseId: this.buyList[$index].courseId,
            validPeriodId: this.buyList[$index].validPeriodId,
            sessionKey: this.sessionKey
          };
        }else {
          var param={
            changeCouponNumber: '-1',
            courseId: this.buyList[$index].courseId,
            validPeriodId: this.buyList[$index].validPeriodId,
            sessionKey: this.sessionKey
          };
        }

        this.$http.post(Vue.http.options.root+'/api/v1/order/coupon/change/',JSON.stringify(param))
          .then(function(response){

            if(response.data.error_no==0){
              this.purchaseList='';
              this.buyList='';
              this.couponList='';
              this.discount_blance='';
              this.couponTotal='';

              this.purchaseList=response.data.data;
              this.buyList=response.data.data.buyData.data;
              this.discount_blance=this.changeTwoDecimal(this.purchaseList.balance/10);
              this.coupon_number.length=this.buyList.length;
              this.couponList=response.data.data.couponList.data;
              this.couponTotal=response.data.data.couponList.total;

              if(this.purchaseList.balance==0){
                this.balance_earn=true;
              }


            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      all_coupon: function ($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.select_index=$index;

        if(!this.couponList[$index].default) {

          this.globalCouponNumber=this.couponList[$index].couponNumber;
          this.param={
            changeCouponNumber: this.globalCouponNumber,
            sessionKey: this.sessionKey
          };

        }else{

          this.globalCouponNumber='-1';
          this.param={
            changeCouponNumber:this.globalCouponNumber,
            courseId: '-1',
            validPeriodId: '-1',
            sessionKey: this.sessionKey
          };

        }

        this.$http.post(Vue.http.options.root+'/api/v1/order/coupon/change/',JSON.stringify(this.param))
          .then(function(response){

            if(response.data.error_no==0){
              this.couponTotal='';
              this.purchaseList='';
              this.buyList='';
              this.couponList='';
              this.discount_blance='';

              this.purchaseList=response.data.data;
              this.discount_blance=this.changeTwoDecimal(this.purchaseList.balance/10);
              this.buyList=response.data.data.buyData.data;
              this.coupon_number.length=this.buyList.length;
              this.couponList=response.data.data.couponList.data;
              this.couponTotal=response.data.data.couponList.total;

              if(this.purchaseList.balance==0){
                this.balance_earn=true;
              }

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      select_weixin: function () {//0:微信支付；1：支付宝支付
        if(this.payment==0){
          this.payment=null;
        }else {
          this.payment=0;
        }
      },
      select_alipay: function () {
        if(this.payment==1){
          this.payment=null;
        }else {
          this.payment=1;
        }
      },
      changeTwoDecimal: function (x) {
        var f_x = parseFloat(x);
        if (isNaN(f_x)) {
          alert('function:changeTwoDecimal->parameter error');
          return false;
        }
        var f_x = Math.round(x * 100) / 100;
        var s_x = f_x.toString();
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
          pos_decimal = s_x.length;
          s_x += '.';
        }
        while (s_x.length <= pos_decimal + 2) {
          s_x += '0';
        }
        return s_x;
      },
      charge: function () {
        if(this.payment==null) {
          toastr.info('您还没有选择支付方式');

        }else{
          Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
          this.productArray=[];

          console.log(this.buyList.length);

          for(var i=0;i<this.buyList.length;i++) {
            var item={
              courseId: this.buyList[i].courseId,              //int     YES  课程ID
              validPeriodId: this.buyList[i].validPeriodId,         //int     YES  课程选择有效期ID
              courseOriginPrice: this.buyList[i].courseOriginPrice,     //int     YES  课程原价
              courseDiscountPrice: this.buyList[i].courseDiscountPrice,   //int     YES  课程折后价格(如果未使用优惠券则该值为原价格)
              couponNumber: this.coupon_number[i]          //string  Yes  使用优惠券的券码
            };
            this.productArray.push(item);
          }

          console.log(this.productArray.length);
          console.log(this.productArray);

          var params={
            amount: this.purchaseList.priceSum,         //int    YES    商品总价格(单位: ￥)
            actualPrice: this.purchaseList.actualPrice,    //int    YES    经过优惠券或贝里抵扣的实际付款价格(单位: ￥)
            paymentType: this.payment,
            globalBalance: this.useBalance,
            source: Cookies.get('source'),
            isDegreeCourse: parseInt(Cookies.get('isDegreeCourse')),
            productArray:this.productArray,      //array  YES    购买产品信息列表
            globalCouponNumber: this.globalCouponNumber     //string    Yes    为true时提取优惠券
          };
          this.$http.post(Vue.http.options.root+'/api/v1/order/create/',JSON.stringify(params))
            .then(function(response){

              if(response.data.error_no==0){
                window.location.href=response.data.data.paymentUrl;

              }else if(response.data.error_no==2) {
                this.$store.state.login_state=false;
//                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;


              }else {
                if (response.data.userinfo){
                  toastr.info(response.data.error_msg);

                }
                console.log(response.data.error_msg);
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
      }

    }



  }
</script>
<style scoped>
  .coupon-list {
    display: flex !important;
    flex-wrap: wrap;
    padding: 0 !important;
  }
  .null-select {
    display: inline-block; width: 16px; margin-right: 9px; height: 16px;
    border: 1px solid #9B9B9B; border-radius: 16px;
    cursor: pointer;
  }
  .already-select {
    width: 16px; margin-right: 9px; height: 16px;
    border: 1px solid #78C63F;; border-radius: 16px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
  .already-select-in {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 12px;
    background: #78C63F;
  }
  .select-img {
    position: relative;
    top: -26px;
    left: 304px;
  }
  .select-coupon-oth {
    margin-top: -26px !important;
  }
  .coupon-cash-wrap {
    width: 333px;
    height: 126px;
    border: 1px solid #E8E8E8;
    padding: 13px;
    list-style: none;
    margin-right: 70px;
    margin-bottom: 45px;
  }
  .coupon-cash-wrap:nth-child(3n) {
    margin-right: 0;
  }
  .coupon-use-wrap {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
  }
  .cash-coupon {
    background: url("../../assets/img/cash-coupon.png") no-repeat;
    background-size: 100% 100%;
  }
  .coupon-price {
    font-size: 18px;
    color: #FFFFFF;
    display: inline-block;
  }
  .coupon-type {
    font-size: 12px;
    color: #FFFFFF;
    display: inline-block;
    margin-left: 10px;
  }
  .price-value {
    font-size: 36px;
    color: #FFFFFF;
  }
  .coupon-time-limit {
    font-size: 12px;
    color: #FFFFFF;
    display: block;
  }
  .coupon-limit {
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    width: 65px;
  }

  .purchase-wrap {
    width: 1200px;
    margin: 0 auto;
  }
  .purchase-head-wrap {
    display: flex;
    width: 100%;
    height: 80px;
    background: #F7F7F7;
    padding-left: 30px;
    margin-top: 40px;
    align-items: center;
    text-align: center;
  }
  .purchase-item-name {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    list-style: none;
  }
  .product-list {
    padding-left: 40px;
    display: inline-block;
  }
  .product-fonts {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
  }
  .coupon-select {
    width: 117px;
    height: 28px;
    padding: 0 16px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  .go-buy-btn {
    background: #78C63F;
    border-radius: 3px;
    width: 100px;
    height: 30px;
    outline: none;
    border: none;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #FFFFFF;
    margin-right: 54px;
  }
  .sum-price {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #333333;
  }
  .sum-price-wrap {
    display: inline-block;
    font-size: 14px;
    color: #9B9B9B;
    margin-left: auto;
  }
  .select-coupon {
    font-size: 16px;
    color: #9B9B9B;
    display: inline-block;
  }
  .coupon-num {
    width: 64px;
    height: 22px;
    background: #FD7B4D;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    margin-left: 14px;
    color: #FFFFFF;
    display: inline-block;

  }
  .discount-num {
    font-size: 14px;
    color: #666666;
    line-height: 18px;
  }
  .sun-coupon-num {
    font-size: 14px;
    color: #F5A623;
    display: inline-block;
    margin-top: 40px;
  }
  .true-price {
    font-size: 36px;
    color: #333333;
  }
  .bot-font {
    color: #666666;
  }
  .bot-font-big {
    font-size: 18px;
  }
  .bot-font-mid {
    font-size: 16px;
  }
  .bot-font-small {
    font-size: 14px;
    color: #333333;
  }
</style>
