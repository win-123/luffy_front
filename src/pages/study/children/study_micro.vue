<template>
  <div v-if="result_data!=0" class="study-micro-wrap">
    <!--我报名的微专业-->
    <div v-show="!loading" class="degree-course-wrap">
      <select v-model="degree_id" @change="load_micro()" class="degree-course" name=""><!--degree_id为微专业id-->
        <option v-for="item in degree" value="{{item.degree_courseid}}">{{item.degree_coursename}}</option>
      </select>
    </div>
    <!--加载动画-->
    <div v-show="loading" class="loading-wrapp">
      <div class="loading-ball-list">
        <div class="loading-ball7a"></div>
        <div class="loading-ball7b"></div>
        <div class="loading-ball7c"></div>
        <div class="loading-ball7d"></div>
      </div>
    </div>
    <!--微专业作业平均成绩、同学社区、已获的奖学金状况-->
    <ul v-show="!loading" class="study-micro-head-list">
      <li class="study-micro-head-item study-micro-head-item-border">
        <span class="study-micro-head-top">作业平均成绩</span>
        <span class="study-micro-head-mid"><a
          v-link="{name:'homework_grade',params:{id:this.degree_id}}">查看作业成绩</a></span>
        <span><span class="study-micro-head-bot">{{total_data.ave_score}}</span><span
          v-show="grade_show">分</span></span>
      </li>
      <li class="study-micro-head-item study-micro-head-item-border">
        <span class="study-micro-head-top">同学社区</span>
        <span class="study-micro-head-mid"><a
          v-link="{name:'community-mine',params:{id:this.degree_id}}">进入提问详情</a></span>
        <span><span class="study-micro-head-bot">{{total_data.questions_total}}</span><span v-show="class_show">次</span></span>
      </li>
      <li class="study-micro-head-item">
        <span class="study-micro-head-top">已获的奖学金</span>
        <span class="study-micro-head-mid"><a v-link="{name: 'rewards_punishment_record',params:{id:this.degree_id}}">查看奖惩详情</a></span>
        <span><span class="study-micro-head-bot">{{total_data.has_get_score}}</span><span v-show="school_show">贝里</span></span>
      </li>
    </ul>
    <!--微专业模块、章节、课时详情-->
    <ul v-show="!loading" class="" style="width: 967px; margin: 10px auto 0; padding-left: 0; padding-bottom: 65px;">
      <li class="study-micro-wrap" v-for="(index,model) in micro_degree">
        <!--模块信息-->
        <div data-toggle="collapse" data-target="#{{model.course_module_symbol}}":class="['study-course-item',{'no-border-bottom':data.micro_section}]">
          <div style="width: 282px; height: 159px; overflow: hidden;">
            <img :src="model.course_module_img" width="282" height="159" alt="">
          </div>
          <div style="margin-left: 30px; width: 492px;">
            <div style="display: flex; align-items: center">
              <h3 class="study-course-item-tit">{{model.course_module_name}}</h3>
              <span class="pay-time">建议时长·{{model.suggested_time}}周</span>
            </div>
            <p class="study-progress">{{model.progress}}</p>
            <div style="margin-top: 23px; display: flex;">
              <div class="lesson-download">
                <a style="padding-left: 15px;" href="{{model.attachment_path}}" download="kejian">
                  <span class="download-text">课件下载</span>
                </a>
              </div>
              <div class="lesson-test" v-link="{name:'homework',params:{id:model.course_module}}">
                <span class="download-text" style="padding-left: 15px;">课堂作业 · 阶段考核</span>
              </div>
            </div>
            <div style="margin-top: 30px; display: flex; align-items: center;">
              <div style="width: 230px;background: #E9EFF3; height: 8px;">
                <progress class="progress-line" :style="{'width':230*model.study_time.studypercent+'px','background':'#84CC39'}"></progress>
              </div>
              <span class="progress-value">{{model.study_time.studypercent*100}}%</span>
              <span class="pay-time">
                <span v-if="model.study_time.usetime!=''">用时{{model.study_time.usetime}}</span>
                <span v-else>用时 0分</span>
              </span>
            </div>
          </div>
          <div>
            <span class="course-state">{{model.status}}</span>
            <button  style="cursor: pointer" @click="quick_study(model)"  class="go-on-study-btn">
              <span v-if="model.study_time.usetime!=''">继续学习</span>
              <span v-else>开始学习</span>
            </button>

          </div>
        </div>
        <!--章节列表-->
        <ul id="{{model.course_module_symbol}}" class="collapse out" style="width: 100%; padding-left: 0;">
          <li v-for="(list,section) in model.chapter_section">
            <div>
              <div data-toggle="collapse" data-target="#{{section.chapter_symbol}}"
                   :class="['study-section-wrap',{'no-border-bottom':data.section_course}]">
                <h4 class="study-micro-cec-tit">{{section.chapter_name}}</h4>
                <div>
                  <span class="study-micro-sec-look-all">查看全部课程</span>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
              <!--章节课时信息-->
              <ul id="{{section.chapter_symbol}}" class="collapse out" style="padding-left: 0;">
                <li v-for="(act,item) in section.coursesections" id="{{item.id}}" @click="linkingPlay(index,list,act)">
                  <div v-if="item.section_type=='video'" class="course-wrap">
                    <h5 class="study-micro-sec-course-tit">{{item.name}}</h5>
                    <!-- <i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i> -->
                    <span class="center">
                      <img class="play" src="../../../assets/img/play.svg" alt="">
                      {{item.video_time}}
                    </span>
                    <!-- <span class="study-micro-sec-course-sum-time">学到 {{item.study_to}}</span> -->
                    <!--<img src="../../../assets/img/video.png" width="32" height="32" alt="">-->
                  </div>
                  <div v-if="item.section_type=='documents'" class="course-wrap">
                    <div>
                      <h5 class="study-micro-sec-course-tit">{{item.name}}</h5>
                      <span v-show="item.is_read" class="study-micro-sec-course-sum-time sum-time-spec">已读</span>
                      <span v-show="!item.is_read" class="study-micro-sec-course-sum-time sum-time-spec">未读</span>
                    </div>
                    <!--<img src="../../../assets/img/word.png" width="32" height="32" alt="">-->
                    <i class="fa fa-file-text-o fa-2x" aria-hidden="true" style="color:#d4d4d4;padding-right:90px;"></i>
                  </div>
                  <div v-if="item.section_type=='practise'" class="course-wrap">
                    <div>
                      <h5 class="study-micro-sec-course-tit">{{item.name}}</h5>
                      <span v-show="item.is_read" class="study-micro-sec-course-sum-time sum-time-spec">已读</span>
                      <span v-show="!item.is_read" class="study-micro-sec-course-sum-time sum-time-spec">未读</span>
                    </div>
                    <!--<img src="../../../assets/img/text.png" width="32" height="32" alt="">-->
                    <i class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <empty v-if="result_data===0">
    <span class="null-text">您还未报名任何luffyX学位课程哦</span>
    <a  class="help-text" href="" v-link="{name:'luffy_x'}">什么是luffyX学位？</a>
  </empty>
