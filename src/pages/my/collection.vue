<template>
  <div>
    <common></common>
    <div style="width: 1200px; margin: 0 auto;">
      <ul class="my-item-wrap">
        <li class="my-item" v-link="{name:'mine-account'}">我的账户</li>
        <li class="my-item" v-link="{name:'mine-older'}">我的订单</li>
        <li class="my-item my-active" v-link="{name:'mine-collection'}">我的收藏</li>
        <li class="my-item" v-link="{name:'mine-profile'}">个人资料</li>
        <li class="my-item" v-link="{name:'mine-safe'}">账号安全</li>
      </ul>
      <div class="information" style="border-top: 1px solid #E8E8E8;">
        <ul style="width: 834px; margin: 30px auto;">
          <li v-for="collection in collectionList" id="{{collection.id}}" class="news-item-wrap">
            <div style="width: 282px; height: 159px; overflow: hidden;">
              <img style="display: block;" :src="collection.head_img" width="100%" alt="">
            </div>
            <div class="news-list" style="display: flex; flex-direction: column;">
              <h3 class="news-tit">{{collection.title}}</h3>
              <p class="news-collecttion-dec">{{collection.brief}}</p>
              <time class="col-news-name-time" v-link="{name: 'news-detail',params:{id:collection.id}}">查看详情 >>></time>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import common from '../../pages/my/children/common.vue';



  export default {
    data() {
      return {
        img_define: false,
        collectionList:'',
        data:{
          "profile": false,
          "older": false,
          "balance": true,
          "collection": false
          /*"question": false*/
        }
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.load(Vue.http.options.root+'/api/v1/user/collection/list/');
    },
    canReuse: false,/*同一个组件被多个页面调用时设置*/
    components: {
      common
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response){

            if(response.data.error_no==0){

              this.collectionList=response.data.data;

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      }


    }



  }
</script>
 <style scoped>
  /*收藏main-style*/
  .my-item-wrap{
    width: 474px;
    height: 31px;
    margin: 41px auto 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .my-active {
    border-bottom: 1px solid #000;
  }
  .information {
    margin-bottom: 63px;
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
  .col-news-name-time {
    display: block;
    margin-top: auto;
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
  }
  .news-collecttion-dec {
    font-size: 14px;
    color: #666666;
    letter-spacing: 0.22px;
    height: auto;
    width: 485px;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .news-tit {
    font-size: 20px;
    color: #414A60;
    width: 485px;
    letter-spacing: 0.32px;
    margin: 0 0 24px 0;
  }
</style>
