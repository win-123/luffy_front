<template>
  <div style="width:100%;" class="item">
    <div style="width: 1176px; padding-bottom: 94px; margin: 0 auto;">
      <ol style="display: flex; padding: 30px 0 30px 20px;">
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">专题课程</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;">作业详情</li>
      </ol>
      <div style="display: flex; text-align: center;">
        <div id="{{homework.id}}" style="width: 818px; background: #FFF; padding: 0;">

          <div v-else style="text-align: center; font-size: 22px; color: #9B9B9B;">
            <img src="../../assets/img/hom-wait.png" width="120" height="120" alt="">
          </div>
          <h3 class="homework-tit">{{homework.course_chapter}}</h3>
          <ul class="side-main-cont">
            <li class="side-main-item" style="list-style: none;">
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
                <span id="homeWorkName" class="homework-model-tit">作业题目</span>
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
              </div>
              <p class="homework-model-dec">{{homework.title}}</p>
            </li>
            <li class="side-main-item" style="list-style: none;">
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
                <span class="homework-model-tit">{{homework.title}}</span>
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
              </div>
              <pre  class="homework-model-dec pre-text">{{homework.requirement}}</pre>
            </li>
            <li class="side-main-item" style="list-style: none;">
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
                <span class="homework-model-tit">踩分点</span>
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
              </div>
              <pre class="homework-model-dec pre-text">{{homework.threshold}}</pre>
            </li>
            <li class="side-main-item" style="list-style: none;">
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
                <span class="homework-model-tit">{{homework.note}}</span>
                <span style="display: inline-block; width: 312px; height: 1px; border-top: 1px solid #E8E8E8;"></span>
              </div>
              <pre class="homework-model-dec pre-text">{{homework.note}}</pre>
            </li>


          </ul>
        </div>
        <div style="width: 322px; height: 337px; margin-left: 51px; padding: 27px 0 0; background: #FAFAFA;">
          <h3 class="side-bot-tit">附件作业详情</h3>
          <ul style="padding:20px 35px; margin-top: 20px; border-top: 1px solid #E8E8E8;">
            <li  @click.native="jump(0)" style="cursor: pointer; list-style: none; text-align: left; padding: 20px 0 20px 3px;">
              <img src="../../assets/img/hom-side-icon1.png" width="17" height="19" alt="作业题目">
              <span class="homework-side-text">作业题目</span>
            </li>
            <li @click.native="jump(1)" style="cursor: pointer; list-style: none; text-align: left; padding: 20px 0 20px 3px;">
              <img src="../../assets/img/hom-side-icon1.png" width="17" height="19" alt="作业需求">
              <span class="homework-side-text">作业需求</span>
            </li>
            <li @click.native="jump(2)" style="cursor: pointer; list-style: none; text-align: left; padding: 20px 0 20px 3px;">
              <img src="../../assets/img/hom-side-icon1.png" width="17" height="19" alt="踩分点">
              <span class="homework-side-text">踩分点</span>
            </li>
            <li @click.native="jump(3)" style="cursor: pointer; list-style: none; text-align: left; padding: 20px 0 20px 3px;">
              <img src="../../assets/img/hom-side-icon1.png" width="17" height="19" alt="导师点评">
              <span class="homework-side-text">注意点</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Dropzone from 'dropzone';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        homework_id:'',
        result_data:1,
        homework:'',
        works:''
      }
    },
    ready: function(){
      this.homework_id = this.$route.params.id; //作业id

      this.load(Vue.http.options.root+'/api/v1/course/homework_detail/?homework_id='+this.homework_id)
      //$('.side-main-cont').css('padding-top',0);
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.homework=response.data.data;

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
      jump: function(index) {
        let jump = $('.side-main-item');
        // 获取需要滚动的距离
        console.log(jump);
        console.log(jump.length);
        let total = jump[index].offsetTop;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
        // Safari
        window.pageYOffset = total;
      }

    }



  }
</script>
<style scoped>
  @import "../../assets/css/dropzone.css";
  .breadcrumb_text,
  .breadcrumb_text>a {
    font-size: 16px;
    color: #333333;
  }
  .homework-tit {
    font-size: 20px;
    color: #333333;
    margin-top: 55px;
    padding-bottom: 50px;
  }
  .homework-model-tit {
    width: 134px;
    height: 42px;
    line-height: 42px;
    background: #F7F7F7;
    border-radius: 66px;
    display: inline-block;
    margin: 0 20px;
    font-size: 18px;
    color: #333333;
  }
  .homework-model-dec {
    font-size: 18px;
    color: #666666;
    line-height: 35px;
    text-align: left;
    margin-bottom: 60px;
  }

  .side-bot-tit {
    font-size: 18px;
    color: #4A4A4A;
    margin: 0;
    text-align: left;
    padding-left: 30px;
    border-left: 3px solid #333333;
  }

  .homework-side-text {
    font-size: 16px;
    color: #B8BBC4;
    display: inline-block;
    margin-left: 15px;
    /*margin-top: 10px;*/
  }

</style>