</template>
<script>
  import Vue from 'vue';
  import empty from '../../../components/special/empty.vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';

  export default {
    data() {
      return {
        degree: '',
        result_data: 1,
        micro_degree: '',
        degree_id: null,
        total_data: '',
        loading: true,
        grade_show: false,
        class_show: false,
        school_show: false,
        data: {
          "micro_section": false,
          "section_course": false
        }
      }
    },
    ready: function () {
      console.log('this.loading',this.loading)
      this.load(Vue.http.options.x_root + '/api/v1/myenroll/degreeCourse/');
    },
    components: {
      empty
    },
    methods: {
      load: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function (response) {
          if (response.data.error_no == 0) {
//            this.loading=false;
            this.degree = response.data.data;
            this.result_data = this.degree.length;
            for (var i = 0; i < this.degree.length; i++) {
              if (this.degree[i].is_default) {
                this.degree_id = this.degree[i].degree_courseid;
                Cookies.set('degree_id', this.degree_id); //微专业id
                this.$store.state.current_degree_course_id=this.degree_id
              }
            }
            this.load_micro();

          } else if (response.data.error_no == 2) {
            this.$store.state.login_state = false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing = true;

          } else {
            console.log(response.data.error_msg);
          }
        })
          .catch(function (response) {
            console.log('接口请求失败')
          })
      },
      load_micro: function () {
        Cookies.set('degree_id', this.degree_id);
        this.$store.state.current_degree_course_id=this.degree_id


        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.x_root + '/api/v1/mydegreecourse/?degree_course_id=' + this.degree_id).then(function (response) {
          if (response.data.error_no == 0) {
//            更新cookie里面的微专业id
            this.loading=false;

            this.micro_degree = response.data.data;
            this.total_data = response.data.micro_learning_data;

            if (typeof this.total_data.ave_score == 'number') {
              this.grade_show = true;
            }
            if (typeof this.total_data.questions_total == 'number') {
              this.class_show = true;
            }
            if (typeof this.total_data.has_get_score == 'number') {

              this.school_show = true;
            }
            this.loading=false

          } else if (response.data.error_no == 2) {
            this.$store.state.login_state = false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing = true;
          } else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function (response) {
            console.log('接口请求失败')
          })
      },
      linkingPlay: function (index, list, act) {
//        对于未开通模块不设置路由跳转链接
        if (this.micro_degree[index].status!='未开通'){
          if (this.micro_degree[index].chapter_section[list].coursesections[act].section_belong === 0) {
            this.$route.router.go({
              name: 'classmate-play',
              params: {id: this.micro_degree[index].chapter_section[list].id}
            });
          }
          else if (this.micro_degree[index].chapter_section[list].coursesections[act].section_belong === 1) {
            this.$route.router.go(
              {name: 'micro-play', params: {id: this.micro_degree[index].chapter_section[list].coursesections[act].id}
              });
          }
        }else {
          toastr.info('Hey,未开通模块,不能观看视频哦')
        }
      },
      quick_study:function (model) {
        if (model.status!=='未开通'){
          this.$route.router.go({name:'micro-play',params:{id:model.last_study.current_study_record_id}});
        }else {
          toastr.info('Hey,未开通模块,不能观看视频哦')
        }


      }


    }
  }
