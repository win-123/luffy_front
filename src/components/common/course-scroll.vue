<template>
  <div class="rangeWrap">
    <div class="img-box">
      <div class="range-img" v-for="val in imgList" track-by="$index">
        <img class="img" :src="val" :data-num="$index" :class="{scale: $index == 1}">
      </div>
    </div>
    <div class="circle-btn-area">
      <ul class="circle-btn-box" style="margin-top: 60px;">
        <li v-for="val in imgList" track-by="$index">
          <img :src="w10_imgSrc" :data-num="$index" v-if="$index != 1">
          <img :src="w17_imgSrc" :data-num="$index" class="w17" v-else>
          <i class="course-scroll-line" v-if="$index != imgList.length - 1"></i>
        </li>
      </ul>
      <div>
        <ul style="display: flex; align-items: center; width: 1065px;">
          <li style="width: 139px;">web开发</li>
          <li style="width: 139px;">人工智能</li>
          <li style="width: 139px;">云计算</li>
          <li style="width: 139px;">金融量化分析、自动化交易</li>
          <li style="width: 139px;">爬虫</li>
          <li style="width: 139px;">自动化运维、测试</li>
          <li style="width: 139px;">科学运算</li>
          <li style="width: 139px;">游戏开发</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        imgList: [
          'http://luffycdn.oldboyedu.com/static/frontend/index/web.png',//web
          'http://luffycdn.oldboyedu.com/static/frontend/index/per.png',//人工智能
          'http://luffycdn.oldboyedu.com/static/frontend/index/clo.png',//云计算
          'http://luffycdn.oldboyedu.com/static/frontend/index/jin.png',//金融
          'http://luffycdn.oldboyedu.com/static/frontend/index/pa.png',//爬虫
          'http://luffycdn.oldboyedu.com/static/frontend/index/intelligence.png',//测试
          'http://luffycdn.oldboyedu.com/static/frontend/index/course-img4.png',//科学计算
          'http://luffycdn.oldboyedu.com/static/frontend/index/game.png'//游戏开发
        ],
        w10_imgSrc : 'http://luffycdn.oldboyedu.com/static/frontend/index/circle.png',
        w17_imgSrc : 'http://luffycdn.oldboyedu.com/static/frontend/index/circle-active.png'
      }
    },
    ready: function() {
      let me = this;
      let len = $('.circle-btn-box li').length;
      // 当图片超过9张时，需要修改线的长度，防止样式混乱
      if(len > 9){
        $('.course-scroll-line').css("width", (1176 - len * 10 - 7) / (len - 1) + 'px')
      }
      // 计算图片父集的width
      $('.img-box').css("width", len * (350 + 62) + 'px');
      // 给图片添加点击事件
      $(this.$el).find('img').on('click', function(){
        if($(this).hasClass('w17') || $(this).hasClass('scale')) {
            return false;
        }

        var index = $(this).attr('data-num');

        $(me.$el).find('.range-img img').removeClass('scale');
        $(me.$el).find('.range-img img[data-num="'+ index +'"]').addClass('scale');

        $(me.$el).find('.w17').attr("src", me.w10_imgSrc);
        $(me.$el).find('.circle-btn-box img').removeClass('w17');
        $(me.$el).find('.circle-btn-box img[data-num="'+ index +'"]').addClass('w17').attr("src", me.w17_imgSrc);

        // 处理特殊逻辑
        // 点击第一个img的时候
        let firstNum = $($(me.$el).find('.range-img')[0]).find('img').attr('data-num');
        let lastNum = $($(me.$el).find('.range-img')[len - 1]).find('img').attr('data-num');
        let lastDom = $(me.$el).find('.range-img img[data-num="'+ (len - 1) +'"]').parent();
        let firstDom = $(me.$el).find('.range-img img[data-num="0"]').parent();
        if(index == 0 && index == firstNum){
          $(me.$el).find('.range-img img[data-num="'+ 0 +'"]').parent().before(lastDom);
          return false;
        } else if(index == 7 && index == firstNum) {
          $(me.$el).find('.img-box').append(lastDom);
          $(me.$el).find('.img-box').append(firstDom);

          $('.img-box').animate({
            left: -(index - 2) * 412 + 'px'
          }, 1000, 'linear');

          return false;
        } else if(index == (len - 1) && index == lastNum ) {

          $(me.$el).find('.img-box').append(firstDom);

          $('.img-box').animate({
            left: -(index - 2) * 412 + 'px'
          }, 1000, 'linear');

          return false;
        } else if(index == 0 && index == lastNum) {
          $(me.$el).find('.range-img img[data-num="1"]').parent().before(firstDom);
          $(me.$el).find('.range-img img[data-num="0"]').parent().before(lastDom);

          $('.img-box').animate({
            left: -index * 412 + 'px'
          }, 1000, 'linear');

          return false;
        } else {
            if(firstNum == 7) {
              $(me.$el).find('.img-box').append(lastDom);
            } else if (firstNum == 1){
              $(me.$el).find('.range-img img[data-num="1"]').parent().before(firstDom);
            }
        }

        $('.img-box').animate({
          left: -(index - 1) * 412 + 'px'
        }, 1000, 'linear')
      })
    },
    computed: function() {

    },
    methods: {

    }

  }
</script>
<style scoped>
.course-scroll-line {
  display: block;
  width: 122px;
  border-top: 1px solid #EEEEEE;
}
.img-box {
  height: 290px;
  position: absolute;
  left:0;
  clear: both;
}
.img-box .range-img, .img-box .tmp-img  {
  float: left;
  width: 350px;
  height: 236px;
  margin-right: 62px;
  border-radius: 3px;
}
small {
  display: block;
}
  li {
    list-style: none;
  }

  .circle-btn-area {
    position: absolute;
    bottom: 40px;
    left:50%;
    transform: translateX(-50%);
  }
  .circle-btn-box {
    display: flex;
    justify-content: center;
  }
.circle-btn-box > li {
  display: flex;
  align-items: center;
  height: 17px;
}
.circle-btn-box > li img {
  width: 10px;
  height: 10px;
}
.circle-btn-box > li .w17 {
  width: 17px;
  height: 17px;
}

.scale {
  -webkit-transform-origin:50% 50%;
  -moz-transform-origin:50% 50%;
  -ms-transform-origin:50% 50%;
  -o-transform-origin:50% 50%;
  transform-origin:50% 50%;
  -webkit-transform: scale(1.143);
  -moz-transform: scale(1.143);
  -ms-transform: scale(1.143);
  -o-transform: scale(1.143);
  transform: scale(1.143);
}

</style>
