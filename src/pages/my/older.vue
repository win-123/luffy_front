<template>
  <div>
    <common></common>
    <div style="width: 1200px; margin: 0 auto;">
      <ul class="my-item-wrap">
        <li class="my-item" v-link="{name:'mine-account'}">我的账户</li>
        <li class="my-item my-active" v-link="{name:'mine-older'}">我的订单</li>
        <li class="my-item" v-link="{name:'mine-collection'}">我的收藏</li>
        <li class="my-item" v-link="{name:'mine-profile'}">个人资料</li>
        <li class="my-item" v-link="{name:'mine-safe'}">账号安全</li>
      </ul>
      <div class="information older-info-wrap">
        <ul class="table-head">
          <li class="older-info" style="width: 317px;">订单信息</li>
          <li class="buyer-limit-date">有效期</li>
          <li class="discount" style="font-size: 13px;color: #333333;">优惠</li>
          <li class="per-price" style="width: 130px;">单价（元）</li>
          <li class="course-discount" style="width: 120px;">抵扣</li>
          <li class="course-discount" style="width: 145px;">实付金额</li>
          <li class="course-discount" style="width: 130px;">交易状态</li>
          <li class="handle">交易操作</li>
        </ul>

        <div v-for="(index,older) in olderList" id="{{older.id}}" class="table-main">
          <div class="table-older-ceil">
            <span class="my-older-num my-older-time">{{older.date}}</span>
            <span class="my-older-num my-older-code">订单号：<span class="my-older-number">{{older.order_number}}</span></span>
          </div>
          <div style="display: flex; align-items: center;"><!--class="older-tr-style" -->
            <div class="left-wrap" style="border-right: 1px solid #E9E9E9; border-bottom: 1px solid #E9E9E9; border-left: 1px solid #E9E9E9;">
              <ul v-for="course in older.course_item" id="{{course.course_id}}" class="older-info course-inf" style="border-top: 1px solid #E9E9E9; width: 600px; height: 126px; display: flex; align-items: center; margin: 0;">
                <li class="older-course-detail">
                  <div style="width: 133px; height: 75px; overflow: hidden;">
                    <img :src="course.course_img" width="100%" alt="">
                  </div>
                  <h3 class="my-older-course-tit">{{course.course_name}}</h3>
                </li>
                <li class="buyer-limit-date buyer-limit-date-font">{{course.valid_period_display}}</li>
                <li class="discount" style="font-size: 12px;color: #4A4A4A;">{{course.coupon}}</li>
                <li class="per-price">
                  <span style="display: block;font-size: 14px;color: #D0D0D0; text-decoration: line-through;">{{course.original_price}}</span>
                  <span>{{course.price}}</span>
                </li>
              </ul>
            </div>
            <ul class="right-wrap-order" :style="older.course_item.length != 1 && ('height:' + 127 *　older.course_item.length + 'px')">
              <li class="course-discount" style="width: 135px; text-align: center;padding: 15px; height: 100%; display: flex; align-items: center; border-right: 1px solid #E9E9E9;">
                {{older.deduction.coupon}}<br>
                {{older.deduction.blance}}
              </li>
              <li class="course-discount" style="width: 135px; height: 100%; display: flex; align-items: center; justify-content: center; border-right: 1px solid #E9E9E9;">{{older.actual_amount}}</li>
              <li class="course-discount" style="width: 135px; height: 100%; display: flex; align-items: center; justify-content: center; border-right: 1px solid #E9E9E9;">{{older.status}}</li>
              <li class="handle" @click="handling(index,older.order_type)">
                <button v-show="this.olderList[index].handle!=null"  class="charge-btn">
                  {{older.handle}}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import common from '../../pages/my/children/common.vue';

  export default {
    data() {
      return {
        img_define: false,
        olderList: '',
        data:{
          "profile": false,
          "older": false,
          "balance": true,
          "collection": false
          /*"question": false*/
        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;

      this.load(Vue.http.options.root+'/api/v1/personal/my_orders/');
      /*$('.older-info-wrap').load(location.href);*/
    },
    canReuse: false,
    components: {
      common
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.olderList=response.data.data;

            /*for( var i=0; i<response.data.data.length; i++) {

               var num=response.data.data[i].course_item.length;

              $('.right-wrap:eq('+i+')').css('height',(num*127)+'px');
            }*/

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      handling: function (index,order_type) {
        if(this.olderList.length>0) {
          switch (this.olderList[index].handle) {
            case '去评价': {
              Cookies.set('comment_course',JSON.stringify(this.olderList[index].course_item));
              Cookies.set('older_date',this.olderList[index].date);
              Cookies.set('order_type',this.olderList[index].order_type);
              Cookies.set('order_number',this.olderList[index].order_number);
             /* Cookies.set('older_date',this.olderList[index].date);*/
              this.$route.router.go({name: 'older_evaluation'});
              break;
            }
            case '去付款': {

               this.$http.get(Vue.http.options.root+'/api/v1/order/pay/?orderNumber='+this.olderList[index].order_number+'&actualAmount='+this.olderList[index].actual_amount)
               .then(function(response){

               if(response.data.error_no==0){
               /*this.$route.router.go({name: 'purchase-success'});*/
               window.location.href=response.data.data.paymentUrl;

               }else if(response.data.error_no==2) {
               this.$store.state.login_state=false;
               this.$route.router.go({name: 'home'});
               this.$store.state.login_ing=true;

               }else {
               console.log(response.data.error_msg);
               }

               })
               .catch(function(response) {
               console.log('服务器正在打盹~')
               });
              break;
            }
            case '填写报名表': {
              this.$route.router.go({name: 'application-form',params:{id:this.olderList[index].course_item[0].enroll_id}});
              break;
            }
            case '去学习':{
              if(order_type==0){
                this.$route.router.go({name: 'study'});
                break;
              }
              else if (order_type==1){
                this.$route.router.go({name: 'study-micro'});
                break;
              }

            }
          }
        }
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
  .information {
    margin-bottom: 63px;
  }
  .older-info-wrap {
    width: 1200px;
    padding-top: 30px;
    border-top: 1px solid #E8E8E8;
  }
  .table-head {
    width:100%;
    height: 60px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
  }
  .table-head>li {
    height: 60px;
    line-height: 60px;
    list-style: none;
  }
  .table-main {
    width: 100%;
  }
  .table-older-ceil {
    display: flex;
    height: 60px;
    align-items: center;
  }
  .older-tr-style {
    border: 1px solid #E9E9E9;
  }
  .older-info {
    padding-left: 27px !important;
  }
  .older-course-detail {
    display: flex;
    align-items: center;
  }
  .buyer-limit-date {
    width: 79px;
    text-align: center;
  }
  .discount {
    width: 80px;
    text-align: center;
  }
  .buyer-limit-date-font {
    font-size: 12px;
    color: #FF5502;
  }
  .per-price {
    width: 124px;
    text-align: center;
  }
  .course-discount {
    width: 164px;
    text-align: center;
  }
  .handle {
    width: 189px;
    text-align: center;
    padding-left: 25px !important;
  }
  .td-border {
    height: 126px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #E8E8E8;
  }
  .my-older-num {
    font-size: 12px;
    color: #999999;
    display: inline-block;
  }
  .my-older-time {
    margin-left: 27px;
  }
  .my-older-code {
    margin-left: 29px;
  }
  .my-older-type {
    margin-left: 22px;
  }
  .my-older-course-tit {
    font-size: 13px;
    color: #333333;
    line-height: 20px;
    width: 134px;
    margin: 0 0 0 22px;
  }
  .cancel-older-btn {
    display: block;
    border: none;
    outline: none;
    background: none;
    margin-top: 18px;
    font-size: 14px;
    color: #9B9B9B;
    width: 102px;
    text-align: center;
  }
  .charge-btn {
    width: 102px;
    height: 33px;
    background: #7ED321;
    font-family: PingFangSC-Medium;
    font-size: 14px;
    color: #FFFFFF;
    border: none;
    outline: none;
  }
  .right-wrap-order {
    height: 127px;
    display: flex;
    align-items: center;
    margin: 0;
    border-right: 1px solid #E9E9E9;
    border-top: 1px solid #E9E9E9;
    border-bottom: 1px solid #E9E9E9;
  }
</style>
