<template>
  <div style="width: 1203px; margin: 0 auto; display: flex; padding-top: 40px;">
    <div style="width: 834px; margin-right: 30px; overflow: hidden;">
      <div style="display: flex;">
        <div style="cursor: pointer" class="cptn-wrap" id="{{bigBanner.id}}" v-link="{name: 'news-detail',params:{id:bigBanner.id}}">
          <img class="cptn-img lazy" :src="bigBanner.head_img" :data-original="bigBanner.head_img" width="556" height="314" alt="">
          <div class="cptn">
              {{bigBanner.title}}
          </div>
        </div>
        <div>
          <div style="cursor: pointer" v-for="item in smallBanner" class="cptn-wrap right-wrap" id="{{item.id}}" v-link="{name: 'news-detail',params:{id:item.id}}">
            <img class="cptn-img lazy" :src="item.head_img" :data-original="item.head_img" width="272" height="154" alt="">
            <div class="cptn top-article-tit">
              {{item.title}}
            </div>
          </div>
        </div>
      </div>
      <div class="item-Wrap">
        <ul style="display: flex; margin: 25px 0;">
          <li v-if="false" class="menu-item menu-active">最新文章</li>
          <li v-if="false" class="menu-item">最新视频</li>
        </ul>
        <ul class="news-list-wrap">
          <template v-for="article in news">
          <li v-if="article.article_type===0" id="{{article.id}}" v-link="{name: 'news-detail',params:{id:article.id}}" class="news-item-wrap">
            <div style="width: 282px; height: 159px; overflow: hidden;">
              <img class="lazy" :src="article.head_img" :data-original="article.head_img" width="282" height="159" alt="">
              <!--1:视频 0：资讯-->
              <!--<img v-if="article.article_type==1" style="position: relative; top: -103px; left: 118px;" src="../../assets/img/news-play-icon.png" width="46" height="46" alt="">-->
            </div>
            <div class="news-list">
              <h3 class="news-tit">{{article.title}}</h3>
              <div style="margin-bottom: 20px; display: flex; align-items: center;">
                <time class="arc-time">{{article.date}}</time>
                <span class="arc-time im-left view-num-bkg">阅读&nbsp;&nbsp;{{article.view_num}}</span>
                <span class="arc-time im-left evaluation-num-bkg">评论&nbsp;&nbsp;{{article.comment_num}}</span>
                <span class="arc-time im-left love-num-bkg">收藏&nbsp;&nbsp;{{article.collect_num}}</span>
              </div>
              <p class="news-dec">{{article.brief}}</p>
              <p style="text-align: left;">
                <span class="name-time-tag" v-for="item in article.tags">#{{item.tag}}#</span>
              </p>
            </div>
          </li>
          <li v-else id="{{article.id}}" v-link="{name: 'video-detail',params:{id:article.id}}" class="news-item-wrap">
            <div style="width: 282px; height: 159px; overflow: hidden;">
              <img class="lazy" :src="article.head_img" :data-original="article.head_img" width="282" height="159" alt="">
              <!--1:视频 0：资讯-->
              <img class="lazy"  style="position: relative; top: -103px; left: 118px;" src="../../assets/img/news-play-icon.png" width="46" height="46" alt="">
            </div>
            <div class="news-list">
              <h3 class="news-tit">{{article.title}}</h3>
              <div style="margin-bottom: 20px; display: flex; align-items: center;">
                <time class="arc-time">{{article.date}}</time>
                <span class="arc-time im-left view-num-bkg">阅读&nbsp;&nbsp;{{article.view_num}}</span>
                <span class="arc-time im-left evaluation-num-bkg">评论&nbsp;&nbsp;{{article.comment_num}}</span>
                <span class="arc-time im-left love-num-bkg">收藏&nbsp;&nbsp;{{article.collect_num}}</span>
              </div>
              <p class="news-dec">{{article.brief}}</p>
              <p style="text-align: left;">
                <span class="name-time-tag" v-for="item in article.tags">#{{item.tag}}#</span>
              </p>
            </div>
          </li>
          </template>
        </ul>
        <button class="click-more"  @click="get_news()">点击浏览更多</button>
      </div>
    </div>
    <side-bar></side-bar>
  </div>

