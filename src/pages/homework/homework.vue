<template>
  <div class="home_works_body" style="width:100%;">
    <div style="width: 1200px; padding-bottom: 94px; margin: 0 auto;">
      <ol style="display: flex; padding: 30px 0 30px 20px;">
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study-micro'}">LuffyX学位</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;">我的课堂作业</li>
      </ol>
      <div class="home_works_content" v-if="error_no===0" style="display: flex; text-align: center;">
        <div class="home_works" style="felx:1; position: relative; z-index: 22; overflow-y: auto; top:0; left:0;">
          <!--模块作业头部信息-->
          <div style="padding-bottom: 40px;">
            <img src="../../assets/img/hom-mark.png" width="121" height="123" alt="">
            <h3 class="homework-tit homework-tit-margin">{{homework.modelname}}</h3>
            <a v-link="{name:'scholarship'}">不按时交作业，会怎么样？</a>
          </div>
          <ul>
            <!--作业列表-->
            <li v-for="item in works" style="list-style: none;">
              <!--章节头-->
              <div style="display: flex; align-items: center; margin-bottom: 40px;">
                <span class="homework-line"></span>
                <span class="homework-model-tit">{{item.chapter}}</span>
                <span class="homework-line"></span>
              </div>
              <!--作业一-->
              <ul>
                <li v-for="(index,rap) in item.the_homeworks" id="{{ rap.id }}" style="list-style: none;">
                  <!--作业-->
                  <div v-if="rap.homeworktype=='作业'">
                    <div class="homework-model-dec-tittle" style="padding-bottom: 0; text-align: left;">
                      作业{{index+1}}:&nbsp{{rap.title}}</div>
                    <div class="home_time_require" style="margin-bottom: 19px;">
                      <span style="display: flex; align-items: center; font-size: 16px;color: #333333;">提交截止时间：{{rap.deadline}}
                        <span style="display: flex; align-items: center;" v-if="rap.distanceday!=''">，还剩
                          <span class="earn-day"><span style="display: inline-block; margin-top: 11px;">{{rap.distanceday}}</span></span>天</span>
                      </span>
                      <span style="display: inline-block; font-size: 16px;color: #333333; margin-left: auto;">作业状态：
                        <span v-if="rap.status != '已通过'" class="homework_status" style="">{{rap.status}}</span>
                        <span v-else class="homework_status" style="color: #84CC39">{{rap.status}}</span>
                      </span>
                    </div>
                    <div class="home_time_require  bance-num" style="margin-bottom: 10px">
                      <div class=""><b>奖&nbsp&nbsp&nbsp学金:</b></div><span >&nbsp该作业最高奖学金</span><span style="color: red">{{rap.balance_num}}</span>贝里</div>

                    <!--<div class="homework-model-dec " style="margin-bottom: 10px">作业题目:<span>{{rap.title}}</span></div>-->
                    <div class="homework-model-dec" >
                        <div class="requirement"><b>作业需求:</b> {{rap.requirement}}</div><a v-link="{name: 'homework_detail',params:{id:rap.id}}"
                         style="font-family: PingFangSC-Regular;font-size: 16px;color: #4A90E2;">查看详情>></a>
                    </div>
                  </div>
                  <!--通关考核-->
                  <div v-if="rap.homeworktype=='模块通关考核'">
                    <!--章节头-->
                    <div style="display: flex; align-items: center; margin-bottom: 40px;">
                      <span class="homework-line"></span>
                      <span class="homework-model-tit">通关考核</span>
                      <span class="homework-line"></span>
                    </div>
                    <!--作业一-->
                    <ul>
                      <li style="list-style: none;" id="{{rap.id}}">
                        <p class="homework-model-dec">
                          {{rap.requirement}}
                        </p>
                        <div style="text-align: left; margin-bottom: 60px;">
                          <a v-link="{name: 'homework_detail',params:{id:rap.id}}"
                             style="font-size: 18px;color: #4A90E2;">查看详情>></a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
         <div class="right-side-wrap" >
          <div style="padding: 23px 0; background: #FFFFFF;">
            <h3 class="side-model-tit">通关考核</h3>
          </div>
          <div style="padding: 23px 0; background: #FFFFFF; margin-top: 22px;">
            <h3 class="side-model-tit">模块章节</h3>
          </div>
          <ul style="padding-left: 0; margin: 0; text-align: left;background: #FFFFFF; border-top: 1px solid #E9E9E9;" class="item">
            <li class="slide-list">第一章节</li>
            <li class="slide-list">第二章节</li>
            <li class="slide-list">第三章节</li>
            <li class="slide-list">第四章节</li>
          </ul>
        </div>
      </div>
      <rights v-if="error_no===403">
        <span class="null-text">{{userinfo}}</span>
      </rights>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import rights from '../../components/special/rights.vue';



  export default {
    data() {
      return {
        micro_id:'',
        homework:'',
        works:'',
        userinfo:'',
        error_no:-1
      }
    },
    ready: function(){
      this.micro_id = this.$route.params.id;
      Cookies.set('module_course_id', this.micro_id);//一个微专业里某个模块的id
      this.$store.state.current_moudle_id=this.micro_id;
      this.load(Vue.http.options.x_root+'/api/v1/module_homeworks/?courseid='+this.micro_id)
    },
    components: {
      rights
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
            this.error_no=0
            this.homework=response.data.data;
            this.works=this.homework.homeworks;
          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;
          }else if (response.data.error_no==403){
              this.error_no=403
              this.userinfo=response.data.error_msg
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      }

    }



  }
</script>
<style scoped >
  .home_works_body{
    background-color: #F5F7F9;
  }
  .home_works_content{
    background-color: #F5F7F9;
    width: 1200px;
    margin: 0 auto;
  }
  .homework-model-dec-tittle{
    color: #333333;
    line-height: 33px;
    text-align: left;
    margin-bottom: 20px;


    font-size: 20px;
    letter-spacing: 0px;

  }
  .home_works{
    background-color: white;
    padding: 35px 30px 65px;
  }
  .home_time_require{
    display: flex;
    text-align: left;
  }
  .requirement{
    display: inline-block;
    overflow: hidden;
    width: 830px;
    height: 35px;
    text-overflow: ellipsis;
    /*white-space: nowrap;"*/

  }
  .bance-num{
    margin-top: 8px;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0px;
  }
  .homework_status{
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #F6A623;
    display: inline-block;
  }
  .right-side-wrap {
    width: 289px;
    height: auto;
    text-align: center;
    margin-left: 30px;
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
    font-size: 16px;
    color: #4A4A4A;
    line-height: 33px;
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
  .slide-list {
    line-height: 40px;
    font-size: 16px;
    color: #5E5E5E;
    text-align: center;
    /*color: #4A4A4A;*/
    list-style: none;
    padding:15px 0;
    cursor: pointer;
  }
  .slide-list:hover{
    background: #f5f7f9;
  }
</style>
