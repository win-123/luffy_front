<template>
  <div style="width:350px;">
    <div style="width:350px; height:236px;">
      <div style="width:350px; height:236px; clear: both;overflow: hidden; zoom: 1;">
        <img class="sub-img" src="http://yxs-app.oss-cn-beijing.aliyuncs.com/2f1237a76bbad0b07d9bead1786d9c31"  width="350" height="236" data-original="http://yxs-app.oss-cn-beijing.aliyuncs.com/2f1237a76bbad0b07d9bead1786d9c31">
        <span class="animated fadeInDown" style="display: block; font-size: 16px; color: #FFFFFF; letter-spacing: 0; position: relative; top: -118px; z-index: 222;">常用算法专题学习</span>
      </div>
    </div>
    <div style="width:350px; height:164px; display: flex; justify-content: center; box-shadow: 0 4px 9px 0 #E8E8E8;">
      <div style="width: 301px; margin-top: 20px; text-align: left; font-size: 12px;color: #333333; letter-spacing: 0; line-height: 28px;">
        数据结构：堆、栈、二叉树等<br>
        排序：冒泡排序、快速排序、直接选择排序、堆排序、直接插入排序等<br>
        查找：顺序查找、折半查找、哈希查找、二叉排序树等<br>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min'

  export default {
    ready: function(){
      $("img.lazy").lazyload({effect: "fadeIn"});
    },
    data() {
      return {}
    }

  }
</script>
<style scoped>
  @import "../../assets/css/animate.min.css";
  .sub-img {
    cursor: pointer;
    transition: all 0.2s;
  }
  .sub-img:hover {
    transform: scale(1.2);
  }
</style>
