
<template>
  <div class="header">
    <div class="header_cont">
       <img src="../../assets/img/logo.png" class="oldboy">
       <nav class="nav">
         <span v-link="{name:'home'}">首页</span>
         <span v-link="{name:'course'}">课程</span>
         <span v-link="{name:'micro-professional'}">LuffyX学位</span>
         <span v-link="{name:'news'}">深科技</span>
       </nav>
       <!-- 登陆前 -->
        <div class="register" v-show="!$store.state.login_state">
          <span @click="entry()">登陆</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span @click="register()">注册</span>
        </div>
       <!-- end -->
       <!-- 登陆后 -->
        <div class="nav_right" v-show="$store.state.login_state">
          <div class="nav_study" @mousemove="showStudy" @mouseout="hideStudy" v-link="{name:'study'}">
            <img src="../../assets/img/我的学习.svg" alt="" v-show="studyBefore">
            <img src="../../assets/img/我的学习-黑.svg" alt="" v-show="studyAfter">
            <p v-show="studyCenter">点击可到您的学习中心</p>
          </div>
          <div class="location" @mousemove="showNews" @mouseout="hideNewImg">
            <img src="../../assets/img/消息.svg" alt="" v-show="newBefore">
            <img src="../../assets/img/消息-黑.svg" alt="" @mousemove="showNews" v-show="newAfter" @mouseout="hideNewImg">
            <span v-show="shopCartNumber>0 && shopCartNumber<100" class="info-num-tip">{{shopCartNumber}}</span>
            <span v-show="shopCartNumber>=100" class="info-num-tip"><span>...</span></span>
          </div>
          <div class="nav_shopp" @mousemove="showShopp" @mouseout="hideShopp" v-link="{name:'shopping-cart'}">
            <img src="../../assets/img/购物车.svg" alt="" v-show="shoppBefore">
            <img src="../../assets/img/购物车-黑.svg" alt="" v-show="shoppAfter">
            <span v-show="noticeNumber>0 && noticeNumber<100" class="info-num-tip">{{noticeNumber}}</span>
            <span v-show="noticeNumber>=100" class="info-num-tip"><span>...</span></span>
            <p v-show="shopping">点击可到您的购物车</p>
          </div>

          <div class="nav_account" @mousemove="showAccount" @mouseout="hideAccount">
            <section class="nav_img">
              <img :src="userImg" alt="">
            </section>
            <section class="my_account" v-show="myAccount" @mousemove="showAccount" @mouseout="hideAccount">
              <span v-link="{name:'mine-profile'}"><b><img :src="userImg">{{username}}</b><i class="fa fa-angle-right sec-arrow-icon" aria-hidden="true"></i></span>
              <span v-link="{name:'mine-account'}">我的账户 <i class="fa fa-angle-right sec-arrow-icon"></i></span>
              <span v-link="{name:'mine-older'}">我的订单 <i class="fa fa-angle-right sec-arrow-icon"></i></span>
              <span v-link="{name:'coupon'}">我的优惠券 <i class="fa fa-angle-right sec-arrow-icon"></i></span>
              <span v-link="{name:'mine-collection'}">我的收藏 <i class="fa fa-angle-right sec-arrow-icon"></i></span>
              <span @click="exit()">退出<i class="fa fa-angle-right sec-arrow-icon"></i></span>
            </section>
          </div>
        </div>
        <!-- 消息 -->
        <div v-show="news" class="news" @mousemove="showNews" @mouseout="hideNews">
          <ul class="project">
            <li @click="this.msg_index=0">
              <img v-show="this.msg_index!=0" src="../../assets/img/netState.png" width="24" height="17" alt="">
              <img v-show="this.msg_index==0" src="../../assets/img/netState-active.png" width="24" height="17" alt="">
              <p :class="['msg-tit',{'msg-tit-active':this.msg_index==0}]">站内信</p>
              <i v-show="webMsgNum" class="inform"></i>
            </li>
            <span></span>
            <li @click="this.msg_index=1">
              <img v-show="this.msg_index!=1" src="../../assets/img/course-msg.png" width="19" height="17" alt="">
              <img v-show="this.msg_index==1" src="../../assets/img/course-msg-active.png" width="19" height="17" alt="">
              <p :class="['msg-tit',{'msg-tit-active':this.msg_index==1}]">课程通知</p>
              <i v-show="courseMsgNum" class="inform"></i>
            </li>
            <span></span>
            <li @click="this.msg_index=2">
              <img v-show="this.msg_index!=2" src="../../assets/img/news-msg.png" width="19" height="17" alt="">
              <img v-show="this.msg_index==2" src="../../assets/img/news-msg-active.png" width="19" height="17" alt="">
              <p :class="['msg-tit',{'msg-tit-active':this.msg_index==2}]">深科技通知</p>
              <i v-show="newsMsgNum" class="inform"></i>
            </li>
          </ul>
          <div class="news_cont">
            <div v-show="this.msg_index==0">
              <ul v-show="this.webMsg.length>0" class="news_project">
                <li v-for="msg in webMsg" id="{{msg.id}}" v-html="msg.content" class="msg-item"></li>
              </ul>
              <div v-show="this.webMsg.length==0" class="msg-main-cont" style="overflow-y: hidden;">
                <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                  <img src="../../assets/img/no-msg.png" width="69" height="75" alt="">
                  <span style="font-size: 15px;color: #9D9D9D; letter-spacing: 0.24px; display: block; margin-top: 22px;">还没有消息</span>
                </div>
              </div>
            </div>
            <div v-show="this.msg_index==1" class="news_project">
              <ul v-show="this.courseMsg.length>0">
                <li v-for="course_msg in courseMsg" v-html="course_msg.content" id="{{course_msg.id}}" class="msg-item"></li>
              </ul>
              <div v-show="this.courseMsg.length==0" class="msg-main-cont" style="overflow-y: hidden;">
                <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                  <img src="../../assets/img/no-msg.png" width="69" height="75" alt="">
                  <span style="font-size: 15px;color: #9D9D9D;letter-spacing: 0.24px; display: block; margin-top: 22px;">还没有消息</span>
                </div>
              </div>
            </div>
            <div v-show="this.msg_index==2" class="news_project">
              <ul v-show="this.newsMsg.length>0">
                <li v-for="news_msg in newsMsg" v-html="news_msg.content" id="{{news_msg.id}}" class="msg-item">
                </li>
              </ul>
              <div v-show="this.newsMsg.length==0" class="msg-main-cont" style="overflow-y: hidden;">
                <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                  <img src="../../assets/img/no-msg.png" width="69" height="75" alt="">
                  <span style="font-size: 15px;color: #9D9D9D;letter-spacing: 0.24px; display: block; margin-top: 22px;">还没有消息</span>
                </div>
              </div>
            </div>
          </div>
          <div class="news_bottom">
            <span class="msg-bot-text" @click="alreadyRead()">标记为已读</span>
            <span class="msg-bot-text" v-link="{name:'message'}">查看所有消息</span>
          </div>
        </div>
       <!-- end -->
    </div>
  </div>
  <div v-show="$store.state.login_ing">
    <login></login>
  </div>
  <div v-show="$store.state.register_ing">
    <register></register>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Vuex from 'vuex'
  import login from '../../components/login/login.vue'
  import register from '../../components/register/register.vue'
  import bus from '../../assets/js/evenBus'
  import { mapState } from 'vuex'
