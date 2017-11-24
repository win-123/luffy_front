<template>
  <div style="width: 100%;">
    <div style="width: 100%; padding-top: 90px; padding-bottom: 82px;">
      <div style="width: 1200px; margin: 0 auto; display: flex;">
        <div style="width: 500px; text-align: left;">
          <h3 class="computer-why-tit pad">课程概述</h3>
          <em style="width: 63px; border-top: 2px solid #78C63F; margin: 20px 0 38px;"></em>
          <p style="width: 100%; height: 196px;font-size: 14px;color: #4A4A4A;letter-spacing: 1.83px;line-height: 30px;">
            {{course_brief.brief}}
          </p>
        </div>
        <div style="margin-left: 130px; ">
          <img src="../../../assets/img/web-introduce.png" width="563" height="376" alt="">
        </div>
      </div>
    </div>
    <div style="width: 100%; background: #FAFAFA; padding-bottom: 90px;">
      <div style="width: 1200px; margin: 0 auto; text-align: center;">
        <span class="pur-tip">可以根据不同的学习情况购买不一样的学习套餐哦！</span>
        <div style="margin-top: 66px;">
          <ul style="width: 1100px; height: auto; margin: 70px auto; padding: 0; display: flex; flex-wrap: wrap; justify-content: space-around;">
            <li :class="['price-wrap',{'price-wrap-active':select_course==index}]" v-for="(index,item) in course_brief.prices" @click="select($index)" id="{{item.id}}">
              <span :class="['price',{'price-active':select_course==index}]">&yen;&nbsp;{{item.price}}</span>
              <span :class="['limit',{'limit-active':select_course==index}]" id="{{item.valid_period}}">有效期{{item.valid_period_name}}</span><!--background: #7ED321;-->
            </li>
          </ul>
          <div v-show="!course_brief.is_online" style="display: flex; justify-content: center; margin-top: 66px;">
            <button @click="online_remind" class="charge-btn-fir charge-btn-active" style="margin-right: 48px;">开课时通知我</button>
          </div>
          <div v-show="course_brief.is_online" style="display: flex; justify-content: center; margin-top: 66px;">
            <button @click="buy()" class="charge-btn-fir charge-btn-active" style="margin-right: 48px;">购买</button>
            <button @click="join_cart()" class="charge-btn-fir btn-back-bkg-fir"><span style="padding-right: 26px;">加入购物车</span></button>
            <div class="pur-tip-wrap">
              <div class="sub-tip">
                <img style="margin-left: 17px;" src="../../../assets/img/select-icon.png" width="14" height="14" alt="">
                <span class="sub-text"></span>
              </div>
            </div>
            <div class="pur-warn-wrap">
              <div class="sub-tip">
                <img style="margin-left: 17px;" src="../../../assets/img/warn-icon.png" width="14" height="14" alt="">
                <span class="warn-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; padding-top: 120px;">
      <div style="width: 1200px; margin: 0 auto; display: flex;">
        <div style="margin-top: 49px;">
          <img src="../../../assets/img/web-why-left.png" width="490" height="329" alt="">
        </div>
        <div style="width: 496px; margin-top: 28px; margin-left: 175px; text-align: left;">
          <h3 class="computer-why-tit pad">为什么学习这门课程</h3>
          <em style="width: 46px; border-top: 2px solid #52CEB0; margin: 34px 0 47px;"></em>
          <p style="width: 100%; height:312px;font-size: 14px;color: #4A4A4A;letter-spacing: 1.83px;line-height: 30px;">
            {{course_brief.why_study}}
          </p>
        </div>
      </div>
      <div style="width: 1200px; margin: 159px auto 0; display: flex; padding-bottom: 133px;">
        <div style="width: 464px; margin-top: 34px;text-align: left;">
          <h3 class="computer-why-tit pad">你将获得的服务</h3>
          <em style="width: 46px; border-top: 2px solid #84CC39; margin: 34px 0 47px;"></em>
          <p style="width: 100%; height: 150px;font-size: 14px;color: #4A4A4A;letter-spacing: 1.83px;line-height: 30px;">
            知名网红讲师根据企业真实需求精心打造的课程内容<br>
            全部课件、笔记、案例下载<br>
            加入学习群，和众多小伙伴一起学习<br>
            群导师答疑，减少自学走弯路时间<br>
            Alex老师精心熬制的心灵洗脑鸡汤，帮你拨云见日看清人生路
          </p>
        </div>
        <div style="margin-left: 170px;">
          <img src="../../../assets/img/web-why-right.png" width="488" height="324" alt="">
        </div>
      </div>
    </div>
    <div class="" style="background: #F7F7F7; width: 100%; ">
      <div style="width: 1281px; margin: 0 auto; text-align: left;">
        <h4 class="sec-item-title web-item-title" style="text-align:center;">我将学到哪些内容？</h4>
        <p class="sec-study-cont-dec" style="font-size: 14px; color: #4A4A4A; letter-spacing: 1.12px;">
          {{course_brief.what_to_study_brief}}
        </p>
        <em style="width: 63px; border-top: 2px solid #78C63F;  margin: 30px 0 47px;"></em>
        <div style="display: flex; flex-wrap: wrap; padding-bottom: 60px;">
          <div v-for="(index,item) in course_brief.courseoutline" style="width: 379px; text-align: left; height: 466px; margin-right: 48px; background: #FFFFFF; margin-bottom: 60px; box-shadow: 0 4px 9px 0 #E9E9E9;">
            <span class="sec-project-icon">PROJECT {{index+1}}</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit">{{item.outline_tittle}}</h5>
              <pre class="sec-project-req" style="height: 312px; overflow: hidden;" v-html="item.outline_content"></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom: 100px; width: 1200px; text-align: left; margin: 0 auto;">
      <h5 class="sec-how-help-tit">此项目如何有助于我的职业生涯？</h5>
      <em style="width: 63px; border-top: 2px solid #78C63F; margin: 30px 0 43px;"></em>
      <div style="display: flex;">
        <p style="width: 490px; height: 112px;font-size: 16px;color: #333333;letter-spacing: 1.28px;line-height: 28px;">
          {{course_brief.career_improvement}}
        </p>
        <div style="width: 436px; margin-left: 240px;">
          <h5 style="font-size: 24px; color: #333333;">课程先修要求</h5>
          <p class="sec-how-help-need-dec">
            {{course_brief.prerequisite}}
          </p>
        </div>
      </div>
    </div>
    <div style="width: 100%; background: #FAFAFA; padding-top: 120px; padding-bottom: 120px;">
      <h4 style="width:100%;font-size: 24px; color: #4A4A4A;text-align:center;margin: 20px 0;">课程讲师简介</h4>
      <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px auto 60px;"></em>
      <ul class="item_teacher">
        <li v-for="item in course_brief.teachersinfo" id="{{item.teacherid}}" style="width: 316px; border-top: 4px solid #4A4A4A; height: 408px;text-align: center; background: #FFFFFF;box-shadow: 0 4px 8px 0 #E8E8E8;border-radius: 4px;">
          <div style="width: 100px; height: 100px; border-radius: 100px; margin: -18px auto 0;">
            <img :src="item.image" width="100" height="100" alt="">
          </div>
          <span style="display: block; margin-top: 20px; font-size: 18px;color: #4A4A4A;letter-spacing: 0.52px;">{{item.teachername}}</span>
          <span style="font-size: 13px;color: #9D9D9D;letter-spacing: 0.37px; display: block; margin-top: 5px;">{{item.title}}</span>
          <p style="width: 236px; text-align: left; margin: 22px auto 0;font-size: 12px;
