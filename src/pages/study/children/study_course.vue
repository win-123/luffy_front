<template>
  <div v-if="result_data!=0" style="padding-top: 33px;">
    <div style="display: flex; width:967px; margin: 0 auto; justify-content: space-between;">
      <!--<span class="top-text">全部课程</span>-->
      <!--<span class="top-text">按时间排序</span>-->
    </div>
    <div v-show="loading" class="loading-wrapp">
      <div class="loading-ball-list">
        <div class="loading-ball7a"></div>
        <div class="loading-ball7b"></div>
        <div class="loading-ball7c"></div>
        <div class="loading-ball7d"></div>
      </div>
    </div>
    <ul v-show="!loading" style="width: 967px; margin: 10px auto 0; padding-left: 0; padding-bottom: 65px;">
      <li v-for="(index,item) in courseList">
        <div data-toggle="collapse" data-target="#{{item.course_symbol}}" id="{{item.id}}" :class="['study-course-item',{'no-border-bottom':data.course_section}]">
          <div style="width: 282px; height: 159px; overflow: hidden;">
            <img :src="item.course_img" width="282" height="159" alt="">
            <div v-show="item.status==-1" style="width: 282px; height: 159px; line-height: 159px; text-align: center; position: relative;font-size: 14px;color: #EAEAEA;letter-spacing: 0.22px; top: -159px; z-index: 22; background: rgba(51,51,51,0.60);">
              已过期
            </div>
          </div>
          <div class="course">
            <h3 class="study-course-item-tit">{{item.course_name}}</h3>
            <p class="study-progress">{{item.last_study.current_study_record}}</p>
            <div style="margin-top: 23px; display: flex;">
              <div class="lesson-download">
                <a style="padding-left: 15px;" class="download-text" href="{{item.attachment_path}}" download="kejian">课件下载</a>
              </div>
              <div class="lesson-test" v-link="{name:'course_homework',params:{id:item.course_id}}"> <!--模块id-->
                <span class="download-text"  style="padding-left: 15px;">课堂作业</span>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; align-items: center;">
              <div style="width: 230px;background: #E9EFF3; height: 8px;">
                <span class="progress-line" :style="{width:230*item.study_time.studypercent+'px','background':'#84CC39'}"></span>
              </div>
              <span class="progress-value">{{item.study_time.studypercent*100}}%</span>
              <span  class="pay-time">
                <span v-if="item.study_time.usetime=''">用时 {{item.study_time.usetime}}，</span>
                <span v-else>用时 0小时，</span>
                <span v-if="item.status!=-1"><span  style="color: #FF5D00;">{{item.status}}</span>过期</span>
                <span v-else>已过期</span>
              </span>
            </div>
          </div>
          <div>
            <!--<div v-show="false">
              <span class="click-share-type arc-time">点击分享到：</span>
              <img style="margin-left: 10px;" src="../../../assets/img/weixin_icon.png" width="22" height="18" alt="分享到微信">
              <img style="margin-left: 10px;" src="../../../assets/img/weibo_icon.png" width="21" height="17" alt="分享到微博">
            </div>-->
            <span v-if="item.study_time.usetime=!0" v-link="{name:'classmate-play',params:{id:item.last_study.current_study_record_id}}" class="go-on-study" style="margin-top: 138px;">继续学习&gt;</span>
            <span v-if="item.study_time.usetime===''" v-link="{name:'classmate-play',params:{id:item.last_study.current_study_record_id}}" class="go-on-study" style="margin-top: 138px;">开始学习&gt;</span>
          </div>
        </div>
        <ul id="{{item.course_symbol}}" class="collapse out" style="padding-left: 0;">
          <li v-for="(list,menu) in item.chapter_section">
            <div data-toggle="collapse" data-target="#{{menu.chapter_symbol}}" id="{{menu.id}}" :class="['study-section-wrap',{'no-border-bottom':data.course_class}]">
              <h4 class="study-micro-cec-tit">{{menu.chapter_name}}</h4>
              <div>
                <span class="study-micro-sec-look-all">查看全部课程</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </div>
            </div>
            <ul id="{{menu.chapter_symbol}}" class="collapse out" style="padding-left: 0;">
              <li v-for="(act,lesson) in menu.coursesections" id="{{lesson.id}}" @click="linking(index,list,act)">
                <div v-if="lesson.section_type=='video'" class="course-wrap">
                  <div class="course_introduction">
                    <p class="study-micro-sec-course-tit">课时{{lesson.name}}</p>
                    <span class="center">
                      <img class="play" src="../../../assets/img/play.svg" alt="">
                      <!-- <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i> -->
                      {{lesson.video_time}}
                    </span>
                    <!-- <span class="study-micro-sec-course-sum-time">学到{{lesson.study_to}}</span> -->
                  </div>
                </div>
                <div v-if="lesson.section_type=='documents'" class="course-wrap">
                  <div>
                    <h5 class="study-micro-sec-course-tit">{{lesson.name}}</h5>
                    <span v-show="lesson.is_read" class="study-micro-sec-course-sum-time ">已读</span>
                    <span v-show="!lesson.is_read" class="study-micro-sec-course-sum-time ">未读</span>
                  </div>
                  <i class="fa fa-file-text-o fa-2x" aria-hidden="true"></i>
                </div>
                <div v-if="lesson.section_type=='practise'" class="course-wrap">
                  <div>
                    <h5 class="study-micro-sec-course-tit">{{lesson.name}}</h5>
                    <span v-show="lesson.is_read" class="study-micro-sec-course-sum-time ">已读</span>
                    <span v-show="!lesson.is_read" class="study-micro-sec-course-sum-time ">未读</span>
                  </div>
                  <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <empty v-if="result_data===0">
    <span class="null-text">您还未购买任何课程，去看看心仪的<a style="color: #4990E2;" v-link="{name:'course'}">课程</a>吧~
    </span>
  </empty>


