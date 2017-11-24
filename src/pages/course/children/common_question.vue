<template>
  <div class="question-main">
    <div style="width: 1239px; margin: 0 auto; text-align: left;">
      <ul style="width: 100%; padding-bottom: 130px;">
        <li v-for="question in questionList" id="{{question.id}}" style="width: 100%; margin-top: 32px; padding-bottom: 50px; box-shadow: 0 1px 0 0 #F4F4F4;">
          <h6 class="question-tit">Q：{{question.question}}</h6>
          <p class="question-answer">
            A：{{question.answer}}
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';



  export default {
    data() {
      return {
        course_id: '',
        questionList:''
      }
    },
    ready: function(){
      this.course_id=this.$route.params.id;
      this.load(Vue.http.options.root+'/api/v1/course_questions/?course_id='+this.course_id);
    },
    canReuse: false,
    components: {
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response){
            if(response.data.error_no==0){

              this.questionList=response.data.data;

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
      }


    }



  }
</script>
<style scoped>
  .question-main {
    padding-top: 43px;
    text-align: center;
  }
  .question-tit {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.14px;
  }
  .question-answer {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.1px;
    margin-top: 18px;
    text-align: justify;
  }
</style>
