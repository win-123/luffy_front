<template>
<!-- 作业详情 -->
  <div class="itembox">
    <div style="width: 1200px; padding-bottom: 94px; margin: 0 auto;">
      <ol  style="display: flex; align-items: center;padding: 24px 30px;">
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">LuffyX学位</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;">我的作业详情</li>
      </ol>
      <div v-show="error_no===0" class="box">
        <div  style="display: flex; width: 1200px;height:auto;">
          <div id="{{homework.id}}" style="felx:1;background: #FFF; padding-right: 30px;">
            <div style="font-size: 22px; color: #9B9B9B;">
            </div>
            <h3 class="homework-tit">{{homework.modulechapter}}</h3>
            <p class="my_performance">我的成绩: <span>{{homework.score}}</span></p>
            <p id="homeWorkName" class="topic">作业题目: <span>{{homework.title}}</span></p>
            <ul class="side-main-cont">
              <li>
                <p class="demand">作业需求:</p>
                <article>{{homework.requirement}}</article>
              </li>
              <li>
                <p class="demand">踩分点:</p>
                <article>{{homework.threshold}}</article>
              </li>
              <li>
                <p class="demand">注意点:</p>
                <article>{{homework.note}}</article>
              </li>
              <li>
                <p class="demand">导师点评:</p>
                <article v-html="homework.mentor_comment"></article>
              </li>
              <div class="filename" v-if="this.my_home.length != 0">
                <p class="col">已上传文件列表：</p>
                <p class="file_project"><span>文件名:</span><span>大小 (kb)</span><span>上传时间</span></p>
                <ul>
                  <li class="file_zip" v-for="item in my_home">
                    <span>{{item.file_name}}</span><span>{{item.file_size}}</span><span>{{item.create_time}}</span>
                  </li>
                </ul>
              </div>
              <li>
                <div style="text-align: left; display: flex; align-items: center;">
                  <!--<div v-if="this.my_home.submittime!=''">-->
                    <!-- <span class="homework-submit-time">提交时间：{{my_home.submittime}}</span> -->
                    <!-- <span class="homework-submit-time" v-if="this.my_home.check_date!=''">批改时间：{{my_home.check_date}}</span> -->
                    <!-- <span class="homework-submit-time" v-else>批改时间：待批改</span> -->
                  <!--</div>-->
                  <div  v-if="this.my_home.length == 0" class="empty">
                    <img src="../../assets/img/no-com.png" width="33" height="25" alt="">
                    <span style="font-size: 14px; margin-left: 14px; color: #666666;">空空如也，您还未提交作业</span>
                  </div>
                  <div  v-if="this.my_home.length != 0" class="download">
                    <img style="margin-left: auto;" src="../../assets/img/myhomework.png" width="17" height="21" alt="">
                    <a style="font-size: 16px;color: #7ED321;" href="{{homework.my_homework_links}}" download="my_homework" v-if="this.my_home.length != 0">下载我的作业</a>
                  </div>
                </div>
                <div id="dropzone">
                <form id="myAwesomeDropzone" class="dropzone needsclick dz-clickable">
                  <div class="dz-message needsclick">
                    点击这里可以提交作业，你也可以直接拖拽到这里<br>
                    <span class="note needsclick">点击这里可以提交作业，你也可以直接拖拽到这里点击这里可以提交作业，你也可以直接拖拽到这里</span>
                  </div>
                  <div class="fallback">
                    <input name="file" type="file" multiple/>
                  </div>
                </form>
                </div>
              </li>
            </ul>
          </div>
          <div class="right-side-wrap">
            <h3 class="side-bot-tit"><span>附件作业详情</span></h3>
            <ul class="item">
              <li @click.native="jump(0)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="作业题目">
                <span class="homework-side-text">作业题目</span>
              </li>
              <li @click.native="jump(1)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="作业需求">
                <span class="homework-side-text">作业需求</span>
              </li>
              <li @click.native="jump(2)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="踩分点">
                <span class="homework-side-text">踩分点</span>
              </li>
              <li @click.native="jump(3)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="导师点评">
                <span class="homework-side-text">注意点</span>
              </li>
              <li @click.native="jump(4)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="导师点评">
                <span class="homework-side-text">导师点评</span>
              </li>
              <li @click.native="jump(5)">
                <img src="../../assets/img/hom-side-icon1.png" width="17" alt="导师点评">
                <span class="homework-side-text">我的作业</span>
              </li>
            </ul>
          </div>
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
  import  Dropzone   from '../../assets/js/dropzone';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import rights from '../../components/special/rights.vue';

  export default {
    data() {
      return {
        homework_id:'',
        homework:'',
        my_home:'',
        works:'',
        degreecourseid:'',
        module_courseid:'',
        userinfo:'',
        error_no:-1,
      }
    },
    created () {
      this.homework_id = this.$route.params.id; //作业id
      this.degreecourseid=Cookies.get('degree_id')
      this.module_courseid=Cookies.get('module_course_id')
      this.load(Vue.http.options.xy_root+'/api/v1/homework_detail/?homeworkid='+this.homework_id)
    },
    ready (){
      Dropzone.options.myAwesomeDropzone = {
        paramName: "file", // The name that will be used to transfer the file
        method:"post",
      //  headers:{"Authorization":this.$store.state.Authorization},
        params: {
          Authorization:this.$store.state.Authorization,
        //  homeworkid: this.homework_id,
          // degreecourseid: Cookies.get('degree_id'),
        //  module_courseid: Cookies.get('module_course_id'),
          },
      };
      var that=this
      Dropzone.options.myAwesomeDropzone = false;
      var myDropzone = new Dropzone("#myAwesomeDropzone", {
          headers:{"Authorization":this.$store.state.Authorization},
//          url: Vue.http.options.root+'/api/v1/homework_submit/',
          url: Vue.http.options.root+'/api/v1/homework_submit/?homeworkid='+this.homework_id+'&degreecourseid='+this.degreecourseid+'&module_courseid='+this.module_courseid,
          acceptedFiles:'.zip',
          maxFilesize: 5, // MB
          maxFiles: 2,

        }
        );
      myDropzone.on("success", function(file, response){
          if (response.error_no==0){
            toastr.success('作业提交成功！，导师会在24小时内进行批改');
          }
          else if(response.error_no==2){
            that.$store.state.login_state=false;
            that.$store.state.login_ing=true;
          }
          else {
            if(response.error_msg.userinfo){
              toastr.error(response.error_msg.msg);
           }
          }
      },
      );

      myDropzone.on(
        'addedfile',function (file) {
          console.log("file",file.name.substr(-3,))
          if(file.name.substr(-3,) != 'zip'){
            toastr.error('上传文件只支持ZIP格式！');
          }
          if (file.size>5 * 1024 * 1024){
            toastr.error('上传文件大小不能超过5M！');
          }
        }
      )
      myDropzone.on(
        'canceled',function (file) {
          toastr.error('上传中断了，请重试');
        }
      )

      //$('.side-main-cont').css('padding-top',0);
    },
    components:
      {rights},
    methods: {
      load (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then((res) => {
          console.log(res)
          if(res.data.error_no==0) {
            this.error_no=0
          //  alert('请求数据成功')
            this.homework = res.data.data;
            this.my_home = res.data.data.myhomework;
          }else if(res.data.error_no==2){
            this.$store.state.login_state=false;
          //  this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;
          }else if (res.data.error_no==403){
            this.error_no=403
            this.userinfo=res.data.error_msg
          }
          else {
            console.log(res.data.error_msg)
          }
        })
        .catch((res) => {
          console.log('接口请求失败')
        })
      },
      jump (index) {
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
  .my_performance {
    padding: 30px 35px;
  }
  .empty {
    padding: 30px 54px;
    font-size: 14px;
    color: #666;
    display: flex;
    align-items: center;
  }
  .empty img{
    padding-right: 10px;
  }
  .my_performance span{
    font-size: 16px;
    color: #FD7B4D;
  }
  .topic {
    padding-left: 35px;
    color: #5e5e5e;
  }
  .topic span{
    color: #4A4A4A;
  }
  .demand {
    padding: 30px 0 16px 35px;
    color: #5e5e5e;
  }
  article {
    background: #F5F7F9;
    border: 1px solid #D3D3D3;
    margin-left: 35px;
    padding: 20px 15px;
    color: #666;
  }
  .filename {
    padding: 45px 0 0 35px;
  }
  .file_project {
    margin: 14px 0;
    color: #333;
  }
  .file_project span:nth-of-type(2){
    margin-left: 320px;
  }
  .file_project span:nth-of-type(3){
    margin-left: 140px;
  }
  .filename ul li{
    padding: 20px 15px;
    color:#666;
    border-bottom: 1px solid #d3d3d3;
    position: relative;
  }
  .filename ul li:last-child{
    border-bottom: none;
  }
  .file_zip span:nth-of-type(2){
    position: absolute;
    left: 365px;
    top: 20px;
  }
  .file_zip span:nth-of-type(3){
    position: absolute;
    left: 563px;
    top: 20px;
  }
  .filename ul{
    border: 1px solid #d3d3d3;
  }
  .download {
    padding: 30px 54px;
  }
  .col{
    color:#5e5e5e;
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

  #dropzone {
    margin-bottom: 3rem;
    margin-left: 35px;
    border: 1px dashed #4A90E2;
    border-radius: 3px;
  }

  #dropzone .dropzone .dz-message {
    font-weight: 400;
    letter-spacing: 0;
    font-size: 18px;
    color: #333333;
    /*font-style: ;*/
  }
  .dropzone .dz-message .note {
    font-size: 14px;
    font-weight: 200;
    display: block;
    letter-spacing: 0;
    margin-top: 1.4rem; }

  .dropzone .dz-message {
    text-align: center;
    margin: 2em 0; }


  .dropzone, .dropzone * {
    box-sizing: border-box; }

  .dropzone {
    min-height: 170px;
    /*border: 2px solid rgba(0, 0, 0, 0.3);*/
    background: white;
    padding: 54px 54px; }
  .dropzone.dz-clickable {
    cursor: pointer; }
  .dropzone.dz-clickable * {
    cursor: default; }
  .dropzone.dz-clickable .dz-message, .dropzone.dz-clickable .dz-message * {
    cursor: pointer; }
  .dropzone.dz-started .dz-message {
    display: none; }
  .dropzone.dz-drag-hover {
    border-style: solid; }
  .dropzone.dz-drag-hover .dz-message {
    opacity: 0.5; }
  .dropzone .dz-message {
    text-align: center;
    margin: 2em 0; }
  .dropzone .dz-preview {
    position: relative;
    display: inline-block;
    vertical-align: top;
    margin: 16px;
    min-height: 100px;
  }
  .homework-tit {
    padding: 30px;
    font-size: 20px;
    color: #333333;
    border-bottom: 1px solid #EAEAEA;
  }
  .homework-submit-time {
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin-right: 40px;
    text-align: left;
  }
  .side-bot-tit {
    font-size: 18px;
    color: #4A4A4A;
    text-align: left;
    display: flex;
    align-items: center;
  }
  .side-bot-tit span {
    border-left: 3px solid #333333;
    padding-left: 30px;
    margin:31px 0;
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
  .box {
    padding-right: 20px;
  }
  .right-side-wrap {
    width: 400px;
    height: 412px;
    margin-left: 30px;
    background: #FFFFFF;
  }
  .item {
    border-top: 1px solid #E8E8E8;
    height:auto;
  }
  .item li {
    width: 100%;
    height: 55px;
    text-align: left;
    padding-left: 20px;
    line-height: 55px;
  }
  .item li:hover{
    background: #f5f7f9;
  }
  .itembox {
    width: 100%;
    background: #f5f7f9;
  }
</style>
