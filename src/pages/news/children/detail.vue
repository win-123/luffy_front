<template>
  <div style="width: 1203px; margin: 0 auto; display: flex; padding-top: 40px;">
    <div style="width: 834px; margin-right: 30px;">
      <!--文章标题-->
      <h2 class="article-title">{{article.title}}</h2>
      <!--文章发布、阅读、点赞、收藏信息-->
      <div style="margin-top: 18px; margin-bottom: 30px; display: flex; align-items: center;">
        <time class="arc-time">{{article.pub_date}}</time>
        <div class="arc-time view-num view">
          <img style="margin-right: 8px;" src="../../../assets/img/view_icon.png" width="14" height="8" alt="">
          阅读<span style="display:inline-block; margin-left: 8px;">{{article.view_num}}</span>
        </div>
        <div class="arc-time view-num like">
          <i style="display:inline-block; margin-right: 8px;" class="fa fa-thumbs-o-up" aria-hidden="true"></i>
          点赞<span style="display:inline-block; margin-left: 8px;">{{article.agree_num}}</span>
        </div>
        <div class="arc-time view-num love">
          <i style="display:inline-block; margin-right: 8px;" class="fa fa-heart-o" aria-hidden="true"></i>
          收藏<span style="display:inline-block; margin-left: 8px;">{{article.collect_num}}</span>
        </div>
        <!--<div v-if="false" style="margin-left: auto; margin-right: 10px;">
          <span class="click-share-type arc-time">点击分享到：</span>
          <img style="margin-left: 10px;" src="../../../assets/img/weixin_icon.png" width="22" height="18" alt="分享到微信">
          <img style="margin-left: 10px;" src="../../../assets/img/weibo_icon.png" width="21" height="17" alt="分享到微博">
        </div>-->
      </div>
      <!--文章主体-->
      <div class="arc-content">
        <!--文章主要内容-->
            <!--文字资讯-->
        <div class="main-cont" v-html="article.content"></div>
        <!--文章底部-->
        <div style="margin-top: 21px; display: flex; align-items: center; margin-bottom: 68px;">
          <!--文章标签-->
          <div>
            <span class="tag-time" v-for="item in article.tags">#{{item.tag}}#</span>
          </div>
          <!--文章进行点赞、收藏操作-->
          <div :class="['like-btn','like-bkg',{'like-btn-active': agree}]" @click="like_action('like-bkg')" style="cursor: pointer; margin-left:auto; margin-right: 30px;">
            <i style="display:inline-block; margin-left: 25px;" class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            <span class="like-num">点赞&nbsp;|&nbsp;<b>{{article.agree_num}}</b></span>
          </div>
          <div :class="['like-btn','love-bkg',{'like-btn-active':collect}]" @click="like_action('love-bkg')" style="cursor: pointer;">
            <i style="display:inline-block; margin-left: 22px;" class="fa fa-heart-o" aria-hidden="true"></i>
            <span class="love-num">收藏&nbsp;|&nbsp;<b>{{article.collect_num}}</b></span>
          </div>
        </div>
      </div>
     <!-- 发表评论时-未登陆-->
      <!--<div v-if="!$store.state.login_state" class="comment-wrap">-->
        <!--<h4 class="comment-tit">发表评论</h4>-->
        <!--<div class="unlogin">-->
          <!--<p class="unlogin-text"><span class="unlogin-spec" @click="login()">登陆</span>后参与评论</p>-->
        <!--</div>-->
        <!--<button class="comment-btn">评论</button>-->
      <!--</div>-->
     <!--发表评论时-已登陆-->
      <div  class="comment-wrap" style="padding-bottom: 300px;">
        <div style="display: flex;">
          <div style="width: 42px; height: 42px; border-radius: 42px; overflow: hidden;">
            <img :src="$store.state.userImg" width="100%" alt="">
          </div>
          <div style="width: 100%; margin-left: 24px; border: 1px solid #E8E8E8;">
            <div style="height: 48px; padding: 0 25px;">
              <input v-model="data.comment" placeholder="写下您的评论..." style="outline: none; border: none; width: 90%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
              <!--<div style="outline: none; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" contenteditable="true"></div>-->
            </div>
            <div style="position: absolute; margin-top: -48px;">
              <div @click="asking_comment()" style="cursor: pointer; position: absolute; margin-left: 660px; text-align: center;
              line-height: 48px; width: 100px; height: 48px; background: #7ED321; font-size: 14px;
              color: #FFFFFF;letter-spacing: 0.22px;">发表评论</div>
            </div>
          </div>
        </div>

        <ul style="margin-top: 20px;">
          <li v-for="(q_index,com) in newsComments" @mouseover="onEnter($index)" @mouseout="onLeave()" id="{{com.id}}" class="article-comment-list" style="list-style: none; background: #FFFFFF;">
            <div style="margin-bottom: 10px; padding: 30px 25px 20px 0; border-bottom: 1px solid rgba(242,242,242,0.50);">
              <div style="display: flex;">
                <div style="width: 42px; height: 42px; border-radius: 42px; overflow: hidden;">
                  <img :src="com.userinfo.head_img" width="100%" alt="">
                </div>
                <div style="margin-left: 21px; width: 755px;">
                  <div style="display: flex;">
                    <span style="font-size: 14px;color: #999999;letter-spacing: 0.22px;">{{com.userinfo.username}}</span>
                    <span style="font-size: 14px;color: #999999;letter-spacing: 0.22px; display: inline-block; margin-left: 20px;">{{com.date}}</span>
                    <div>
                      <div v-show="$store.state.login_state">
                        <div v-show="com.userinfo.username==$store.state.username">
                          <span v-show="data.comment_img==q_index" @click="delete_question_warn($index)" style="cursor: pointer; position: relative; left: 550px;color: #87909B; font-size: 14px;">X</span>
                        </div>
                      </div>
                    </div>
                    <!--删除问题-->
                    <div class="delete-com-wrap">
                      <div class="delete-qestion-icon-bkg">
                        <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该评论和所有回复吗？</span>
                      </div>
                      <div class="delete-btn-wrap">
                        <button class="delete-cancel" @click="delete_cancel(q_index)">取消</button>
                        <button class="delete-sure" @click="delete_common(q_index,null)">确定</button>
                      </div>
                    </div>
                  </div>
                  <p style="margin-top: 10px; font-size: 14px;color: #999999;letter-spacing: 0.22px;">
                    {{com.content}}
                  </p>
                  <div style="display: flex; margin-top: 16px;">
                    <div style="height: 25px;">

                      <span @click="com_reply(q_index)" style="cursor: pointer;font-size: 14px;color: #4A90E2;" >回复&nbsp;·&nbsp;</span>
                      <a class="collapse-lable" role="button" data-toggle="collapse" href="#collapseExample{{com.id}}" aria-expanded="false" aria-controls="collapseExample">
                        <span style="font-size: 14px;color: #4A90E2;">{{com.reply_nums}}条回复</span>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </a>
                    </div>
                    <div style="display: flex; align-items: center; margin-left: auto;">
                      <!--主评论的点赞和点踩-->
                      <div  @click="comment_like(com.id)" style="cursor: pointer; display: flex; align-items: center; font-size: 12px; color: #999999;">
                        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <span style="display: inline-block; margin-left: 5px;">{{com.agree_number}}</span>
                      </div>
                      <div @click="comment_unlike(com.id)" style="cursor: pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                        <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                        <span style="display: inline-block; margin-left: 5px;">{{com.disagree_number}}</span>
                      </div>
                    </div>
                  </div>
                  <div class="reply-input com-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                    <div style="height: 48px; padding: 0 25px;">
                      <input v-model="data.reply_com" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                      <!--<div style="outline: none; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" contenteditable="true"></div>-->
                    </div>
                    <div style="position: absolute; margin-top: -48px;">
                      <div @click="reply_com_reply(q_index,null)" style="cursor: pointer; position: absolute; margin-left: 644px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul v-if="com.child.length>0" style="padding-left: 67px;">
              <li class="collapse" id="collapseExample{{com.id}}">
                <div v-for="(item,rep) in com.child" id="{{rep.id}}" class="play-ques-item answer-list">
                <div class="play-reply" style="display: flex;">
                  <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                    <img :src="rep.userinfo.head_img" width="38" height="38" alt="">
                  </div>
                  <div style="margin-left: 15px; width: 613px;">
                    <span><span class="play-ques-user-name" style="display: inline-block; margin-right: 5px;">{{rep.userinfo.username}}</span>回复：<span class="play-ques-user-name">{{rep.reply_to}}</span></span>
                    <span class="play-ques-date">{{rep.date}}</span>
                    <div class="play-ques-detail">
                      <span class="play-ques-cont" style="text-align: justify;">
                        {{rep.content}}
                      </span>
                    </div>
                    <div style="display: flex; margin-top: 20px; height: 20px;">
                      <div>
                        <span @click="com_reply_com(q_index,item)" style="cursor: pointer;" class="play-ques-state">回复</span>
                        <span v-show="$store.state.login_state">
                            <span v-show="rep.userinfo.username==$store.state.username">
                              <span @click="delete_answer_warn(q_index,item)" class="play-ques-state" style="margin-left: 5px; cursor: pointer;">删除</span>
                            </span>
                        </span>
                        <!--删除回答-->
                        <div class="delete-co-wrap">
                          <div class="delete-icon-bkg">
                            <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该条回复吗？</span>
                          </div>
                          <div class="delete-btn-wrap">
                            <button class="delete-cancel" @click="delete_cancel(q_index,item)">取消</button>
                            <button class="delete-sure" @click="delete_common(q_index,item)">确定</button>
                          </div>
                        </div>
                      </div>
                      <div style="display: flex; align-items: center; margin-left: auto;">
                        <!--回复的点赞、点踩-->
                        <div @click="comment_like(rep.id)" style="cursor: pointer; display: flex; align-items: center; font-size: 12px; color: #999999;">
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span style="display: inline-block; margin-left: 5px;">{{rep.agree_number}}</span>
                        </div>
                        <div @click="comment_unlike(rep.id)" style="cursor:pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                          <span style="display: inline-block; margin-left: 5px;">{{rep.disagree_number}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="reply-input com-reply-com" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                      <div style="height: 48px; padding: 0 25px;">
                        <input v-model="data.reply_com" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                        <!--<div style="outline: none; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" contenteditable="true"></div>-->
                      </div>
                      <div style="position: absolute; margin-top: -48px;">
                        <div @click="reply_com_reply(q_index,item)" style="cursor: pointer; position: absolute; margin-left: 548px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </li>
            </ul>
          </li>
        </ul>

        <empty v-if="result_data===0">
          <span class="null-text">还没有人评论，赶紧来抢沙发吧！！</span>
        </empty>
      </div>
    </div>
    <side-bar></side-bar>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import tipsBox from '../../../assets/js/tipsBox'
  import sideBar from 'src/components/common/side.vue'
  import login from '../../../components/login/login.vue';
  import register from '../../../components/register/register.vue'
  import empty from '../../../components/special/empty.vue'
  import bus from '../../../assets/js/evenBus'
  export default {
    data() {
      return {
        article_id: '',
        article: '',
        result_data:1,
        newsComments:'',
        comment_input:false,
        comm_rep_input:false,
        answer_input:false,
        answer_rep_input:false,
        agree: false,
        collect: false,
        data: {
          comment: '',
          comment_img: '',
          reply_com: ''
        }
      }
    },
    created: function() {
      this.article_id = this.$route.params.id;
    },
    ready: function(){
      var that=this
      bus.$on("loginEvent",function(data){
        if (data=that.$route.name){
        that.init_request();
        }
      });
      this.init_request()

//      this.article_id = this.$route.params.id;
//      this.load(Vue.http.options.root+'/api/v1/article/'+this.article_id+'/');
//      if(Cookies.get('token')!=''){
//        this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.getStatus(this.$route.path)+'&page=1');
//      }
    },
    components: {
      sideBar,
      login,
      register,
      empty
    },
    watch: {
      '$route' (to, from) {
        console.log(this.getStatus(this.$route.path));
        this.load(Vue.http.options.root+'/api/v1/article/'+this.getStatus(this.$route.path)+'/');
        if(Cookies.get('token')!=''){

          this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.getStatus(this.$route.path)+'&page=1');
        }
      }
    },
    methods: {
      init_request:function () {
        this.load(Vue.http.options.root+'/api/v1/article/'+this.article_id+'/');
        this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.getStatus(this.$route.path)+'&page=1');
        console.log(this.getStatus(this.$route.path))
      },
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
            if(response.data.error_no==0) {
              this.article=response.data.data;
              this.agree=response.data.data.is_agree;
              this.collect=response.data.data.is_collect;
            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      loadNewsComments:  function (url) {
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.newsComments=response.data.data.result;
            this.result_data = this.newsComments.length;

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            toastr.clear()
            toastr.info('Hey~,您还没有登陆哦');
            this.$store.state.login_ing=true;
          }else{
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      getStatus (urlStr) {
        var urlStrArr = urlStr.split('/');
        return urlStrArr[urlStrArr.length - 1]
      },
      login: function() {
        this.$store.state.login_ing=true;
      },
      niceIn: function(prop) {
        prop.find('img').addClass('niceIn');
        setTimeout(function(){
          prop.find('img').removeClass('niceIn');
        },1000);
      },
      agree_up_animation:function () {
        var like_bkg=$('.like-bkg');
        $.tipsBox({
          obj: like_bkg,
          str: "+1",
          callback: function () {
          }
        });
        this.niceIn(like_bkg);
        this.article.agree_num+=1;
      },
      collect_animation:function () {
        var love_bkg=$('.love-bkg');
        $.tipsBox({
          obj: love_bkg,
          str: "+1",
          callback: function () {
          }
        });
        this.niceIn(love_bkg);
      },
      quit_collect_animation:function () {
        var love_bkg=$('.love-bkg');
        $.tipsBox({
          obj: love_bkg,
          str: "-1",
          callback: function () {
          }
        });
        this.niceIn(love_bkg);
        this.collect=false;
        if(this.article.collect_num>0){
          this.article.collect_num-=1;
        }
      },
      like_action: function(obj) {
        switch(obj) {
          case 'like-bkg': {
              if(!this.agree) {
                /*点赞*/
                Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
                this.$http.post(Vue.http.options.root+'/api/v1/actions/article/agree/',{aid: this.$route.params.id})
                  .then(function(response) {
                  if(response.data.error_no==0) {
                    this.agree_up_animation()
                    this.agree=true;
                    /* this.article.agree_num+=1;*/
                  }else if(response.data.error_no==2){
                    this.$store.state.login_state=false;
                    toastr.clear()
                    toastr.info('Hey~,您还没有登陆哦');
//                    this.$route.router.go({name: 'home'});
                    this.$store.state.login_ing=true;
                  }else if(response.data.error_no==-1) {

                    if(response.data.userinfo){
                      toastr.clear()
                      toastr.info(response.data.error_msg);
                    }


                  }
                })
                  .catch(function(response) {

                    console.log('服务器正在打盹~')
                  });

              }
              else {
                toastr.clear()
                toastr.info('您已经赞过了哦');

              }
            break;
          }
          case 'love-bkg': {
            if(!this.collect) {
                            //收藏
              Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
              this.$http.post(Vue.http.options.root+'/api/v1/actions/article/collect/',{aid: this.$route.params.id}).then(function(response) {
                if(response.data.error_no==0) {
                  this.collect_animation()
                  this.collect=true;
                  this.article.collect_num+=1;

                  /*this.article.collect_num+=1;*/

                }else if(response.data.error_no==2){
                  this.$store.state.login_state=false;
                  toastr.clear()
                  toastr.info('Hey~,您还没有登陆哦');
//                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing=true;
                }else if(response.data.error_no==-1) {

                  if(response.data.userinfo){
                    toastr.clear()
                    toastr.info(response.data.error_msg);
                  }


                }

              })
                .catch(function(response) {
                  console.log('服务器正在打盹~')
                })

            }
            else {

              //取消收藏
              Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
              this.$http.delete(Vue.http.options.root+'/api/v1/actions/article/collect/?aid='+this.$route.params.id)
                .then(function(response) {
                if(response.data.error_no==0) {
                  this.quit_collect_animation()
                  /*this.article.collect_num-=1;*/

                }else if(response.data.error_no==2) {
                  this.$store.state.login_state=false;
                  toastr.clear()
                  toastr.info('Hey~,您还没有登陆哦');
                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing=true;

                }else {
                  console.log(response.data.error_msg)
                }

              })
                .catch(function(response) {
                  console.log('接口请求失败')
                })
            }
            break;
          }
        }
      },
      com_reply_com: function (q_index,item) {
//        $('.reply-input').css('display','none');
//        $('.article-comment-list:eq('+q_index+')').find('.com-reply-com:eq('+item+')').fadeIn();

        if (!this.comm_rep_input){
          $('.article-comment-list:eq('+q_index+')').find('.com-reply-com:eq('+item+')').fadeIn();
        }else{
          $('.reply-input').css('display','none');

        }
        this.comm_rep_input=!this.comm_rep_input
      },
      delete_answer_warn: function (q_index,item) {
        $('.delete-com-wrap').fadeOut();
        $('.delete-co-wrap').fadeOut();
        $('.article-comment-list:eq('+q_index+')').find('.delete-co-wrap:eq('+item+')').fadeIn();
      },
      delete_question_warn: function (q_index) {
        $('.delete-com-wrap').fadeOut();
        $('.delete-co-wrap').fadeOut();
        $('.delete-com-wrap:eq('+q_index+')').fadeIn();
      },
      delete_cancel: function () {
        $('.delete-com-wrap').fadeOut();
        $('.delete-co-wrap').fadeOut();
      },
      onEnter:function($index) {

        var $this=this;
        setTimeout(function(){
          $this.data.comment_img=$index;
        },10);
      },
      onLeave:function() {
        var $this=this;
        setTimeout(function(){
          $this.data.comment_img=null;
        },10)
      },
      delete_common: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url='';

        if(item==null){
          url=Vue.http.options.xy_root+'/api/v1/article_comments/?comment_id='+this.newsComments[q_index].id;
        }else {
          url=Vue.http.options.xy_root+'/api/v1/article_comments/?comment_id='+this.newsComments[q_index].child[item].id;
        }

        this.$http.delete(url)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('删除成功');
              this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.article_id+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              toastr.clear()
              toastr.info('Hey~,您还没有登陆哦');
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }else {
              toastr.clear()
              toastr.error('，稍后再试');

              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      com_reply: function (q_index) {


//        $('.reply-input').css('display','none');
//        $('.com-reply:eq('+q_index+')').fadeIn();

        if (!this.comment_input){
          $('.com-reply:eq('+q_index+')').fadeIn();
        }else {
          $('.reply-input').css('display','none');
          $('.com-reply:eq('+q_index+')').fadeOut();
        }
        this.comment_input=!this.comment_input
      },
      reply_com_reply: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if(item==null) {
          var params={

            content: this.data.reply_com,
            p_node_id: this.newsComments[q_index].id,
            article_id: this.article_id
          };
        }else {
          var params={

            content: this.data.reply_com,
            p_node_id: this.newsComments[q_index].child[item].id,
            article_id: this.article_id
          };
        }
        if (this.data.reply_com.length==0){
          toastr.clear()
          toastr.info('回复内容不能为空哦！');
          return
        }


        this.$http.post(Vue.http.options.xy_root+'/api/v1/article_comments/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('发表回复成功');
              this.data.reply_com='';
              this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.article_id+'&page=1');


            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              toastr.clear()
              toastr.info('Hey~,您还没有登陆哦');
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }
            else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }


          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*发表评论*/
      asking_comment: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if (this.data.comment.length==0){
          toastr.clear()
          toastr.info('评论内容不能为空！');
          return
        }
        var params={
          content: this.data.comment,
          p_node_id: null,
          article_id: this.article_id
        };

        this.$http.post(Vue.http.options.xy_root+'/api/v1/article_comments/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('发布成功');
              this.data.comment=''
              this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.article_id+'&page=1');


            }else if(response.data.error_no==2){
              toastr.clear()
              toastr.info('Hey~,您还没有登陆哦');
              this.$store.state.login_state=false;
              this.$store.state.login_ing=true;
            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.info(response.data.error_msg);
              }


            }


          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      comment_like: function (comment_id) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/comment/agree/?cid='+comment_id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点赞成功');
              this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.getStatus(this.$route.path)+'&page=1');
            }else if(response.data.error_no==2){
              toastr.clear()
              toastr.info('Hey~,您还没有登陆哦');
              this.$store.state.login_state=false;
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      comment_unlike: function (comment_id) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/comment/disagree/?cid='+comment_id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点踩成功');

              this.loadNewsComments(Vue.http.options.root+'/api/v1/article_comments/?article_id='+this.getStatus(this.$route.path)+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
              toastr.clear()
              toastr.info('Hey~,您还没有登陆哦');
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },

    }

  }
