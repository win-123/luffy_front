<template>
  <div class="my-banner"></div>
  <div class="profile-wrap">
    <div style="text-align: center; margin-top: -80px;">
      <div @click="changeClick()" style="width: 120px; height: 120px; border-radius: 60px; overflow: hidden; margin: 0 auto;">
        <img class="newImg" @mouseover="cameraOver()" @mouseout="cameraOut()" :src="$store.state.userImg" width="100%" alt="" @click="GETIMG(userInfo.head_img)">
        <div v-show="camera" @mouseover="cameraOver()" @mouseout="cameraOut()" class="camera-icon"></div>
      </div>
      <span class="user-name">{{userInfo.username}}</span>
      <span class="user-job">{{userInfo.city}} | {{userInfo.profession}}</span>
      <p class="user-word">{{userInfo.signature}}</p>
    </div>
  </div>
  <div v-show="img_define" class="img-define-wrap">
    <div class="img-define-cont">
      <div class="img-define-head">
        <span class="img-define-tit">选择头像区域</span>
        <img @click="this.img_define=false;" class="img-define-close" src="../../../assets/img/img-close-icon.png" width="17" height="17" alt="">
      </div>
      <div class="img-container">
        <img class="target-img" width="100%" alt="" >
      </div>
      <div class="btn-wrap">
        <button class="img-btn img-change" @click="changeClick()">更换头像</button>
        <button class="img-btn img-cancel" @click="this.img_define=false;">取消</button>
        <button class="img-btn img-sure" @click="changeUserImg()">确认</button>
      </div>
      <input type="file" name="file" id="input" capture="camera"  accept="image/png,image/jpg" size="10" style="visibility:hidden;" @change="selectImage" />
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  /*import cropper from '../../../assets/js/imagecropper';*/

  export default {
    data() {
      return {
        userInfo:'',
        img_define: false,
        camera: false,
        timer:'',
        image:'',
        object: "<input type='file' name='file' id='input' capture='camera'  accept='image/png,image/jpg' size='10' style='visibility:hidden;' @change='selectImage' />",
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

      $('.ed').html(this.object);
      this.load(Vue.http.options.root+'/api/v1/personal/top_info/');
      /* 头像上传插件cropper--属性设置*/
      /* 属性设置：
       aspectRatio: 裁剪框比例
       background: 是否在容器上显示网格背景
       guides: 是否在剪裁框上显示虚线
       zoomOnWheel: 是否允许鼠标滚轴缩放图片
       center: 是否显示裁剪框 中间的+
       * */
      $('.target-img').on("load", function() {  //等待图片加载成功后，才进行图片的裁剪功能
        $('.target-img').cropper({
          viewMode: 3,
          aspectRatio: 1 / 1,
          autoCropArea: 0.6,
          /*autoCrop: false,*/
          background: false,
          guides: false,
          zoomOnWheel: false,
          center: false

        });
      });

    },
    components: {
    },
    props:{
      is_update: {
        type: Boolean,
      }
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response){
            if(response.data.error_no==0){
              this.userInfo = response.data.data;
            }else if(response.data.error_no==2) {
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;
            }else {
              console.log('接口返回失败');
            }
          })
          .catch(function(response) {
            console.log('服务器正在打盹~')
          })
      },
      changeClick: function () {
        $('#input').click();
      },
      cameraOver: function () {
        var $this=this;
        setTimeout(function(){
          $this.camera=true;
        },10);
      },
      cameraOut: function () {
        var $this=this;
        setTimeout(function(){
          $this.camera=false;
        },10);
      },
      convertToData: function(url, canvasdata, cropdata, callback) {
        var cropw = cropdata.width; // 剪切的宽
        var croph = cropdata.height; // 剪切的高
        var imgw = canvasdata.width; // 图片缩放或则放大后的高
        var imgh = canvasdata.height; // 图片缩放或则放大后的高

        var poleft = canvasdata.left - cropdata.left; // canvas定位图片的左边位置
        var potop = canvasdata.top - cropdata.top; // canvas定位图片的上边位置

        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');

        canvas.width = cropw;
        canvas.height = croph;

        var img = new Image();
        img.src = url;

        img.onload = function() {
          this.width = imgw;
          this.height = imgh;
          // 这里主要是懂得canvas与图片的裁剪之间的关系位置
          ctx.drawImage(this, poleft, potop, this.width, this.height);
          var base64 = canvas.toDataURL('image/jpg', 1);  // 这里的“1”是指的是处理图片的清晰度（0-1）之间，当然越小图片越模糊，处理后的图片大小也就越小
          callback && callback(base64);    // 回调base64字符串
        }
      },
      changeUserImg: function() {
        var $this=this;
        var $image = $('.target-img');

        var src = $image.eq(0).attr("src");
        var canvasdata = $image.cropper("getCanvasData");
        var cropBoxData = $image.cropper('getCropBoxData');
        $this.convertToData(src, canvasdata, cropBoxData, function(basechar) {
          // 回调后的函数处理
          $(".newImg").attr("src",'').attr("src", basechar);
          $this.postImage(basechar);
        });
        this.img_define=false;
      },
      //打开本地图片
      selectImage: function(e) {
        let file = e.target;
        this.img_define=true;
        console.log(file);
        console.log(file.files);
        if(!file.files || !file.files[0]){
          return;
        }
        var reader = new FileReader();
        reader.onload = function(evt){
          this.image = evt.target.result;
          $('.img-container .target-img').attr('src','').attr('src',this.image).show();
        };
        reader.readAsDataURL(file.files[0]);

      },
      postImage: function (obj) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var param={
          avatar: obj
        };

        this.$http.post(Vue.http.options.root+'/api/v1/user/change_avatar/',JSON.stringify(param))
          .then(function(response){

            if(response.data.error_no==0){
              this.$store.state.userImg=response.data.data.file_path;
              Cookies.set('userImg',response.data.data.file_path);
              this.load(Vue.http.options.root+'/api/v1/personal/top_info/');

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
      },

    },
    watch:{
      is_update: function (nerw) {
          this.load(Vue.http.options.root+'/api/v1/personal/top_info/');
        }
    },

  }
