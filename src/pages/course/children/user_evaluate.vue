<template>
  <div style="width: 1200px; display: flex; margin: 30px auto 0; padding-top: 30px;">
    <div style="width: 820px;">
     <!-- 热评推荐-->
      <div style="width: 100%; height: 367px; background: #FAFAFA; text-align: left;">
        <div class="hot-evaluate-icon">
          <span class="hot-evaluate-text">热评推荐</span>
        </div>
        <ul style="display: flex; padding: 36px 0; margin-top: -60px;">
          <li v-for="item in recommend_reviews" id="{{item.id}}" style="list-style: none; padding: 0 30px; width: 271px; height: 294px; text-align: center; border-right: 1px solid #D9DDE0;">
            <div style="width: 40px; height: 40px; margin: 0 auto; border-radius: 40px; overflow: hidden;">
              <img :src="item.userinfo.headimg" width="40" height="40" alt="">
            </div>
            <span style="font-size: 14px;color: #4A4A4A; display: block; margin: 6px auto;">{{item.userinfo.username}}</span>
            <div class="atar_Show">
              <p class="course-evaluation-score"></p>
              <span></span>
            </div>
            <p style="width:211px; text-align: center; font-size: 14px;color: #4A4A4A;line-height: 28px;">
              {{item.review}}
            </p>
          </li>
        </ul>
      </div>
      <!--评论列表-->
      <div style="width: 100%; text-align: left; padding-bottom: 190px;">
        <h3 style="font-size: 18px;color: #333333; margin-top: 35px;">全部评论</h3>
        <ul style="margin-top: 25px;">
          <li v-for="menu in reviews.result" id="{{menu.id}}" style="list-style: none; width: 100%; height: auto;background: #FFFFFF;box-shadow: 0 -1px 0 0 rgba(242,242,242,0.50), 0 1px 0 0 rgba(242,242,242,0.50);">
            <div class="course-evaluate-list">
              <div>
                <img :src="menu.userinfo.headimg" width="42" height="42" alt="">
              </div>
              <div style="margin-left: 21px; width: 727px;">
                <div style="display: flex;">
                  <span class="course-evaluate-user-name">{{menu.userinfo.username}}</span>
                </div>
                <p class="course-evaluate-detail">
                 {{menu.review}}
                </p>
                <div style="display: flex; margin-top: 20px;">
                  <span class="course-evaluate-date">{{menu.date}}</span>
                  <!--<div class="course-action-wrap">
                    <div class="course-action-agree">
                      <img src="../../../assets/img/agree_icon.png" width="14" height="14" alt="">
                      <span class="course-action-num">{{menu.agree_number}}</span>
                    </div>
                    <div class="course-action-disagree">
                      <img src="../../../assets/img/disagree_icon.png" width="14" height="14" alt="">
                      <span class="course-action-num">{{menu.disagree_number}}</span>
                    </div>
                  </div>-->
                </div>
                <div v-if="menu.reply!=null" class="course-evaluate-reply">
                  <span style="color: #FD7B4D;">[讲师回复]</span>：{{menu.reply}}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="width: 340px; margin-left: 30px; padding-bottom: 90px;">
      <!--评分概况-->
      <div style="width: 100%; text-align: left; height: 231px; background: #FFF5E6; padding: 34px 30px 34px 36px;">
        <div style="display: flex; align-items: center">
          <span style="font-size: 14px;color: #4A4A4A;">综合评分</span>
          <span style="font-size: 14px;color: #4A4A4A; display: inline-block; margin-left: auto;">{{reviews.count}}人评价</span>
        </div>
        <span style="display: block;font-size: 36px; margin: 4px 0; color: #FF9000;">{{score.synthesisscore}}</span>
        <div style="width: 80px; display: flex; justify-content: flex-start; padding-bottom: 25px;">
          <div class="atar_Show">
            <p class="synthesisscore"></p>
            <span></span>
          </div>
        </div>
        <ul style="width: 100%; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #FFCF86;">
          <li style="list-style: none;">
            <span style="font-size: 12px;color: #666666; display: block; margin-top: 11px;">通俗易懂</span>
            <span style="font-size: 12px;color: #F5A623; display: block; margin-top: 4px;">{{score.about_video}}分</span>
          </li>
          <li style="list-style: none;">
            <span style="font-size: 12px;color: #666666; display: block; margin-top: 11px;">内容实用</span>
            <span style="font-size: 12px;color: #F5A623; display: block; margin-top: 4px;">{{score.about_course}}分</span>
          </li>
          <li style="list-style: none;">
            <span style="font-size: 12px;color: #666666; display: block; margin-top: 11px;">讲解清晰</span>
            <span style="font-size: 12px;color: #F5A623; display: block; margin-top: 4px;">{{score.about_teacher}}分</span>
          </li>
        </ul>
      </div>
      <!--热门标签-->
      <div style="width: 100%; margin-top: 30px;">
        <div style="display: flex; align-items: center;">
          <span style="display: inline-block; width:1px; height: 17px; border-left: 3px solid #000000;"></span>
          <span style="display: inline-block; margin-left: 26px;font-size: 18px;color: #333333;letter-spacing: 0.29px;">热门标签</span>
        </div>
        <ul style="width: 286px; display: flex; flex-wrap: wrap; align-items: center; margin: 30px auto 0;">
          <li v-for="tag in hot_tags" id="{{tag.id}}" class="hot-course-tag">
            {{tag.name}}
          </li>
        </ul>
      </div>
      <!--讲师-->
      <div style="width: 100%; margin-top: 38px;">
        <div style="display: flex; align-items: center;">
          <span style="display: inline-block; width:1px; height: 17px; border-left: 3px solid #000000;"></span>
          <span style="display: inline-block; margin-left: 26px;font-size: 18px;color: #333333;letter-spacing: 0.29px;">讲师</span>
        </div>
        <ul style="width: 286px; margin: 33px auto 0;">
          <li id="{{teachers.teacherid}}" style="list-style: none;">
            <div style="display: flex; align-items: center;">
              <div style="width: 40px; height: 40px; border-radius: 40px; overflow: hidden;">
                <img :src="teachers.image" width="40" height="40" alt="">
              </div>
              <div style="margin-left: 12px; text-align: left;">
                <span style="display: block; font-size: 18px;color: #4A4A4A;letter-spacing: 0.29px;">{{teachers.teachername}}</span>
                <span style="display: block;font-size: 12px;color: #595959;letter-spacing: 0.19px;">{{teachers.title}}</span>
              </div>
            </div>
            <p style="margin-top: 11px; text-align: justify; font-size: 12px;color: #595959;letter-spacing: -0.01px;line-height: 24px;">
              {{teachers.teacherbrief}}
            </p>
          </li>
        </ul>
      </div>
      <div style="width: 100%; margin-top: 61px;">
        <div style="display: flex; align-items: center;">
          <span style="display: inline-block; width:1px; height: 17px; border-left: 3px solid #000000;"></span>
          <span style="display: inline-block; margin-left: 26px;font-size: 18px;color: #333333;letter-spacing: 0.29px;">课前必学</span>
        </div>
        <ul style="width: 286px; margin: 0 auto;">
          <li v-for="course in recommend_courses" id="{{course.id}}"  class="need-study-course">
            <a style="display: flex; text-decoration: none;" v-link="{name:'course-detail',params:{id:course.id}}" target="_blank">
              <div style="width: 120px; height: 72px; overflow: hidden;">
                <img :src="course.course_img" width="120" height="72" alt="">
              </div>
              <div style="margin-left: 14px; height: 65px; display: flex; flex-direction: column; justify-content: space-between; text-align: left;">
                <span style="display: block; font-size: 14px;color: #4A4A4A;">{{course.name}}</span>
                <span style="display: block;font-size: 12px;color: #9B9B9B;">难度：{{course.level}}&nbsp;&nbsp;300人正在学</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import starScore from '../../../assets/js/starScore';

  export default {
    data() {
      return {
        course_id: '',
        evaluate: '',
        score: '',
        hot_tags: '',
        teachers: '',
        recommend_courses: '',
        recommend_reviews: '',
        reviews: ''
      }
    },
    ready: function(){
      this.course_id=this.$route.params.id;
      this.load(Vue.http.options.root+'/api/v1/coursereview/?courseid='+this.course_id);
    },
    components: {
      starScore
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {

            if(response.data.error_no==0) {

              this.evaluate=response.data.data;
              this.score=response.data.data.score;
              this.hot_tags=response.data.data.hot_tags.result;
              this.teachers=response.data.data.teacher_info;
              this.recommend_courses=response.data.data.recommend_course_info.result;
              this.recommend_reviews=response.data.data.recommend_review_info;
              this.reviews=response.data.data.review_info;
              this.$emit('user_review',this.reviews.count)
              //星级评分显示
              $('.synthesisscore').css('width',response.data.data.score.synthesisscore*8);



              console.log(this.evaluate);
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
  .need-study-course {
    list-style: none;
    display: flex;
    margin-top: 31px;
    padding-bottom: 30px;
    border-bottom: 1px solid #EDEDED;
  }
  .need-study-course:last-child {
    border-bottom: none;
  }
  .hot-course-tag {
    list-style: none;
    width: 130px;
    height: 42px;
    background: #FAFAFA;
    border-radius: 2px;
    font-size: 14px;
    color: #9B9B9B;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 26px;
    margin-bottom: 21px;
  }
  .hot-course-tag:nth-child(2n) {
    margin-right: 0;
  }
  .course-evaluate-reply {
    width: 100%;
    padding: 24px 22px;
    background: #F6F6F6;
    font-size: 12px;
    color: #666666;
    letter-spacing: 0.19px;
    margin-top: 30px;
  }
  .course-action-agree {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #999999;
  }
  .course-action-disagree {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-size: 12px;
    color: #999999;
  }
  .course-action-num {
    display: inline-block;
    margin-left: 5px;
  }
  .course-evaluate-list {
    display: flex;
    padding: 30px 0 22px;
  }
  .course-action-wrap {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .course-evaluate-user-name {
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
  }
  .course-evaluate-detail {
    margin: 10px 0 20px;
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0.22px;
  }
  .course-evaluate-date {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.19px;
  }
  .hot-evaluate-icon {
    position: relative;
    margin-left: -11px;
    width: 72px;
    height: 60px;
    background: url("../../../assets/img/hot-evaluate.png") no-repeat;
    display: flex;
    justify-content: center;
  }
  .hot-evaluate-text {
    display: block;
    margin-top: 6px;
    width: 28px;
    height: 40px;
    font-size: 14px;
    color: #FFFFFF;
  }
  .atar_Show {
    height: 10px;
    width: 80px;
    position: relative;
    margin: 0 auto;
    background: url("../../../assets/img/stark.png") repeat-x;
  }
  .atar_Show p{
    background: url("../../../assets/img/stars.png") repeat-x;
    height: 10px;
    left: 0;
  }
  .evaluate-head {
    width: 100%;
    height: 175px;
    display: flex;
    align-items: center;
    background: #FAFAFA;
  }
  .evaluate-head-list {
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .evaluate-item-wrap {
    width: 299px;
  }
  .evaluate-item-tit {
    display: block;
    font-size: 14px;
    color: #333333;
  }
  .evaluate-item-tit-special {
    font-size: 24px;
  }
  .evaluate-item-score-item {
    display: block;
    color: #FFCC01;
    margin: 17px auto;
    font-size: 16px;
  }
  .evaluate-item-score {
    font-size: 30px;
    display: inline;
  }
  .evaluate-item-score-special {
    font-size: 40px;
    display: inline;
  }
  .evaluate-item-gap {
    display: block;
    height: 105px;
    border-left: 1px solid #DCDCDC;
  }
  .evaluate-content {
    margin: 40px 0 65px;
  }
  .evaluate-list {
    padding: 30px 0;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgba(242,242,242,0.50);
  }
  .evaluate-cont {
    width: 1107px;
    margin-left: 21px;
    text-align: left;
    margin-right:30px;
  }
  .evaluate-user-wrap {
    display: flex;
  }
  .evaluate-user-name {
    display: block;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
  }
  .evaluate-time {
    margin-left: 36px;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
  }
  .evaluate-detail {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.19px;
    margin-top: 2px;
  }
  .reply {
    background: #F1F1F1;
    padding: 12px 11px;
    margin-bottom: 20px;
    font-size: 12px;
    color: #999999;
    letter-spacing: 0.19px;
  }
  .like-detail-wrap {
    display: flex;
    justify-content: right;
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
</style>