export default {
  components: {
    login,
    register
  },
  data () {
    return {
      navColor: false,
      studyCenter: false,
      myAccount: false,
      black_letter: false,
      letter: false,
      account:false,
      science: false,
      userImg:'11',
      username:'',
      shopCartNumber:'',
      noticeNumber:'',
      news: false,
      shopping: false,
      studyBefore: true,
      studyAfter: false,
      newBefore: true,
      newAfter: false,
      shoppBefore: true,
      shoppAfter: false,
      index:'',
      link_index: 0,
      msg_index: 0,
      webMsg: '',
      courseMsg: '',
      newsMsg: '',
      webMsgNum: '',
      courseMsgNum: '',
      newsMsgNum: '',
      imgurl: '',
    }
  },
  beforeMount () {
    console.log(this.$route.path)
  },
//  created () {
//
//  },
  watch: {
    '$route' (to, from) {
      console.log(this.getStatus(this.$route.path));
      this.news = false;
      if(this.getStatus(this.$route.path)=='single') {
        this.$store.state.foot_show=true;
      }else {
        this.$store.state.foot_show=false;
      }
    },
    '$store.state.login_state' () {
      if(this.$store.state.login_state) {
        this.getMessage();
      }
    }
  },
  ready () {
    this.userImg=Cookies.get('userImg')
    this.username=Cookies.get('username')
    if(Cookies.get('token')) {
      this.$store.state.login_state=true;
      Cookies.set('token',Cookies.get('token'));
    }else{
      this.$store.state.login_state=false;
    }

    var that=this
    bus.$on("loginEvent",function(data){
      if (data=that.$route.name){
        that.userImg=Cookies.get('userImg')
        that.username=Cookies.get('username')
        that.shopCartNumber=Cookies.get('shopCartNumber')
        that.noticeNumber=Cookies.get('noticeNumber')
      }
    });
  },
  methods: {
    showStudy () {
      this.studyCenter = true
      this.studyBefore = false
      this.studyAfter = true
      if (this.studyCenter == true) {
        this.myAccount = false
        this.news = false
      }
    },
    hideStudy () {
      this.studyCenter = false
      this.studyBefore = true
      this.studyAfter = false
    },
    showAccount () {
      this.myAccount = true
      if (this.myAccount == true) {
        this.news = false
      }
    },
    hideAccount () {
      this.myAccount = false
    },
    showShopp () {
      this.shopping = true
      this.shoppBefore = false
      this.shoppAfter = true
      if (this.shopping == true) {
        this.myAccount = false
        this.news = false
      }
    },
    hideShopp () {
      this.shopping = false
      this.shoppBefore = true
      this.shoppAfter = false
    },
    showNews () {
      this.news = true
      this.newBefore = false
      this.newAfter = true
      if (this.news == true) {
        this.myAccount = false
      }
    },
    hideNews () {
      this.news = false
      this.newBefore = true
      this.newAfter = false
    },
    hideNewImg () {
      this.newBefore = true
      this.newAfter = false
      this.news = false
    },
    // 登陆
    entry () {
      this.$store.state.login_ing = true
    },
    // 注册
    register () {
      this.$store.state.login_ing=false
      this.$store.state.register_ing=true
    },
    getStatus (urlStr) {
      var urlStrArr = urlStr.split('/');
      return urlStrArr[urlStrArr.length - 1]
    },
    //退出
    exit () {
      this.$http.get(Vue.http.options.xy_root+'/api/v1/account/logout/')
        .then(function(res){
          if(res.data.error_no == 0){
            this.$store.state.login_state=false;
            Cookies.set('token','');
            Cookies.set('username','');
            Cookies.set('userImg','');
            this.$route.router.go({'name':'home'});
          }else {
            console.log(res.data.error_msg)
          }
        })
        .catch(function(res) {
          console.log('服务器正在打盹~')
        })
    },
    getMessage () {
      Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
      this.$http.get(Vue.http.options.root+'/api/v1/personal/web_messages/').then(res => {
          if(res.data.error_no == 0){
            this.webMsg = res.data.data.web_notice.notice_list;
            this.courseMsg = res.data.data.course_notice.notice_list;
            this.newsMsg = res.data.data.article_notice.notice_list;
            this.webMsgNum = res.data.data.web_notice.has_new;
            this.courseMsgNum = res.data.data.course_notice.has_new;
            this.newsMsgNum = res.data.data.article_notice.has_new;
          } else if (res.data.error_no == 2){
            this.$store.state.login_state = false;
            this.$store.state.login_ing = true;
          }else {
            console.log(res.data.error_msg)
          }
        })
        .catch(function(res) {
          console.log('服务器正在打盹~')
        })
      },
      alreadyRead () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url='';
        if(this.msg_index == 0){
          url = Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=web_notice';
          this.$http.put(url).then(res => {
              if(res.data.error_no == 0){
                this.webMsgNum = false;
              }else if(res.data.error_no == 2){
                // this.$route.router.go({name: 'home'});
                this.$store.state.login_ing = true;
              }else {
                console.log(res.data.error_msg)
              }
            })
            .catch(function(res) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.msg_index == 1){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=course_notice';
          this.$http.put(url).then(res => {
              if(res.data.error_no == 0){
                this.courseMsgNum=false;
              }else if(res.data.error_no == 2){
                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing = true;
              }else {
                console.log(res.data.error_msg)
              }
            })
            .catch(function(res) {
              console.log('服务器正在打盹~')
            })
        }
        if(this.msg_index == 2){
          url=Vue.http.options.root+'/api/v1/personal/web_messages/?notice_symbol=article_notice';
          this.$http.put(url).then(res => {
              if(res.data.error_no == 0){
                this.newsMsgNum = false;
              }else if(res.data.error_no == 2){
                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing = true;
              }else {
                console.log(res.data.error_msg)
              }
            })
            .catch(function(res) {
              console.log('服务器正在打盹~')
            })
        }
      }
  },
}
</script>

