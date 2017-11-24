<template>
  <div>
    <!--活动banner-->
    <header class="activity-header">
      <div class="act-single-banner" v-link="{name:'single'}">
        <div class="single-banner-text">
          <span class="single-tit single-mic">老学员购买通道</span>
          <!--<span class="single-tit single-cor">专题课程全场5折</span>-->
          <!--<p class="single-dec">-->
          <!--双十一，公司没钱请策划人员，想不出更好的促销套路了，只能打折！就这样吧！-->
          <!--</p>-->
          <!--<span class="single-date">仅限11.05-11.12期间</span>-->
        </div>
      </div>
    </header>
    <main style="width: 1200px; margin: 0 auto;">
      <!--微学位课程-->
      <div style="width: 1200px; margin: 100px auto 0;">
        <h3 style="font-size: 72px; letter-spacing: 3px; line-height: 100px; color: #52443B; text-align: center;">LuffyX学位课程</h3>
        <div style="width: 1111px; height: 554px; margin: 68px auto 0; border: 1px solid #B79A83; display: flex;">
          <div style="margin: 81px 70px 0 48px;">
            <h3 style="font-size: 27px;color: #9C806B;letter-spacing: 1.5px;">LuffyX专业课程</h3>
            <p class="single-mic-dec">
              0基础6个月炼成Python开发工程师<br>
              1对1资深导师辅导<br>
              闯关式、多模块学习<br>
              知名网红讲师亲自授课<br>
              多个互联网企业实战开发项目供你挑战<br>
              毕业即发放LuffyX学位证书,享受保证推荐就业服务
            </p>
          </div>
          <div class="single-mic-panel">
            <div style="width: 100%; height: 191px;">
              <img src="../../assets/img/single-img6.png" width="100%" alt="">
            </div>
            <div style="padding: 33px 0 0 40px;">
              <h4 class="sig-mic-title">0基础6个月炼成Python开发工程师</h4>
              <p class="sig-mic-dec">LuffyX专业课程9折劵（仅限{{start_day}}-{{end_day}}期间）</p>
              <div style="display: flex; align-items: center; margin-top: 44px;">
                <button @click="drawMicro()" class="sig-mic-btn">点击领取优惠卷</button>
                <!--<span class="mic-purchase" v-link="{name:'micro-detail',params:{id:1}}">购买>>></span>-->
                <span class="mic-purchase" @click="buy_micro()">购买>>></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--课程列表-->
      <!--<div style="width: 100%; margin-top: 44px;">-->
      <!--<div style="text-align: center;">-->
      <!--<img src="../../assets/img/single-img1.png" width="289" height="274" alt="">-->
      <!--<span style="font-size: 30px;color: #97938A;letter-spacing: 1.25px; display: block;">加 ／ 入 ／ 路 ／ 飞 ／ 学 ／ 城</span>-->
      <!--</div>-->
      <!--<ul style="width:100%; margin-top: 74px;">-->
      <!--<li v-for="course in data" id="{{course.course_id}}" data-value="{{course.coupon_id}}" class="sig-course-item">-->
      <!--<div style="width: 504px;">-->
      <!--<img :src="course.img" alt="Course cover map">-->
      <!--</div>-->
      <!--<div class="sig-course-detail">-->
      <!--<img class="sig-sale" src="../../assets/img/sale.png" width="100" height="60" alt="">-->
      <!--<div class="sig-course-detail-content">-->
      <!--<h4 class="sig-course-tit">{{course.title}}</h4>-->
      <!--<span class="sig-course-price">原价<span class="price-num">{{course.price}}</span><span class="yuan">元</span></span>-->
      <!--<p class="sig-course-dec">{{course.description}}</p>-->
      <!--<div class="sig-course-btn-wrap">-->
      <!--<button @click="draw($index)" class="sig-course-btn">点击领取</button>-->
      <!--<span @click="purchase($index)" class="sig-purchase-btn">购买>>></span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</li>-->
      <!--</ul>-->
      <!--</div>-->
      <!--常见问题-->
      <div style="width: 100%; margin-top: 119px; text-align: center;">
        <h3 style="font-size: 24px; color: #4A4A4A; letter-spacing: 0.69px;">常见问题</h3>
        <em style="display: inline-block;width: 63px; border-top: 2px solid #FA6240; margin: 30px auto 70px;"></em>
        <div style="width: 100%; margin: 0 auto; text-align: left;">
          <ul style="width: 100%; padding-bottom: 114px;">
            <li class="sig-question-item">
              <h6 class="sig-question-tit">Q：优惠券是否能叠加使用？</h6>
              <p class="sig-question-answer">
                A：不能，每门课程的优惠券都只能使用一张。
              </p>
            </li>
            <li class="sig-question-item">
              <h6 class="sig-question-tit">Q：购买本次打折课程所享受的权益是否与全价课程一样？</h6>
              <p class="sig-question-answer">
                A：一样，本次打折课程所享受的权益一样。
              </p>
            </li>
            <li class="sig-question-item">
              <h6 class="sig-question-tit">Q：这些课程除了视频之外，还有什么服务？</h6>
              <p class="sig-question-answer">
                A：除了精心录制的视频之外，我们还免费提供了全部的课件、代码，以及每个课程都会有专门的交流群，学习中遇到问题可以与小伙伴们一起讨论，且每个群里都会有专门的导师进行答疑，不怕你不会，就怕你不学。
                另外，对于LuffyX学位课程，服务内容更多，具体请看课程详情页。
              </p>
            </li>
            <li class="sig-question-item">
              <h6 class="sig-question-tit">Q：还有一些其它问题。。。</h6>
              <p class="sig-question-answer">
                A：你怎么这么多问题，都这么便宜了，还想让人家怎样。好了，有问题在线小窗口问娜美同学吧。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </main>
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
        data:[
          {
            title: 'Python21天开发入门必备',
            course_id: 5,
            coupon_id: 12,
            img: 'http://luffycdn.oldboyedu.com/static/frontend/index/single-img2_1509440968.4558334.png',
            price: 9.9,
            description: '掌握进入数据分析、人工智能、云计算开发、金融量化、自动化运维领域的必备语言，此课程特别适合之前完全无任何开发经验的小白白学习！知名网红讲师亲自肉身上阵，课程内容幽默风趣不枯燥，深入浅出，包君满意。'
          },
          {
            title: '金融量化分析课程',
            course_id: 7,
            coupon_id: 13,
            img: 'http://luffycdn.oldboyedu.com/static/frontend/index/single-img3_1509440970.8611064.png',
            price: 399,
            description: '做个懂金融的程序员，学习金融量化知识，你就是下一个华尔街之狼！'
          },
          {
            title: 'Python常见算法入门精讲',
            course_id: 10,
            coupon_id: 14,
            img: 'http://luffycdn.oldboyedu.com/static/frontend/index/single-img4_1509440973.3562515.png',
            price: 99,
            description: '算法是计算机的灵魂所在，是计算机学科的巅峰艺术，不会算法，敢说自己是程序员？切'
          },
          {
            title: 'Linux系统运维基础',
            course_id: 12,
            coupon_id: 15,
            img: 'http://luffycdn.oldboyedu.com/static/frontend/index/single-img5_1509440976.1011124.png',
            price: 19.9,
            description: '世界上超过80%的网站都是运行在Linux系统上，所有的安卓手机都是基于Linux内核，你平日里用的微信、QQ、微博的服务器也都是跑在Linux系统上的，做IT不会Linux,怎敢出来混？'
          }
        ],
        micro_course_id: 1,
        micro_course: '',
        start_day:'',
        end_day:''
      }


    },
    created:function () {
      this.start_day=this.make_start_data(3)
      this.end_day=this.make_end_data(3)
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
        this.load_micro()
        /*this.load(Vue.http.options.root+'/api/v1/order/confirm/');*/
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
            }else if(response.data.error_no==2) {

              this.$store.state.login_state=false;
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      drawMicro: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/activity/coupon/?coupon_id=18')
          .then(function(response){
            switch (response.data.error_no) {
              case 0: {
                toastr.success(response.data.data.msg);
                $('.sig-mic-btn').addClass('mic-act').text('领取成功');
                break;
              }
              case 2: {
                this.$store.state.login_state=false;
                this.$store.state.login_ing=true;
                break;
              }
              case -1: {
                if(response.data.to_user){
                  toastr.info(response.data.error_msg);
                }else {
                  toastr.info('领取的人太多，服务器忙不过来了，请稍后重试~');
                }
              }
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      draw: function ($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/activity/coupon/?coupon_id='+this.data[$index].coupon_id)
          .then(function(response){
            switch (response.data.error_no) {
              case 0: {
                toastr.success(response.data.data.msg);
                $('.sig-course-btn:eq('+$index+')').addClass('act').text('领取成功');
                break;
              }
              case 2: {
                this.$store.state.login_state=false;
                this.$store.state.login_ing=true;
                break;
              }
              case -1: {
                if(response.data.to_user){
                  toastr.info(response.data.error_msg);
                }else {
                  toastr.info('领取的人太多，服务器忙不过来了，请稍后重试~');
                }
              }
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      purchase: function ($index) {
        switch ($index) {
          case 0: {
            this.$route.router.go({name:'python-course-detail',params:{id:5}});
            break;
          }
          case 1: {
            this.$route.router.go({name:'finance-course-detail',params:{id:7}});
            break;
          }
          case 2: {
            this.$route.router.go({name:'algorithm-course-detail',params:{id:10}});
            break;
          }
          case 3: {
            this.$route.router.go({name: 'linux-course-detail',params:{id:12}});
            break;
          }
        }

      },
      load_micro:function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.x_root+'/api/v1/degree_course/'+this.micro_course_id+'/').then(function(response){

          if(response.data.error_no==0){
            this.micro_course=response.data.data;
//            this.micro_course_tutor=response.data.data.mentor_info.data;
//            this.micro_course_teacher=response.data.data.teacher_info.data;
//            this.micro_course_question=response.data.data.often_question_info.data;

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }
        })
          .catch(function(response) {
            console.log('微学位课程详情接口请求失败')
          })
      },
      buy_micro:function () {
        var purchase_course=[];
        var buy_item={
          'courseId':this.micro_course_id,                 //int      课程ID
          'validPeriodId': this.micro_course.valid_period_id,              //int      有效期ID
          'price': this.micro_course.price,                  //int      课程对应价格
          'courseUrl': this.micro_course.course_img              //string   课程描述图
        };
        purchase_course.push(buy_item);

        Cookies.set('courseId',this.micro_course_id);
        Cookies.set('validPeriodId',this.micro_course.valid_period_id);

        Cookies.set('purchase_course',JSON.stringify(purchase_course));
        Cookies.set('purchase_course_price_sum',this.micro_course.price);
        Cookies.set('isDegreeCourse',this.micro_course_id);
        Cookies.set('source','shop_course');
        if (this.$store.state.login_state){
          this.$route.router.go({name: 'purchase-course'});
        }
        else {
          toastr.info('Hey~,您还没有登录哦');
          this.$store.state.login_ing=true;
        }
      },
      make_start_data:function (AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()-AddDayCount);//获取ount天后的日期
//        var y = dd.getFullYear();
        var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
        var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
        return m+"."+d;
      },
      make_end_data:function (AddDayCount) {
        var dd = new Date();
        dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
//        var y = dd.getFullYear();
        var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
        var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
        return m+"."+d;
      }

    }



  }
</script>
<style>
  .mic-purchase {
    display: block;
    margin-left: auto;
    margin-right: 57px;
    font-size: 16px;
    color: #E42B2E;
    letter-spacing: 0.66px;
    cursor: pointer;
  }
  .sig-question-item {
    width: 100%;
    margin-top: 32px;
    list-style: none;
    padding-bottom: 40px;
    box-shadow: 0 1px 0 0 #F4F4F4;
  }
  .sig-question-tit {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.14px;
  }
  .sig-question-answer {
    font-size: 14px;
    color: #9B9B9B;
    margin-top: 18px;
    letter-spacing: 0.1px;
  }
  .sig-course-detail-content {
    padding: 0 52px 40px;
    height: 282px;
    margin-top: -16px;
    display: flex;
    flex-direction: column;
  }
  .sig-sale {
    margin-left: auto;
    margin-right: 10px;
  }
  .sig-course-btn-wrap {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  .sig-course-detail {
    display: flex;
    flex-direction: column;
  }
  .sig-purchase-btn {
    font-size: 16px;
    color: #F26E13;
    letter-spacing: 0.66px;
    display: block;
    margin-left: auto;
    cursor: pointer;
  }
  .sig-course-btn {
    width: 160px;
    height: 48px;
    border: 1px solid #FA6240;
    background: #fff;
    outline: none;
    border-radius: 100px;
    font-size: 18px;
    color: #FA6240;
    letter-spacing: 0.74px;
  }
  .sig-course-btn.act {
    background: #FAFAFA;
    border: 1px solid #E8E8E8;
    border-radius: 100px;
    color: #9B9B9B;
  }
  .sig-course-item {
    background: #FFFFFF;
    box-shadow: 0 4px 10px 2px #DFE0E2;
    list-style: none;
    width: 100%;
    height: 331px;
    display: flex;
    margin-bottom: 70px;
  }
  .sig-course-dec {
    margin-top: 11px;
    font-size: 16px;
    color: #9B9B9B;
    width: 594px;
    letter-spacing: 0.66px;
  }
  .sig-course-price .yuan {
    color: #4A4A4A;
  }
  .sig-course-price .price-num {
    font-size: 36px;
    color: #FA6240;
    letter-spacing: 1.49px;
  }
  .sig-course-price {
    display: block;
    font-size: 18px;
    color: #9B9B9B;
    letter-spacing: 0.74px;
  }
  .sig-course-tit {
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0.99px;
  }
  .sig-mic-btn {
    width: 174px;
    height: 46px;
    background: #fff;
    outline: none;
    line-height: 46px;
    border: 1px solid #DD7945;
    border-radius: 4px;
    font-size: 18px;
    color: #DD7945;
    letter-spacing: 0.74px;
  }
  .sig-mic-btn.mic-act {
    background: #FAFAFA;
    border: 1px solid #E8E8E8;
    color: #9B9B9B;
  }
  .sig-mic-dec {
    margin-top: 13px;
    font-size: 16px;
    color: #DD7945;
    letter-spacing: 0.66px;
  }
  .sig-mic-title {
    font-size: 21px;
    color: #DD7945;
    letter-spacing: 0.87px;
  }
  .single-mic-panel {
    margin: 52px 0 0 0;
    width: 439px;
    height: 448px;
    overflow: hidden;
    box-shadow: 0 10px 20px 10px #E6E7E8;
    border-radius: 14px;
  }
  .single-mic-dec {
    margin-top: 39px;
    width: 496px;
    height: auto;
    font-size: 24px;
    color: #392c28;
    letter-spacing: 1.16px;
    line-height: 50px;
  }
  .activity-header {
    width: 100%;
  }
  .act-single-banner {
    background: url("../../assets/img/active_banner.png") no-repeat 0 0;
    background-size: 100% auto;
    width: 100%;
    height: 611px;
    cursor: pointer;
  }
  .single-tit {
    font-family: PingFangSC-Light;
    position: relative;
    top: 50px;
    font-size: 7.2rem;
    color: #FFFFFF;
    letter-spacing: 2.99px;
    display: block;
    text-align: center;
  }
  .single-banner-text {
    width:1176px;
    margin:0 auto;
    padding-top: 120px;
  }
  .single-mic {

  }
  .single-cor {

  }
  .single-dec {
    margin-top: 28px;
    width: 594px;
    font-size: 22px;
    color: #FFFFFF;
    letter-spacing: 0.99px;
    line-height: 49px;
  }
  .single-date {
    display: block;
    margin-top: 43px;
    font-size: 28px;
    color: #FFFFFF;
    letter-spacing: 1.33px;
  }
  @media screen and (min-width: 1800px) {
    .single-date {
      font-size: 32px;
      margin-top: 53px;
    }
    .single-dec {
      font-size: 24px;
      margin-top: 38px;
    }
    .single-tit {
      font-size: 72px;
    }
    .single-banner-text {
      padding-top: 240px;
    }
    .act-single-banner {
      height: 982px;
    }
  }
</style>
