<template>
  <div class="course-main">
    <h4 class="item-title">课程概述</h4>
    <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px auto 50px;"></em>
    <p class="cou-dec">
      {{course_brief.brief}}
    </p>
    <div style="width: 560px; margin: 0 auto; display: flex; justify-content: space-between">
      <span class="cou-ceil">学习时间：<span>{{course_brief.studyalltime}}</span></span>
      <span class="cou-ceil">难度：<span>{{course_brief.level}}</span></span>
      <span class="cou-ceil">已学习人数：<span>{{course_brief.learnnumber}}</span>人</span>
    </div>
    <div style="width: 100%; height: auto;">
      <ul style="width: 1100px; height: auto; margin: 70px auto 90px; padding: 0; display: flex; flex-wrap: wrap; justify-content: space-around;">
        <li :class="['price-wrap',{'price-wrap-active':select_course==index}]" v-for="(index,item) in course_brief.prices" @click="select($index)" id="{{item.id}}">
          <span :class="['price',{'price-active':select_course==index}]">&yen;&nbsp;{{item.price}}</span>
          <span :class="['limit',{'limit-active':select_course==index}]" id="{{item.valid_period}}">有效期{{item.valid_period_name}}</span><!--background: #7ED321;-->
        </li>
      </ul>
    </div>
    <div v-show="!course_brief.is_online" style="display: flex; justify-content: center; margin-bottom: 66px; margin-top: 66px;">
      <button  @click="online_remind" class="charge-btn-fir charge-btn-active" style="margin-right: 48px;">开课时通知我</button>
    </div>
    <div v-show="course_brief.is_online" style="display: flex; justify-content: center; align-items: center; margin-bottom: 92px;">
      <button @click="buy()" class="charge-btn charge-btn-active" style="margin-right: 48px;" >购买</button>
      <button @click="join_cart()" class="charge-btn">加入购物车</button>
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
  <div class="course-main" style="background: #FAFBFC;">
    <div style="width: 1239px; margin: 0 auto; text-align: left;">
      <h4 class="item-title">为什么学习这门课程？</h4>
      <div style=" display: flex;">
        <div style="width: 505px;">
          <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px 0;"></em>
          <p v-html="course_brief.why_study" class="why-study-dec">
            <!-- {{course_brief.why_study}} -->
          </p>
        </div>
        <ul style="width: 603px; margin-left: 131px; display: flex; margin-top: 15px; margin-bottom: 135px; flex-wrap: wrap;">
          <li style="height: 114px; margin-bottom: 70px; margin-right: 49px;">
            <div style="width: 50px; height: 50px; display: flex; align-items: center;">
              <img src="../../../assets/img/why-study-icon0.png" width="50" height="50" alt="">
            </div>
            <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px;">
              知名网红讲师精心打造的课程内容
            </p>
          </li>
          <li style="height: 114px; margin-bottom: 70px;">
            <div style="width: 50px; height: 50px; display: flex; align-items: center;">
              <img src="../../../assets/img/why-study-icon1.png" width="50" height="47" alt="">
            </div>
            <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px;">
              全部课件、笔记、案例下载
            </p>
          </li>
          <li style="height: 114px; margin-bottom: 70px; margin-right: 49px;">
            <div style="width: 50px; height: 50px; display: flex; align-items: center;">
              <img src="../../../assets/img/why-study-icon2.png" width="50" height="50" alt="">
            </div>
            <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px;">
              加入学习群，和众多小伙伴一起学习
            </p>
          </li>
          <li style="height: 114px; margin-bottom: 70px;">
            <div style="width: 50px; height: 50px; display: flex; align-items: center;">
              <img src="../../../assets/img/why-study-icon3.png" width="50" height="36" alt="">
            </div>
            <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px;">
              群导师答疑，减少自学走弯路时间
            </p>
          </li>
          <li style="height: 114px; margin-bottom: 70px;">
            <div style="width: 50px; height: 50px; display: flex; align-items: center;">
              <img src="../../../assets/img/why-study-icon4.png" width="50" alt="">
            </div>
            <p style="width: 277px; margin-top: 23px; font-family: PingFangSC-Light;font-size: 15px;color: #5E5E5E;letter-spacing: 1.2px;">
              Alex老师精心熬制的心灵洗脑鸡汤，帮你拨云见日看清人生路
            </p>
          </li>

        </ul>
      </div>
    </div>
  </div>
  <div class="course-main" style="background: #F7F7F7;">
    <div style="width: 1239px; margin: 0 auto; text-align: left;">
      <h4 class="item-title">我将学到哪些内容？</h4>
      <p class="study-cont-dec">
        {{course_brief.what_to_study_brief}}
      </p>
      <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px 0 47px;"></em>
      <div style="display: flex; flex-wrap: wrap; padding-bottom: 60px;">
        <div class="course-list-panel" v-for="(index,item) in course_brief.courseoutline">
          <div style="width: 100%; height: 34px; display: flex; align-items: center; padding-left: 30px; margin: 23px 0; border-left: 2px solid #78C63F;">
            <span class="project-icon">PROJECT {{index+1}}</span>
          </div>
          <div style="width: 319px; margin: 0 auto;">

            <h5 class="project-tit" style="margin: 23px 0 20px;">{{item.outline_tittle}}</h5>
            <pre class="sec-project-req" style="height: 312px; overflow: hidden;" v-html="item.outline_content"></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="course-main" style="padding-bottom: 100px;">
    <div style="width: 1239px; margin: 0 auto; text-align: left;">
      <div style=" display: flex;">
        <div style="width: 505px;">
          <h5 class="how-help-tit">此项目如何有助于我的职业生涯？</h5>
          <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px 0;"></em>
          <p class="how-help-job">
            {{course_brief.career_improvement}}
          </p>
        </div>
        <ul style="width: 603px; margin-left: 131px; margin-bottom: 135px;">
          <li>
            <h5 class="how-help-need">课程先修要求</h5>
            <p class="how-help-need-dec">
              {{course_brief.prerequisite}}
            </p>
          </li>
          <li>
            <h5 class="how-help-need">推荐课程</h5>
            <span style="font-size: 16px; color: #9B9B9B; display: inline-block; margin-top: 12px; height: 44px;">若你缺乏相关经验，建议学习以下课程</span>
            <ul>
              <li v-for="item in course_brief.recommend_coursesinfo" style="height: 36px; display: flex; align-items: center;">
                <i style="display: inline-block; background: #78C63F;width:7px; height:7px; border-radius: 7px;"></i>
                <a class="how-help-need-spec" @click="course_link(item.courseid)" id="{{item.courseid}}"  >{{item.coursename}}</a>
              </li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="course-main" style="background: #FAFAFA;">
    <div style="width: 1239px; margin: 0 auto; text-align: left;">
      <div>
        <h4 class="how-help-tit course-teacher-brief" style="margin-bottom: 20px;">课程讲师简介</h4>
        <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px 0 43px;"></em>
      </div>
      <ul class="teacher-brief-wrap">
        <li v-for="item in course_brief.teachersinfo" id="{{item.teacherid}}" class="teacher-brief-list">
          <div class="teacher-image">
            <img :src="item.image" width="200" height="200" alt="">
          </div>
          <div class="teacher-info">
            <span class="teacher-name">{{item.teachername}}</span>
            <span class="teacher-name teacher-position">{{item.title}}</span>
            <p class="teacher-signal">{{item.signature}}</p>
            <p class="teacher-brief-detail">
              {{item.teacherbrief}}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="course-main">
    <div style="width: 1200px; margin: 0 auto; text-align: left;">
      <h4 class="how-help-tit">常见问题</h4>
      <em style="width: 63px; border-top: 2px solid #7ED321;  margin: 30px 0 5px;"></em>
      <ul style="width: 100%; padding-bottom: 130px;">
        <li v-for="item in course_brief.OftenAskedQuestion" style="width: 100%; margin-top: 32px; padding-bottom: 50px; box-shadow: 0 1px 0 0 #F4F4F4;">
          <h6 class="question-tit">Q:{{item.question_tittle}}</h6>
          <p class="question-answer">
            A: {{item.question_answer}}
          </p>
        </li>
      </ul>
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
//      console.log('1222',this.$store.state.course_1)
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
//          $('.warn-text').text('请选择您要购买的课程套餐');
          toastr.info('您还没选择要购买的套餐哦');
