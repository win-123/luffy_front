<template>
  <div class="shadow-wrap login-shadow">
    <!--登陆-路飞学城-->
    <div v-if="login_panel" class="login-wrap login-shadow-main">
      <div @click="close_login()" style="width: 323px; margin: 0 auto; padding-top: 30px; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="login-tit" style="padding-top: 0;">登陆路飞学城</h3>
      <div class="login-cont" style="width: 323px; margin: 0 auto;">
        <div class="login-box phone-icon-active login-phone-box">
          <input v-model="username" autocomplete="off" class="log-input" type="text" name="phone" placeholder="输入手机号/用户名" @click="quit_error('login-phone')">
        </div>
        <span class="error-tip login-phone-tip"></span>
        <div class="login-box lock-icon-active login-password-box">
          <input v-model="password" autocomplete="off" @keyup.enter="load()" class="log-input" type="password" name="phone" required placeholder="输入密码" @click="quit_error('login-password')">
        </div>
        <span class="error-tip login-password-tip"></span>
        <div class="remember-password-wrap">
          <div class="remember-password-radio" @click="remember_password()">
            <img v-if="remember" src="../../assets/img/selected_i.png" style="margin-left: 2px;" width="7" height="5" alt="">
          </div>
          <span class="remember-password-text">7天内自动登陆</span>
        </div>
        <button class="login-next-btn login-btn" @click="load()">登陆</button>
        <div style="width: 100%; display:flex; justify-content: space-between;">
          <span class="login-tip">没有账号 <a @click="register()">立即注册</a></span>
          <span class="login-tip"><a @click="forgetPassword()">忘记密码</a></span>
        </div>
      </div>
    </div>
    <!--输入手机号-->
    <div  v-show="forget_password" class="login-wrap forget-shadow-main">
      <div @click="cancelForget()" style="width: 323px; margin: 0 auto; padding-top: 30px; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="login-tit" style="padding-top: 0;">忘记密码</h3>
      <div class="login-cont" style="width: 323px; margin: 0 auto 0;">
        <form id="first-step-register" action="" method="get">
          <div class="login-box phone-icon-active forget-pwd-phone-box">
            <select name="" id="country-area-num" style="margin-left: 36px; border: none;">
              <option value="+86">+86</option>
            </select>
            <input v-model="phone" class="log-input" autocomplete="off" style="margin-left:0; border:none; background: #fff; padding-left: 10px;" type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" name="phone" id="phone" placeholder="请输入您的手机号">
          </div>
          <span class="error-tip forget-pwd-phone-tip"></span>
          <div id="emb" style="margin-top: 34px;"></div>
          <p id="waiting" v-if="false" class="showing">正在加载验证码......</p>
          <p id="noticing" class="hiding">请先拖动验证码到相应位置</p>
          <div class="login-box code-icon-active forget-pwd-code-box" style="margin-top: 34px;">
            <input v-model="phoneCode" class="log-input" autocomplete="off" style="margin-left: 36px; border:none; padding-left: 10px; width: 190px;" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="6" maxlength="6" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" type="text" name="phone" id="phone-code" placeholder="短信验证码">
            <span class="get-phone-code-btn forget-code-btn">获取验证码</span>
          </div>
          <span class="error-tip set-code-tip forget-first-code"></span>
          <span id="embed-submit" @click="setPassword()" class="next-btn login-next-btn">下一步</span>
          <span class="login-tip">已有账号 <a @click="goLogin()">直接登陆</a></span>
        </form>
      </div>
    </div>
    <!--设置新密码-->
    <div v-show="set_password" class="login-wrap forget-set-shadow-main">
      <div @click="cancelForget()" style="width: 323px; margin: 0 auto; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="edit-tit" style="padding-top: 0;">输入新密码</h3>
      <div class="login-cont" style="width: 323px; margin: 50px auto 0;">
        <form action="">
          <div class="login-box lock-icon-active password-box">
            <input v-model="newPassword" autocomplete="off" class="input-sty log-input"  type="password" name="newPassword" placeholder="至少6位密码，区分大小写">
          </div>
          <span class="error-tip newPassword-tip"></span>
          <div class="login-box lock-icon-active password-box">
            <input v-model="againNewPassword" autocomplete="off" class="input-sty log-input"  type="password" name="againNewPassword" placeholder="至少6位密码，区分大小写">
          </div>
          <span class="error-tip againNewPassword-tip"></span>
          <span @click="successPassword()" class="set-success-btn login-next-btn">设置</span>
        </form>
      </div>
    </div>
  </div>


