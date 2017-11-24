<template>
  <main style="width: 1201px; margin: 0 auto;">
    <ul class="message-menu-wrap">
      <li @click="this.link_index=0;" class="message-menu">
        <span :class="['message-menu-name',{'message-menu-active':this.link_index==0}]">站内信</span>
        <span v-if="webMsgNum" class="message-info-tip">{{webMsgNewsNum}}</span>
      </li>
      <li @click="this.link_index=1;" class="message-menu">
        <span :class="['message-menu-name',{'message-menu-active':this.link_index==1}]">课程通知</span>
        <span v-if="courseMsgNum" class="message-info-tip">{{courseMsgNewsNum}}</span>
      </li>
      <li @click="this.link_index=2;" class="message-menu">
        <span :class="['message-menu-name',{'message-menu-active':this.link_index==2}]">深科技通知</span>
        <span v-if="newsMsgNum" class="message-info-tip">{{newsMsgNewsNum}}</span>
      </li>
    </ul>
    <div class="message-main-list">
      <div v-show="this.link_index==0" class="message-item">
        <div style="display: flex; align-items: center; height: 80px; padding-left: 43px; font-size: 14px; color: #4A4A4A;">
          <span>您共收到<span class="message-num">{{webMsg.length}}</span>条系统通知，请注意查看。</span>
          <span @click="alreadyRead(0)" class="mark-read">全部标记为已读</span>
        </div>
        <ul style="width: 100%;">
          <!--is_read: false:未读; true: 已读-->
          <li v-for="web in webMsg" id="{{web.id}}" :class="['message-item-list',{'readed':web.is_read}]">
            <div>
              <span v-html="web.content">童鞋，您好！恭喜您收到一个5元优惠码，请您在2017年02月28日前使用，</span>
             <!-- <a style="color:#78C63F;" href="">点击查看>></a>-->
              <span style="display: block; color: #9D9D9D; margin-top: 7px;">{{web.date}}</span>
            </div>
          </li>
        </ul>
        <div class="message-total-num">
          <span>共显示{{webMsg.length}}条信息</span>
        </div>
      </div>
      <div v-show="this.link_index==1" class="message-item">
        <div style="display: flex; align-items: center; height: 80px; padding-left: 43px; font-size: 14px; color: #4A4A4A;">
          <span>您共收到<span class="message-num">{{courseMsg.length}}</span>条系统通知，请注意查看。</span>
          <span @click="alreadyRead(1)" class="mark-read">全部标记为已读</span>
        </div>
        <ul style="width: 100%;">
          <!--is_read: false:未读-->
          <li v-for="course in courseMsg" id="{{course.id}}" :class="['message-item-list',{'readed':course.is_read}]">
            <div>
              <span v-html="course.content">童鞋，您好！恭喜您收到一个5元优惠码，请您在2017年02月28日前使用，</span>
             <!-- <a style="color:#78C63F;" href="">点击查看>></a>-->
              <span style="display: block; color: #9D9D9D; margin-top: 7px;">{{course.date}}</span>
            </div>
          </li>
        </ul>
        <div class="message-total-num">
          <span>共显示{{courseMsg.length}}条信息</span>
        </div>
      </div>
      <div v-show="this.link_index==2" class="message-item">
        <div style="display: flex; align-items: center; height: 80px; padding-left: 43px; font-size: 14px; color: #4A4A4A;">
          <span>您共收到<span class="message-num">{{newsMsg.length}}</span>条系统通知，请注意查看。</span>
          <span @click="alreadyRead(2)" class="mark-read">全部标记为已读</span>
        </div>
        <ul style="width: 100%;">
          <!--is_read: false:未读-->
          <li v-for="news in newsMsg" id="{{news.id}}" :class="['message-item-list',{'readed':news.is_read}]">
            <div>
              <span v-html="news.content">童鞋，您好！恭喜您收到一个5元优惠码，请您在2017年02月28日前使用，</span>
             <!-- <a style="color:#78C63F;" href="">点击查看>></a>-->
              <span style="display: block; color: #9D9D9D; margin-top: 7px;">{{news.date}}</span>
            </div>
          </li>
        </ul>
        <div class="message-total-num">
          <span>共显示{{newsMsg.length}}条信息</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex'

  export default {
    data() {
      return {
        link_index: 0,
        webMsg: '',
        courseMsg: '',
        newsMsg: '',
        webMsgNum: '',
        courseMsgNum: '',
        newsMsgNum: '',
        webMsgNewsNum: '',
        courseMsgNewsNum: '',
        newsMsgNewsNum: ''
      }
    },
    props: {},
    computed: {
    },
    components: {},
    ready: function () {
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.getMessage();
    },
    methods: {
      readed: function($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url='';
        if(this.link_index==0){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol='+this.webMsg[$index].id;
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){

                this.webMsg[$index].is_read=true;

              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.link_index==1){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol='+this.courseMsg[$index].id;
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){

                this.courseMsg[$index].is_read=true;

              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.link_index==2){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol='+this.newsMsgNum[$index].id;
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){
                this.newsMsgNum[$index].is_read=true;

              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }

      },
      getMessage: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/personal/web_messages/')
          .then(function(response){

            if(response.data.error_no==0){

              this.webMsg=response.data.data.web_notice.notice_list;
              this.courseMsg=response.data.data.course_notice.notice_list;
              this.newsMsg=response.data.data.article_notice.notice_list;
              this.webMsgNum=response.data.data.web_notice.has_new;
              this.courseMsgNum=response.data.data.course_notice.has_new;
              this.newsMsgNum=response.data.data.article_notice.has_new;
              this.webMsgNewsNum=response.data.data.web_notice.new_num;
              this.courseMsgNewsNum=response.data.data.course_notice.new_num;
              this.newsMsgNewsNum=response.data.data.article_notice.new_num;

            }else if(response.data.error_no==2){

              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      alreadyRead: function (option) {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url='';
        if(this.link_index==0){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=web_notice';
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){

                this.webMsgNum=false;

              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.link_index==1){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=course_notice';
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){
                this.courseMsgNum=false;
              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.link_index==2){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=article_notice';
          this.$http.put(url)
            .then(function(response){

              if(response.data.error_no==0){
                this.newsMsgNum=false;

              }else if(response.data.error_no==2){

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;
              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }
      },

    }
  }
</script>
<style scoped>
  .message-main-list {
    width: 100%;
    margin: 0 auto;
  }
  .mark-read {
    display: block;
    width: 91px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    background: #F9F9F9;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    font-size: 10px;
    color: #9D9D9D;
    margin-left: auto;
    margin-right: 18px;
  }
  .message-menu-wrap {
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    margin: 40px auto 0;
    background: #F7F7F7;
    padding-left: 43px;
  }
  .message-main-list {
    padding-bottom: 90px;
  }
  .message-menu {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    height: 70px;
    font-size: 14px;
    color: #9B9B9B;
    margin-right: 48px;
  }
  .message-menu-name {
    display: flex;
    align-items: center;
    height: 70px;
  }
  .message-menu-active {
    color: #333333;
    border-bottom: 1px solid #EC6349;
  }
  .message-num {
    color: #EC6349;
  }
  .message-item-list {
    display: flex;
    list-style: none;
    font-size: 14px;
    color: #4A4A4A;
    width: 100%;
    height: 80px;
    padding-left: 43px;
    align-items: center;
    border-top: 1px solid #E9E9E9;
  }
  .message-total-num {
    font-size: 10px;
    color: #5E5E5E;
    width: 100%;
    padding-top: 24px;
    padding-left: 43px;
    border-top: 1px solid #E9E9E9;
  }
  .message-info-tip {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: #EC6349;
    font-size: 10px;
    color: #FFFFFF;
    margin-top: -20px;
    margin-left: -3px;
  }
  .readed{
    color: #9B9B9B;
  }
</style>
