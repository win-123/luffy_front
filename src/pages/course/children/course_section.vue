<template>
<!-- 课程章节list -->
  <div v-if="result_data!=0" style="width: 100%; background: #FFFFFF; padding-bottom: 200px;" >
    <ul style="width: 1200px; margin: 76px auto 0; padding: 0;">
      <li v-for="item in sections" style="width: 100%;">
        <div style="display: flex; width: 100%; height: 90px; align-items: center; border-bottom: 1px solid rgba(242,242,242,0.50);">
          <img  src="../../../assets/img/section-icon.png" width="20" height="24" alt="">
          <h3 id="{{item.id}}" class="section-tit">{{item.name}}</h3>
        </div>
        <ul style="width: 100%; padding: 0;">
          <li  class="project_li" v-for="sec in item.coursesections" id="{{sec.id}}" @click="to_playing_video(sec.id)">
            <h4 class="section-period">{{sec.name}}</h4>
            <span v-if="sec.free_trail" style="border: 1px solid #7ED321; border-radius: 1px; color: #7ED321; font-size: 12px; display: flex; align-items: center; justify-content: center; margin-left: 25px; width: 70px; height: 30px;">免费试学</span>
            <div v-show="sec.section_type=='video'" class="progress-wrap" style="margin-left: auto;">
             <!-- <img style="margin-right: 19px;" src="../../../assets/img/section-video-icon.png" width="21" height="21" alt="">-->
              <i style="margin-right: 10px; color: #CCC;" class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>
              <time class="period-time">{{sec.video_time}}</time>
            </div>
            <div v-show="sec.section_type=='documents'" class="progress-wrap" style="margin-left: auto;">
              <!--<img style="margin-right: 19px;" src="../../../assets/img/word.png" width="21" height="21" alt="">-->
              <i style="margin-right: 10px; color: #CCC;" class="fa fa-file-text-o fa-2x" aria-hidden="true"></i>
              <time class="period-time">{{sec.video_time}}</time>
            </div>
            <div v-show="sec.section_type=='practise'" class="progress-wrap" style="margin-left: auto;">
             <!-- <img style="margin-right: 19px;" src="../../../assets/img/text.png" width="21" height="21" alt="">-->
              <i style="margin-right: 10px; color: #CCC;" class="fa fa-pencil-square-o fa-2x" aria-hidden="true"></i>
              <time class="period-time">{{sec.video_time}}</time>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <!--<div style="width: 1200px; height: 90px; margin: 0 auto; display: flex; align-items: center; margin-bottom: 157px; border-bottom: 1px solid #F2F2F2;">
      <span class="course-end">本课程完结</span>
    </div>-->
  </div>
  <empty v-if="result_data===0" >
    <span class="null-text">该课程未配置课程章节</span>

  </empty>

</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import courseScroll from 'src/components/common/course-scroll.vue'
  import empty from '../../../components/special/empty.vue'

  export default {
    data() {
      return {
        course_id:'',
        sections:'',
        result_data:1
      }
    },
    ready: function(){
      this.course_id=this.$route.params.id;
      this.load(Vue.http.options.root+'/api/v1/course_sections/?courseid='+this.course_id);
    },
    components: {
      courseScroll,
      empty
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {
              //console.log('成功');
              this.sections=response.data.data;
              this.result_data = this.sections.length;
              //console.log(this.sections);
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
      to_playing_video:function (section_id) {
        if (!this.$store.state.login_state){
          this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
          this.$store.state.login_ing=true;
        }else {
          this.$route.router.go({name: 'classmate-play', params: {id: section_id}});
        }

      }

    }



  }
</script>
 <style scoped>
  .section-tit {
    font-size: 20px;
    color: #78C63F;
    letter-spacing: 0.32px;
    margin: 0 0 0 26px;
  }
  .section-period {
    font-size: 18px;
    color: #666666;
    letter-spacing: 0.29px;
    padding: 0;
    margin-left: 81px;
  }
  .project_li {
    cursor: pointer;
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 1px 0 0 #F2F2F2;
    border-bottom: 1px solid #f8f8f8;
  }
  .project_li:hover{
   background: #ebeef5;
 }
  .progress-wrap {
    margin-right: 65px;
    display: flex;
    align-items: center;
  }
  .progress-out{
    border: 1px solid #DEDEDE;
    border-radius: 4px;
    width: 106px;
    padding: 2px 2px 2px 2px;
    height: 22px;
    margin-right: 17px;
  }
  .progress-in {
    width: 100px;
    height: 16px;
    display: inline-block;
    background: #DEDEDE;
  }
  .period-time {
    font-size: 18px;
    color: #999999;
    letter-spacing: 0.29px;
  }
  .course-end {
    display: block;
    font-size: 14px;
    color: #9D9D9D;
    letter-spacing: 0.22px;
    margin-left: 81px;
  }
  li time {
    width: 60px;
  }
</style>
