<template>
  <div v-show="no_course" class="shopping-cart-wrap">
    <h3 class="shopping-cart-tit" style="padding-top: 15px;">我的购物车</h3>
    <div style="text-align: center; padding-top: 190px; padding-bottom: 350px;">
      <img src="../../assets/img/null.png" width="272" height="185" alt="">
      <span class="null-text">购物车空空的哦~，去看看心仪的<a style="color: #4990E2;" v-link="{name:'course'}">课程</a>吧~</span>
    </div>
  </div>
  <div v-show="!no_course" class="shopping-cart-wrap">
    <h3 class="shopping-cart-tit">我的购物车 <small>共<span>{{course_total}}</span>门课程</small></h3>
    <div class="row col-xs-12">
      <table class="table shopping-cart-list" style="table-layout:fixed;">
        <thead class="shopping-cart-list-head" style="background: #F7F7F7; width: 100%; height: 80px;">
        <tr class="shopping-cart-list-head-wrap" style="background: #F7F7F7; width: 100%;">
          <th class="shopping-cart-list-head-item pad-left" width="8%" style="margin: 0 auto;"></th>
          <th class="shopping-cart-list-head-item" width="52%">课程</th>
          <th class="shopping-cart-list-head-item" width="20%">有效期</th>
          <th class="shopping-cart-list-head-item" width="15%">单价</th>
          <th class="shopping-cart-list-head-item" width="15%">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(index,item) in courseList" id="{{item.courseId}}" style="border-bottom: 1px solid #e8e8e8;">
          <td width="8%" class="pad-left">
            <input @click="selecting($index)" class="check J-check-btn" type="checkbox">
          </td>
          <td width="52%" style="">
            <img style="margin-right: 36px; cursor: pointer;" :src="item.courseImg" width="170" height="115" alt="" v-link="{name:'course-detail',params:{id:item.courseId}}">
            <a class="shopping-cart-course-title" v-link="{name:'course-detail',params:{id:item.courseId}}">{{item.courseName}}</a>
          </td>
          <td width="20%">
            <select v-model="ValidPeriod[index]" @change="change($index)" class="select-option" name="datetime">
              <option v-for="valid in item.validPeriodChoices" value="{{valid.validPeriodId}}" :selected="valid.default">有效期{{valid.validPeriod}}</option>
            </select>
          </td>
          <td width="15%" class="shopping-cart-course-price">&yen;{{item.coursePrice}}</td>
          <td width="15%" style="text-align: left;">
            <button class="do-btn" @click="delete_warn($index)">删除</button>
            <!--<button class="do-btn">收藏</button>-->
            <div class="delete-wrap">
              <div style="padding: 20px 0 24px 20px;">
                <img src="../../assets/img/warn-icon.png" width="14" height="14" alt="">
                <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该课程吗？</span>
              </div>
              <div class="delete-btn-wrap">
                <button class="delete-cancel" @click="delete_cancel()">取消</button>
                <button class="delete-sure" @click="delete_course()">确定</button>
              </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <ul class="pad-left" style="width: 100%; height: 80px; background: #F7F7F7; margin: 80px 0 300px; display: flex; align-items: center;">
        <li class="charge-list">
          <input class="select_all" @change="select_all"  type="checkbox">
          <span class="shopping-cart-bot-font"  style="margin-left: 15px; cursor: pointer;">全选</span>
        </li>
        <li class="charge-list" style="margin-left: 58px;">
          <img src="../../assets/img/delete-icon.png" width="23" height="23" alt="">
          <span class="shopping-cart-bot-font" @click="delete_more_warn()" style="margin-left: 15px; cursor: pointer;">删除</span>
        </li>
        <li class="charge-list" style="margin-left: auto;">
          <span class="shopping-cart-bot-font" style="margin-right: 62px;">总计：¥{{price_sum}}</span>
          <button class="go-charge-btn" @click="go_charge()">去结算</button>
        </li>
      </ul>
    </div>
  </div>
  <div class="shadow-wrap login-shadow delete-more-wrap">
    <div class="delete-more-tip">
      <div style="display: flex; align-items: center;">
        <img src="../../assets/img/warn-icon.png" width="24" height="24" alt="">
        <h5 class="delete-more-tit"></h5>
      </div>
      <p class="delete-more-dec"></p>
      <div class="delete-btn-wrap">
        <button class="delete-cancel delete-more-btn" @click="delete_cancel()">取消</button>
        <button class="delete-sure delete-more-btn" @click="delete_more()">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';

  export default {
    data() {
      return {
        number: '',
        price_sum: 0,
        select_course: [],
        purchase_course: [],
        defaultPrice: '',
        delete_tip:'',
        courses:[],
        course_total: '',
        valid_period_id: '',
        oldValidPeriodId: '',
        isCheckAll: false,
        ValidPeriod: [],
        params: '',
        no_course: false,
        courseList: '',
        data: {

        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;


      this.load(Vue.http.options.root+'/api/v1/user/shopping_cart/list/');
      this.courses=$(".check[type='checkbox']");
     /* $(".check[type='checkbox']:eq(0)").attr('checked','checked');*/
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response){
            if(response.data.error_no==0){
              this.courseList='';
              this.ValidPeriod.length= 0;
              this.course_total=0;

              this.course_total=response.data.data.total;
              if(this.course_total>0){

                this.courseList=response.data.data.myShopCart;
                this.ValidPeriod.length= this.courseList.length;

                console.log(this.ValidPeriod);

              }else {
                  this.no_course=true;
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
            console.log('购物车获取接口请求失败')
          })
      },
      delete_warn: function ($index) {

        this.number=$index;
        $('.delete-wrap:eq('+this.number+')').fadeIn();

      },
      delete_cancel: function () {

        $('.delete-wrap:eq('+this.number+')').fadeOut();
        $('.delete-more-wrap').fadeOut();
      },
      delete_course: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.params={
          removeShopFromCart:[
            {
              'course_id': this.courseList[this.number].courseId,          //yes   int   课程ID
              'valid_period_id': this.courseList[this.number].validPeriodId     //yes   int   课程期限ID
            }
          ]
        };

        this.$http.post(Vue.http.options.root+'/api/v1/user/shopping_cart/remove/',JSON.stringify(this.params))
          .then(function(response){
            if(response.data.error_no==0){
              toastr.success('删除课程成功')
              this.load(Vue.http.options.root+'/api/v1/user/shopping_cart/list/');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('购物车删除课程接口请求失败')
          })
      },
      change: function ($index) {
        this.defaultPrice=parseFloat(this.courseList[$index].coursePrice);
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.params={
          courseId: this.courseList[$index].courseId,                                   // 课程ID       yes   int
          oldValidPeriodId: this.courseList[$index].validPeriodId,                      //课程期限原ID   yes   int
          newValidPeriodId: JSON.parse(this.ValidPeriod[$index])                        //课程期限新ID   yes   int
        };

        this.$http.post(Vue.http.options.root+'/api/v1/user/shopping_cart/update/',JSON.stringify(this.params))
          .then(function(response){
            if(response.data.error_no==0){

              this.courseList[$index].validPeriodId=response.data.data.validPeriodId;
              this.courseList[$index].coursePrice=response.data.data.coursePrice;
              this.ValidPeriod.length= this.courseList.length;

              console.log(this.ValidPeriod);

              if($('.J-check-btn:eq('+$index+')').is(':checked')){
                this.price_sum=this.price_sum-this.defaultPrice+parseFloat(this.courseList[$index].coursePrice);
              }


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
      selecting: function ($index) {
        let allCheckBtn = document.querySelector('.select_all');
        allCheckBtn.checked = $('.J-check-btn').length == $('.J-check-btn:checked').length;

        if(this.select_course.length<=0) {
          var item={
            'course_id': this.courseList[$index].courseId,                      //yes   int   课程ID
            'valid_period_id': JSON.parse(this.ValidPeriod[$index])             //yes   int   课程期限ID
          };

          var buy_item={
            'courseId': this.courseList[$index].courseId,                 //int      课程ID
            'validPeriodId': JSON.parse(this.ValidPeriod[$index]),              //int      有效期ID
            'price': this.courseList[$index].coursePrice,                  //int      课程对应价格
            'courseUrl': this.courseList[$index].courseImg               //string   课程描述图
          };
          this.select_course.push(item);
          this.purchase_course.push(buy_item);

          this.price_sum+=parseFloat(this.courseList[$index].coursePrice);
        }else {
          let courseId=[];
          for(var i=0; i<this.select_course.length; i++){
            courseId.push(this.select_course[i].course_id)
          }

          if(courseId.indexOf(this.courseList[$index].courseId,0)!=-1) {//存在

            this.select_course.splice(courseId.indexOf(this.courseList[$index].courseId),1);
            this.purchase_course.splice(courseId.indexOf(this.courseList[$index].courseId),1);

            this.price_sum-=parseFloat(this.courseList[$index].coursePrice);


          }else {//-1:不存在
            var list={
              'course_id': this.courseList[$index].courseId,                      //yes   int   课程ID
              'valid_period_id': JSON.parse(this.ValidPeriod[$index])             //yes   int   课程期限ID
            };

            var buy_list={
              'courseId': this.courseList[$index].courseId,                 //int      课程ID
              'validPeriodId': JSON.parse(this.ValidPeriod[$index]),              //int      有效期ID
              'price': this.courseList[$index].coursePrice,                  //int      课程对应价格
              'courseUrl': this.courseList[$index].courseImg               //string   课程描述图
            };

            this.select_course.push(list);
            this.purchase_course.push(buy_list);

            this.price_sum+=parseFloat(this.courseList[$index].coursePrice);
          }
        }

        Cookies.set('purchase_course',JSON.stringify(this.purchase_course));
        Cookies.set('purchase_course_price_sum',JSON.stringify(this.price_sum));

      },
      select_all: function (e) {
        let selfDom = e.target;
        let checkBtn = document.querySelectorAll('.J-check-btn');
        for(var i = 0; i < checkBtn.length; i++){
            checkBtn[i].checked = selfDom.checked;
        }

        if(!selfDom.checked){
          this.price_sum=0;
          this.select_course.length=0;
          return false;
        }

        this.select_course=[];
        this.purchase_course=[];
        this.price_sum=0;

        for(var i=0;i<this.courseList.length;i++) {
          var item={
            'course_id': this.courseList[i].courseId,                      //yes   int   课程ID
            'valid_period_id': JSON.parse(this.ValidPeriod[i])             //yes   int   课程期限ID
          };

          var buy_item={
            'courseId': this.courseList[i].courseId,                 //int      课程ID
            'validPeriodId': JSON.parse(this.ValidPeriod[i]),              //int      有效期ID
            'price': this.courseList[i].coursePrice,                  //int      课程对应价格
            'courseUrl': this.courseList[i].courseImg               //string   课程描述图
          };

          this.select_course.push(item);
          this.purchase_course.push(buy_item);
          this.price_sum+=parseFloat(this.courseList[i].coursePrice);

          Cookies.set('purchase_course',JSON.stringify(this.purchase_course));
          Cookies.set('purchase_course_price_sum',JSON.stringify(this.price_sum));
        }
      },
      delete_more_warn: function () {
        if(this.select_course.length==0) {
          $('.delete-more-tit').text('请选择想要删除的课程');
          $('.delete-more-dec').text('一系列的信息描述，可能会很长。也可以是很短,同样也可以带标点。');
         }else {
          $('.delete-more-tit').text('确定要清空购物车所有课程？');
          $('.delete-more-dec').text('删除后所有课程将会失效，确认删除？');
         }
        $('.delete-more-tit').text();
        $('.delete-more-wrap').fadeIn();
      },
      delete_more: function() {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var params={
          removeShopFromCart:this.select_course
        };

        this.$http.post(Vue.http.options.root+'/api/v1/user/shopping_cart/remove/',JSON.stringify(params))
          .then(function(response){
            if(response.data.error_no==0){

              this.load(Vue.http.options.root+'/api/v1/user/shopping_cart/list/');
              $('.delete-more-wrap').fadeOut();

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('购物车删除课程接口请求失败')
          })
      },
      go_charge: function () {
        if(this.select_course.length!=0) {
          Cookies.set('isDegreeCourse','');
          Cookies.set('source','shop_cart');
          this.$route.router.go({name: 'purchase-course'});

        }else {
          toastr.info('请选择要购买的课程~');
        }
      }
    }
  }
</script>
<style scoped>
  /*批量删除提醒-style*/
  .delete-more-wrap{
    display: none;
  }
  .shadow-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  }
  .login-shadow {
    background: rgba(0,0,0,0.20) !important;
  }
  .delete-more-tip {
    width: 416px;
    height: 228px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.20);
    border-radius: 4px;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -114px;
    margin-left: -208px;
    padding: 40px;
  }
  .delete-more-tit {
    font-size: 14px;
    color: #666666;
    line-height: 21px;
    margin: 0 0 0 16px;
  }
  .delete-more-dec {
    text-align: left;
    height: 70px;
    margin: 10px 0 16px 40px;
    font-size: 12px;
    color: #666666;
    line-height: 21px;
  }
  .delete-more-btn {
    width: 65px !important;
    height: 32px !important;
    font-size: 14px !important;
    line-height: 21px !important;
  }

  /*删除-style-start*/
  .delete-wrap {
    position: relative;
    margin-left: -10px;
    margin-top: -212px;
    top: 80px;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-text {
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  .delete-btn-wrap {
    text-align: right;
    padding-right: 20px;
  }
  .delete-cancel,
  .delete-sure {
    width: 44px;
    height: 27px;
    outline: none;
    border-radius: 4px;
    font-size: 12px;
    line-height: 18px;
  }
  .delete-cancel {
    background: none;
    border: 1px solid #D9D9D9;
    color: #666666;
  }
  .delete-sure {
    background: #108EE9;
    border: none;
    color: #FFFFFF;
    margin-left: 4px;
  }
  /*删除-style-end*/
  .null-text {
    display: block;
    margin-top: 50px;
    font-size: 20px;
    color: #C5C3C3;
    letter-spacing: 0.32px;
  }
  .null-text>a:hover {
    text-decoration: none;
  }
  .charge-list {
    list-style: none;
  }
  .pad-left {
    padding-left: 25px !important;
  }
  .table>tbody>tr>td {
    padding: 67px 10px;
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
    font-size: 18px;
    color: #666666;
    margin: 25px 0;
  }
  .shopping-cart-tit small{
    font-size: 12px;
    color: #D0D0D0;
    display: inline-block;
  }
  .shopping-cart-list-head-item {
    font-size: 14px;
    color: #333333;
    height: 80px;
  }
  .shopping-cart-course-price {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
  }
  .do-btn {
    border: none;
    outline: none;
    background: none;
    font-size: 14px;
    color: #4A90E2;
    margin-right: 15px;
  }
  .shopping-cart-course-title {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
  }
  .select-option {
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
    font-size: 18px;
    color: #FFFFFF;
  }
  .shopping-cart-bot-font {
    font-size: 18px;
    color: #666666;
  }
</style>