</script>
<style scoped>
  @import "../../../assets/css/cropper.css";
  .camera-icon {
    position: relative;
    z-index: 111;
    width: 120px;
    height: 120px;
    margin-top: -120px;
    border-radius: 60px;
    overflow: hidden;
    background: rgba(74,73,74,0.60) url("../../../assets/img/camera.svg") no-repeat 39px 43px;
    background-size: 42px 34px;
  }
  /*用户头像修改*/
  .img-define-wrap {
    width: 100%;
    height: 100%;
    background: rgba(51,51,51,0.50);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
  }
  .img-define-cont {
    width: 412px;
    height: 508px;
    background: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -206px;
    margin-top: -254px;
    z-index: 33;
  }
  .img-define-head {
    background: #7ED321;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
  }
  .img-define-tit {
    font-size: 14px;
    color: #FFFFFF;
    display: flex;
    margin-left: 21px;
  }
  .img-define-close {
    margin-left: auto;
    margin-right: 17px;
    cursor: pointer;
  }
  .img-container {
    width: 300px;
    height: 300px;
    margin: 53px auto 45px;
  }
  .newImg{
    z-index: 3;
  }
  .btn-wrap {
    width: 300px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
  .img-btn {
    width: 93px;
    height: 31px;
    outline: none;
    border: none;
    border-radius: 2px;
    font-size: 14px;
  }
  .img-change {
    background: #F4D8AB;
    color: #F5A623;
  }
  .img-cancel {
    background: #D8D8D8;
    color: #FFFFFF;
  }
  .img-sure {
    background: #7ED321;
    color: #FFFFFF;
  }

  /**/
  li {
    list-style: none;
  }
  .my-banner {
    width: 100%;
    height: 324px;
    background: url("../../../assets/img/my_bkging.png") no-repeat;
    background-size: cover;
    z-index: 1;
  }
  .top-cont {
    display: block;
    font-size: 24px;
    color: #FFFFFF;
  }
  .top-tit {
    display: block;
    font-size: 14px;
    color: #CBCBCB;
    margin-bottom: 8px;
  }
  .profile-wrap {
    width: 1200px;
    margin: 0 auto;
  }
  .user-job {
    display: block;
    font-size: 11px;
    color: #9B9B9B;
  }
  .user-name {
    display: block;
    font-size: 24px;
    color: #4A4A4A;
    margin-top: 14px;
  }
  .my-active {
    border-bottom: 1px solid #000000;
  }
  .my-item {
    font-size: 14px;
    color: #333333;
    cursor: pointer;
  }
  .my-item-wrap{
    width: 474px;
    height: 31px;
    margin: 41px auto 0;
    display: flex;
    justify-content: space-between;
  }
  .user-word {
    font-size: 12px;
    color: #4A4A4A;
    margin-top: 14px;
  }
</style>
