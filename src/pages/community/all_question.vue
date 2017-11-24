<template>
  <div style="width:100%;">
    <div style="width: 1200px; margin: 0 auto;">
      <ol style="display: flex; padding: 24px 0; margin: 0;">
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">我的学习</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;"><a v-link="{name:'study'}">LuffyX学位</a>&nbsp;&gt;&nbsp;</li>
        <li class="breadcrumb_text" style="list-style: none;">专业回答</li>
      </ol>
    </div>
    <div style="width: 1200px; margin: 0 auto; display: flex;">
      <div class="cont-main">
        <header class="play-header">
          <span class="play-header-title" v-link="{name:'community-mine'}">我的问答</span>
          <span class="play-header-title play-header-title-active" v-link="{name:'community-all'}" style="margin-left: 30px;">全部问题</span>
        </header>
        <div style="width: 814px;">
          <ul class="play-ques-list">
            <!--同学社区-问题-列表-->
            <li class="play-ques-item question-list" style=" padding-top: 49px;"  v-for="(q_index,question) in questionsList" @mouseover="onEnter($index)" @mouseout="onLeave()"  id="{{question.id}}">
              <div class="play-ques-item-wrap">
                <div>
                  <img :src="question.userinfo.heading" width="38" height="38" alt="">
                </div>
                <div style="margin-left: 15px; width: 755px;">
                  <div style="display: flex;">
                    <span class="play-ques-user-name">{{question.userinfo.username}}</span>
                    <span class="play-ques-date">{{question.date}}</span>
                    <!--全部问题没有删除，只做问题展示-->
                    <!--<div style="">-->
                      <!--<img v-if="data.img==q_index" style="position: relative; left: 630px;" @click="delete_question_warn($index)" src="../../assets/img/close_icon.png" width="16" height="16" alt="删除ICON">-->
                      <!--&lt;!&ndash;删除问题&ndash;&gt;-->
                      <!--<div class="delete-video-wrap">-->
                        <!--<div style="padding: 20px 0 10px 20px; width: 190px; display: flex;">-->
                          <!--<img src="../../assets/img/warn-icon.png" width="14" height="14" alt="">-->
                          <!--<span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该问题和相关回复吗？</span>-->
                        <!--</div>-->
                        <!--<div class="delete-btn-wrap">-->
                          <!--<button class="delete-cancel" @click="delete_cancel(q_index)">取消</button>-->
                          <!--<button class="delete-sure" @click="delete_question(q_index)">确定</button>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                  </div>
                  <h3 class="play-ques-tit">{{question.name}}</h3>
                  <div class="play-ques-detail">
                  <span class="play-ques-cont">
                     {{question.content}}
                  </span>
                    <!--<span class="play-look-ques">查看更多</span>-->
                  </div>
                  <div style="display: flex; margin-top: 20px;">
                    <div style="height: 25px;">
                      <a class="collapse-lable" role="button" data-toggle="collapse" :href="'#collapseExample'+question.id">
                        <span class="play-ques-state">{{question.status}}</span>
                        <img src="../../assets/img/more-icon.png" width="7" height="12" alt="">
                      </a>
                    </div>
                    <div :class="['same-ask',{'same-ask-active':this.questionsList[q_index].has_click_same}]" @click="agree_ask(q_index)">
                      同问&nbsp;|&nbsp;{{question.enquiries_count}}
                    </div>
                  </div>
                </div>
              </div>
              <!--同学社区-问题-老师回答-列表-->
              <ul v-if="question.answers.length>0" style="padding-left: 67px;">
                <li class="collapse" id="collapseExample{{question.id}}">
                  <div v-for="(item,answer) in question.answers" id="{{answer.id}}" class="play-ques-item answer-list">
                    <div class="play-reply" style="display: flex;">
                      <div>
                        <img :src="answer.userinfo.headimg" width="38" height="38" alt="">
                      </div>
                      <div style="margin-left: 15px; width: 664px;">
                        <span class="play-ques-user-name">{{answer.userinfo.username}}</span>
                        <span class="play-ques-date">{{answer.answer_date}}</span>
                        <div class="play-ques-detail">
                        <span class="play-ques-cont" style="text-align: justify;">
                          {{answer.content}}
                        </span>
                        </div>
                        <div style="display: flex; margin-top: 20px; height: 20px;">
                          <div>
                            <!--<span @click="answer_reply(q_index,item)" style="cursor: pointer;" class="reply-index play-ques-state">回复</span>-->
                          </div>
                          <div style="display: flex; align-items: center; margin-left: auto;">
                            <div @click="answer_like(q_index,item)" style="cursor: pointer; display: flex; align-items: center; font-size: 12px; color: #999999;">
                              <img src="../../assets/img/agree_icon.png" width="14" height="14" alt="">
                              <span style="display: inline-block; margin-left: 5px;">{{answer.agree_number}}</span>
                            </div>
                            <div @click="answer_unlike(q_index,item)" style="cursor: pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                              <img src="../../assets/img/disagree_icon.png" width="14" height="14" alt="">
                              <span style="display: inline-block; margin-left: 5px;">{{answer.disagree_number}}</span>
                            </div>
                          </div>
                        </div>
                        <div class="reply-input answer-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                          <div style="height: 48px; padding: 0 25px;">
                            <input v-model="data.reply" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                            <!--<div style="outline: none; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" contenteditable="true"></div>-->
                          </div>
                          <div style="position: absolute; margin-top: -48px;">
                            <div @click="replying_answer(q_index,item)" style="cursor: pointer; position: absolute; margin-left: 548px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--同学社区-问题-老师回答-回复-列表-->
                    <ul v-if="answer.answer_comments.length>0" style="padding: 0;">
                      <li v-for="(list,comment) in answer.answer_comments" id="{{comment.id}}" class="play-ques-item play-reply" style="display: flex;">
                        <div>
                          <img :src="comment.userinfo.headimg" width="38" height="38" alt="">
                        </div>
                        <div style="margin-left: 15px; width: 664px;">
                        <span class="play-ques-cont" style="color:#666;">
                          <span class="play-ques-user-name">{{comment.userinfo.username}}</span>
                            &nbsp;回复&nbsp;
                          <span class="play-ques-user-name">{{comment.reply_to}}</span>
                        </span>
                          <span class="play-ques-date">{{comment.date}}</span>
                          <div class="play-ques-detail">
                            <span class="play-ques-cont" style="text-align: justify;">
                              {{comment.comment}}
                            </span>
                          </div>
                          <!--<div style="margin-top: 20px; height: 20px;">-->
                            <!--&lt;!&ndash;全部问题，回复和删除先注销，这边不能进行回复和删除&ndash;&gt;-->
                            <!--<span @click="comment_reply(q_index,item,list)" class="play-ques-state" style="cursor: pointer;">回复</span>-->
                            <!--<span @click="delete_comment_warn(q_index,item,list)" class="play-ques-state" style="margin-left: 5px; cursor: pointer;">删除</span>-->
                            <!--&lt;!&ndash;删除回复&ndash;&gt;-->
                            <!--<div class="delete-comment-wrap">-->
                              <!--<div style="padding: 20px 0 10px 20px; width: 190px; display: flex;">-->
                                <!--<img src="../../assets/img/warn-icon.png" width="14" height="14" alt="">-->
                                <!--<span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该条回复吗？</span>-->
                              <!--</div>-->
                              <!--<div class="delete-btn-wrap">-->
                                <!--<button class="delete-cancel" @click="delete_cancel(q_index,item,list)">取消</button>-->
                                <!--<button class="delete-sure" @click="delete_comment(q_index,item,list)">确定</button>-->
                              <!--</div>-->
                            <!--</div>-->
                          <!--</div>-->
                          <div class="reply-input comment-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                            <div style="height: 48px; padding: 0 25px;">
                              <input v-model="data.reply" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                              <!--<div style="outline: none; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" contenteditable="true"></div>-->
                            </div>
                            <div style="position: absolute; margin-top: -48px;">
                              <div @click="replying_comment(q_index,item,list)" style="cursor: pointer; position: absolute; margin-left: 548px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="side-main">
        <div class="play-side-course">
          <div class="titWrap">
            <b class="play-side-model-icon"></b>
            <h4 class="model-tit">最新问题</h4>
          </div>
          <ul v-if="new_questions.length>0" style="padding: 0 32px;">
            <li v-for="late in new_questions" id="{{late.id}}" style="list-style: none; padding: 20px 0; border-bottom: 1px solid #EDEDED; ">
              <div style="display: flex; align-items: center; margin-bottom: 9px;">
                <img :src="late.user_avatar" width="24" height="24" alt="">
                <span class="new-name">{{late.account}}</span>
                <span class="new-public-time">{{late.date}}</span>
              </div>
              <h4 class="new-title">{{late.name}}</h4>
              <p class="new-dec">{{late.content}}</p>
            </li>
          </ul>
        </div>
        <div class="play-side-model">
          <div class="titWrap">
            <b class="play-side-model-icon"></b>
            <h4 class="model-tit">热门问题</h4>
          </div>
          <ul v-if="hot_questions.length>0" style="padding: 0 30px;">
            <li v-for="hots in hot_questions" id="{{hots.id}}" style="list-style: none; padding-top: 20px; display: flex; ">
              <span :class="['list-num-icon',{'hot-bkg':hots.ordinal_num>=4}]">{{hots.ordinal_num}}</span>
              <h4 class="new-title">{{hots.name}}</h4>
            </li>
          </ul>
        </div>
        <div class="play-side-course" >
          <div class="titWrap">
            <b class="play-side-model-icon"></b>
            <h4 class="model-tit">精彩回答</h4>
          </div>
          <ul v-if="good_answers.length>0" style="padding: 0 32px;">
            <li v-for="ans in good_answers" id="{{ans.id}}" style="list-style: none; padding: 20px 0; border-bottom: 1px solid #EDEDED; ">
              <div style="display: flex; align-items: center; margin-bottom: 9px;">
                <img :src="ans.user_avatar" width="40" height="40" alt="">
                <div style="margin-left: 10px;">
                  <span class="good-answer-name">{{ans.username}}</span>
                  <span class="new-public-time">{{ans.answer_date}}</span>
                </div>
              </div>
              <h4 class="good-answer-title">{{ans.question_title}}</h4>
              <p class="good-answer-dec">{{ans.content}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        degree_id: '',
        index_number: '',
        questionsList:'',
        community: false,
        community_show: false,
        new_questions: '',
        hot_questions: '',
        good_answers: '',
        data:{
          "img": '',
          comment_img:'',
          ask: '',
          title: '',
          content: '',
          reply: '',
          reply_com: ''
        }
      }
    },
    ready: function(){
      this.degree_id = this.$route.params.id;

      this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');
      this.loadNewQuestion(Vue.http.options.xy_root+'/api/v1/study/new_questions/');
      this.loadHotQuestion(Vue.http.options.xy_root+'/api/v1/study/enquiries_questions/');
      this.loadGoodAnswer(Vue.http.options.xy_root+'/api/v1/study/agree_answers/');
    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.questionsList=response.data.data.result;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })

      },
      loadNewQuestion: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {

              this.new_questions=response.data.data;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      loadHotQuestion: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {

              this.hot_questions=response.data.data;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      loadGoodAnswer: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {

              this.good_answers=response.data.data;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*删除一级评论、社区问题提醒*/
//      delete_question_warn: function (q_index) {
//
//        $('.delete-video-wrap:eq('+q_index+')').fadeIn();
//      },
      /*删除社区答案回复提醒*/
      delete_comment_warn: function (q_index,item,list) {

        $('.question-list:eq('+q_index+')').find('.reply-index:eq('+item+')').parents('.answer-list').find('.delete-comment-wrap:eq('+list+')').fadeIn();

      },
      /*取消删除*/
      delete_cancel: function () {
        $('.delete-video-wrap').fadeOut();
        $('.delete-comment-wrap').fadeOut();
      },
      /*删除社区问题*/
      delete_question: function (index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.delete(Vue.http.options.xy_root+'/api/v1/section_questions/?question_id='+this.questionsList[index].id)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');

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
      },
      /*删除社区答案回复*/
      delete_comment: function (index,item,list) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.delete(Vue.http.options.xy_root+'/api/v1/degree_bbs/comment/?answer_comment_id='+this.questionsList[index].answers[item].answer_comments[list].id)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');

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
      },
      /*同问*/
      agree_ask: function (index) {
        this.data.ask=index;
        if(this.questionsList[index].has_click_same){
          toastr.info('您已同问过该问题了！');
          return
        }
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.put(Vue.http.options.xy_root+'/api/v1/degree_bbs/?question_id='+this.questionsList[index].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.success('同问成功');
              this.questionsList[index].has_click_same=true;
              this.questionsList[index].enquiries_count+=1;


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
      },
      /*发表问题*/
      classAsking: function () {
        var params={
          degree_course_id: this.degree_id,
          name: this.data.title,
          content: $('.question-input-content').text(),
          question_type: 1
        };
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.post(Vue.http.options.xy_root+'/api/v1/degree_bbs/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');


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
      },
      /*对老师答案发表回复显示回复框*/
      answer_reply: function (q_index,item) {
        $('.reply-input').css('display','none');
        $('.question-list:eq('+q_index+')').find('.answer-reply:eq('+item+')').fadeIn();
      },
      /*对回复发表回复显示回复框*/
      comment_reply: function (q_index,item,list) {
        $('.reply-input').css('display','none');
        $('.question-list:eq('+q_index+')').find('.answer-reply:eq('+item+')').parents('.answer-list').find('.comment-reply:eq('+list+')').fadeIn();
      },
      onEnter:function($index) {

        var $this=this;
        setTimeout(function(){
          $this.data.img=$index;
          $this.data.comment_img=$index;
        },10);
      },
      onLeave:function() {
        var $this=this;
        setTimeout(function(){
          $this.data.img=null;
          $this.data.comment_img=null;
        },10)
      },
      /*对老师答案发表回复*/
      replying_answer: function (index,item) {

        var params={
          answer_id: this.questionsList[index].answers[item].id,
          comment: this.data.reply,
          degree_course_id: this.degree_id,
          reply_to_id: null
        };
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.post(Vue.http.options.xy_root+'/api/v1/degree_bbs/comment/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');


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
      },
      /*对回复发表回复*/
      replying_comment: function (index,item,list) {

        var params={
          answer_id: this.questionsList[index].answers[item].id,
          comment: this.data.reply,
          degree_course_id: this.degree_id,
          reply_to_id: this.questionsList[index].answers[item].answer_comments[list].id
        };
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.post(Vue.http.options.xy_root+'/api/v1/degree_bbs/comment/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');


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
      },
      answer_like: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/answer/agree/?aid='+this.questionsList[q_index].answers[item].id)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      answer_unlike: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/answer/disagree/?aid='+this.questionsList[q_index].answers[item].id)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.load(Vue.http.options.xy_root+'/api/v1/degree_bbs/?degree_course_id='+this.degree_id+'&page=1&type=all_questions');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no);
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
  .play-header-title {
    font-size: 14px;
    color: #333333;
    height: 57px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
  }
  .play-header-title-active {
    border-bottom: 1px solid #84CC39;
  }
  .breadcrumb_text,
  .breadcrumb_text>a {
    font-size: 16px;
    color: #333333;
  }
  .new-name {
    font-size: 14px;
    color: #9D9D9D;
    letter-spacing: 0.22px;
    display: inline-block;
    margin-left: 8px;
  }
  .new-public-time {
    font-size: 10px;
    color: #9B9B9B;
    letter-spacing: 0.16px;
    margin-left: auto;
  }
  .new-title {
    font-size: 14px;
    color: #333333;
    letter-spacing: 0.22px;
    margin: 0 0 7px 3px;
  }
  .new-dec {
    font-size: 10px;
    color: #9B9B9B;
    letter-spacing: 0.16px;
    text-align: justify;
    margin-bottom: 0;
  }
  .list-num-icon {
    width: 15px;
    height: 15px;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    color: #FFFFFF;
    margin-right: 6px;
  }




  /*删除-style-start*/
  .delete-video-wrap,
  .delete-com-wrap {
    position: relative;
    margin-left: 200px;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-answer-wrap,
  .delete-co-wrap {
    position: relative;
    margin-left: -91px;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-comment-wrap {
    margin-left: -594px;
    position: relative;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-text {
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  .delete-btn-wrap {
    text-align: right;
    padding-right: 20px;
  }
  .delete-cancel,
  .delete-sure {
    width: 44px;
    height: 27px;
    outline: none;
    border-radius: 4px;
    font-size: 12px;
    line-height: 18px;
  }
  .delete-cancel {
    background: none;
    border: 1px solid #D9D9D9;
    color: #666666;
  }
  .delete-sure {
    background: #108EE9;
    border: none;
    color: #FFFFFF;
    margin-left: 4px;
  }
  /*删除-style-end*/

  /*回复效果样式*/
  .reply-btn-wrap {
    height: 48px;
    width: 548px;
    background: #FAFAFA;
  }
  .reply-input {
    display: none;
  }
  .cont-main {
    width: 835px;
    height: auto;
  }
  .side-main {
    width: 340px;
    margin-left: auto;
  }
  .play-header {
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    background: #FAFAFA;
  }
  .play-header-title {
    font-size: 14px;
    color: #333333;
    height: 57px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .play-header-title-active {
    border-bottom: 1px solid #84CC39;
  }
  .play-question-title {
    width: 100%;
    height: 48px;
    margin-top: 40px;
    padding-left: 20px;
    border: 1px solid #E8E8E8;
  }
  .play-question-title::placeholder {
    font-size: 14px;
    color: #9D9D9D;
  }
  .play-edit-question {
    width: 100%;
    height: 108px;
    border: 1px solid #E8E8E8;
    margin-top: 30px;
  }
  .play-ques-btn-wrap {
    width: 100%;
    display: flex;
  }
  .play-ques-btn {
    width: 100px;
    height: 38px;
    margin-left: auto;
    background: #7ED321;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.22px;
    margin-top: 26px;
    border: none;
    outline: none;
  }
  .play-ques-list {
    width: 100%;
    padding: 0;
  }
  .play-ques-item {
    list-style: none;
  }
  .play-ques-item-wrap {
    display: flex;
    border-bottom: 1px solid #E8E8E8;
    padding-left: 15px;
    padding-bottom: 25px;
  }
  .play-ques-user-name {
    font-size: 14px;
    color: #9B9B9B;
  }
  .play-ques-date {
    font-size: 14px;
    color: #9B9B9B;
    display: inline-block;
    margin-left: 20px;
  }
  .play-ques-tit {
    font-size: 14px;
    color: #4A4A4A;
    font-weight: bold;
    margin: 10px 0 0;
  }
  .play-ques-detail {
    font-size: 12px;
    color: #4A4A4A;
    margin: 12px 0 0;
  }
  .play-look-ques {
    font-size: 12px;
    color: #4990E2;
  }
  .play-ques-state {
    font-size: 14px;
    color: #4A90E2;
    display: inline-block;
    margin-right: 4px;
  }
  .play-agree-ques {
    width: 70px;
    height: 25px;
    border: 1px solid #979797;
    border-radius: 100px;
    margin-left: auto;
    font-size: 12px;
    color: #9D9D9D;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-reply {
    padding: 30px 0 25px 44px;
    border-bottom: 1px solid #E8E8E8;
  }







  .same-ask {
    width: 70px;
    height: 25px;
    border: 1px solid #979797;
    border-radius: 100px;
    margin-left: auto;
    font-size: 12px;
    color: #9D9D9D;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .same-ask-active {
    border: 1px solid #84CC39;
    color: #84CC39;
  }
  .play-side-course {
    width: 100%;
    background: #FAFAFA;
    padding-top: 22px;
    margin-bottom: 31px;
  }
  .play-side-model {
    width: 100%;
    background: #FAFAFA;
    padding: 22px 0 38px;
    margin-bottom: 31px;
  }
  .titWrap {
    width: 309px;
    height: 25px;
    display: flex;
    align-items: center;
  }
  .play-side-model-icon {
    display: block;
    height:17px;
    background: #000;
    width:3px;
  }
  .play-course-list {
    width: 279px;
    margin:0 auto;
    padding: 10px 0 0;
  }
  .play-course-item {
    list-style: none;
    padding: 24px 0 26px;
    border-bottom: 1px solid #EDEDED;
  }
  .play-course-item:last-child {
    border-bottom: none;
  }
  .model-tit {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.29px;
    margin-left: 27px;
  }
  .article-tit {
    font-size: 18px;
    line-height: 24px;
    color: #414A60;
    letter-spacing: 0.29px;
    margin: 30px 0 25px;
  }
  .look-detail {
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
    display: block;
  }
  .play-news-list {
    width: 295px;
    margin:0 auto;
    padding: 0;
  }
  .play-news-item {
    cursor: pointer;
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid #EDEDED;
    justify-content: center;
  }
  .side-news-list {
    margin-left: 14px;
    width: 144px;
  }
  .side-news-tit {
    font-size: 14px;
    color: #4A4A4A;
  }
  .side-news-dec {
    font-size: 12px;
    color: #9B9B9B;
    overflow: hidden;
  }
  .hot-bkg {
    background: #D0D0D0;
  }
</style>