</script>
<style scoped>
  @import "../../../assets/css/font-awesome.min.css";
  /*loading-style-start*/
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
  /*loading-style-end*/
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
  .degree-course-wrap {
    width: 966px;
    margin: 0 auto 20px;
  }
  .degree-course {
    font-size: 13px;
    color: #333333;
    display: flex;
    margin-left: auto;
    border: none;
    outline: none;
  }

  .study-micro-wrap {
    padding-top: 33px;
  }

  .study-micro-head-list {
    width: 966px;
    margin: 0 auto;
    display: flex;
    padding: 30px 0;
    height: 175px;
    background: #FAFAFA;
  }

  .study-micro-head-item {
    width: 322px;
    text-align: center;
  }

  .study-micro-head-item-border {
    border-right: 1px solid #DCDCDC;
  }

  .no-border-bottom {
    border-bottom: none !important;
  }

  .study-micro-head-top {
    font-size: 14px;
    color: #333333;
  }

  .study-micro-head-mid > a {
    font-size: 12px;
    color: #4A90E2;
    display: block;
    margin-top: 7px;
  }

  .study-micro-head-bot {
    font-size: 36px;
    color: #333333;
    display: inline-block;
    margin-top: 20px;
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

  .course-state {
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.25px;
    display: block;
    margin-left: 80px;
  }

  .go-on-study-btn {
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.19px;
    display: block;
    margin-top: 94px;
    margin-left: 55px;
    background: #7ED321;
    border-radius: 2px;
    width: 92px;
    height: 33px;
    outline: none;
    border: none;
  }

  .already-text {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.22px;
    display: block;
    margin-left: 95px;
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
    letter-spacing: 0.29px;
    margin: 0;
  }

  .study-micro-sec-course-sum-time {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.25px;
    display: inline-block;
    position: absolute;
    right: 54px;
    top: 16px;
  }
  .sum-time-spec {
    padding-left: 38px;
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
  .study-course-item:hover {
    background: #F5F7F9;
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
    justify-content: space-between;
    position: relative;
  }
  .course-wrap:hover{
    background: #F5F7F9;
  }
  .play{
    width:20px;
    height:20px;
    margin-right: 16px;
  }
  .center{
    display: flex;
    align-items: center;
    width: 112px;
    color: #9B9B9B;
  }
</style>