color: #4A4A4A;
letter-spacing: 0.55px;
line-height: 22px;">
            {{item.teacherbrief}}
          </p>
        </li>
      </ul>
    </div>
    <div class="sec-common-question">
      <h4 class="sec-common-question-tit">常见问题</h4>
      <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px auto 68px;"></em>
      <div style="width: 1239px; margin: 0 auto; text-align: left;">
        <ul style="width: 100%; padding-bottom: 130px;">
          <li v-for="item in course_brief.OftenAskedQuestion" style="width: 100%; margin-top: 32px; padding-bottom: 50px; box-shadow: 0 1px 0 0 #F4F4F4;">
            <h6 class="sec-question-tit">Q:{{item.question_tittle}}</h6>
            <p class="sec-question-answer">
              A: {{item.question_answer}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import courseScroll from 'src/components/common/course-scroll.vue'

  export default {
    data() {
      return {
        select_course: -1,
        course_brief: '',
        select_true: false,
        course_id:'',
        data: {

        }
      }
    },
    ready: function(){
      this.course_id=this.$route.params.id;
      this.load(Vue.http.options.root+'/api/v1/coursedetail/?courseid='+this.course_id);
    },
    components: {
      courseScroll
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response){
          if(response.data.error_no==0){

            this.course_brief=response.data.data;

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('课程概述请求接口请求失败')
          })
      },
      select: function($index) {
        if(this.select_course===$index) {
          this.select_course=-1;
          this.select_true=false;
        }else{
          this.select_course=$index;
          this.select_true=true;


          var purchase_course=[];
          var buy_item={
            'courseId': this.course_id,                 //int      课程ID
            'validPeriodId': this.course_brief.prices[$index].valid_period,              //int      有效期ID
            'price': this.course_brief.prices[$index].price,                  //int      课程对应价格
            'courseUrl': ''               //string   课程描述图
          };
          purchase_course.push(buy_item);

          Cookies.set('courseId',this.course_id);
          Cookies.set('validPeriodId',this.course_brief.prices[$index].valid_period);

          Cookies.set('purchase_course',JSON.stringify(purchase_course));
          Cookies.set('purchase_course_price_sum',this.course_brief.prices[$index].price);
        }
      },
      buy: function () {
        if(!this.select_true) {
          toastr.info('您还没选择要购买的套餐哦');

//          $('.warn-text').text('请选择您要购买的课程套餐');
//          $(".pur-warn-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);
        }else {
          Cookies.set('isDegreeCourse','');
          Cookies.set('source','shop_course');
          this.$route.router.go({name: 'purchase-course'});
        }
      },
      online_remind:function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url=Vue.http.options.root+'/api/v1/course/online_remind/?course_id='+this.course_id
        this.$http.get(url).then(function(response){
          if(response.data.error_no==0){
            toastr.success('订阅开课提醒成功');

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            toastr.info(response.data.data);

            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('课程概述请求接口请求失败')
          })


      },

      join_cart: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if(this.select_true) {

          this.params={
            courseId: Cookies.get('courseId'),                   //课程ID       yes    int
            validPeriodId: Cookies.get('validPeriodId')         //课程期限ID    yes    int
          };

          this.$http.post(Vue.http.options.root+'/api/v1/user/shopping_cart/create/',JSON.stringify(this.params))
            .then(function(response){
              switch (response.data.error_no){
                case 0: {
                  toastr.success('购物车添加成功')

//                  $('.sub-text').text('这是一条成功消息，会主动消失。');
//                  $(".pur-tip-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);
                  this.$store.state.shopCartNumber+=1;
                  break;
                }
                case 10: {
                  toastr.success('购物车中套餐更新成功！')

//                  $('.warn-text').text(response.data.msg);
//                  $(".pur-warn-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);
                  break;
                }
                case 2: {
                  toastr.info('Hey~,您还没有登陆哦')

                  this.$store.state.login_state=false;
//                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing=true;
                  break;
                }
                default: {
                  console.log('添加购物车接口返回失败');
                  break;
                }
              }
            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })

        }else {
          toastr.info('您没有选择要加入的套餐哦');

//          $('.warn-text').text('请选择您想购买的课程套餐');
//          $(".pur-warn-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);
        }
      }
    }



  }