</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../assets/js/jquery.lazyload.min'
  import sideBar from 'src/components/common/side.vue'
  import newsItem from 'src/components/common/news-item.vue'
  import bus from '../../assets/js/evenBus'


  export default {
    data() {
      return {
        news: '',
        bigBanner: '',
        smallBanner: '',
        new_news: '',
        page: 2,
        result_data:1,
        hot_news: ''
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.init_request()
      var that=this
      bus.$on("loginEvent",function(data){
        if (data=that.$route.name){
          that.init_request();
        }
      });

      $("img.lazy").lazyload({
        effect: "fadeIn", //载入效果
        threshold: 50, // 提前开始加载
        failurelimit : 10 // 图片排序混乱时
      });
    },
    components: {
      newsItem,
      sideBar,
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.news=response.data.data;
            }else if(response.data.error_no==2) {
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
      init_request:function () {
        this.load(Vue.http.options.root+'/api/v1/articles/');
        this.load_top(Vue.http.options.root+'/api/v1/top_articles/');
      },
      get_news: function() {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/articles/?page='+this.page).then(function(response) {

          if(response.data.error_no==0) {

            if(response.data.data.length>0) {
                  this.new_news=response.data.data;

                  this.news = this.new_news.reduce( function(coll,item){
                    coll.push( item );
                    return coll;
                  }, this.news);

                  console.log(this.news);
                }else {
              toastr.success('我是有底线的');
              $('.click-more').attr('disabled','disabled');
            }

          }else if(response.data.error_no==2) {
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        }).catch(function(response) {
            console.log('接口请求失败')
        });
        ++this.page;
      },
      load_top: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.bigBanner=response.data.data.bigBanner;
              this.smallBanner=response.data.data.smallBanner;

            }else if(response.data.error_no==2) {
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
  .cptn-wrap {
    width: 556px;
    margin-right: 6px;
    position: relative;
    overflow: hidden;
  }
  .right-wrap {
    width: 272px;
  }
  .right-wrap:first-child {
    margin-bottom: 7px;
  }
  .cptn-img {
    left: 0;
    bottom: 0;
    position: relative;
  }
  .cptn {
    background: rgba(0,0,0,0.30);
    width: 100%;
    min-height: 55px;
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0.4px;
    line-height: 26px;
    padding-left: 30px;
    bottom: -30%;
    position: absolute;
    left: 0;
    overflow: hidden;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .top-article-tit {
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.31px;
    padding-left: 14px;
    min-height: 30px;
  }
  .cptn-wrap:hover .cptn {
    bottom: 0;
  }
  /*资讯列表style*/
  .click-more {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 77px;
    width: 100%;
    height: 60px;
    margin-top: -30px;
    font-size: 14px;
    color: #949494;
    letter-spacing: 0.22px;
    border-left: 1px solid #EDEDED;
    border-right: 1px solid #EDEDED;
    border-bottom: 1px solid #EDEDED;
    cursor: pointer;
    background: #fff;
    outline: none;
    border-top: none;
  }
  .menu-item {
    font-size: 14px;
    color: #414A60;
    letter-spacing: 0.22px;
    margin-right: 29px;
  }
  .menu-active {
    /*font-family: PingFangSC-Medium;*/
  }
  ul {
    padding: 0;
  }
  li {
  list-style: none;
  }
  time {
    display: block;
  }

  /*资讯列表-style*/
  .arc-time {
    font-size: 13px;
    color: #9B9B9B;
    letter-spacing: 0.28px;
  }
  .im-left {
    display: inline-block;
    margin-left: 30px;
    padding-left: 20px;
  }
  .view-num-bkg {
    background: url("../../assets/img/view_icon.png") no-repeat 0 5px;
    background-size: 14px 8px;
  }
  .love-num-bkg {
    background: url("../../assets/img/love.png") no-repeat 0 5px;
    background-size: 10px 9px;
  }
  .evaluation-num-bkg {
    background: url("../../assets/img/evaluate.png") no-repeat 0 4px;
    background-size: 14px 13px;
  }

  .news-item-wrap {
    display: flex;
    width: 100%;
    height: 190px;
    padding-bottom: 30px;
    border-bottom: 1px solid #EDEDED;
    margin-bottom: 30px;
    cursor: pointer;
  }
  .news-list {
    margin-left: 30px;
  }
  .name-time-tag {
    font-size: 14px;
    color: #999999;
    display: inline-block;
    letter-spacing: 0.22px;
    margin-right: 20px;
  }
  .news-dec {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.22px;
    height: 50px;
    margin-bottom: 10px;
    width: 485px;
  }
  .news-tit {
    font-size: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #414A60;
    width: 485px;
    letter-spacing: 0.32px;
    margin: 0 0 16px 0;
  }
</style>
