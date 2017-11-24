<template>
  <div class="study-wrap">
    <div class="study-banner">
      <img style="margin-top: 55px;" src="../../assets/img/study.png" alt="">
     <!-- <h1 class="lu-fly">路飞学城</h1>
      <p class="lu-fly-dec">帮助有志向的年轻人通过努力学习获得体面的工作和生活！</p>-->
    </div>
    <ul class="study-head-list">
      <li class="study-head-item">
        <span class="study-head-item-tit">今日学习</span>
        <span class="study-head-item-tit"><span class="study-head-item-score">{{total_info.today_study}}</span>小时</span>
      </li>
      <li class="study-head-item">
        <span class="study-head-item-tit">累计学习</span>
        <span class="study-head-item-tit"><span class="study-head-item-score">{{total_info.all_study}}</span>小时</span>
      </li>
      <li class="study-head-item">
        <span class="study-head-item-tit">奖学金余额</span>
        <span class="study-head-item-tit"><span class="study-head-item-score">{{total_info.scholarship_balance}}</span>贝里</span>
      </li>
      <li class="study-head-item" style="border-right: none;">
        <span class="study-head-item-tit">将过期课程</span>
        <span class="study-head-item-tit"><span class="study-head-item-score">{{total_info.will_expire}}</span>个</span>

      </li>
    </ul>
    <div style="width: 1200px; margin: 24px auto 0; background: #FFFFFF;">
      <div style="width: 100%;  height: 69px; margin: 0 auto; border-bottom: 1px solid #E8E8E8;">
        <ul class="study-item-list">
          <li :class="['study-item',{'study_active':data.st_micro}]" @click="changeItem(2)">LuffyX学位</li>
          <li :class="['study-item',{'study_active':data.st_course}]" @click="changeItem(3)">课程</li>
          <li :class="['study-item',{'study_active':data.st_answer}]" @click="changeItem(1)">我的回答</li>
          <li :class="['study-item',{'study_active':data.st_question}]" @click="changeItem(0)">我的提问</li>
        </ul>
      </div>
      <div>
        <div v-show="data.st_question">
          <my-question></my-question>
        </div>
        <div v-show="data.st_answer">
          <my-answer></my-answer>
        </div>
        <div v-show="data.st_micro">
          <keep-alive>
            <study-micro ></study-micro>
          </keep-alive>
        </div>
        <div v-show="data.st_course">
          <study-course></study-course>
        </div>

      </div>
    </div>
  </div>
  <!--<foot-guide class="foot"></foot-guide>-->
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import empty from '../../components/special/empty.vue'
  import studyHead from '../../components/header/head.vue';
  import FootGuide from '../../components/footer/foot.vue'
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import myQuestion from 'src/pages/study/children/question.vue';
  import myAnswer from 'src/pages/study/children/answer.vue';
  import studyCourse from 'src/pages/study/children/study_course.vue';
  import studyMicro from 'src/pages/study/children/study_micro.vue';


  export default {
    data() {
      return {
        total_info:'',
        currentView:'empty',
        data:{
          "st_question": false,
          "st_answer": false,
          "st_course": false,
          "st_micro": true,
        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=false;
      this.$store.state.study_show=true;
      this.load(Vue.http.options.xy_root+'/api/v1/learndata/');
    },
    components: {
      studyHead,
      FootGuide,
      myQuestion,
      myAnswer,
      studyCourse,
      studyMicro,
      empty
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response){

            if(response.data.error_no==0){

              this.total_info=response.data.data;

            }else if(response.data.error_no==2){

//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      changeItem: function(option) {//0：我的提问；1：我的回答；2：微专业 3：课程
        switch (option){

          case 0: {
            if(!this.data.st_question) {
              this.data.st_question=true;
              this.data.st_answer=false;
              this.data.st_course=false;
              this.data.st_micro=false;
            }

            break;

          }

          case 1: {
            if(!this.data.st_answer) {
              this.data.st_question=false;
              this.data.st_answer=true;
              this.data.st_course=false;
              this.data.st_micro=false;
            }
            break;

          }

          case 2: {
            if(!this.data.st_micro) {
              this.data.st_question=false;
              this.data.st_answer=false;
              this.data.st_course=false;
              this.data.st_micro=true;
            }

            break;

          }

          case 3: {
            if(!this.data.st_course) {
              this.data.st_question=false;
              this.data.st_answer=false;
              this.data.st_course=true;
              this.data.st_micro=false;
            }

            break;

          }

          default: {
            this.data.st_course=true;
            break;
          }

        }
      }
    }
  }
</script>
<style scoped>
  html {
    height: 100%;
    width: 100%;
  }
  .study_active {
    border-bottom: 2px solid #000;
  }
  .worker-header {
    width: 100%;
  }
  .study-wrap {
    font-size: 14px;
    background-color: #F5F7F9;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
  }
  li {
    list-style: none;
  }
  .study-banner {
    width: 100%;
    height: 400px;
    background: url("../../assets/img/my-bkg.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
  }
  .lu-fly{
    /*font-family: PingFangSC-Light;*/
    font-size: 48px;
    color: #FFFFFF;
    padding:57px 0 0;
    margin: 0;
  }
  .lu-fly-dec {
    font-size: 36px;
    color: #FFFFFF;
    margin-top: 25px;
  }
  .study-wrap {
    width: 100%;
    background: #F5F7F9;
    padding-bottom: 60px;
  }
  .study-head-list {
    width: 1200px;
    padding: 73px 0;
    margin: -98px auto 0;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
  }
  .study-head-item {
    width: 400px;
    height: 105px;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #DCDCDC;;
  }
  .study-head-item-tit {
    display: block;
    font-size: 14px;
    color: #333333;
  }
  .study-head-item-score {
    display: inline-block;
    font-size: 36px;
    color: #333333;
    margin-top: 41px;
    justify-content: flex-end;
  }
  .study-item-list {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    box-sizing: border-box;
    padding-left: 0;
    justify-content: space-around;
  }
  .study-item-list li{
    width:120px;
    text-align: center;
  }
  .study-item {
    line-height: 69px;
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }
  .foot{
    display: flex;
    margin-top: auto;
  }
</style>