</script>
<style scoped>
  /*删除-style-start*/
  .delete-wrap-icon {
    width:16px;
    height:16px;
    background: url("../../../assets/img/close_icon.png") no-repeat;
    background-size: contain;
    position: relative;
    cursor: pointer;
  }
  .delete-qestion-icon-bkg {
    padding: 20px 0 10px 30px;
    width: 190px;
    display: flex;
    background: url('../../../assets/img/warn-icon.png') no-repeat 20px 23px;
    background-size: 14px 14px;
  }
  .delete-icon-bkg {
    padding: 20px 0 20px 30px;
    width: 190px;
    display: flex;
    background: url('../../../assets/img/warn-icon.png') no-repeat 20px 23px;
    background-size: 14px 14px;
  }
  .delete-video-wrap,
  .delete-com-wrap {
    position: relative;
    margin-left: -202px;
    margin-top: -196px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../../assets/img/tip-panel.png") no-repeat;
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
    background: url("../../../assets/img/tip-panel.png") no-repeat;
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
    background: url("../../../assets/img/tip-panel.png") no-repeat;
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
    cursor: pointer;
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
    border-bottom: 1px solid rgba(242,242,242,0.50);
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
    height: 447px;
    background: #FAFAFA;
    padding-top: 22px;
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

  .tag-time {
    font-size: 14px;
    color: #4A90E2;
    letter-spacing: 0.22px;
    display: inline-block;
    margin-right: 20px;
  }
  .arc-time {
    font-size: 13px;
    color: #9B9B9B;
    letter-spacing: 0.28px;
  }
  .view-num {
    display: flex;
    align-items: center;
    margin-left: 24px;
    height: 38px;
    padding-left: 20px;
  }
  .click-share-type {
    display: inline-block;
    margin-left: 12px;
  }
  .unlogin-spec {
    color: #333333;
    cursor: pointer;
  }
  .unlogin-text {
    font-size: 18px;
    color: #9D9D9D;
    letter-spacing: 0.4px;
  }
  .comment-btn {
    width: 149px;
    height: 46px;
    background: #9B9B9B;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.4px;
    margin: 30px 0 237px;
    outline: none;
    border: none;
  }
  .unlogin {
    margin-top: 32px;
    width: 100%;
    height: 218px;
    background: #FAFAFA;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .comment-tit {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.4px;
    padding-bottom: 5px;
    margin: 0;
    border-bottom: 1px solid #E8E8E8;
  }
  .comment-wrap {
    width: 804px;
    margin: 0 auto;
  }
  .like-num,
  .love-num{
    display: block;
    margin-left: 5px;
  }
  .like-btn-font {
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.26px;
  }
  .like-btn {
    width: 114px;
    height: 38px;
    display: flex;
    align-items: center;
    border: 1px solid #5E5E5E;
    border-radius: 54px;
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.26px;
  }
  .like-btn-active {
    background: #84CC39;
    border: none;
    color: #FFFFFF;
  }
  .main-cont {
    font-size: 15px;
    color: #666666;
    letter-spacing: 0.33px;
  }
  .article-banner {
    margin-bottom: 20px;
  }
  .arc-content {
    width: 100%;
  }
  .article-title {
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0.53px;
  }

  /* CSS Document */
  /*点赞*/
  @-webkit-keyframes niceIn {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1)
    }
    50% {
      opacity: 1;
      -webkit-transform: scale(1.5);
      transform: scale(1.5)
    }
    70% {
      -webkit-transform: scale(.8);
      transform: scale(.8)
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1)
    }
  }
  @keyframes niceIn {
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1)
    }
    50% {
      opacity: 1;
      -webkit-transform: scale(1.5);
      -ms-transform: scale(1.5);
      transform: scale(1.5)
    }
    70% {
      -webkit-transform: scale(.8);
      -ms-transform: scale(.8);
      transform: scale(.8)
    }
    100% {
      opacity: 1;
      -webkit-transform: scale(1);
      -ms-transform: scale(1);
      transform: scale(1)
    }
  }

  @-o-keyframes niceIn{
    0% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1)
    }
    50% {
      opacity: 1;
      -o-transform: scale(1.5);
      transform: scale(1.5)
    }
    70% {
      -o-transform: scale(.8);
      transform: scale(.8)
    }
    100% {
      opacity: 1;
      -o-transform: scale(1);
      transform: scale(1)
    }
  }

  @-moz-keyframes niceIn{
    0% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1)
    }
    50% {
      opacity: 1;
      -moz-transform: scale(1.5);
      transform:scale(1.5)
    }
    70% {
      -o-transform: scale(.8);
      transform: scale(.8)
    }
    100% {
      opacity: 1;
      -moz-transform: scale(1);
      transform: scale(1)
    }
  }
  .niceIn {
    -webkit-animation:niceIn 0.8s .2s ease;
    -moz-animation:niceIn 0.8s .2s ease;
    -o-animation:niceIn 0.8s .2s ease;
    animation:niceIn 0.8s .2s ease;
  }
</style>
