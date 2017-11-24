<template>
<div v-if="result_data!=0" style="padding-top: 30px; width: 996px; margin: 0 auto;">
  <div class="study-item-cont-head">
    <span class="question-all">全部提问</span>
    <!--<span class="sort-rule">按时间排序&gt;</span>-->
  </div>
  <ul style="padding: 0;" class="study-question-list">
    <li v-for="(index,question) in questions" @mouseover="onEnter($index)" @mouseout="onLeave()" id="{{question.id}}" style="padding: 16px 28px 40px 30px; box-shadow: 0 1px 0 0 #E8E8E8;">
      <div style="height: 11px; margin-bottom: 13px; ">
        <span v-show="data.img==index" @click="delete_warn(index)" class="del">×</span>
        <!--删除问题-->
        <div class="delete-q-wrap">
          <div class="delete-icon-bkg" style="padding: 20px 0 10px 30px;">
            <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该问题和所有回复吗？</span>
          </div>
          <div class="delete-btn-wrap">
            <button class="delete-cancel" @click="delete_cancel(index)">取消</button>
            <button class="delete-sure" @click="delete_question(index)">确定</button>
          </div>
        </div>
      </div>
      <h3 @click="link_video(index)" class="question-tit_in" style="cursor: pointer;">{{question.name}}</h3>
      <div style="display: flex; justify-content: space-between; margin-top: 20px;">
        <div>
          <span class="publish-time">发布于 {{question.date}}</span>
          <span class="from-course">来自于{{question.from_course_section}}</span>
        </div>
        <div>
          <span class="answer-num">回答 {{question.answer_count}}个</span>
          <span class="same-num">同问 {{question.enquiries_count}}个</span>
        </div>
      </div>
    </li>
  </ul>
  <span class="my-question-number">共显示{{questions_length}}条信息</span>
</div>
<empty v-if="result_data===0" >
<span class="null-text">您还未有任何提问记录哦！
  <!--<a style="color: #4990E2;" v-link="{name:'course'}">课程</a>-->
</span>

</empty>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import empty from '../../../components/special/empty.vue';


  export default {
    data() {
      return {
        questions:'',
        result_data: 1,
        questions_length:'',
        data: {
            "img":[]
        }
      }
    },
    ready: function(){
      this.load(Vue.http.options.root+'/api/v1/questions/');
    },
    components: {
      empty
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.questions=response.data.data;
              this.result_data = this.questions.length;

              this.questions_length=response.data.data.length;
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
      delete_warn: function ($index) {
        $('.delete-q-wrap:eq('+$index+')').fadeIn();
      },
      delete_cancel: function ($index) {
        $('.delete-q-wrap:eq('+$index+')').fadeOut();
      },
      delete_question: function($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.delete(Vue.http.options.root+'/api/v1/questions/?question_id='+this.questions[$index].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.success('删除成功');
              this.load(Vue.http.options.root+'/api/v1/questions/');

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
      link_video: function ($index) {
        Cookies.set('questionId',this.questions[$index].id);
        if(this.questions[$index].section_belong===0) {
          this.$route.router.go({name:'classmate-play',params:{id:this.questions[$index].section_id}});
        }else if(this.questions[$index].section_belong===1){
          this.$route.router.go({name:'micro-play',params:{id:this.questions[$index].section_id}});
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
  .delete-q-wrap {
    position: relative;
    margin-left: -35px;
    top: -112px;
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
  .study-item-cont-head {
    background: #FAFAFA;
    height: 57px;
    line-height: 57px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
  .question-all {
    font-size: 14px;
    color: #333333;
  }
  .sort-rule {
    font-size: 14px;
    color: #4A4A4A;
  }
  .question-tit_in {
    margin: 0 0 19px;
    font-size: 18px;
    color: #333333;
  }
  .publish-time,
  .from-course,
  .answer-num,
  .same-num {
    display: inline-block !important;
    font-size: 14px;
    color: #87909B;
  }
  .from-course {
    margin-left: 27px;
  }
  .same-num {
    margin-left: 33px;
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
    font-size: 12px;
    color: #999999;
    margin-left: 6px;
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
  .study-question-list {
    position: relative;
  }
  .study-question-list li:hover{
    background: #f5f7f9;
  }
  .del {
    font-size: 20px;
    position: absolute;
    right: 30px;
    top:10px;
    cursor: pointer;
    color: #999;
  }
</style>