</script>
<style scoped>
  .how-help-need-spec {
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    color: #7ED321;
    line-height: 36px;
    text-decoration: none;
  }
  /*交互提示style-start*/
  .pur-tip-wrap,
  .pur-warn-wrap {
    min-width: 236px;
    height: 34px;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,.2);
    border-radius: 4px;
    position:absolute;
    left: 50%;
    margin-top: -41px;
    margin-left: 265px;
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
  .price-wrap {
    list-style: none;
    width: 220px;
    height: 112px;
    border: 1px solid #979797;
    cursor: pointer;
    margin-right: 60px;
    margin-bottom: 60px;
  }
  .price-wrap:nth-child(4n) {
    margin-right: 0;
  }
  .price-wrap-active {
    background: #7ED321;
    border: 1px solid #7ED321;
  }
  .price {
    font-size: 24px;
    letter-spacing: 1.92px;
    display: block;
    color: #333333;
    margin-top: 17px;
  }
  .limit {
    display: block;
    color: #9B9B9B;
    font-size: 20px;
    letter-spacing: 1.6px;
    margin-top: 9px;
  }
  .price-active,
  .limit-active {
    color: #FFF;
  }
  .sec-line {
    display: block;
    width: 247px;
    border-top: 1px solid #D0D0D0;
  }
  .sec-line-spec {
    border-top: 1px dashed #D0D0D0;
  }
  .sec-price {
    font-size: 16px;
    color: #333333;
    letter-spacing: 2.09px;
    margin-top: 32px;
    display: block;
  }
  .sec-limit-date {
    font-size: 14px;
    color: #9D9D9D;
    letter-spacing: 1.83px;
    display: block;
    margin-top: 21px;
  }
  .select-course-circle {
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #979797;
  }
  .select-course-circle-active {
    background: #7ED321;
    border: 1px solid #7ED321;
  }
  .charge-btn-fir {
    width: 181px;
    height: 51px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.12px;
    text-align: center;
    background: #F5A623;
    border-radius: 82px;
  }
  .charge-btn-active {
    background: #7ED321;
    box-shadow: 0 2px 4px 0 #E8E8E8;
    color: #FFFFFF;
  }
  .btn-back-bkg-fir {
    background: #F5A623 url("../../../assets/img/white-shop-cart.png") no-repeat 125px 15px !important;
  }
  .sec-item-tit {
    font-size: 24px;
    color: #555555;
    letter-spacing: 1.93px;
  }
  .sec-cont-left {
    width: 531px;
  }
  .sec-cont-right {
    width: 527px;
    text-align: left;
  }
  .sec-cont-dec {
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 1.83px;
    line-height: 30px;
  }
  .course-sec-service-tit {
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 1.89px;
  }
  .sec-service-num {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #fff;
    font-size: 20px;
    color: #FFFFFF;
    letter-spacing: 1.58px;
  }
  .sec-service-tit {
    font-size: 13px;
    color: #FFFFFF;
    letter-spacing: 1.02px;
    margin-left: 17px;
    display: inline-block;
  }
  .sec-service-dec {
    font-size: 12px;
    color: #9D9D9D;
    letter-spacing: 0.94px;
    margin-top: 20px;
  }
  .sec-item-title {
    font-size: 36px;
    color: #4A4A4A;
    letter-spacing: 2.89px;
    padding-top: 158px;
  }
  .web-item-title {
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 1.92px;
    padding-top: 143px;
  }
  .sec-study-cont-dec {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.44px;
    line-height: 39px;
    margin: 20px 0;
    text-align: center;
  }
  .sec-project-icon {
    display: block;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 1.98px;
    border-left: 2px solid #78C63F;
    margin: 23px 0 0;
    padding-left: 29px;
  }
  .sec-project-tit {
    margin: 23px 0 20px;
    font-size: 18px;
    color: #333333;
  }
  .sec-project-req {
    font-size: 14px;
    color: #5E5E5E;
    line-height: 26px;
    display: block;
    padding: 0;
    margin: 0 0 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: none;
    border: none;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 12;
    overflow: hidden;
  }
  .sec-how-help-tit {
    font-size: 30px;
    color: #4A4A4A;
    letter-spacing: 0.87px;
    margin: 0;
    padding-top: 115px;
  }
  .sec-how-help-job {
    width: 799px;
    font-size: 16px;
    color: #333333;
    letter-spacing: 1.28px;
    line-height: 28px;
    margin: 0 auto;
  }
  .sec-how-help-need {
    font-size: 30px;
    line-height: 42px;
    color: #333333;
  }
  .sec-how-help-need-dec {
    font-size: 16px;
    color: #555555;
    line-height: 36px;
    margin-top: 12px;
  }
  .sec-common-question-tit {
    font-size: 30px;
    color: #5E5E5E;
    letter-spacing: 0.87px;
    margin: 0;
    padding-top: 115px;
  }
  .sec-question-tit {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.14px;
  }
  .sec-question-answer {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.1px;
    margin-top: 18px;
    margin-bottom: 0;
  }
  .sec-course-detail-tutor-dec {
    font-size: 20px;
    color: #9B9B9B;
    letter-spacing: 0.58px;
    text-align: left;
  }
  .sec-course-detail-tutor-dec>strong {
    font-size: 24px;
    color: #5E5E5E;
    letter-spacing: 0.69px;
  }
  .has-list-style {
    font-size: 16px;
    color: #78C63F;
    line-height: 36px;
    padding-left: 13px;
  }
  li {
    list-style: none;
  }
  .pur-tip {
    font-size: 12px;
    color: #9B9B9B;
    letter-spacing: 1.57px;
    display: inline-block;
    margin-top: 102px;
  }
  .pad {
    padding: 20px 0;
  }
  .item_teacher {
    width: 1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    padding:0 265px;
  }
</style>
