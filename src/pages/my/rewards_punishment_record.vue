<template>
  <div style="padding-top: 40px; width: 1176px; padding-bottom: 140px; margin: 0 auto;">
    <ol style="display: flex; padding-left: 0;">
      <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
      <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study-micro'}">LuffyX学位</a>&nbsp;&gt;&nbsp;</li>
      <li class="breadcrumb_text" style="list-style: none;"><a>奖惩记录</a></li>
    </ol>
    <div style="margin-top: 30px; display: flex;">
      <div style="width: 424px; height: 388px; text-align: center; box-shadow: 0 13px 17px 0 #F4F5F7;">
        <div style="display: flex; height: 64px; align-items: center; border-bottom: 1px solid #EFEFEF;">
          <span class="my-rewards">我的奖学金</span>
          <a class="what-rewards" style="cursor: pointer;" v-link="{name: 'scholarship'}">什么是奖学金？</a>
        </div>
        <div id="school-pie" style="height: 330px; width: 100%;"></div>
      </div>
      <div style="width: 760px; height: 388px; margin-left: 17px;box-shadow: 0 13px 17px 0 #F4F5F7;">
        <div style="display: flex; height: 64px; align-items: center; border-bottom: 1px solid #EFEFEF;">
          <span class="line-text" style="margin-left: 34px;">近六月奖金奖惩曲线图</span>
        </div>
        <div id="school-line" style="height: 330px; width: 100%;"></div>
      </div>
    </div>
    <div style="margin-top: 60px;">
      <h3 class="grade-line-tit">奖惩记录表</h3>
      <table class="grade-table">
        <thead>
        <tr style="height: 70px;">
          <th style="width: 120px;">序号</th>
          <th style="width: 160px;">模块章节</th>
          <th style="width: 120px;">成绩</th>
          <th style="width: 120px;">奖学金变动</th>
          <th style="width: 120px;">奖学金余额</th>
          <th style="width: 120px;">实际到账</th>
          <th style="width: 120px;">状态</th>
          <th style="width: 327px;">说明</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(index,item) in records">
          <td>{{index+1}}</td>
          <td>{{item.content_object}}</td>
          <td>{{item.grade}}</td>
          <td>{{item.score}}</td>
          <td>{{item.balance}}</td>
          <td>{{item.actually_score}}</td>
          <td>{{item.status}}</td>
          <td>{{item.memo}}</td>
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
        degree_course_id: '',
        scholarshipBalance: [],
        rewardScholarship: [],
        deductibleScholarship: [],
        dateTime: [],
        scholarship:'',
        records: ''
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      //奖惩记录
      this.degree_course_id = this.$route.params.id;
      this.load(Vue.http.options.root+'/api/v1/user/score_records/?degree_course='+this.degree_course_id);
      this.loadPie();
      this.loadLine();
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.records=response.data.data;
              console.log(this.records);

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
      loadPie: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/user/score_record/circle_chart/?degree_course_id='+this.degree_course_id)
          .then(function(response) {

            if(response.data.error_no==0) {

              var myChart = echarts.init(document.getElementById('school-pie'));

              myChart.setOption({
                color: ['#6BBADD','#FD8080','#B8E986'],
                tooltip: {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c}贝里"
                },
                series: [
                  {
                    name: '我的奖学金',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                      {value: response.data.data.scholarshipBalance, name: '奖学金余额'},
                      {value: response.data.data.rewardScholarship, name: '奖励的奖学金'},
                      {value: response.data.data.deductibleScholarship, name: '扣除的奖学金'}
                    ],
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ]
              })

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
      loadLine: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/user/score_record/chart/?degree_course_id='+this.degree_course_id)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.scholarshipBalance=[];
              this.rewardScholarship=[];
              this.deductibleScholarship=[];
              this.dateTime=[];
              this.scholarship='';

              this.scholarship=response.data.data;

              for(var i=0; i<this.scholarship.length; i++){
                this.scholarshipBalance.push(this.scholarship[i].balance);
                this.rewardScholarship.push(this.scholarship[i].score);
                this.deductibleScholarship.push(this.scholarship[i].del_score);
                this.dateTime.push(this.scholarship[i].date);
              }

              this.chartPie();

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
      chartPie: function () {
        var myChart = echarts.init(document.getElementById('school-line'));

        myChart.setOption({
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            padding:  [
              30,  // 上
              35, // 右
              0,  // 下
              0, // 左
            ],
            left: 'right',
            data: ['奖学金余额', '奖励到账金','被扣奖学金']
          },
          xAxis: [{
            data: this.dateTime
          }],
          yAxis: [{
            splitLine: {show: false}
          }],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          series: [
            {
              name: '奖学金余额',
              type: 'line',
              showSymbol: false,
              data:  this.scholarshipBalance
            },
            {
              name: '奖励到账金',
              type: 'line',
              showSymbol: false,
              data:  this.rewardScholarship
            },
            {
              name: '被扣奖学金',
              type: 'line',
              showSymbol: false,
              data: this.deductibleScholarship
            }
          ]
         /* color: ['#2BC3E6','#F5A623','#B2BBB9'],
          /!*tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c}贝里'
          },*!/
          tooltip: {
            trigger: 'none',
            axisPointer: {
              type: 'auto'
            }
          },
          legend: {
            /!*width: 90,
            z: 99999,*!/
            padding:  [
              30,  // 上
              35, // 右
              0,  // 下
              0, // 左
            ],
            left: 'right',
            data: ['奖学金余额', '奖励到账金','被扣奖学金']
          },
          xAxis: [{
            type: 'category',
            axisTick: {
              alignWithLabel: false
            },
            axisLine: {
              onZero: false
            },
            /!*axisLabel:{
              interval: 0,//横轴信息全部显示
              rotate:-30,//-30度角倾斜显示
            },*!/
            axisPointer: {
              label: {
                formatter: function (params) {
                  return params.value + '：' + params.seriesData[0].data;
                }
              }
            },
            data: this.dateTime
          }],
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '奖学金余额',
              type: 'line',
              xAxisIndex: 0,
              data: this.scholarshipBalance
            },
            {
              name: '奖励到账金',
              type: 'line',
              xAxisIndex: 0,
              data: this.rewardScholarship
            },
            {
              name: '被扣奖学金',
              type: 'line',
              xAxisIndex: 0,
              data: this.deductibleScholarship
            }
          ]*/
        })
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
  .my-rewards {
    font-size: 13px;
    color: #333333;
    display: inline-block;
    margin-left: 33px;
  }
  .what-rewards {
    font-size: 13px;
    color: #4A90E2;
    display: inline-block;
    margin-left: auto;
    margin-right: 25px;
  }
  .grade-value {
    font-size: 144px;
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
