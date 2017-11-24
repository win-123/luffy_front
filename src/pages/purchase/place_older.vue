<template>
  <div class="shopping-cart-wrap">
    <h3 class="shopping-cart-tit">提交订单</h3>
    <div class="row col-xs-12">
      <table class="table shopping-cart-list" style="table-layout:fixed;">
        <thead class="shopping-cart-list-head" style="background: #F7F7F7; width: 100%; height: 80px;">
        <tr class="shopping-cart-list-head-wrap" style="background: #F7F7F7; width: 100%;">
          <th class="shopping-cart-list-head-item" width="52%">课程</th>
          <th class="shopping-cart-list-head-item" width="20%">有效期</th>
          <th class="shopping-cart-list-head-item" width="15%">单价</th>
        </tr>
        </thead>
        <tbody>
        <tr style="border-bottom: 1px solid #e8e8e8;">
          <td>
            <img style="margin-right: 36px;" src="../../assets/img/course-cover.png" width="170" height="115" alt="">
            <span class="shopping-cart-course-title">CRM客户关系管理系统项目开发实战</span>
          </td>
          <td>
            <select class="select-option" name="datetime" id="datetime">
              <option value="有效期1个月">有效期1个月</option>
            </select>
          </td>
          <td class="shopping-cart-course-price">&yen;399.00</td>
        </tr>
        <tr style="border-bottom: 1px solid #e8e8e8;">
          <td>
            <img style="margin-right: 36px;" src="../../assets/img/course-cover.png" width="170" height="115" alt="">
            <span class="shopping-cart-course-title">CRM客户关系管理系统项目开发实战</span>
          </td>
          <td>
            <select class="select-option" name="datetime">
              <option value="有效期1个月">有效期1个月</option>
            </select>
          </td>
          <td class="shopping-cart-course-price">&yen;399.00</td>
        </tr>
        </tbody>
      </table>
      <ul class="pad-left" style="width: 100%; height: 80px; background: #F7F7F7; margin: 80px 0 300px; display: flex; align-items: center;">
        <li>
          <input type="checkbox">
          <span class="shopping-cart-bot-font" style="margin-left: 15px;">全选</span>
        </li>
        <li style="margin-left: 58px;">
          <img src="../../assets/img/delete-icon.png" width="23" height="23" alt="">
          <span class="shopping-cart-bot-font" style="margin-left: 15px;">删除</span>
        </li>
        <li style="margin-left: 58px;">
          <img src="../../assets/img/love.png" width="25" height="22" alt="">
          <span class="shopping-cart-bot-font" style="margin-left: 15px;">移入收藏夹</span>
        </li>
        <li style="margin-left: auto;">
          <span class="shopping-cart-bot-font" style="margin-right: 62px;">总计：¥798.00</span>
          <button class="go-charge-btn">去结算</button>
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
        purchase_course:'',
        data:{
        }
      }
    },
    ready: function(){
      this.load(Vue.http.options.root+'api/v1/coursedetailtop/?courseid=5');
    },
    components: {},
    methods: {
      load: function(url) {
        var params={
          amount: 1999,
          productList: [  //产品列表 array
            {
              'courseId': 4,                 //int      课程ID
              'validPeriod': validPeriodID,  //int      有效期ID
              'price': 457,                  //int      课程对应价格
              'courseUrl': ''                //string   课程描述图
            }
            ]
        };

        this.$http.post(url,params)
          .then(function(response){

            if(response.data.error_no==0){
              this.purchase_course=response.data.data;

            }else if(response.data.error_no==2){
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
      }

    }



  }
</script>
<style scoped>
  li {
    list-style: none;
  }
  .pad-left {
    padding-left: 25px !important;
  }
  .table>tbody>tr>td {
    padding: 67px 0;
    vertical-align: middle !important;
  }
  .table>thead>tr>th {
    vertical-align: middle !important;
    border-bottom: none !important;
    font-weight: normal !important;
  }
  .shopping-cart-wrap {
    width: 1200px;
    margin: 0 auto;
  }
  .shopping-cart-tit {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #666666;
    margin: 25px 0;
  }
  .shopping-cart-tit small{
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #D0D0D0;
    display: inline-block;
  }
  .shopping-cart-list-head-item {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #333333;
    height: 80px;
  }
  .shopping-cart-course-price {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
  }
  .do-btn {
    border: none;
    outline: none;
    background: none;
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #4A90E2;
    margin-right: 15px;
  }
  .shopping-cart-course-title {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
  }
  .select-option {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
    width: 117px;
    height: 28px;
    padding-left: 16px;
    border: 1px solid #D9D9D9;
    border-radius: 4px;
  }
  .go-charge-btn {
    width: 159px;
    height: 80px;
    outline: none;
    border: none;
    background: #78C63F;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #FFFFFF;
  }
  .shopping-cart-bot-font {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #666666;
  }
</style>