</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import bus from '../../assets/js/evenBus'

  export default {
    data() {
      return {
        remember: false,
        login_panel: true,
        phone: '',
        forget_password: false,
        set_password: false,
        phone_true: false,
        username_check: false,
        password_check: false,
        phone_code_check: false,
        check: false,
        phoneCode: '',
        setPhoneCode: '',
        username: '',
        password: '',
        seven:'',
        seconds: 60,
        newPassword: '',
        againNewPassword: ''
      }
    },
    props: {},
    watch: {
      '$store.state.login_ing' () {
        if(this.$store.state.login_ing) {
          this.loadCode();
        }
      }
    },
    computed: {},
    ready: function () {
      $('.log-input').bind('focus',function() {
        $(this).parent('.login-box').css({
          'border':'1px solid #7ED321',
        });
        $(this).parent('.lock-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/lock_active_icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.phone-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/phone-active-icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.code-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/phone-code-icon_1507518083.1962674.png') no-repeat 12px 11px"
        });
      }).bind('blur',function() {
        $(this).parent('.login-box').css({
          'border':'1px solid #E4E7ED'
        });
        $(this).parent('.lock-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/lock_dark_icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.phone-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/phone-icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.code-icon-active').css({
          'background': "url('http://luffycdn.oldboyedu.com/static/frontend/index/phone-code-dark-icon_1507517986.2156007.png') no-repeat 12px 11px"
        });
      });
     /* this.$store.state.login_ing=true;*/
    },
    methods: {
      quit_error:function (ele) {
        console.log(ele)
        $('.'+ele+'-tip').text('')
      },
      load: function() {

        if(this.password==''){

          $('.login-password-box').css('border','1px solid #FD7B4D');
          $('.login-password-tip').text('密码不能为空');

        } else if(this.password.toString().length<6) {

          $('.login-password-box').css('border','1px solid #FD7B4D');
          $('.login-password-tip').text('登陆密码至少6位哦');

        } else {
          this.password_check=true;
          $('.login-password-box').css('border','1px solid #E4E7ED');
          $('.login-password-tip').text('');
        }

        if(this.username!='') {
          this.username_check=true;
          $('.login-phone-box').css('border','1px solid #E4E7ED');
          $('.login-phone-tip').text('');

        } else {
          $('.login-phone-box').css('border','1px solid #FD7B4D');
          $('.login-phone-tip').text('账号不能为空');
        }

        if(this.username_check && this.password_check) {
          var params={
            username: this.username,
            password: this.password,
            seven:this.remember,
          };

          this.$http.post(Vue.http.options.cz_root+'/api/v1/account/login/', JSON.stringify(params))
            .then(function(response){

              if(response.data.error_no==0){
                Cookies.set('token',response.data.data.access_token,{ expires: response.data.data.expires_in});
                Cookies.set('username',response.data.data.username,{ expires: response.data.data.expires_in});
                Cookies.set('userImg',response.data.data.avatar,{ expires: response.data.data.expires_in});
                this.$store.state.Authorization=Cookies.get('token');
                this.$store.state.shopCartNumber=response.data.data.shop_cart_num;
                this.$store.state.noticeNumber=response.data.data.notice_num;
                Cookies.set('shopCartNumber',response.data.data.shop_cart_num,{ expires: response.data.data.expires_in});
                Cookies.set('noticeNumber',response.data.data.notice_num,{ expires: response.data.data.expires_in});
                this.$store.state.userImg=response.data.data.avatar;
                this.$store.state.username=response.data.data.username;
                this.$store.state.login_ing=false;
                this.$store.state.login_state=true;

                if(this.remember){
                  localStorage.setItem('token',response.data.data.access_token);
                  localStorage.setItem('username',response.data.data.username);
                  localStorage.setItem('userImg',response.data.data.avatar);
                }

                toastr.success('Hey~亲,~登录成功啦');

                bus.$emit('loginEvent',this.$route.name)
//                this.$route.router.go({name:this.$route.name,params:this.$route.params});
//                this.$route.router.push({name:this.$route.name,params:this.$route.params});
//                  this.$route.router.go({name:this.$route.name,params:{id:"124"}});
//                console.log('当前路由地址',this.$route,{name:this.$route.name,params:Number(this.$route.params)})
              }else {
                $('.login-password-tip').text(response.data.error_msg);
              }

            })
            .catch(function(response) {
              console.log('服务器正在打盹~')
            })
        }else if(this.username=='') {
          $('.phone-box').css('border','1px solid #FD7B4D');
          $('.phone-tip').text('账号不能为空');
        }
        else if(this.password=='') {
          $('.password-box').css('border','1px solid #FD7B4D');
          $('.password-tip').text('密码不能为空');
        }

      },
      loadCode: function() {
        this.$http.get(Vue.http.options.cz_root+'/api/v1/captcha_check/?t=' + (new Date()).getTime()).then(function(response) {

          if(response.data.error_no==0) {

            // 使用initGeetest接口
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
            initGeetest({
              // 以下配置参数来自服务端 SDK
              width: '100%',
              gt: response.data.data.gt,  //验证 id，极验后台申请得到
              challenge: response.data.data.challenge,  //验证流水号，后服务端 SDK 向极验服务器申请得到
              product: "float",
              offline: !response.data.data.success    //极验API服务器是否宕机（即处于 fallback 状态）
            }, this.handlerEmbed);

          }else {
            console.log(response.data.error_msg)
          }

        }).catch(function(response) {
          console.log('接口请求失败')
        })
      },
      handlerEmbed: function (captchaObj) {
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        $('#emb').empty();
        captchaObj.appendTo("#emb");
        captchaObj.onReady(function () {
          $("#waiting").className = "hiding";
        });
        var $this=this;
        $('.forget-code-btn').click(function () {

          if($this.phone!=''){
            if($this.phone.match(/^1[34578]\d{9}$/)){
              $this.phone_true=true;
              $('.forget-pwd-phone-box').css('border','1px solid #E4E7ED');
              $('.forget-pwd-phone-tip').text('');
            }else {
              $('.forget-pwd-phone-box').css('border','1px solid #FD7B4D');
              $('.forget-pwd-phone-tip').text('手机号输入有误');
            }
          }else {
            $('.forget-pwd-phone-box').css('border','1px solid #FD7B4D');
            $('.forget-pwd-phone-tip').text('手机号不能为空');
          }

          var result = captchaObj.getValidate();
          if (!result) {

            $("#noticing")[0].className = "showing";
            setTimeout(function () {
              $("#noticing")[0].className = "hiding";
            }, 2000);
          }else if($this.phone_true){
            $('.forget-code-btn').html($this.seconds+'s');


            clearInterval(time);
            var time=setInterval(function(){
              $this.seconds-=1;
              if($this.seconds<=0) {
                $('.forget-code-btn').html('获取验证码');
                clearInterval(time);
                $this.seconds=60;
              }else {
                $('.forget-code-btn').html($this.seconds+'s');
              }

            },1000);
            $this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+$this.phone+'&verifyType=forget_password')
              .then(function(response) {

                if(response.data.error_no==0) {

                  /*this.bigBanner=response.data.data.bigBanner;
                   this.smallBanner=response.data.data.smallBanner;*/

                }else {
                  console.log(response.data.error_msg)
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }else {
            $('.phone-box').css('border','1px solid #FD7B4D');
            $('.phone-tip').text('请填写正确的手机号');
          }

        })
      },
      check_account: function () {
        if(this.username!=''){

          $('.login-phone-box').css('border','1px solid #E4E7ED');
          $('.login-phone-tip').text('');

        }else {
          $('.login-phone-box').css('border','1px solid #FD7B4D');
          $('.login-phone-tip').text('账号不能为空');
        }
      },
      check_password: function () {

        $('.login-password-box').css('border','1px solid #E4E7ED');
        $('.login-password-tip').text('');

        if(this.password==''){

          $('.login-password-box').css('border','1px solid #FD7B4D');
          $('.login-password-tip').text('密码不能为空');

        }else if (!isNaN(this.password)){

          $('.login-password-box').css('border','1px solid #FD7B4D');
          $('.login-password-tip').text('密码不可以全部是数字哦');

        }else if(this.password.toString().length<6) {

          $('.login-password-box').css('border','1px solid #FD7B4D');
          $('.login-password-tip').text('密码至少6位哦');

        }else {
          $('.login-password-box').css('border','1px solid #E4E7ED');
          $('.login-password-tip').text('');
        }
      },
      check_phone: function () {
        $('.forget-pwd-phone-box').css('border','1px solid #E4E7ED');
        if(this.phone!=''){
          if(this.phone.match(/^1[34578]\d{9}$/)){
            this.phone_true=true;
            $('.forget-pwd-phone-box').css('border','1px solid #E4E7ED');
            $('.forget-pwd-phone-tip').text('');
          }else {
            $('.forget-pwd-phone-box').css('border','1px solid #FD7B4D');
            $('.forget-pwd-phone-tip').text('手机号输入有误');
          }
        }else {
          $('.forget-pwd-phone-box').css('border','1px solid #FD7B4D');
          $('.forget-pwd-phone-tip').text('手机号不能为空');
        }
      },
      close_login: function() {
        $('.password-tip').text('');
        $('.phone-tip').text('');
        $('.forget-pwd-phone-tip').text('');
        $('.login-password-tip').text('');
        $('.login-phone-tip').text('');
        this.username='';
        this.password='';
        this.remember=false;
        this.$store.state.login_ing=false;
      },
      remember_password: function() {
        if(!this.remember) {
          this.remember=true;
        }else {
          this.remember=false;
        }
      },
      register: function() {
        this.$store.state.login_ing=false;
        this.$store.state.register_ing=true;
      },
      forgetPassword: function () {
        this.login_panel=false;
        this.forget_password=true;
      },
      cancelForget: function () {
        this.login_panel=true;
        this.phone='';
        this.newPassword='';
        this.againNewPassword='';
        this.phoneCode='';
        this.forget_password=false;
        this.set_password=false;
        $('.login-password-tip').text('');
        $('.login-phone-tip').text('');
        $('.forget-pwd-phone-tip').text('');
        $('.code-tip').text('');
        $('.forget-first-code').text('');
        $('.againNewPassword-tip').text('');
        $('.newPassword-tip').text('');
        $('#emb').empty();
        this.loadCode();
        $('.login-wrap').removeClass('send-phone-code-wrap').removeClass('phone-edit-main').addClass('login-shadow-main');
      },
      setPassword: function () {

        if(this.phoneCode=='') {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码不能为空')
        }else if (this.phoneCode.length!=6) {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码输入有误');
        }else {
          this.phone_code_check=true;
          $('.phone-code-box').css('border','1px solid #E4E7ED');
          $('.code-tip').text('');
        }

        if(this.phone_code_check) {
          this.$http.post(Vue.http.options.cz_root+'/api/v1/actions/send_sms/',{validationPhone:this.phone,authCode: this.phoneCode,verifyType:'forget_password'})
            .then(function(response) {

              if(response.data.error_no==0) {
                $('.login-wrap').removeClass('login-shadow-main').removeClass('send-phone-code-wrap').addClass('phone-edit-main');
                this.login_panel=false;
                this.forget_password=false;
                this.set_password=true;

              }else {
                $('.forget-first-code').text(response.data.error_msg);
              }
            })
            .catch(function(response) {
              console.log('接口请求失败')
            })

        }else {
          $('.set-code-tip').text('输入信息有误');
        }

      },
      goLogin: function() {
        this.login_panel=true;
        this.forget_password=false;
      },
      checkCode: function () {

        $('.phone-code-box').css('border','1px solid #E4E7ED');
        $('.code-tip').text('');

        if(this.phoneCode=='') {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码不能为空')
        }else if (this.phoneCode.length!=6) {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码输入有误');
        }else {
          $('.phone-code-box').css('border','1px solid #E4E7ED');
          $('.code-tip').text('');
        }
      },
      sendCode: function () {
        this.seconds=60;
        if(this.phone!=''){
          $('.forget-code-btn').html(this.seconds+'s');

          var $this=this;
          clearInterval(time);
          var time=setInterval(function(){
            $this.seconds-=1;
            if($this.seconds<=0) {
              $('.forget-code-btn').html('获取验证码');
              clearInterval(time);
              $this.seconds=60;
            }else {
              $('.forget-code-btn').html($this.seconds+'s');
            }

          },1000);
          this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+this.phone+'&verifyType=register')
            .then(function(response) {

              if(response.data.error_no==0) {

                /*this.bigBanner=response.data.data.bigBanner;
                 this.smallBanner=response.data.data.smallBanner;*/

              }else {
                console.log(response.data.error_msg)
              }

            })
            .catch(function(response) {
              console.log('接口请求失败')
            })
        }else{
            $('.set-code-tip').text('请输入正确的手机号');
        }


      },
      check_set_password: function () {
        $('.newPassword-tip').text('');
        if (!isNaN(this.newPassword)) {
          $('.newPassword-tip').text('密码不可以全部是数字哦');
        } else if (this.newPassword.toString().length<6) {
          $('.newPassword-tip').text('密码至少6位哦');
        }
      },
      successPassword: function () {
        if (this.newPassword=='') {
          $('.newPassword-tip').text('请设置新密码');
          this.check=false;
        }else if (!isNaN(this.newPassword)) {
          $('.newPassword-tip').text('密码不可以全部是数字哦');
        } else if (this.newPassword.toString().length<6) {
          $('.newPassword-tip').text('密码至少6位哦');
        }

        if (this.newPassword!=this.againNewPassword) {
          $('.againNewPassword-tip').text('两次密码输入的不一致');
          this.check=false;
        }else {
          this.check=true;
        }
        if (this.check) {
          Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
          this.$http.post(Vue.http.options.wz_root+'/api/v1/reset_password/',{mobile:this.phone,password:this.newPassword,confirm_password: this.againNewPassword})
            .then(function(response) {

              if(response.data.error_no==0) {
                toastr.info('设置成功');
                this.$route.router.go({name: 'home'});
                this.login_panel=true;
                this.forget_password=false;
                this.set_password=false;
                this.$store.state.login_ing=true;

              }else if(response.data.error_no==2) {

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;

              }else {
                $('.againNewPassword-tip').text(response.data.error_msg);
              }
            })
            .catch(function(response) {
              console.log('设置密码接口请求失败')
            });
        }else {
          $('.againNewPassword-tip').text('两次密码输入的不一致');
        }
      },
      /*确认密码校验*/
      check_again_password: function () {

        $('.againNewPassword-tip').text('');

        if (this.newPassword!=this.againNewPassword) {
          $('.againNewPassword-tip').text('两次密码输入的不一致');
        }else {
          this.check=true;
        }
      }

    }
  }