//          $(".pur-warn-wrap").delay(10).fadeIn(400).delay(3000).fadeOut(400);
        }else {
          Cookies.set('isDegreeCourse','');
          Cookies.set('source','shop_course');
          this.$route.router.go({name: 'purchase-course'});
        }
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
                  toastr.success('购物车添加成功');
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
      },
      course_link:function (course_id) {
        this.$route.router.go(this.$store.state.course_link[course_id]);
      },
      online_remind:function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url=Vue.http.options.root+'/api/v1/course/online_remind/?course_id='+this.course_id
        this.$http.get(url).then(function(response){
          if(response.data.error_no==0){
            toastr.success('订阅开课提醒成功');

          }else if(response.data.error_no==2){

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

    }



  }
</script>
<style scoped>
  .course-teacher-brief {
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0.69px;
  }
  .teacher-brief-wrap {
    width: 1140px;
    margin: 0 auto;
    padding-bottom: 18px;
  }
  .teacher-brief-list {
    width: 100%;
    height: 426px;
    margin-bottom: 71px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 #E9E9E9;
    border-radius: 13px;
  }
  .teacher-image{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    margin-left: 90px;
    margin-top: 72px;
  }
  .teacher-info {
    margin-left: 90px;
    margin-top: 72px;
    width: 682px;
  }
  .teacher-name {
    font-size: 30px;
    color: #333333;
    letter-spacing: 3.03px;
  }
  .teacher-position {
    display: inline-block;
    margin-left: 35px;
  }
  .teacher-signal {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.82px;
    margin-top: 17px;
  }
  .teacher-brief-detail {
    font-size: 20px;
    color: #333333;
    letter-spacing: 2.02px;
    margin-top: 37px;
    text-align: justify;
  }
  .course-list-panel {
    width: 379px;
    height: 466px;
    margin-right: 28px;
    background: #FFFFFF;
    margin-bottom: 60px;
    box-shadow: 0 4px 9px 0 #E9E9E9;
  }
  .course-list-panel:nth-child(3n){
    margin-right: 0;
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
  .sub-text,
  .warn-text {
    display: inline-block;
    padding: 0 10px;
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  /*交互提示style-end*/

  .sel-tr-wrap {
    width: 200px;
    height: 200px;
    border: 1px solid #F5F5F5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sel-tr {
    width: 142px;
    height: 142px;
    background: #7ED321;
    border-radius: 75px;
    box-shadow: 0 6px 20px 8px #E2E2E2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .course-main {
    padding-top: 100px;
    text-align: center;
  }
  .item-title {
    padding: 20px 0;
    font-size: 36px;
    color: #555555;
    letter-spacing: 2.9px;
    margin: 0 !important;
  }
  .cou-dec {
    width: 894px;
    margin: 0 auto 40px;
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 1.12px;
    line-height: 28px;
  }
  .cou-ceil {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 1.12px;
  }
  .price-num {
    width: 143px;
    height: 294px;
    font-size: 210px;
    color: #F7F7F7;
    letter-spacing: 16.88px;
  }
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
  .btn-back-bkg {
    background: #E8E8E8 url("../../../assets/img/shoping.png") no-repeat 125px 15px !important;
  }
  .charge-btn {
    width: 181px;
    height: 51px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.12px;
    text-align: center;
    background: #F5A623;
    border-radius: 82px;
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
  .why-study-dec {
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 0.4px;
    line-height: 36px;
  }
  .study-cont-dec {
    width: 1193px;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.44px;
    line-height: 39px;
    margin-bottom: 20px;
  }
  .project-icon {
    display: block;
    margin: 30px 0;
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 1.98px;
  }
  .project-tit {
    font-size: 18px;
    color: #333333;
    margin: 0;
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
  .how-help-tit {
    font-size: 30px;
    color: #5E5E5E;
    letter-spacing: 0.87px;
    margin: 0;
  }
  .how-help-job {
    font-size: 16px;
    color: #333333;
    letter-spacing: 1.28px;
    line-height: 28px;
    margin-top: 20px;
  }
  .how-help-need {
    font-size: 30px;
    height:45px;
    color: #111111;
    margin: 0;
  }
  .how-help-need-dec {
    width: 534px;
    font-size: 16px;
    color: #555555;
    line-height: 36px;
    margin: 12px 0 37px;
  }
  .how-help-need-spec {
    display: inline-block;
    margin-left: 20px;
    font-size: 16px;
    color: #7ED321;
    line-height: 36px;
    text-decoration: none;
  }
  .introduce-dec {
    width: 468px;
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 1.12px;
  }
  .course-detail-tutor-dec {
    font-size: 20px;
    color: #9B9B9B;
    letter-spacing: 0.58px;
  }
  .course-detail-tutor-dec>strong {
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #5E5E5E;
    letter-spacing: 0.69px;
  }
  .question-tit {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.14px;
  }
  .question-answer {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.1px;
    margin-top: 18px;
  }
</style>
