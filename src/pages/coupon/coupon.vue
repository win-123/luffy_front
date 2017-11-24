<template>
  <div class="coupon-wrap">
    <div class="coupon-tit-wrap">
      <h3 class="coupon-tit">我的优惠券</h3>
    </div>
    <div style="padding: 45px 0 45px 58px; display: flex; border-bottom: 1px solid #E9E9E9; align-items: center;">
      <span class="coupon-label">激活优惠券：</span>
      <div class="coupon-input-wrap">
        <input v-model="data.coupon_number" class="coupon-input" type="text" placeholder="请输入优惠券编码">
        <button class="coupon-live-btn" @click="activate()">激活</button>
      </div>
      <div class="sub-tip-wrap" style="margin-left: 580px;">
        <div class="sub-tip">
          <img style="margin-left: 17px;" src="../../assets/img/select-icon.png" width="14" height="14" alt="">
          <span class="sub-text"></span>
        </div>
      </div>
      <div class="sub-warn-wrap" style="margin-left: 580px;">
        <div class="sub-tip">
          <img style="margin-left: 17px;" src="../../assets/img/warn-icon.png" width="14" height="14" alt="">
          <span class="warn-text"></span>
        </div>
      </div>
    </div>
    <div style="height: 111px; width: 100%; display: flex; border-bottom: 1px solid #E9E9E9; align-items: center; ">
      <span class="coupon-sec-item">可用优惠券：共 {{valid_coupon.count}} 张（ 提示：优惠券一旦使用就会失效，无法退回 ）</span>
    </div>
    <div style="padding-top: 34px; padding-left: 58px;">
      <div class="coupon-btn-wrap">
        <button @click="select_change(0)" :class="['coupon-btn',{'disable-btn':!valid},{'able-btn':valid}]">可用&nbsp;({{valid_coupon.count}})</button>
        <button @click="select_change(1)" :class="['coupon-btn',{'disable-btn':!used},{'able-btn':used}]">已使用&nbsp;({{used_coupon.count}})</button>
        <button @click="select_change(2)" :class="['coupon-btn',{'disable-btn':!expire},{'able-btn':expire}]">已过期&nbsp;({{expire_coupon.count}})</button><!--(i,course) in courseList | filterBy data.title in 'title'| filterBy data.type in 'type'"-->
      </div>
      <!--已使用-->
      <ul v-if="used" style="display: flex; flex-wrap: wrap; padding: 40px 0 0 0 !important;">
        <li v-for="(index,item) in used_coupon.result" id="{{item.number}}" class="coupon-cash-wrap">
          <div>
            <img  style="position: absolute;" src="../../assets/img/used.png" alt="">
            <!--优惠券详细信息-->
            <div class="coupon-use-wrap cash-coupon-no-use">
              <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                <!--0：通用券；1：满减券；2：折扣券-->
                <span v-if="item.coupon_type=='通用券' || item.coupon_type=='满减券'" class="coupon-price">&yen;<span class="price-value">{{item.value}}</span>元</span>
                <span v-if="item.coupon_type=='折扣券'" class="coupon-price"><span class="price-value">{{item.value}}</span>折</span>
                <span class="coupon-type">{{item.coupon_type}}</span>
                <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{item.valid_date_from}}-{{item.valid_date_to}}</span>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                <span class="coupon-time-limit">{{item.coupon_msg}}</span>
                <span class="coupon-time-limit coupon-limit">{{item.coupon_limit}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--可用-->
      <ul v-if="valid" style="display: flex; flex-wrap: wrap; padding: 40px 0 0 0 !important;">
        <li v-for="(index,menu) in valid_coupon.result" id="{{menu.number}}" class="coupon-cash-wrap">
          <div v-if="menu.status == null"><!--正常：表示未使用且近期不会过期-->
            <!--优惠券详细信息-->
            <div class="coupon-use-wrap cash-coupon">
              <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                <!--0：通用券；1：满减券；2：折扣券-->
                <span v-if="menu.coupon_type=='通用券' || menu.coupon_type=='满减券'" class="coupon-price">&yen;<span class="price-value">{{menu.value}}</span>元</span>
                <span v-if="menu.coupon_type=='折扣券'" class="coupon-price"><span class="price-value">{{menu.value}}</span>折</span>
                <span class="coupon-type">{{menu.coupon_type}}</span>
                <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{menu.valid_date_from}}-{{menu.valid_date_to}}</span>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                <span class="coupon-time-limit">{{menu.coupon_msg}}</span>
                <span class="coupon-time-limit coupon-limit">{{menu.coupon_limit}}</span>
              </div>
            </div>
          </div>
          <div v-if="menu.status=='即将过期'">
            <img style="position: absolute;" src="../../assets/img/will_no_use.png" alt="">
            <!--优惠券详细信息-->
            <div class="coupon-use-wrap cash-coupon">
              <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                <!--0：通用券；1：满减券；2：折扣券-->
                <span v-if="menu.coupon_type=='通用券' || menu.coupon_type=='满减券'" class="coupon-price">&yen;<span class="price-value">{{menu.value}}</span>元</span>
                <span v-if="menu.coupon_type=='折扣券'" class="coupon-price"><span class="price-value">{{menu.value}}</span>折</span>
                <span class="coupon-type">{{menu.coupon_type}}</span>
                <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{menu.valid_date_from}}-{{menu.valid_date_to}}</span>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                <span class="coupon-time-limit">{{menu.coupon_msg}}</span>
                <span class="coupon-time-limit coupon-limit">{{menu.coupon_limit}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <!--已过期-->
      <ul v-if="expire" style="display: flex; flex-wrap: wrap; padding: 40px 0 0 0 !important;">
        <li v-for="(index,list) in expire_coupon.result" id="{{list.number}}" class="coupon-cash-wrap">
          <div>
            <img  style="position: absolute;" src="../../assets/img/no_use.png" alt="">
            <!--优惠券详细信息-->
            <div class="coupon-use-wrap cash-coupon-no-use">
              <div style="width: 70%; height: 77px; border-right: 1px dashed #FFFFFF; text-align: center;">
                <!--0：通用券；1：满减券；2：折扣券-->
                <span v-if="list.coupon_type=='通用券' || list.coupon_type=='满减券'" class="coupon-price">&yen;<span class="price-value">{{list.value}}</span>元</span>
                <span v-if="list.coupon_type=='折扣券'" class="coupon-price"><span class="price-value">{{list.value}}</span>折</span>
                <span class="coupon-type">{{list.coupon_type}}</span>
                <span class="coupon-time-limit" style="margin-top: 8px;">有效期：{{list.valid_date_from}}-{{list.valid_date_to}}</span>
              </div>
              <div style="display: flex; flex-direction: column; justify-content: space-between; margin-left: 16px; height: 71px;">
                <span class="coupon-time-limit">{{list.coupon_msg}}</span>
                <span class="coupon-time-limit coupon-limit">{{list.coupon_limit}}</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        valid: true,
        used: false,
        expire: false,
        valid_coupon: '',
        used_coupon: '',
        expire_coupon: '',
        data:{
          coupon_number:''
        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.load(Vue.http.options.wz_root+'/api/v1/coupon/');
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response){

            if(response.data.error_no==0){

              this.valid_coupon=response.data.data.coupon_valid;
              this.used_coupon=response.data.data.coupon_used;
              this.expire_coupon=response.data.data.coupon_expire;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log('接口返回失败')
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      select_change: function (option) {
        /*- 0：可用
         - 1：已使用
         - 2：已过期*/
        switch (option) {
          case 0: {
            this.valid=true;
            this.used=false;
            this.expire=false;
            break;
          }
          case 1: {
            this.valid=false;
            this.used=true;
            this.expire=false;
            break;
          }
          case 2: {
            this.valid=false;
            this.used=false;
            this.expire=true;
            break;
          }
          default: {
            this.valid=true;
            this.used=false;
            this.expire=false;
            break;
          }
        }

      },
      activate: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var param={
          number: this.data.coupon_number
        };

        this.$http.post(Vue.http.options.wz_root+'/api/v1/coupon/',JSON.stringify(param))
          .then(function(response){

            if(response.data.error_no==0){

              $('.sub-text').text(response.data.error_msg);
              $(".sub-tip-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);

            }else if (response.data.error_no==-1){

              $('.warn-text').text(response.data.error_msg);
              $(".sub-warn-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log('接口返回失败');
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
  /*交互提示style-start*/
  .sub-tip-wrap,
  .sub-warn-wrap {
    min-width: 236px;
    height: 34px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
    border-radius: 4px;
    position:absolute;
    margin-left: 365px;
    display: none;
  }
  .sub-tip {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .sub-text,
  .warn-text {
    display: inline-block;
    padding: 0 10px;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  /*交互提示style-end*/
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
    background-size: cover;
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


  .coupon-wrap {
    width: 1200px;
    margin: 47px auto;
  }
  .coupon-tit-wrap {
    width: 100%;
    height: 80px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
  }
  .coupon-tit {
    margin:0 30px 0 35px;
    font-size: 18px;
    color: #666666;
  }
  .coupon-label {
    font-size: 18px;
    color: #5E5E5E;
  }
  .coupon-input-wrap {
    border: 1px solid #E9E9E9;
    width: 417px;
    height: 54px;
    margin-left: 16px;
    display: flex;
  }
  .coupon-input {
    width: 333px;
    height: 54px;
    padding-left: 15px;
  }
  .coupon-live-btn {
    background: #7ED321;
    width: 84px;
    height: 54px;
    outline: none;
    border: none;
    font-size: 18px;
    color: #FFFFFF;
  }
  .coupon-sec-item {
    font-size: 14px;
    color: #9B9B9B;
    display: block;
    margin-left: 64px;
  }
  /*.coupon-btn-wrap {
    padding-left: 30px;
  }*/
  .coupon-btn {
    width: 120px;
    height: 54px;
    outline: none;
    font-size: 18px;
    margin-right: 34px;
  }
  .able-btn {
    border: none;
    background: #7ED321;
    color: #FFFFFF;
  }
  .disable-btn {
    border: 1px dashed #9D9D9D;
    background: none;
    color: #9D9D9D;
  }
  .coupon-detail {
    margin-top: 52px;
    padding: 0;
    display: flex;
    margin-bottom: 300px;
  }
  .coupon-cont-wrap {
    width: 364px;
    height: 100px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
  .cash-coupon-no-use {
    background: url("../../assets/img/no-use-bkg.png") no-repeat;
    background-size: cover;
  }
  .discount-coupon {
    background: url("../../assets/img/discount-coupon.png") no-repeat;
    background-size: cover;
  }
</style>
