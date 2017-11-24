<template>
  <div style="padding-top: 40px; width: 1176px; padding-bottom: 140px; margin: 0 auto;">
    <ol style="display: flex; padding-left: 0;">
      <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
      <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study-micro'}">LuffyX学位</a>&nbsp;&gt;&nbsp;</li>
      <li class="breadcrumb_text" style="list-style: none;"><a>我的作业成绩</a></li>
    </ol>
    <div style="margin-top: 30px; display: flex;">
      <div style="width: 424px; height: 388px; text-align: center; box-shadow: 0 13px 17px 0 #F4F5F7;">
        <div style="display: flex; height: 64px; align-items: center; border-bottom: 1px solid #EFEFEF;">
          <span class="my-name">{{grade_summary.name}}</span>
          <span class="my-rank">排名&nbsp;&nbsp;{{grade_summary.ranking}}</span>
        </div>
        <div style="text-align: center; font-size: 22px; color: #7ED321;">
          <span><span class="grade-value">{{grade_summary.ave_score}}</span><span v-show="grade">分</span></span>
        </div>
        <ul style="padding-left: 19px; margin-top: 30px;">
          <li style="display: flex;">
            <span class="my-font">作业总数：<span style="color: #333; display: inline-block;">{{grade_summary.total_homework}}</span> </span>
            <span class="my-font" style="margin-left: auto; margin-right: 37px;">已完成：<span style="color: #333; display: inline-block;">{{grade_summary.done_homework}}</span></span>
          </li>
          <li style="display: flex; margin-top: 20px;">
            <span class="my-font">剩余完成：<span style="color: #333; display: inline-block;">{{grade_summary.left_homehork}}</span>  </span>
            <span class="my-font" style="margin-left: auto; margin-right: 29px;">未按时：<span style="color: #333; display: inline-block;">{{grade_summary.not_ontime}}</span></span>
          </li>
        </ul>
      </div>
      <div style="width: 760px; height: 388px; margin-left: 17px;box-shadow: 0 13px 17px 0 #F4F5F7;">
        <div style="display: flex; height: 64px; align-items: center; border-bottom: 1px solid #EFEFEF;">
          <span class="line-text" style="margin-left: 34px;">近六个月作业成绩曲线图</span>
        </div>
        <div id="main" style="height: 330px; width: 100%;"></div>
      </div>
    </div>
    <div style="margin-top: 60px;">
      <h3 class="grade-line-tit">成绩详情表</h3>
      <table class="grade-table">
        <thead>
        <tr style="height: 70px;">
          <th style="width: 140px;">序号</th>
          <th style="width: 200px;">模块章节</th>
          <th style="width: 200px;">题目</th>
          <th style="width: 155px;">提交时间</th>
          <th style="width: 155px;">成绩</th>
          <th style="width: 323px;">老师点评</th>
        </tr>
        </thead>
        <tbody>
        <tr style="cursor: pointer;" v-for="(index,list) in homework_list" id="{{list.id}}" v-link="{name: 'homework_detail',params:{id:list.homeworkid}}">
          <td>{{index+1}}</td>
          <td>{{list.moudelchapter}}</td>
          <td>{{list.homeworkname}}</td>
          <td>{{list.date}}</td>
          <td>{{list.the_score}}</td>
          <td>{{list.mentor_comment}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import echarts from 'echarts';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        grade: false,
        degree_course_id:'',
        grade_time: [],
        grade_value: [],
        gradeList: '',
        grade_summary:'',
        homework_list:''
      }
    },
    ready: function(){
      this.degree_course_id = this.$route.params.id;
      Cookies.set('degree_id',this.degree_course_id);
      this.load(Vue.http.options.x_root+'/api/v1/myhomeworkoverview/?degree_courseid='+this.degree_course_id);
      this.loadHomeworkList(Vue.http.options.x_root+'/api/v1/myhomeworkrecord/?degree_courseid='+this.degree_course_id);
      this.loadGrade(Vue.http.options.root+'/api/v1/homework/chart/?degree_course_id='+this.degree_course_id);
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.grade_summary=response.data.data;
            console.log(typeof this.grade_summary.ave_score);
            if(typeof this.grade_summary.ave_score=='number'){
              this.grade=true;
            }

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
      loadHomeworkList: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.homework_list=response.data.data;

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
      loadGrade: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
            this.grade_time=[];
            this.grade_value=[];
            this.gradeList='';

            this.gradeList=response.data.data.info;

            for(var i=0; i<this.gradeList.length; i++){
              this.grade_time.push(this.gradeList[i].update_time);
              this.grade_value.push(this.gradeList[i].score);
            }

            this.chart();

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
      chart:function() {
        var myChart = echarts.init(document.getElementById('main'));

        myChart.setOption({
          color: ['#2BC3E6'],
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c}分"
          },
          legend: {
            data:['作业成绩（分）']
          },
          xAxis: {
            type: 'category',
            data: this.grade_time
          },
          yAxis: {},
          series: [{
            name: '成绩',
            type: 'line',
            data: this.grade_value
          }]
        });
      }

    }



  }
</script>
<style scoped>
  .breadcrumb_text>a {
    font-size: 16px;
    color: #333333;
  }
  .line-text {
    font-size: 14px;
    color: #9B9B9B;
  }
  .my-name {
    font-size: 20px;
    color: #26423B;
    display: inline-block;
    margin-left: 33px;
  }
  .my-rank {
    font-size: 18px;
    color: #8BBB67;
    display: inline-block;
    margin-left: auto;
    margin-right: 25px;
  }
  .grade-value {
    font-size: 144px;
    display: inline-block;
  }
  .my-font {
    font-size: 16px;
    color: #9B9B9B;
    display: inline-block;
  }
  .grade-line-tit {
    font-size: 22px;
    color: #333333;
    margin: 0;
  }
  .grade-table {
    margin-top: 33px;
  }
  .grade-table>thead>tr {
    border-top: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
    border-left: 1px solid #E8E8E8;
  }
  .grade-table>thead>tr>th {
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 14px;
    color: #333333;
    background: #FAFAFA;
    border-right: 1px solid #E8E8E8;
  }
  .grade-table>tbody>tr {
    height: 100px;
    padding: 40px 0;
    border-bottom: 1px solid #F2F2F2;
  }
  .grade-table>tbody>tr>td {
    text-align: center;
    font-size: 13px;
    color: #4A4A4A;
  }
</style>
