<template>
  <div v-if="result_data!=0" class="answer-wrap">
    <ul class="answer-list">
      <li v-for="(index,answer) in answers" id="{{answer.id}}" class="answer-item" @mouseover="onEnter($index)" @mouseout="onLeave()">
        <div class="study-user-wrap">
          <div style="width: 70px; height: 70px; border-radius: 35px; overflow: hidden;">
            <img :src="answer.head_img" width="70" height="70" alt="">
          </div>
          <div class="answer-question-wrap">
            <div class="question-tit-wrap">
              <h3 class="question-tit">{{answer.title}}</h3>
              <div style="height: 0; width: 0;">
                <span v-show="data.img==index" @click="delete_warn(index)" class="del">×</span>
                <!--删除问题-->
                <div class="delete-a-wrap">
                  <div class="delete-icon-bkg" style="padding: 20px 0 10px 30px;">
                    <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该条答案或回复吗？</span>
                  </div>
                  <div class="delete-btn-wrap">
                    <button class="delete-cancel" @click="delete_cancel(index)">取消</button>
                    <button class="delete-sure" @click="delete_answer_com(index)">确定</button>
                  </div>
                </div>
              </div>
            </div>
            <p class="study-answer-detail" @click="link_video(index)">
              <span>【{{answer.content_type_display}}】</span>
              {{answer.content}}
            </p>
          </div>
        </div>
        <div class="answer-ceil">
          <div style="display: flex;">
            <span class="publish-time">发布于&nbsp;{{answer.pub_date}}<span class="from-course">来自于{{answer.from_course}}</span></span>
          </div>
          <div class="like-detail-wrap">
            <div class="evaluate-like-wrap">
              <span class="eva-like-num">点赞 {{answer.agree_number}}</span>
              <span class="eva-unlike-num">踩 {{answer.disagree_number}}</span>
              <span class="eva-unlike-num">回复 {{answer.reply_count}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <span class="my-question-number">共显示{{answers_length}}条信息</span>
  </div>
  <empty v-if="result_data===0" >
    <span class="null-text">
      您还没有回答任何问题哦
    </span>
  </empty>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import empty from '../../../components/special/empty.vue';

  import lazyload from '../../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        answers:'',
        result_data: 1,
        answers_length:'',
        data:{
          "img": ''
        }
      }
    },
    ready: function(){
      this.load(Vue.http.options.root+'/api/v1/answers_comments/');
    },
    components: {
      empty
    },
    methods: {
      load:function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {
              this.answers=response.data.data;
              this.result_data = this.answers.length;
              this.answers_length=response.data.data.length;

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      delete_warn: function ($index) {
        $('.delete-a-wrap:eq('+$index+')').fadeIn();
      },
      delete_cancel: function ($index) {
        $('.delete-a-wrap:eq('+$index+')').fadeOut();
      },
      delete_answer_com: function ($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.delete(Vue.http.options.root+'/api/v1/answers_comments/?iid='+this.answers[$index].id+'&del_type='+this.answers[$index].content_type)
          .then(function(response) {

            if(response.data.error_no==0) {

              toastr.success('删除成功');

              this.load(Vue.http.options.root+'/api/v1/answers_comments/');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      link_video: function ($index) {
        Cookies.set('questionId',this.answers[$index].id);
        if(this.answers[$index].section_belong===0) {
          this.$route.router.go({name:'classmate-play',params:{id:this.answers[$index].section_id}});
        }else if(this.answers[$index].section_belong===1){
          this.$route.router.go({name:'micro-play',params:{id:this.answers[$index].section_id}});
        }
      },
      onEnter:function($index) {
        var $this=this;
        setTimeout(function(){
          $this.data.img=$index;
        },10);
      },
      onLeave:function() {
        var $this=this;
        setTimeout(function(){
          $this.data.img=null;
        },10)
      }

    }



  }
</script>
<style scoped>
  /*删除-style-start*/
  .delete-a-wrap {
    position: relative;
    margin-left: -35px;
    top: -130px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-icon-bkg {
    padding: 20px 0 20px 30px;
    width: 190px;
    display: flex;
    background: url('../../../assets/img/warn-icon.png') no-repeat 20px 23px;
    background-size: 14px 14px;
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
  .answer-wrap {
    width: 966px;
    margin: 0 auto;
  }
  .answer-list {
    padding: 0;
  }
  .answer-item {
    padding: 40px 18px 40px 10px;
    box-shadow: 0 1px 0 0 #E8E8E8;
    position: relative;
  }
  .answer-item:hover {
    background: #F5F7F9;
  }
  .answer-question-wrap {
    margin-left: 33px;
    width: 853px;
  }
  .question-tit {
    margin: 0;
    font-size: 18px;
    color: #333333;
  }
  .question-tit-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .delete-wrap {

  }
  .study-user-wrap {
    display: flex;
    width: 100%;
  }
  .answer-ceil {
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
  }
  .publish-time,
  .from-course {
    display: block;
    font-size: 14px;
    color: #87909B;
    margin-right: 15px;
  }
  .evaluate-like-wrap {
    display: inline-flex;
    height: 17px;
    align-items: center;

    margin-left: auto;
  }
  .eva-like-icon {
    margin-left: 30px;
  }
  .eva-like-num,
  .eva-unlike-num {
    font-size: 14px;
    color: #87909B;
    display: inline-block;
    margin-left: 33px;
  }
  .my-question-number {
    font-size: 10px;
    color: #5E5E5E;
    letter-spacing: 0.16px;
    display: block;
    margin-left: 20px;
    margin-top: 30px;
    padding-bottom: 68px;
  }
  .study-user-name {
    font-size: 14px;
    color: #333333;
    display: block;
  }
  .study-user-job {
    font-size: 13px;
    color: #5B5B5D;
    margin-top: 2px;
    display: block;
  }
  .study-answer-detail {
    cursor: pointer;
    font-size: 13px;
    color: #4A4A4A;
    line-height: 36px;
    margin: 15px 30px 0 0;
  }
  .study-answer-detail>span {
    font-size: 14px;
    color: #000000;
    display: inline-block;
    margin-right: 11px;
  }
  .del {
    font-size: 22px;
    position: absolute;
    right: 19px;
    top:28px;
    cursor: pointer;
    color: #999;
  }
</style>