</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import empty from '../../../components/special/empty.vue';

  export default {
    data() {
      return {
        courseList:'',
        result_data: 1,
        loading: true,
        status: true,
        data: {
        }

      }
    },
    ready: function(){
      this.load(Vue.http.options.root+'/api/v1/myenrolledcourse/');
    },
    components: {
      empty
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
              this.loading=false;
              this.courseList=response.data.data;
              this.result_data = this.courseList.length;

            }else if(response.data.error_no==2) {
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
      linking: function (index,list,act) {/*section_belong:0-普通课程；1-微学位课程*/
        if(this.courseList[index].chapter_section[list].coursesections[act].section_belong===0) {
          this.$route.router.go({name:'classmate-play',params:{id:this.courseList[index].chapter_section[list].coursesections[act].id}});
        }else if(this.courseList[index].chapter_section[list].coursesections[act].section_belong===1){
          this.$route.router.go({name:'micro-play',params:{id:this.courseList[index].chapter_section[list].coursesections[act].id}});
        }
      }

    }



  }
</script>
<style scoped>
  @import "../../../assets/css/font-awesome.min.css";
  .loading-wrapp {
    float: left;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loading-ball-list {
  }
  .loading-ball7a {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #19A68C;
    animation-delay: -1.5s;
  }
  .loading-ball7b {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #F63D3A;
    animation-delay: -1s;
  }
  .loading-ball7c {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #FDA543;
    animation-delay: -0.5s;
  }
  .loading-ball7d {
    border: 0;
    margin: 0;
    width: 16px;
    height: 16px;
    position: absolute;
    border-radius: 50%;
    animation: k-loadingO 2s ease infinite;
    background: #193B48;
  }
  @-webkit-keyframes k-loadingO {
    0%, 100% {
      transform: translate(0);
    }
    25% {
      transform: translate(160%);
    }
    50% {
      transform: translate(160%,160%);
    }
    75% {
      transform: translate(0,160%);
    }
  }
  .course_introduction{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .center{
    display: flex;
    align-items: center;
    float: right;
    width: 112px;
    color: #9B9B9B;
  }
  .play{
    width:20px;
    height:20px;
    margin-right: 16px;
  }
  .course {
    width: 492px;
    margin-left: 30px;
  }
  .study-course-item:hover{
    background: #F5F7F9;
  }
  .progress-line {
    background: #84CC39;
    height: 8px;
    display: block;
  }
  .lesson-download {
    background: url("../../../assets/img/download_icon.png") no-repeat 0 3px;
    background-size: 15px 15px;
  }
  .lesson-test {
    margin-left: 40px;
    background: url("../../../assets/img/homework_icon.png") no-repeat 0 3px;
    background-size: 18px 16px;
  }
  .course-wrap {
    width: 100%;
    height: 50px;
    cursor: pointer;
    border-bottom: 1px solid #F2F2F2;
    background: #fff;
    padding: 0 7px 0 30px;
    display: flex;
    align-items: center;
  }
  .course-wrap:hover{
    background: #F5F7F9;
  }
  .top-text {
    font-size: 12px;
    color: #333333;
    display: inline-block;
  }
  .study-course-item {
    padding: 30px 0;
    border-bottom: 1px solid #EDEDED;
    display: flex;
  }
  .study-course-item-tit {
    font-size: 20px;
    color: #414A60;
    letter-spacing: 0.32px;
    margin: 0;
  }
  .study-progress {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.22px;
    margin-top: 24px;
  }
  .download-text {
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-left: 10px;
  }
  .progress-value {
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-left: 14px;
  }
  .pay-time {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.22px;
    margin-left: 28px;
    display: inline-block;
  }
  .arc-time {
    font-size: 13px;
    color: #9B9B9B;
    letter-spacing: 0.28px;
  }
  .click-share-type {
    display: inline-block;
    margin-left: 12px;
  }
  .go-on-study {
    font-size: 12px;
    color: #7ED321;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-top: 118px;
    margin-left: 93px;
  }
  .study-micro-head-mid>a {
    font-size: 12px;
    color: #4A90E2;
    display: block;
    margin-top: 7px;
  }
  .study-course-item {
    padding: 30px 0;
    border-bottom: 1px solid #EDEDED;
    display: flex;
    cursor: pointer;
  }
  .study-course-item-tit {
    font-size: 20px;
    color: #414A60;
    letter-spacing: 0.32px;
    margin: 0;
  }
  .study-progress {
    font-size: 14px;
    height: 20px;
    width: 100%;
    color: #666666;
    letter-spacing: 0.22px;
    margin-top: 24px;
  }
  .download-text {
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-left: 10px;
  }
  .progress-value {
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-left: 14px;
  }
  .pay-time {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.22px;
    margin-left: 20px;
    display: inline-block;
  }
  .study-micro-cec-tit {
    font-size: 20px;
    color: #414A60;
    letter-spacing: 0.32px;
    margin: 0;
  }
  .study-micro-sec-look-all {
    font-size: 12px;
    color: #666666;
    letter-spacing: 0.19px;
    display: inline-block;
    margin-right: 13px;
  }
  .study-micro-sec-course-tit {
    font-size: 18px;
    color: #666666;
    /* letter-spacing: 0.29px; */
    margin: 0;
  }
  .study-micro-sec-course-sum-time {
    font-size: 16px;
    color: #9B9B9B;
    letter-spacing: 0.25px;
    display: inline-block;
    margin-right: 24px;
    margin-top: 18px;
  }
  .study-section-wrap {
    width: 100%;
    height: 80px;
    display: flex;
    padding: 0 22px 0 29px;
    align-items: center;
    background: #FAFAFA;
    justify-content: space-between;
    border-bottom: 1px solid #E8E8E8;
    cursor: pointer;
  }
  .no-border-bottom {
    border-bottom: none !important;
  }
</style>
