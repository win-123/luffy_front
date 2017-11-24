<template>
  <div class="sideWrap" style="width: 340px;">
    <div v-show="hot_courses.length>0" style="width: 100%; height: auto; background: #FAFAFA; padding-top: 22px; margin-bottom: 31px;">
      <div class="titWrap">
        <b style="display: block; height:17px; background: #000; width:3px;"></b>
        <h4 class="model-tit">推荐好课</h4>
        <!--<button class="side-more">more</button>-->
      </div>
      <ul style="width: 279px; margin:0 auto;">
        <li v-for="item in hot_courses" id="{{item.id}}"  style="cursor: pointer; display: flex; padding: 31px 0; border-bottom: 1px solid #EDEDED; justify-content: center;">
          <a style="display: flex; text-decoration: none;"  target="_blank" @click="course_link(item.id)">
            <img :src="item.course_img" width="120" height="72" alt="">
            <div class="side-course-list">
              <h4 class="side-course-tit">{{item.name}}</h4>
              <p class="side-course-dec"><nobr>{{item.brief}}</nobr></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div v-show="hot_news.articles.length>0" style="width: 100%; height: auto; background: #FAFAFA; padding-top: 22px; margin-bottom: 31px;">
      <div class="titWrap">
        <b style="display: block; height:17px; background: #000; width:3px;"></b>
        <h4 class="model-tit">热门文章</h4>
       <!-- <button class="side-more">more</button>-->
      </div>
      <ul style="width: 279px; margin:0 auto; padding: 0;">
        <li class="hot-news-wrap" v-for="item in hot_news.articles" id="{{item.article_id}}">
          <a style="display: block; text-decoration: none;" v-link="{name: 'news-detail',params:{id:item.article_id}}" target="_blank">
            <h5 class="article-tit">{{item.title}}</h5>
            <span class="look-detail">查看详情</span>
          </a>
        </li>
      </ul>
    </div>
    <div v-show="hot_news.videos.length>0" style="width: 100%; background: #FAFAFA; padding-top: 22px; margin-bottom: 31px;">
      <div class="titWrap">
        <b style="display: block; height:17px; background: #000; width:3px;"></b>
        <h4 class="model-tit">热门视频</h4>
        <!--<button class="side-more">more</button>-->
      </div>
      <ul style="width: 279px; margin:0 auto; padding-top: 10px;">

        <li  v-for="video in hot_news.videos" id="{{video.article_id}}" style="list-style: none;">
          <a style="display: block; text-decoration: none;" v-link="{name: 'video-detail',params:{id:video.article_id}}" target="_blank">
            <img style="margin-top: 20px;" :src="video.head_img" width="282" height="159" alt="">
            <h5 class="article-tit" style="margin: 29px 0 7px;">{{video.title}}</h5>
            <span class="look-detail" style="padding-bottom: 20px;">查看详情</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min'
  import sideBar from 'src/components/common/side.vue'
  import newsItem from 'src/components/common/news-item.vue'

  export default {
    data() {
      return {
        hot_news:'',
        hot_courses:''
      }
    },
    ready: function(){
      this.load(Vue.http.options.root+'/api/v1/hot_articles/');
      this.load(Vue.http.options.root+'/api/v1/hot_courses/');
    },
    components: {
      newsItem,
      sideBar
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              if(url==Vue.http.options.root+'/api/v1/hot_articles/'){
                this.hot_news=response.data.data;
              }

              if(url==Vue.http.options.root+'/api/v1/hot_courses/'){
                this.hot_courses=response.data.data;
              }



              //console.log(this.hot_courses);

            }else if(response.data.error_no==2){

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
      course_link:function (course_id) {
        console.log('course_id',course_id)
        this.$route.router.go(this.$store.state.course_link[course_id]);
      }


    }



  }
</script>
<style scoped>
  /*资讯侧边栏style*/
  .article-tit {
    font-size: 18px;
    color: #414A60;
    letter-spacing: 0.29px;
    margin: 30px 0 25px;
  }
  .look-detail {
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
    display: block;
    padding-bottom: 25px;
  }
  .look-detail:last-child {
    border-bottom: none;
  }
  .side-course-dec {
    font-size: 12px;
    width: 142px;
    height: 17px;
    color: #9B9B9B;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .side-course-tit {
    font-size: 14px;
    color: #4A4A4A;
    margin: 0 0 10px 0;
  }
  .side-course-list {
    width: 150px;
    margin-left: 14px;
  }
  .side-more {
    border: 1px solid #979797;
    border-radius: 30px;
    background: #FAFAFA;
    outline: none;
    width: 49px;
    font-size: 13px;
    color: #979797;
    letter-spacing: 0.21px;
    text-align: center;
    margin-left: 156px;
  }
  .model-tit {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.29px;
    margin-left: 27px;
  }
  .hot-news-wrap {
    border-bottom: 1px solid #EDEDED;
    list-style: none;
    cursor: pointer;
  }
  .hot-news-wrap:last-child {
    border-bottom: none;
  }
  .titWrap {
    width: 309px;
    height: 25px;
    display: flex;
    align-items: center;
  }
</style>