</script>
<style>

  .send-phone-code-wrap,
  .phone-edit-main {
    text-align: center;
    width: 410px;
    height: 450px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    left: 50%;
    top: 50%;
    margin-left: -205px;
    margin-top: -225px;
    padding: 30px;
  }
  .modal-tit {
    text-align: left;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.5px;
  }
  .modal-tip {
    margin-top: 30px;
    font-size: 13px;
    color: #9D9D9D;
    letter-spacing: 1.08px;
  }
  .modal-tip span {
    display: inline-block;
    margin-bottom: 6px;
  }
  .modal-phone {
    margin-top: 24px;
    font-size: 15px;
    color: #4A4A4A;
    letter-spacing: 1.25px;
  }
  .set-success-btn {
    margin-top: 34px;
  }
  .edit-tit {
    font-size: 24px;
    color: #5E5E5E;
    letter-spacing: 2px;
  }



  .shadow-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
  }
  .login-shadow {
    background: rgba(0,0,0,0.20) !important;
  }
  .login-shadow-main {
    width: 411px;
    height: 459px !important;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -229px;
    margin-left: -205px;
  }
  .forget-shadow-main {
    width: 411px;
    height: 494px;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -247px;
    margin-left: -205px;
  }
  .forget-set-shadow-main {
    width: 411px;
    height: 399px;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -205px;
  }
  .login-tit {
    font-size: 24px;
    color: #5E5E5E;
    letter-spacing: 2px;
    padding: 30px 0;
    margin: 0;
  }
  .login-box {
    width: 100%;
    height: 44px;
    border: 1px solid #E4E7ED;
    display: flex;
    align-items: center;
  }
  .password-box,
  .login-password-box {
    margin-top: 34px;
    background: url("../../assets/img/lock_dark_icon.png") no-repeat 12px 11px;
  }
  .phone-box,
  .forget-pwd-phone-box,
  .login-phone-box {
    background: url("../../assets/img/phone-icon.png") no-repeat 12px 11px;
  }
  .forget-pwd-code-box {
    margin-top: 34px;
    background: url("../../assets/img/phone-code-dark-icon.png") no-repeat 11px 13px;
  }
  input::placeholder{
    font-size: 12px;
    color: #D0D0D0;
  }
  .log-input {
    border:none;
    margin-left: 36px;
    border-left: 1px solid #E4E7ED;
    padding-left: 10px;
    width: 285px;
  }
  .remember-password-wrap {
    text-align: left;
    padding-top: 22px;
    display: flex;
    align-items: center;
  }
  .remember-password-radio {
    background: #fff;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    border: 1px solid #D0D0D0;
    margin-right: 7px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .remember-password-text {
    font-size: 12px;
    color: #9B9B9B;
    margin-bottom: 0;
  }
  .login-btn {
    margin-top: 35px;
  }
  .login-next-btn {
    width: 100%;
    height: 43px;
    background: #7ED321;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .login-tip {
    font-size: 14px;
    color: #9D9D9D;
    display: inline-block;
    margin-top: 30px;
  }
  .login-tip a,
  .login-tip a:hover,
  .login-tip a:visited,
  .login-tip a:link,
  .login-tip a:active {
    color: #7ED321;
    text-decoration: none;
    cursor: pointer;
  }
  .login-box input:focus {
    outline: none;
  }
  .hiding {
    display: none;
  }
  .showing {
    display: block;
  }
</style>
