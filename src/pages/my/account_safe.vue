<template>
  <main class="information">
    <common></common>
    <div style="width: 1200px; margin: 0 auto;">
      <ul class="my-item-wrap">
        <li class="my-item" v-link="{name:'mine-account'}">我的账户</li>
        <li class="my-item" v-link="{name:'mine-older'}">我的订单</li>
        <li class="my-item" v-link="{name:'mine-collection'}">我的收藏</li>
        <li class="my-item" v-link="{name:'mine-profile'}">个人资料</li>
        <li class="my-item my-active" v-link="{name:'mine-safe'}">账号安全</li>
      </ul>
      <div style="border-top: 1px solid #E9E9E9;">
        <div class="info-content">
          <div  class="base-info base-info-spec">
            <div class="info-tit-wrap">
              <h5 class="info-tit">认证信息</h5>
            </div>
            <ul class="base-info-wrap">
              <li class="base-info-item">
                <label class="label">实名认证</label>
                <span class="label-point">未认证</span>
              </li>
            </ul>
          </div>
          <div class="base-info">
            <div class="info-tit-wrap">
              <h5 class="info-tit">账户安全</h5>
            </div>
            <div>
              <!--手机-->
              <div style="display: flex; margin-bottom: 11px;">
                <label class="label">手机</label>
                <span class="label-point">{{phoneShow}}</span>
                <span class="modify-text" @click="identity('phone')" style="cursor: pointer;margin-left: auto;">
                  <span v-if="this.safe.mobile!=null">修改</span>
                  <span v-if="this.safe.mobile==null">绑定</span>
                </span>
              </div>
              <!-- 邮箱-->
              <div  style="display: flex; margin-bottom: 11px;">
                <label class="label" style="display: inline-block; margin-right: 23px;">邮箱</label>
                <span class="label-point">{{safe.email}}</span>
                <span class="modify-text" @click="identity('email')" style="cursor: pointer; margin-left: auto;">
                  <span v-if="this.safe.email!=null">修改</span>
                  <span v-if="this.safe.email==null">绑定</span>
                </span>
              </div>
              <!-- 登陆密码-->
              <div  style="display: flex; margin-bottom: 11px;">
                <label class="label" style="display: inline-block; margin-right: 23px;">登陆密码</label>
                <span class="label-point">{{safe.password}}</span>
                <span class="modify-text" @click="identity('password')" style="cursor: pointer; margin-left: auto;">
                  <span v-if="this.safe.password!=null">修改</span>
                  <span v-if="this.safe.password==null">绑定</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div v-show="shadow" class="shadow-wrap login-shadow">
    <!--身份验证-->
    <div v-show="authentication" class="send-phone-code-wrap identify-safe"><!---->
      <div style="display: flex; align-items: center;">
        <h3 class="modal-tit">验证身份</h3>
        <div @click="closeEdit()" style="margin-left: auto; cursor: pointer;">
          <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
        </div>
      </div>
      <div class="modal-tip">
        <span>为了保证您的账号安全，请先验证身份</span>
        <span>验证成功后进行下一步操作</span>
      </div>
      <p class="modal-phone">通过手机号{{phoneShow}}验证</p>
      <div id="embed-captcha0" style="margin-top: 30px;"></div>
      <p id="wait0" v-if="false" class="showing">正在加载验证码......</p>
      <p id="notice0" class="hiding">请先拖动验证码到相应位置</p>
      <div class="login-box code-icon-active modify-code">
        <input v-model="phoneCode" class="log-input" autocomplete="off" style="margin-left: 36px; border:none; padding-left: 10px; width: 190px;" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="6" maxlength="6" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" type="text" name="phone"  placeholder="短信验证码">
        <span class="modify-phone-code-btn code-btn0">获取验证码</span>
      </div>
      <span class="error-tip code-tip"></span>
      <span @click="next()" id="embed-submit0" class="set-success-btn login-next-btn">下一步</span>
    </div>
    <!--完成新手机号绑定-->
    <div v-show="phone" class="phone-edit-main phone-safe"><!--phone-->
      <div @click="closeEdit()" style="position: relative; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="edit-tit">输入新手机号</h3>
      <div class="login-cont" style="width: 323px; margin: 50px auto 0;">
        <form action="" method="get">
          <div class="login-box phone-icon-active new-phone-box">
            <select name="" id="country-area-num" style="margin-left: 36px; border: none;">
              <option value="+86">+86</option>
            </select>
            <input v-model="newPhone" id="new-phone" class="log-input" autocomplete="off" style="margin-left: 0; border:none; background: #fff; padding-left: 10px;" type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" name="phone" id="phone" placeholder="请输入您的手机号">
          </div>
          <span class="error-tip new-phone-tip"></span>
          <div id="embed-captcha1" style="margin-top: 34px;"></div>
          <p id="wait1" v-if="false" class="showing">正在加载验证码......</p>
          <p id="notice1" class="hiding">请先拖动验证码到相应位置</p>
          <div class="login-box code-icon-active mod-phone-code-box">
            <input v-model="phone_success_code" autocomplete="off" class="log-input" style="margin-left: 36px; border:none; padding-left: 10px; width: 190px;" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="6" maxlength="6" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" type="text" name="phone" placeholder="短信验证码">
            <span class="modify-phone-code-btn code-btn1" style="cursor: pointer;">获取验证码</span>
          </div>
          <span class="error-tip code-tip"></span>
          <span @click="successPhone()" id="embed-submit1" class="set-success-btn login-next-btn">完成绑定</span>
        </form>
      </div>
    </div>
    <!--完成邮箱绑定-->
    <div v-show="email" class="phone-edit-main email-safe">
      <div @click="closeEdit()" style="position: relative; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="edit-tit">绑定邮箱</h3>
      <div class="login-cont" style="width: 323px; margin: 50px auto 0;">
        <form id="first-step-register" action="" method="get">
          <div class="login-box code-icon-active mod-email-box">
            <input v-model="email_value" class="input-sty log-input" autocomplete="off"  type="email" name="e-mail" placeholder="输入常用邮箱">
          </div>
          <span class="error-tip mod-email-tip"></span>
          <div id="embed-captcha2" style="margin-top: 34px;"></div>
          <p id="wait2" v-if="false" class="showing">正在加载验证码......</p>
          <p id="notice2" class="hiding">请先拖动验证码到相应位置</p>
          <div class="login-box code-icon-active mod-email-code-box">
            <input v-model="emailCode" autocomplete="off" class="log-input"  style="margin-left: 36px; border:none; padding-left: 10px; width: 190px;" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="6" maxlength="6" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" type="text" name="phone" id="phone-code" placeholder="短信验证码">
            <span class="get-phone-code-btn code-btn2">获取验证码</span>
          </div>
          <span class="error-tip code-tip"></span>
          <span @click="submit_register()" id="embed-submit2" class="set-success-btn login-next-btn">完成绑定</span>
        </form>
      </div>
    </div>
    <!--设置新密码-->
    <div v-show="password" class="phone-edit-main" style="height: 399px; margin-top: -200px;"><!---->
      <div @click="closeEdit()" style="position: relative; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="edit-tit">设置新密码</h3>
      <div class="login-cont" style="width: 323px; margin: 50px auto 0;">
        <form action="">
          <div class="login-box lock-icon-active password-box">
            <input v-model="newPassword" class="input-sty log-input"  type="password" name="newPassword" placeholder="至少6位密码，区分大小写">
          </div>
          <span class="error-tip lock-icon-active newPassword-tip"></span>
          <div class="login-box password-box">
            <input v-model="againNewPassword" class="input-sty log-input"  type="password" name="againNewPassword" placeholder="至少6位密码，区分大小写">
          </div>
          <span class="error-tip againNewPassword-tip"></span>
          <span @click="successPassword()" class="set-success-btn login-next-btn">完成设置</span>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import jeDate from 'jedate';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import common from '../../pages/my/children/common.vue';

  export default {
    data() {
      return {
        safe: '',
        phone_true: false,
        shadow: false,
        authentication: false,
        phone: false,
        email: false,
        email_value: '',
        password: false,
        newPhone: '',
        newPassword: '',
        againNewPassword: '',
        seconds: 60,
        phoneCode: '',
        emailCode: '',
        phone_success_code: '',
        phoneShow: '',
        step:'',
        check: ''
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      var $id=this;
      $('.log-input').bind('focus',function() {
        $(this).parent('.login-box').css({
          'border':'1px solid #7ED321',
        });
        $(this).parent('.lock-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/lock_active_icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.phone-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/phone-active-icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.code-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/phone-code-icon_1507518083.1962674.png') no-repeat 12px 11px"
        });
      }).bind('blur',function() {
        $(this).parent('.login-box').css({
          'border':'1px solid #E4E7ED'
        });
        $(this).parent('.lock-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/lock_dark_icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.phone-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/phone-icon.png') no-repeat 12px 11px"
        });
        $(this).parent('.code-icon-active').css({
          'background': "url('http://47.94.172.250:33333/static/frontend/index/phone-code-dark-icon_1507517986.2156007.png') no-repeat 12px 11px"
        });
        if($(this).attr('id')=='new-phone'){
          $id.checkPhone();
        }
      });

      this.vertifyCode();
      this.vertifyCodePhone();
      this.vertifyCodeEmail();
      this.load(Vue.http.options.wz_root+'/api/v1/personal_security/');
    },
    components: {
      common
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.safe=response.data.data;
              this.phoneShow= this.safe.mobile.toString().substr(0,3)+'****'+ this.safe.mobile.toString().substr(7,4);

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
      handlerEmbed: function (captchaObj) {
          $("#embed-captcha0").empty();
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha0");
        captchaObj.onReady(function () {
          $("#wait0").className = "hiding";
        });
        var $this=this;
        $('.code-btn0').click(function () {

          var result = captchaObj.getValidate();
          if (!result) {
            $("#notice0")[0].className = "showinng";
            setTimeout(function () {
              $("#notice0")[0].className = "hiding";
            }, 2000);
          }else {
            $this.seconds=60;
            $('.code-btn0').html($this.seconds+'s');


            clearInterval(time);
            var time=setInterval(function(){
              $this.seconds-=1;
              if($this.seconds<=0) {
                $('.code-btn0').html('获取验证码');
                clearInterval(time);
                $this.seconds=60;
              }else {
                $('.code-btn0').html($this.seconds+'s');
              }

            },1000);
            $this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+$this.safe.mobile+'&verifyType=identity_verify')
              .then(function(response) {

                if(response.data.error_no==0) {

                }else {
                  console.log(response.data.error_msg)
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }

        })
      },
      handlerEmbedPhone: function (captchaObj) {
          $('#embed-captcha1').empty();
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha1");
        captchaObj.onReady(function () {
          $("#wait1").className = "hiding";
        });
        var $this=this;
        $('.code-btn1').click(function () {

          var result = captchaObj.getValidate();

          if (!result) {
            $("#notice1")[0].className = "showinng";
            setTimeout(function () {
              $("#notice1")[0].className = "hiding";
            }, 2000);
          }else if($this.phone_true) {
            $this.seconds=60;
            $('.code-btn1').html($this.seconds+'s');


            clearInterval(time);
            var time=setInterval(function(){
              $this.seconds-=1;
              if($this.seconds<=0) {
                $('.code-btn1').html('获取验证码');
                clearInterval(time);
                $this.seconds=60;
              }else {
                $('.code-btn1').html($this.seconds+'s');
              }

            },1000);
            $this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+$this.newPhone+'&verifyType=register')
              .then(function(response) {

                if(response.data.error_no==0) {

                }else {
                  console.log(response.data.error_msg)
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }

        })
      },
      handlerEmbedEmail: function (captchaObj) {
          $('#embed-captcha2').empty();
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha2");
        captchaObj.onReady(function () {
          $("#wait2").className = "hiding";
        });
        var $this=this;
        $('.code-btn2').click(function () {

          var result = captchaObj.getValidate();

          if (!result) {
            $("#notice2")[0].className = "showinng";
            setTimeout(function () {
              $("#notice2")[0].className = "hiding";
            }, 2000);
          }else {
            $this.seconds=60;
            $('.code-btn2').html($this.seconds+'s');


            clearInterval(time);
            var time=setInterval(function(){
              $this.seconds-=1;
              if($this.seconds<=0) {
                $('.code-btn2').html('获取验证码');
                clearInterval(time);
                $this.seconds=60;
              }else {
                $('.code-btn2').html($this.seconds+'s');
              }

            },1000);
            $this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_email/?email='+$this.email_value)
              .then(function(response) {

                if(response.data.error_no==0) {
                  toastr.success('发送成功')
                }else {
                  toastr.error(response.data.error_msg)
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }

        })
      },
      vertifyCode: function () {
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
      vertifyCodePhone: function () {
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
            }, this.handlerEmbedPhone);

          }else {
            console.log(response.data.error_msg)
          }

        }).catch(function(response) {
          console.log('接口请求失败')
        })
      },
      vertifyCodeEmail: function () {
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
            }, this.handlerEmbedEmail);

          }else {
            console.log(response.data.error_msg)
          }

        }).catch(function(response) {
          console.log('接口请求失败')
        })
      },
      closeEdit: function () {
        this.shadow=false;
        this.authentication=false;
        this.phone=false;
        this.email=false;
        this.password=false;
        this.seconds=60;
        $(".identify-safe").load(this.vertifyCode());
        $(".phone-safe").load(this.vertifyCodePhone());
        $(".email-safe").load(this.vertifyCodeEmail());
      },
      identity: function (option) {
        this.phoneCode='';
        switch (option) {
          case 'phone': {
              this.step='phone';
              break;
          }
          case 'email': {
            this.step='email';
            break;
          }
          case 'password': {
            this.step='password';
            break;
          }
          default: {
            this.step='phone';
            break;
          }
        }

        this.shadow=true;
        this.authentication=true;
      },
      successPhone: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if(this.userPhone!=''&&this.phone_success_code!='') {
          this.$http.post(Vue.http.options.wz_root+'/api/v1/set_mobile/',{mobile:this.newPhone,code: this.phone_success_code})
            .then(function(response) {

              if(response.data.error_no==0) {
                this.load(Vue.http.options.wz_root+'/api/v1/personal_security/');
                this.closeEdit();

              }else if(response.data.error_no==2) {

                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;

              }else {
                console.log(response.data.error_msg)
              }
            })
            .catch(function(response) {
              console.log('接口请求失败')
            })
        }else{

          $('.code-tip').text('输入完整信息');
        }

      },
      successPassword: function () {
        if (!isNaN(this.newPassword)) {
          $('.newPassword-tip').text('密码不可以全部是数字哦');
        } else if (this.newPassword.toString().length<6) {
          $('.newPassword-tip').text('密码至少6位哦');
        }

        if (this.newPassword!=this.againNewPassword) {
          $('.againNewPassword-tip').text('两次密码输入的不一致');
        }else {
          this.check=true;
        }

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        if (this.check) {
          this.$http.post(Vue.http.options.wz_root+'/api/v1/change_password/',{password:this.newPassword,confirm_password: this.againNewPassword})
            .then(function(response) {

              if(response.data.error_no==0) {

                this.closeEdit();
                this.$route.router.go({name: 'home'});
                this.$store.state.login_state=false;
                this.$store.state.login_ing=true;

              }else if(response.data.error_no==2) {
                this.$store.state.login_state=false;
                this.$route.router.go({name: 'home'});
                this.$store.state.login_ing=true;

              }else {
                $('.againNewPassword-tip').text(response.data.error_msg);
              }
            })
            .catch(function(response) {
              console.log('接口请求失败')
            });
        }else {
          $('.againNewPassword-tip').text('两次密码输入的不一致');
        }
      },
      next: function () {

        if(this.phoneCode!='') {
          this.$http.post(Vue.http.options.cz_root+'/api/v1/actions/send_sms/',{validationPhone:this.safe.mobile,authCode: this.phoneCode,verifyType:'identity_verify'})
            .then(function(response) {

              if(response.data.error_no==0) {
                this.authentication=false;
                switch (this.step) {
                  case 'phone': {
                    this.phone=true;
                    $('.get-phone-code-btn').html('获取验证码');
                    $('.get-phone-code-btn').unbind('click').bind('click',function () {
                      this.sendCode();
                    });
                    this.seconds=60;
                    break;
                  }
                  case 'email': {
                    this.email=true;
                    $('.get-phone-code-btn').html('获取验证码');
                    this.seconds=60;
                    break;
                  }
                  case 'password': {
                    this.password=true;
                    $('.get-phone-code-btn').html('获取验证码');
                    this.seconds=60;
                    break;
                  }
                  default: {
                    this.phone=true;
                    $('.get-phone-code-btn').html('获取验证码');
                    this.seconds=60;
                    break;
                  }
                }

              }else {
                console.log(response.data.error_msg)
              }
            })
            .catch(function(response) {
              console.log('接口请求失败')
            })
        }else {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码不能为空');
        }
      },
      sendCode: function () {
        $('.get-phone-code-btn').html('获取验证码');
        this.seconds=60;
        $('.get-phone-code-btn').html(this.seconds+'s');

        var $this=this;
        clearInterval(time);
        var time=setInterval(function(){
          $this.seconds-=1;
          if($this.seconds<=0) {
            $('.get-phone-code-btn').html('获取验证码');
            clearInterval(time);
            $this.seconds=60;
          }else {
            $('.get-phone-code-btn').html($this.seconds+'s');
          }

        },1000);
        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone=15718879196&verifyType=register')/*'+this.safe.mobile+'*/
          .then(function(response) {

            if(response.data.error_no==0) {

              /*this.bigBanner=response.data.data.bigBanner;
              this.smallBanner=response.data.data.smallBanner;*/

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
      sendPhone: function () {
          if(this.userPhone!='') {
            this.seconds=60;
            $('.edit-phone-code-btn').html(this.seconds+'s');

            var $this=this;
            clearInterval(time);
            var time=setInterval(function(){
              $this.seconds-=1;
              if($this.seconds<=0) {
                $('.edit-phone-code-btn').html('获取验证码');
                clearInterval(time);
                $this.seconds=60;
              }else {
                $('.edit-phone-code-btn').html($this.seconds+'s');
              }

            },1000);
            this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+this.userPhone+'&verifyType=register')
              .then(function(response) {

                if(response.data.error_no==0) {

                  /*this.bigBanner=response.data.data.bigBanner;
                   this.smallBanner=response.data.data.smallBanner;*/

                }else if(response.data.error_no==2) {

                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing=true;

                }else {
                  console.log(response.data.error_msg)
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }else{
            $('.code-tip').text('请填写正确的手机号');
          }

      },
      /*手机号格式校验*/
      checkPhone: function () {
        if(this.newPhone!=''){
          if(this.newPhone.match(/^1[34578]\d{9}$/)){
            this.phone_true=true;
            $('.new-phone-box').css('border','1px solid #E4E7ED');
            $('.new-phone-tip').text('');

            this.$http.get(Vue.http.options.wz_root+'/api/v1/mobile_check/?mobile='+this.newPhone)
              .then(function(response){

                if(response.data.error_no==0){

                }else if(response.data.error_no==2) {

                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing=true;

                }else {
                  $('.new-phone-box').css('border','1px solid #FD7B4D');
                  $('.new-phone-tip').text(response.data.error_msg.mobile);
                }

              })
              .catch(function(response) {
                console.log('接口请求失败')
              })
          }else {
            this.phone_true=false;
            $('.new-phone-box').css('border','1px solid #FD7B4D');
            $('.new-phone-tip').text('手机号格式有误');
          }
        }else {
          this.phone_true=false;
        }
      }

    }



  }
</script>
<style scoped>
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
  .modify-code,
  .mod-phone-code-box,
  .mod-email-code-box,
  .mod-email-box{
    margin-top: 34px;
    background: url("../../assets/img/phone-code-dark-icon.png") no-repeat 11px 13px;
  }
  .new-phone-box {
    background: url("../../assets/img/phone-icon.png") no-repeat 12px 11px;
  }
  .modify-phone-code-btn {
    display: block;
    font-size: 16px;
    color: #7ED321;
    outline: none;
    border: none;
    background: none;
    margin-left: auto;
    margin-right: 10px;
    cursor: pointer;
  }
  .shadow-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 111;
  }
  .login-shadow {
    background: rgba(0,0,0,0.20) !important;
  }
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
    z-index: 222;
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


  .modify-text {
    font-size: 14px;
    color: #4A90E2;
    display: inline-block;
    margin-left: 50px;
  }
  .identify {
    box-shadow: 0 -1px 0 0 rgba(238,238,238,0.50), 0 1px 0 0 #EEEEEE;
  }
  .label-point {
    font-size: 14px;
    color: #666666;
  }
  .label {
    display: block;
    width: 50px;
    text-align: right;
    margin-right: 28px;
    font-size: 14px;
    color: #BBBBBB;
    padding: 0;
    margin-bottom: 0;
    height: 20px;
    line-height: 20px;
  }
  .info-tit-wrap {
    width: 647px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
  .edit-btn {
    width: 58px;
    height: 23px;
    padding-left: 20px;
    background: url("../../assets/img/edit_icon.png") no-repeat 0 3px;
    background-size: 14px 15px;
    border: none;
    outline: none;
    font-size: 12px;
    color: #4A4A4A;
  }
  .info-tit {
    font-size: 18px;
    color: #4A4A4A;
    margin: 0;
  }
  .base-info-wrap {
    padding-left: 0;
  }
  .base-info-item {
    display: flex;
    margin-bottom: 20px;
  }
  .base-info {
    padding: 30px 0;
  }
  .base-info-spec {
    border-bottom: 1px solid #E9E9E9;
  }
  .info-content {
    width: 715px;
    margin: 0 auto;
  }
  .information {
    border-top: 1px solid #E8E8E8;
    margin-bottom: 63px;
  }
  li {
    list-style: none;
  }
  .edit-base-wrap {
    padding-top: 30px;
    padding-bottom: 60px;
    border-bottom: 1px solid #E9E9E9;
  }
  .user-name {
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.19px;
    margin-bottom: 21px;
  }
  .user-name>.name {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.25px;
  }
  .edit-label {
    font-size: 14px;
    color: #4A4A4A;
    display: inline-block;
    margin-bottom: 10px;
  }
  .edit-input {
    padding: 0 20px;
    width: 100%;
    border:1px solid #D0D0D0;
    border-radius: 3px;
    height: 42px;
    font-size: 14px;
    color: #4A4A4A;
  }
  .edit-cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .edit-list {
    list-style: none;
    margin-bottom: 26px;
    width: 336px;
  }
  .sex-input {
    width: 157px;
    text-align: center;
    background: #fff;
  }
  .woman-spec {
    margin-left: 16px;
  }
  .sex-input-active {
    border: 1px solid #7ED321;
    border-radius: 2px;
  }
  .edit-list:nth-child(even) {
    margin-left: 40px;
  }
  .select-input {
    display: block;
    border: 1px solid #D0D0D0;
    border-radius: 3px;
  }
  .modify-btn {
    border-radius: 2px;
    width: 108px;
    height: 40px;
    outline: none;
    font-size: 14px;
  }
  .modify-cancel-btn {
    color: #7ED321;
    background: none;
    border: 1px solid #7ED321;
  }
  .modify-sure-btn {
    color: #FFFFFF;
    border: none;
    margin-left: 36px;
    background: #7ED321;
  }
  .pro-mark {
    list-style: none;
    width: 158px;
    height: 42px;
    border: 1px solid #E9E9E9;
    border-radius: 2px;
    font-size: 14px;
    color: #D0D0D0;
    text-align: center;
    line-height: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .pro-mark:nth-child(4),
  .pro-mark:nth-child(8) {
    margin-right: 0;
  }
  .pro-mark-active {
    border: 1px solid #7ED321;
    border-radius: 2px;
    font-size: 14px;
    color: #7ED321;
  }
  .hiding {
    display: none;
  }
  .showing {
    display: block;
  }
</style>