<style scoped>
  @import "../../assets/css/font-awesome.min.css";
  @media screen and (min-width:1800px){
    .nav {
      padding-left: 8%;
    }
    .news {
      margin-right: 24.5%;
    }
    .my_account {
      position: absolute;
      right: -32%;
    }
  }
  .header{
    width: 100%;
    height: 100%;
    background: #fff;
    box-shadow: 0 2px 4px 0 #c9c9c9;
    position: relative;
    margin: 0 auto;
  }
  .header_cont{
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }
  .oldboy{
    width:40px;
    height:40px;
  }
  .nav {
    height: 100%;
    font-size: 14px;
    color: #7f7f7f;
    display: flex;
    cursor: pointer;
    position:absolute;
    left:33%;
  }
  .nav_img img{
    border-radius: 50%;
  }
  .nav span {
    width: 70px;
    text-align: center;
    height: 100%;
    line-height:80px;
    margin-right: 30px;
  }
  .nav span:nth-of-type(3) {
    /* width: 88px; */
    width: 100px;
    margin-left: 15px;
    margin-right: 45px;
  }
  .nav span:hover{
    border-bottom:3px solid #7ED321;
    color: #000;
    /* animation: mymove 500ms ease normal; */
  }
  .nav_right {
    display: flex;
    height: 100%;
    line-height: 40px;
    position: relative;
  }
  .nav_right div{
    padding: 20px;
    cursor: pointer;
  }
  .nav_right img{
    width: 22px;
    height: 22px;
    cursor: pointer;
  }
  .location {
    position: relative;
  }
  .info-num-tip {
    position: absolute;
    left: 97px;
    top: 24px;
    width:14px;
    height: 14px;
    background: red;
    border-radius: 50%;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 14px;
  }
  .nav_study p{
    position: absolute;
    right: 40%;
    bottom: -50px;
    font-size: 12px;
    color: #9B9B9B;
    width: 221px;
    height: 50px;
    background: #fff;
    text-align: center;
    z-index: 9999;
    line-height: 50px;
    box-shadow: 0px 2px 4px 0px #E8E8E8;
    border-top: 2px solid #D0D0D0;
    border-radius: 3px;
  }
  .nav_shopp p{
    position: absolute;
    left:19%;
    top:80px;
    font-size: 12px;
    color: #9B9B9B;
    width: 221px;
    height: 50px;
    background: #fff;
    text-align: center;
    z-index: 10000;
    line-height: 50px;
    box-shadow: 0px 2px 4px 0px #E8E8E8;
    border-top: 2px solid #D0D0D0;
    border-radius: 3px;
  }
  .my_account {
    position: absolute;
    right: -20%;
    bottom: -262px;
    font-size: 12px;
    width:221px;
    height: auto;
    background: #fff;
    z-index: 9999;
    box-shadow: 0px 2px 4px 0px #E8E8E8;
    border-top: 2px solid #D0D0D0;
  }
  .my_account span {
    display: block;
    height: 40px;
    color: #4a4a4a;
    padding: 10px 20px 10px 25px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
  .my_account span:nth-of-type(1) {
    height: 60px;
  }
  .my_account span:hover {
    background: #F5F7F9;
  }
  .my_account span i {
    float: right;
    color: #626262;
    font-size: 14px;
  }
  .my_account span img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
  b {
    font-weight:normal
  }
  b img {
    margin-right: 18px;
  }
  .news {
    width:363px;
    height:400px;
    position: absolute;
    right: 1.2%;
    top: 80px;
    background:#fff;
    z-index: 9999;
    box-shadow: 0px 2px 4px 0px #E8E8E8;
    border-top: 2px solid #D0D0D0;
    border-radius: 3px;
  }
  .news .project {
    display: flex;
    font-size:12px;
    border-bottom:1px solid #ebeef5;
    position: absolute;
    left:0;
    top:0;
    width: 100%;
  }
  .news .project li{
    flex: 1;
    text-align: center;
    margin-top:20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: #9d9d9d;
    position: relative;
  }
  .inform {
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #FA6240;
    position: absolute;
    top: -4px;
    left: 76px;
  }
  .news ul li img{
    width: 20px;
    height: 16px;
    margin-bottom: 5px;
  }
  .news ul span{
    width: 1px;
    height: 30px;
    background: #ebeef5;
    margin-top: 22px;
  }
  .news .news_bottom{
    width:100%;
    height: 40px;
    box-shadow: 0 -2px 4px 0 #f2f2f2;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    align-items: center;
    padding: 0 20px;
    color: #9faecb;
  }
  .news .news_bottom span{
    cursor: pointer;
  }
  .news_cont {
    width: 100%;
    height: 286px;
    overflow: scroll;
    position: absolute;
    left:0;
    top:74px;
  }
  .news_cont .news_project li{
    padding: 10px 0;
    border-bottom: 1px solid #ebeef5;
    padding-left: 20px;
    white-space:normal;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .news_cont .news_project li:hover{
    background: #F5F7F9;
  }
  .msg-tit-active {
    color: #333333;
  }
  /* study切换样式 */
  .studyBac {
    color: #fff;
    background: #000;
    width: 100%;
    height: 100%;
    position: relative;
  }
  .navColor {
    color: #fff;
  }
  /* 登陆前 */
  .register {
    font-size: 14px;
    color: #7f7f7f;
    display: flex;
    align-items: center;
  }
  .register span{
    cursor: pointer;
  }
  /* end */
</style>

