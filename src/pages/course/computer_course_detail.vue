<template>
  <main class="wrap">
    <div class="course-computer-banner" style="display: flex;">
      <div style=" width: 1200px; margin: 0 auto; text-align: center;">
        <h1 class="computer-banner-tit">{{course.name}}</h1>
        <span style="display: block; margin-top: 16px; font-size: 24px; color: #4A4A4A; letter-spacing: 0.99px;">{{course.course_slogan}}</span>
        <div @click="this.video_layer=true;" style="display: flex; align-items: center; justify-content: center; cursor: pointer; width: 250px; height: 76px; margin: 43px auto 99px; border: 1px solid #4A4A4A; border-radius: 2px;">
          <img src="../../assets/img/playing-icon.png" width="20" height="20" alt="">
          <span style="font-size: 16px; margin-left: 15px; display: inline-block; color: #4A4A4A; letter-spacing: 2.09px;">WATCH VIDEO</span>
        </div>
        <div style="width: 100%; display: flex; justify-content: center;">
          <ul style="padding: 0; margin: 37px 0 0; display: flex; align-items: center;">
            <li class="computer-detail-item" style="padding: 0 40px 0 0;">
              难度：{{course.level}}
            </li>
            <li style="width: 1px; height: 26px; border-left: 1px solid #979797;"></li>
            <li class="computer-detail-item">
              时长：{{course.hours}}小时
            </li>
            <li style="width: 1px; height: 26px; border-left: 1px solid #979797;"></li>
            <li class="computer-detail-item">
              学习人数：{{course.learnnumber}}人
            </li>
            <li v-show="course.course_review!=''" style="width: 1px; height: 26px; border-left: 1px solid #979797;"></li>
            <li v-show="course.course_review!=''" class="computer-detail-item" style="border-right: none;">
              <div style="display: flex; align-items: center;">
                <span>评分{{course.course_review}}</span>
                <div class="atar_Show" style="margin-left: 23px;">
                  <p class="course-evaluation-score"></p>
                  <span></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="course-cont">
      <div class="cont-head" style="background: #FFFFFF;box-shadow: 0 1px 0 0 #E8E8E8;">
        <ul class="cont-head-wrap">
          <li :class="['head-item',{'head-active': data.introduce}]" @click="changeItem(0)">课程概述</li>
          <li :class="['head-item',{'head-active': data.section}]" @click="changeItem(1)">课程章节</li>
          <li :class="['head-item',{'head-active': data.evaluate}]" @click="changeItem(2)">用户评价（{{review_num}}）</li>
          <li :class="['head-item',{'head-active': data.question}]" @click="changeItem(3)">常见问题</li>
        </ul>
      </div>
      <div>
        <div v-show="data.introduce==true;">
          <!--组件   课程简介-->
          <course-introduce></course-introduce>
        </div>
        <div v-show="data.section==true;">
          <!--组件   课程章节-->
          <course-section></course-section>
        </div>
        <div v-show="data.evaluate==true;">
          <!--组件   用户评价-->
          <user-evaluate @user_review="user_review_num"></user-evaluate>
        </div>
        <div v-show="data.question==true;">
          <!--组件   常见问题-->
          <common-question></common-question>
        </div>
      </div>
    </div>
  </main>
  <div v-show="video_layer" @click="this.video_layer=false;" class="video-shadow">
    <div class="course-introduce-video">
      <object id="{{'cc_'+vid}}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1200" height="676" >
        <param name="movie" value="{{'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_false_94B724260B49E936_1/player.swf'}}"/>
        <param name="allowFullScreen" value="true" />
        <param name="allowScriptAccess" value="always" />
        <param value="transparent" name="wmode" />
        <embed :src="'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_false_94B724260B49E936_1/player.swf'" width="100%" height="100%" name="{{'cc_'+vid}}" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>
      </object>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import courseIntroduce from 'src/pages/course/children/computer_introduce.vue';
  import courseSection from 'src/pages/course/children/course_section.vue';
  import userEvaluate from 'src/pages/course/children/user_evaluate.vue';
  import commonQuestion from 'src/pages/course/children/common_question.vue';


  export default {
    data() {
      return {
        video_layer: false,
        course: '',
        vid: '',
        review_num:0,
        data:{
          "introduce": true,
          "section": false,
          "evaluate": false,
          "question": false
        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;

      // Chrome
      document.body.scrollTop = 0;
      // Firefox
      document.documentElement.scrollTop = 0;
      // Safari
      window.pageYOffset = 0;

      this.course_id = this.$route.params.id;
      this.load(Vue.http.options.x_root+'/api/v1/coursedetailtop/?courseid='+this.course_id);
    },
    components: {
      courseIntroduce,
      courseSection,
      userEvaluate,
      commonQuestion
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response){

          if(response.data.error_no==0){
            this.course=response.data.data;
            this.vid=response.data.data.video_brief_link;
            //星级评分显示
            $('.course-evaluation-score').css('width',response.data.data.course_review*8);

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
      changeItem: function(option) {//0：课程概述；1：课程章节；2：用户评价；3：常见问题

        switch (option){

          case 0: {
            if(!this.data.introduce) {
              this.data.introduce=true;
              this.data.section=false;
              this.data.evaluate=false;
              this.data.question=false;
            }

            break;

          }

          case 1: {
            if(!this.data.section) {
              this.data.introduce=false;
              this.data.section=true;
              this.data.evaluate=false;
              this.data.question=false;
            }

            break;

          }

          case 2: {
            if(!this.data.evaluate) {
              this.data.introduce=false;
              this.data.section=false;
              this.data.evaluate=true;
              this.data.question=false;
            }

            break;

          }

          case 3: {
            if(!this.data.question) {
              this.data.introduce=false;
              this.data.section=false;
              this.data.evaluate=false;
              this.data.question=true;
            }

            break;

          }

          default: {
            this.data.introduce=true;
            break;
          }

        }
      },
      user_review_num:function (num) {
        this.review_num=num
      }

    }



  }
</script>
<style scoped>
  .video-shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background: rgba(41,41,41,0.90);
  }
  .course-introduce-video {
    width: 55%;
    height: 65%;
    position: relative;
    background: #000;
    top: 50%;
    left: 50%;
    margin-top: -14%;
    margin-left: -27%;
  }
  .atar_Show {
    height: 10px;
    width: 80px;
    position: relative;
    margin: 0 auto;
    background: url("../../assets/img/stark.png") repeat-x;
  }
  .atar_Show p{
    background: url("../../assets/img/stars.png") repeat-x;
    height: 10px;
    left: 0;
  }
  .course-computer-banner {
    width: 100%;
    height: 597px;
    background: url("../../assets/img/computer-banner.png") no-repeat;
    background-size: 100% auto;
    text-align: center;
  }
  .computer-banner-tit {
    margin-top: 104px;
    font-size: 64px;
    color: #4A4A4A;
    letter-spacing: 2.66px;
  }
  @media screen and (min-width: 1800px) {
    .course-computer-banner {
      height: 800px;
      background: url("../../assets/img/computer-banner.png") no-repeat;
      background-size: 100% auto;
    }
    .computer-banner-tit {
      margin-top: 204px;
    }
    .course-introduce-video {
      width: 40%;
      height: 45%;
      margin-top: -13%;
      margin-left: -20%;
    }
  }
  .course-sec-tit {
    font-size: 48px;
    color: #4A4A4A;
    letter-spacing: 0.37px;
    margin-left: 40px;
  }
  .finance-course-add {
    display: inline-block;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0.99px;
    margin-top: 21px;
  }
  .computer-detail-item {
    font-size: 20px;
    color: #4A4A4A;
    letter-spacing: 0.83px;
    height: 28px;
    padding: 0 40px;
  }
  ul {
    padding: 0;
  }
  button {
    border: none;
    outline: none;
  }
  .cou-ceil>span {
    display: inline-block;
    color: #333333;
  }
  em {
    display: block;
  }
  .head-active {
    border-bottom: 2px solid #52CEB0;
  }
  .head-item {
    height: 80px;
    line-height: 80px;
    font-size: 16px;
    color: #555555;
    cursor: pointer;
  }
  .cont-head-wrap {
    width: 590px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .cont-head {
    width: 100%;
    height: 80px;
    background: #FAFBFC;
  }
  .course-cont {
    width: 100%;
  }
  li {
    list-style: none;
  }
  .wrap {
    width:100%;
    text-align: center;
  }
</style>
