<template>
  <div style="width:100%;"  >
    <div style="width: 1200px; padding-bottom: 94px; margin: 0 auto;">
      <ol style="display: flex; padding: 30px 0 30px 20px;">
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">专题课程</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;">课堂作业</li>
      </ol>
      <div style="display: flex; text-align: center;" v-if="result_data!=0">
        <div style="width: 862px; position: relative; z-index: 22; overflow-y: auto; top:0; left:0;">
          <!--模块作业头部信息-->
          <div style="padding-bottom: 40px;">
            <img src="../../assets/img/hom-mark.png" width="121" height="123" alt="">
            <p class="homework-tit homework-tit-margin">{{homework.course_name}}</p>
          </div>
          <ul >
            <!--作业列表-->
            <li v-for="item in home_work" style="list-style: none;">
              <!--章节头-->
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span class="homework-line"></span>
                <span class="homework-model-tit" id="{{item.id}}">{{item.chapter}}</span>
                <span class="homework-line"></span>
              </div>
              <!--作业一-->
              <ul>
                <li v-for="(index,rap) in item.the_homeworks" id="{{ rap.id }}" style="list-style: none;">
                  <!--作业-->
                  <div >
                    <h4 class="homework-tit" style="padding-bottom: 0; text-align: left; margin-bottom: 42px;">作业{{index+1}}</h4>
                    <p class="homework-model-dec">
                      {{rap.requirement}}
                    </p>
                    <div style="text-align: left; margin-bottom: 60px;">
                      <a v-link="{name: 'course_homework_detail',params:{id:rap.id}}" style="font-family: PingFangSC-Regular;font-size: 18px;color: #4A90E2;">查看详情>></a>
                    </div>
                  </div>

                </li>
              </ul>
            </li>
          </ul>

        </div>
        <div class="right-side-wrap" style="position: relative;">
          <!--<div style="padding: 23px 0; background: #FAFAFA;">-->
            <!--<h3 class="side-model-tit">通关考核</h3>-->
          <!--</div>-->
          <div style="padding: 23px 0; background: #FAFAFA; margin-top: 22px;" >
            <h3 class="side-model-tit">课程章节</h3>
          </div>
          <ul style="padding-left: 0; margin: 0; text-align: left; padding-bottom: 10px; background: #FAFAFA; border-top: 1px solid #E9E9E9;">
            <li v-for="item in home_work" class="slide-list" style="margin-top: 30px; cursor: pointer;">
              <a class="rap_symbol" href="#1">{{item.chapter}}</a>
            </li>

          </ul>
        </div>
      </div>
      <empty v-if="result_data===0" >
        <span class="null-text">该课程未配置作业哦</span>
      </empty>
    </div>
  </div>

</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import empty from '../../components/special/empty.vue';


  export default {
    data() {
      return {
        course_id:'',
        homework:'',
        home_work:'',
        result_data:''
      }
    },
    ready: function(){
      this.course_id = this.$route.params.id;
      Cookies.set('course_id', this.course_id);//一个普通课程的id
      this.load(Vue.http.options.root+'/api/v1/course/homeworks/?course_id='+this.course_id)

    },
    components: {
      empty
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.homework=response.data.data;
            this.home_work=this.homework.home_work;
            this.result_data = this.home_work.length;
          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_no)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      }

    }



  }
</script>
<style scoped>
  .right-side-wrap {
    width: 289px;
    height: auto;
    padding: 0 5px;
    text-align: center;
    margin-left: 50px;
  }
  .side-model-tit {
    height:24px;
    line-height: 24px;
    margin:0;
    border-left: 3px solid #333333;
    font-size: 18px;
    color: #333333;
  }
  .homework-line {
    display: inline-block;
    width: 336px;
    height: 1px;
    border-top: 1px solid #E8E8E8;
  }
  .earn-day {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 7px;
    background: url("../../assets/img/date_icon.png") no-repeat;
    font-size: 14px;
    color: #D0021B;
  }
  .breadcrumb_text,
  .breadcrumb_text>a {
    font-size: 16px;
    color: #333333;
  }
  .grade {
    font-size: 144px;
    color: #7ED321;
  }
  .homework-tit {
    font-size: 20px;
    color: #333333;
  }
  .homework-tit-margin {
    margin: 30px 0 24px;
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
    margin-bottom: 30px;
  }
  .homework-submit {
    display: flex;
    align-items: center;
  }
  .homework-submit-time {
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin-left: 25px;
    text-align: left;
  }
  .side-bot-tit {
    font-size: 18px;
    color: #4A4A4A;
    margin: 0;
    text-align: left;
  }
  .download-homework-btn {
    width: 273px;
    height: 50px;
    margin: 30px 0;
    font-size: 16px;
    color: #333333;
    background: #F7F7F7;
    border: none;
    outline: none;
  }
  .homework-side-text {
    font-size: 16px;
    color: #B8BBC4;
    display: inline-block;
    margin-left: 15px;
  }
  .how-result {
    font-size: 14px;
    color: #4A90E2;
  }
  .rap_symbol{
    text-decoration: none;
  }
  .slide-list {
    font-size: 16px;
    color: #5E5E5E;
    text-align: center;
    /*color: #4A4A4A;*/
    list-style: none;
    margin-bottom: 34px;
  }
</style>
