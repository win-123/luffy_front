<template>
  <main class="wrap">
    <div class="course-algorithm-banner" style="display: flex;">
      <div style="width: 1200px; display: flex; margin: 0 auto; padding-top: 140px;">
        <div style="margin: 47px 0 0; text-align: left; width: 670px;">
          <h1 style="font-size: 48px; color: #4A4A4A; letter-spacing: 1.99px;">{{course.name}}</h1>
          <span style="display: block; margin-top: 18px; font-size: 24px; color: #4A4A4A; letter-spacing: 0.99px;">{{course.course_slogan}}</span>
          <ul style="padding: 0; margin: 72px 0 0; display: flex; align-items: center;">
            <li class="algorithm-detail-item" style="padding: 0 20px 0 0;">
              难度：{{course.level}}
            </li>
            <li style="width: 1px; height: 14px; border-left: 1px solid #979797;"></li>
            <li class="algorithm-detail-item">
              时长：{{course.hours}}小时
            </li>
            <li style="width: 1px; height: 14px; border-left: 1px solid #979797;"></li>
            <li class="algorithm-detail-item">
              学习人数：{{course.learnnumber}}人
            </li>
            <li v-show="course.course_review!=''" style="width: 1px; height: 14px; border-left: 1px solid #979797;"></li>
            <li v-show="course.course_review!=''" class="algorithm-detail-item" style="border-right: none;">
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
        <div style="margin-left: auto; margin-right: -55px;">
          <img src="../../assets/img/python-banner.png" width="453" height="339" alt="">
          <img @click="this.video_layer=true;" style="position: relative; left:-200px; top: 10px; cursor: pointer;" src="../../assets/img/banner-play-white.png" width="55" height="55" alt="">
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
  </main>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import courseIntroduce from 'src/pages/course/children/python_introduce.vue';
  import courseSection from 'src/pages/course/children/course_section.vue';
  import userEvaluate from 'src/pages/course/children/user_evaluate.vue';
  import commonQuestion from 'src/pages/course/children/common_question.vue';


  export default {
    data() {
      return {
        video_layer: false,
        course: '',
        review_num:0,
        vid: '',
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
      load (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(res => {
          console.log(res)
          if(res.data.error_no==0){
            this.course=res.data.data;
            this.vid=res.data.data.video_brief_link;
            /*var template='<object id="cc_'+this.vid+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1200" height="676" >'
              +'<param name="movie" value="https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+this.vid+'_false_94B724260B49E936_1/player.swf"/>'
              +'<param name="allowFullScreen" value="true" />'
              +'<param name="allowScriptAccess" value="always" />'
              +'<param value="transparent" name="wmode" />'
              +'<embed :src="https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+this.vid+'_false_94B724260B49E936_1/player.swf" width="100%" height="100%" name="cc_'+this.vid+'" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>'
              +'</object>';
            $('.course-introduce-video').html(template);*/
            //星级评分显示
            $('.course-evaluation-score').css('width',res.data.data.course_review*8);
          }else if(res.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;
          } else {
            console.log(res.data.error_msg)
          }
        })
          .catch(res => {
            console.log('接口请求失败')
          })
      },
      changeItem (option) {//0：课程概述；1：课程章节；2：用户评价；3：常见问题
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
  .course-algorithm-banner {
    width: 100%;
    height: 597px;
    background: #FFFFFF;
    text-align: center;
  }
  @media screen and (min-width: 1800px) {
    .course-algorithm-banner {
      height: 624px;
      background: #FFFFFF;
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
  .algorithm-detail-item {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.74px;
    height: 25px;
    padding: 0 20px;
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
    border-bottom: 2px solid #78C63F;
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
    background: #fff;
  }
  li {
    list-style: none;
  }
  .wrap {
    width:100%;
    text-align: center;
  }
</style>
