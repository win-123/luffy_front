<template>
  <div class="wrap" id="{{course.id}}">
    <div class="titleWrap flex ">
      <div class="title-cont">
        <span class="total-name">{{course.type}}</span>
        <h3 class="title">{{course.name}}</h3>
        <span class="title-tip">{{course.course_slogan}}</span>
      </div>
    </div>
    <div class="videoWrap flex">
      <div class="video-main">
        <object id="{{'cc_'+vid}}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1200" height="676" >
          <param name="movie" value="{{'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_false_94B724260B49E936_1/player.swf'}}"/>
          <param name="allowFullScreen" value="true" />
          <param name="allowScriptAccess" value="always" />
          <param value="transparent" name="wmode" />
          <embed :src="'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_false_94B724260B49E936_1/player.swf'" width="100%" height="315" name="{{'cc_'+vid}}" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>
        </object>
      </div>
    </div>
    <div class="course-cont">
      <div class="cont-head">
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
          <user-evaluate @user_review="user_review_num"> </user-evaluate>
        </div>
        <div v-show="data.question==true;">
          <!--组件   常见问题-->
          <common-question></common-question>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import courseIntroduce from 'src/pages/course/children/course_introduce.vue';
  import courseSection from 'src/pages/course/children/course_section.vue';
  import userEvaluate from 'src/pages/course/children/user_evaluate.vue';
  import commonQuestion from 'src/pages/course/children/common_question.vue';


  export default {
    data() {
      return {
        course:'',
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
              this.vid=response.data.data.video_brief_link
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
  }
  li {
    list-style: none;
  }
  .wrap {
    width:100%;
    text-align: center;
  }
  .titleWrap {
    height: 240px;
    width: 100%;
  }
  .title-cont {
    width: 100%;
  }
  .total-name {
    display: block;
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 1.12px;
  }
  .title {
    font-size: 32px;
    color: #333333;
    letter-spacing: 2.57px;
    margin-bottom: 43px;
    margin-top: 32px;
  }
  .title-tip {
    display: block;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0.25px;
  }
  .videoWrap {
    width: 100%;
    margin-bottom: 50px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-main {
    background: #000;
    width: 640px;
    height: 315px;
  }
</style>
