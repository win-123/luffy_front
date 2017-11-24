<template>
  <div class="shadow-wrap login-shadow register-shadow">
    <!--注册-路飞学城-第一步：手机号注册-->
    <div  v-show="first" class="forget-shadow-main">
      <div  style="width:323px; margin: 0 auto; padding-top: 30px; text-align: right;">
        <img @click="close_register()" style="cursor: pointer" src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="login-tit" style="padding-top: 0;">注册路飞学城</h3>
      <div class="login-cont" style="width: 323px; margin: 0 auto 0; overflow: hidden;">
        <form id="first-step-register" action="" method="get">
          <div @click="quit_error('register-phone')" class="login-box phone-icon-active register-phone-box">
            <select name="" id="country-area-num" style="margin-left: 36px; width: 60px; border: none;">
              <option value="+86">+86</option>
            </select>
            <input v-model="userPhone" @blur="check_phone()" class="log-input" autocomplete="off" style="margin-left: 0; background: #fff; padding-left: 10px; width: 220px;" type="text" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" name="phone" id="phone" placeholder="请输入您的手机号">
          </div>
          <span class="error-tip register-phone-tip"></span>
          <div id="embed-captcha" style="margin-top: 34px;"></div>
          <p id="wait" class="show">正在加载验证码......</p>
          <p id="notice" class="hide">请先拖动验证码到相应位置</p>
          <div @click="quit_error('register-code')" class="login-box code-icon-active register-phone-code-box">
            <input v-model="phoneCode" class="log-input" autocomplete="off" @keyup.enter="submit_register()" style="margin-left: 36px; border:none; padding-left: 10px; width: 190px;" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="6" maxlength="6" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" type="text" name="phone" id="phone-code" placeholder="短信验证码">
            <span class="get-phone-code-btn register-phone-get-code">获取验证码</span>
          </div>
          <span class="error-tip register-code-tip"></span>
          <span @click="submit_register()"  id="embed-submit" class="next-btn login-next-btn">下一步</span>
          <span class="login-tip">已有账号 <a @click="entry()">直接登陆</a></span>
        </form>
      </div>
    </div>
    <!--注册-路飞学城-第二步：设置密码，地址-->
    <div v-show="sec" class="register-shadow-main-sec">
      <div  style="width:323px; margin: 0 auto; padding-top: 30px; cursor: pointer; text-align: right;">
        <img @click="close_register()" style="cursor: pointer" src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="login-tit" style="padding-top: 0;">注册路飞学城</h3>
      <div class="login-cont" style="width: 323px; margin: 0 auto 0; overflow: hidden;">
        <div>
          <div class="login-box password-box name-box" style="margin-top: 0;">
            <input v-model="data.user_name" autocomplete="off" @click="quit_error('name')" @blur="check_name()" class="input-sty log-input" style="width: 220px;"  type="text" name="userName" placeholder="用户名一旦确认不可更改哦">
          </div>
          <span class="error-tip name-tip"></span>
          <div class="login-box lock-icon-active ag-password-box">
            <input @click="quit_error('ag')" v-model="data.password" autocomplete="off" class="input-sty log-input" minlength="6"  style="width: 250px;" type="password" name="phone" placeholder="至少6位且不能全数字,区分大小写">
          </div>
          <span class="error-tip ag-tip"></span>
          <div class="login-box lock-icon-active re-password-box">
            <input @click="quit_error('re')" v-model="data.confirm_password" autocomplete="off" class="input-sty log-input" minlength="6" style="width: 250px;" type="password" name="phone" placeholder="确认密码">
          </div>
          <span class="error-tip re-tip"></span>

          <div style="margin-top: 30px; display: flex; justify-content: space-between;"  >
            <div @click="quit_error('province')">
              <select   v-model="data.province" class="register-select province-box" @change="get_city()">
                <option selected value="" >请选择省份</option>
                <option v-for="province in all_province" value="{{province.id}}">{{province.name}}</option>
              </select>
              <span class="error-tip postion-tip province-tip"></span>
            </div>
            <div  @click="quit_error('city')">
              <select v-model="data.city" class="register-select city-box">
                <option  value="">请选择城市</option>
                <option v-for="city in all_city" value="{{city.id}}">{{city.name}}</option>
              </select>
              <span class="error-tip postion-tip city-tip"></span>
            </div>


          </div>
          <button class="next-btn login-next-btn" @click="register_sec()">下一步</button>
        </div>
      </div>
    </div>
    <!--注册-路飞学城-第三步：输入个人信息-->
    <div v-show="three" class="register-shadow-main-three">
      <div @click="close_register()" style="width:323px; margin: 0 auto; padding-top: 30px; cursor: pointer; text-align: right;">
        <img src="../../assets/img/login_close_btn.png" width="18" height="18"  alt="">
      </div>
      <h3 class="login-tit" style="padding-top: 0;">注册路飞学城</h3>
      <div class="login-cont" style="width: 323px; margin: 0 auto 0; overflow: hidden;">
        <div >
          <div   class="birthday-box login-box">
            <input id="set_birthday" v-model="data.birthday" autocomplete="off" @click="setBirthday()" type="text" name="birthday" placeholder="请选择出生年月" class="log-input select-font" style=" margin-left: 0;width: 100%; height: 42px; border-left: none;" />
          </div>
          <span class="error-tip birthday-tip"></span>
          <div style="margin-top: 30px; display: flex; justify-content: space-between;">
            <select v-model="data.industry" class="register-select select-input" @change="get_profession()">
              <option value="">选择行业</option>
              <option v-for="industry in all_industry" value="{{industry.id}}">{{industry.name}}</option>
            </select>
            <select v-model="data.profession" class="register-select select-input">
              <option value="">选择职位</option>
              <option v-for="profession in all_profession" value="{{profession.id}}">{{profession.name}}</option>
            </select>

          </div>
          <span style="display: inline-block; width: 100%; margin-top: 19px; text-align: left; font-family: PingFangSC-Regular; font-size: 10px; color: #9D9D9D;">感兴趣技术</span>

          <ul style="width: 100%; margin-bottom: 0; display: flex; justify-content: space-between; flex-wrap: wrap; padding-top: 11px;">

            <li style="cursor: pointer" v-for="tag in all_interested_tag" @click="mark_tag($index)" id="{{tag.id}}" :class="['tag-font',{'tag-active':this.data.tags.indexOf(this.all_interested_tag[$index].id,0)!=-1}]">
              {{tag.name}}
            </li>

          </ul>

          <span @click="register_success()" class="next-btn login-next-btn" style="margin-top: 20px;">完成注册</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import jeDate from 'jedate';
  import dt from '../../assets/js/gt';

  export default {
    data() {
      return {
        userPhone:'',
        phoneCode:'',
        first: true,
        sec: false,
        three: false,
        phone_true: false,
        code_true: false,
        name_check: false,
        validate: '',
        position: '',
        all_province: '',
        all_city: '',
        all_industry: '',
        all_profession: '',
        all_interested_tag: '',
        data: {
//          province: '',
          province: '',
          city: '',
          industry: '',
          profession: '',
          password: '',
          confirm_password: '',
          user_name: '',
          birthday: '',
          tags: [],
        },
        seconds: 60
      }
    },
    computed: {},
    watch: {
      '$store.state.register_ing' () {
        if(this.$store.state.register_ing) {
          this.load();
          this.default_position();
          this.get_interested_tag();
          this.get_industry();
        }
      }
    },
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

      $('.select-input').bind('focus',function () {
        $(this).css({
          'border':'1px solid #7ED321',
        }).bind('blur',function () {
          $(this).css({
            'border':'1px solid #E4E7ED'
          });
        });
      });

    },
    methods: {
      load: function() {
        this.$http.get(Vue.http.options.cz_root+'/api/v1/captcha_check/?t=' + (new Date()).getTime()).then(function(res) {

          if(res.data.error_no==0) {

            // 使用initGeetest接口
            // 参数1：配置参数
            // 参数2：回调，回调的第一个参数验证码对象，之后可以使用它做appendTo之类的事件
            initGeetest({
              // 以下配置参数来自服务端 SDK
              width: '100%',
              gt: res.data.data.gt,  //验证 id，极验后台申请得到
              challenge: res.data.data.challenge,  //验证流水号，后服务端 SDK 向极验服务器申请得到
              product: "float",
              offline: !res.data.data.success    //极验API服务器是否宕机（即处于 fallback 状态）
            }, this.handlerEmbed);

          }else {
            console.log(res.data.error_msg)
          }

        }).catch(function(res) {
          console.log('接口请求失败')
        })
      },
      handlerEmbed: function (captchaObj) {
        $('#embed-captcha').empty();
        // 将验证码加到id为captcha的元素里，同时会有三个input的值：geetest_challenge, geetest_validate, geetest_seccode
        captchaObj.appendTo("#embed-captcha");
        captchaObj.onReady(function () {
          $("#wait")[0].className = "hide";
        });
        var $this=this;
        $('.register-phone-get-code').click(function () {

          if($this.userPhone!=''){
            if($this.userPhone.match(/^1[34578]\d{9}$/)){
              $this.phone_true=true;
              $('.register-phone-box').css('border','1px solid #E4E7ED');
              $('.register-phone-tip').text('');

              $this.$http.get(Vue.http.options.wz_root+'/api/v1/mobile_check/?mobile='+$this.userPhone)
                .then(function(res){

                  if(res.data.error_no==0){
                    $('.register-phone-box').css('border','1px solid #E4E7ED');
                    $('.register-phone-tip').text('');
                  }else {
                    $('.register-phone-box').css('border','1px solid #FD7B4D');
                    $('.register-phone-tip').text(res.data.error_msg.mobile);
                  }

                })
                .catch(function(res) {
                  console.log('接口请求失败')
                })
            }else {
              $('.register-phone-box').css('border','1px solid #FD7B4D');
              $('.register-phone-tip').text('手机号输入有误');
            }
          }else {
            $('.register-phone-box').css('border','1px solid #FD7B4D');
            $('.register-phone-tip').text('手机号不能为空');
          }

          var result = captchaObj.getValidate();
          if (!result) {
            $("#notice")[0].className = "show";
            setTimeout(function () {
              $("#notice")[0].className = "hide";
            }, 2000);
          }else if($this.phone_true) {
            $this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/send_sms/?toPhone='+$this.userPhone+'&verifyType=register')
              .then(function(res) {

                if(res.data.error_no==0) {

                  $('.get-phone-code-btn').html($this.seconds+'s');

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

                }else if(res.data.error_no==-1){
                  console.log(res.data.error_msg)
//                  $('.phone-box').css('border','1px solid #FD7B4D');
                  $('.register-code-tip').text(res.data.error_msg);
                }

              })
              .catch(function(res) {
                console.log('接口请求失败')
              })
          }else {
            $('.phone-box').css('border','1px solid #FD7B4D');
            $('.phone-tip').text('请填写正确的手机号');
          }

        })
      },
      entry: function() {
        this.$store.state.register_ing=false;
        this.$store.state.login_ing=true;
      },
      close_register: function() {
        $('.ag-password-box').css('border','1px solid #E4E7ED');
        $('.ag-tip').text('');
        $('.re-password-box').css('border','1px solid #E4E7ED');
        $('.re-tip').text('');
        $('.register-phone-box').css('border','1px solid #E4E7ED');
        $('.register-phone-tip').text('');
        $('.phone-box').css('border','1px solid #E4E7ED');
        $('.phone-tip').text('');
        $('.phone-code-box').css('border','1px solid #E4E7ED');
        $('.code-tip').text('');
        this.$store.state.register_ing=false;
        this.first = true;
        this.sec = false;
        this.three = false;
        $(".login-cont").load(this.load());

      },
      submit_register: function () {
        if (this.userPhone==''){
          $('.register-phone-box').css('border','1px solid #FD7B4D');
          $('.register-phone-tip').text('您还没有输入手机号哦');
          return
        }
        if(this.phoneCode=='') {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.register-code-tip').text('验证码不能为空');
        }else if (this.phoneCode.length!=6) {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.register-code-tip').text('验证码输入有误');
        }else{
          $('.phone-code-box').css('border','1px solid #E4E7ED');
          this.$http.post(Vue.http.options.cz_root+'/api/v1/actions/send_sms/',{validationPhone:this.userPhone,authCode: this.phoneCode,verifyType:'register'})
            .then(function(res) {
              if(res.data.error_no==0) {
                this.first = false;
                this.sec = true;
                this.three = false;
                Cookies.set('register_token',res.data.data.register_token);
                $('.register-code-tip').text('');
              }else if(res.data.error_no==-1){
                $('.register-code-tip').text('验证码输入错误,请重新输入');
              }
              $('.register-code-tip').text('');
            })
            .catch(function(res) {
              console.log('接口请求失败')
            })
        }
      },
      register_sec: function () {
        var re=false;
        var ag=false;
        if (this.data.user_name=='') {
          $('.name-box').css('border','1px solid #FD7B4D');
          $('.name-tip').text('用户名不能为空');
          return
        }
        if (this.data.password=='') {
          $('.ag-password-box').css('border','1px solid #FD7B4D');
          $('.ag-tip').text('密码不可以为空');
          return
        }
        if (!isNaN(this.data.password)) {
          $('.ag-password-box').css('border','1px solid #FD7B4D');
          $('.ag-tip').text('密码不可以全部是数字！');
          return
        }
        if (this.data.password.toString().length<6) {
          $('.ag-password-box').css('border','1px solid #FD7B4D');
          $('.ag-tip').text('密码至少6位哦');
          return
        }
        if (this.data.password!=this.data.confirm_password) {
          $('.re-password-box').css('border','1px solid #FD7B4D');
          $('.re-tip').text('两次密码输入不一致');
          return
        }
        if (this.data.password == this.data.confirm_password){
          re=true;
          $('.re-password-box').css('border','1px solid #E4E7ED');
          $('.re-tip').text('');
        }
        if (this.data.province == '') {
          $('.province-box').css('border','1px solid #FD7B4D');
          $('.province-tip').text('您还没选择省份哦');
          return
        }
        if (this.data.city == '') {
          $('.city-box').css('border','1px solid #FD7B4D');
          $('.city-tip').text('您还没选择城市哦');
          return
        } else {
          ag=true;
          $('.ag-password-box').css('border','1px solid #E4E7ED');
          $('.ag-tip').text('');
        }
        if(this.name_check && ag && re) {
          this.first = false;
          this.sec = false;
          this.three = true;
        }
      },
      default_position: function () {

        this.$http.get(Vue.http.options.wz_root+'/api/v1/ip_info/')
          .then(function(res){

            if(res.data.error_no==0){
              this.position=res.data.data;
              this.data.province=this.position.province_id;
              this.data.city=this.position.city_id;
              this.get_province();
            }else {
              this.get_province();
              console.log(res.data.error_msg);
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      get_province: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/province/')
          .then(function(res){

            if(res.data.error_no==0){
              this.all_province=res.data.data;
              this.get_city();
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      get_city: function () {
        if (!this.data.province){
          return
        }
        this.$http.get(Vue.http.options.wz_root+'/api/v1/city/?province_id='+this.data.province)
          .then(function(res){

            if(res.data.error_no==0){
              this.all_city=res.data.data;
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      get_industry: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/industry/')
          .then(function(res){

            if(res.data.error_no==0){
              this.all_industry=res.data.data;
              /*this.get_profession();*/
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      get_profession: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/profession/?industry_id='+this.data.industry)
          .then(function(res){

            if(res.data.error_no==0){
              this.all_profession=res.data.data;
            }else {
              console.log(res.data.error_msg);
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      get_interested_tag: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/interested_tag/')
          .then(function(res){

            if(res.data.error_no==0){
              this.all_interested_tag=res.data.data;
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(res) {
            console.log('接口请求失败')
          })
      },
      mark_tag: function ($index) {
        if(this.data.tags.length==0) {

          this.data.tags.push(this.all_interested_tag[$index].id);

        }else {
            if(this.data.tags.indexOf(this.all_interested_tag[$index].id,0)!=-1){//存在
              this.data.tags.splice(this.data.tags.indexOf(this.all_interested_tag[$index].id),1);

            }else {//不存在

              this.data.tags.push(this.all_interested_tag[$index].id);

            }
        }
        console.log(this.data.tags);
      },
      setBirthday:function(){
        this.quit_error('birthday')
        jeDate({
          dateCell:"#set_birthday",
          isTime: false,
          skinCell:"jedategreen",
          format: 'YYYY-MM-DD',
          minDate:"1910-09-19"
        });
      },
      check_name: function () {
        if(this.data.user_name!=''){
          this.$http.get(Vue.http.options.wz_root+'/api/v1/username_check/?username='+this.data.user_name)
            .then(function(res){

              if(res.data.error_no==0){
                this.name_check=true;
              }else if (res.data.error_no==-1){
                $('.name-box').css('border','1px solid #FD7B4D');
                $('.name-tip').text(res.data.error_msg);
              }
            })
            .catch(function(res) {
              console.log('用户名检测接口请求失败')
            })
        }
      },
      checkCode: function () {

        $('.phone-code-box').css('border','1px solid #E4E7ED');
        $('.code-tip').text('');

        if(this.phoneCode=='') {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码不能为空');
        }else if (this.phoneCode.length!=6) {
          $('.phone-code-box').css('border','1px solid #FD7B4D');
          $('.code-tip').text('验证码输入有误');
        }else{
          $('.phone-code-box').css('border','1px solid #E4E7ED');
          $('.code-tip').text('');
        }
      },
      /*手机号格式校验*/
      check_phone: function () {
        if(this.userPhone!='') {
          if(this.userPhone.match(/^1[34578]\d{9}$/)) {
            this.phone_true = true;
            $('.register-phone-box').css('border', '1px solid #E4E7ED');
            $('.register-phone-tip').text('');

            this.$http.get(Vue.http.options.wz_root + '/api/v1/mobile_check/?mobile=' + this.userPhone)
              .then(function (res) {
                if (res.data.error_no == 0) {
                } else if (res.data.error_no == 2) {
//                  this.$route.router.go({name: 'home'});
                  this.$store.state.login_ing = true;

                } else {
                  $('.register-phone-box').css('border', '1px solid #FD7B4D');
                  $('.register-phone-tip').text(res.data.error_msg.mobile);
                }

              })
              .catch(function (res) {
                console.log('接口请求失败')
              })
          }else {
            $('.register-phone-box').css('border', '1px solid #FD7B4D');
            $('.register-phone-tip').text('手机号格式有误');
          }
        }else {
          this.phone_true = false;
        }
      },
      register_success: function () {
        var params={
          allow_token:  Cookies.get('register_token'),
          username: this.data.user_name,
          password: this.data.password,
          confirm_password: this.data.confirm_password,
          mobile: this.userPhone,
          tags: this.data.tags,
          city: this.data.city,
          birthday: $('#set_birthday').val(),
          profession: this.data.profession
        };
        if($('#set_birthday').val().length==0){
          $('.birthday-box').css('border','1px solid #FD7B4D');
          $('.birthday-tip').text('您还没选择出生日期哦');
          return

        }
        this.$http.post(Vue.http.options.wz_root+'/api/v1/register/',JSON.stringify(params))
          .then(function(response){
            if(response.data.error_no==0){
              toastr.success('Hey~亲,恭喜您~注册成功啦');

              this.first = false;
              this.sec = false;
              this.three = false;
              $('.register-shadow').fadeOut();
              this.$store.state.login_ing=true;
            }
            else if(response.data.error_no==-1){
              toastr.info(response.data.error_msg);
            }
            else if (response.data.error_no==1){
              var error_msg=response.data.error_msg;
              for (var i in error_msg ){
                if(error_msg[i][0]){
                  toastr.info(error_msg[i][0]);
//                  $('.'+i+'-tip').text(error_msg[i][0])
//                  $('.'+i+'-box').css('border','1px solid  #FD7B4D');
                  break
                }
              }
            }
          })
          .catch(function(response) {
            console.log('注册接口提交失败')
          })
      },
      quit_error:function (ele) {
        $('.'+ele+'-tip').text('')
        $('.'+ele+'-box').css('border','')
      }
    }
  }
</script>
<style>
  @import "../../assets/css/jebox.css";
  @import "../../assets/css/jedate.css";

  .error-tip {
    font-size: 10px;
    color: #FD7B4D;
    margin-top: 5px;
    position: absolute;
    left: 55px;
  }
  .input-sty {
    border:none;
    margin-left: 42px;
    border-left: 1px solid #E4E7ED;
    padding-left: 10px;
    width: 285px;
  }
  .show {
    display: block;
  }
  .hide {
    display: none;
  }
  .shadow-wrap {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1111 !important;
  }
  .login-shadow {
    background: rgba(0,0,0,0.20) !important;
  }
  .register-shadow-main-sec {
    width: 411px;
    height: 514px;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -257px;
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
  .register-shadow-main-three {
    width: 411px;
    height: 524px;
    background: #FFFFFF;
    text-align: center;
    box-shadow: 0 4px 10px 0 #9D9D9D;
    border-radius: 4px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -262px;
    margin-left: -205px;
  }
  /*.postion-tip{*/
    /*padding-top: -23px;*/
  /*}*/
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
  .ag-password-box,
  .re-password-box {
    margin-top: 34px;
    background: url("../../assets/img/lock_dark_icon.png") no-repeat 12px 11px;
  }
  .register-phone-box {
    background: url("../../assets/img/phone-icon.png") no-repeat 12px 11px;
  }
  .register-phone-code-box {
    margin-top: 34px;
    background: url("../../assets/img/phone-code-dark-icon.png") no-repeat 11px 13px;
  }
  input::placeholder{
    font-size: 12px;
    color: #D0D0D0;
  }
  .get-phone-code-btn {
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
  .login-next-btn {
    width: 100%;
    height: 43px;
    background: #7ED321;
    font-size: 16px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
  }
  .next-btn {
    margin-top: 45px;
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
  .register-select {
    width: 154px;
    height: 42px;
    border: 1px solid #E9ECF1;
    padding-left: 16px;
    font-size: 12px;
    color: #D0D0D0;
  }
  .select-font {
    padding-left: 16px;
    font-size: 12px;
    color: #D0D0D0;
  }
  .province-tip{
    /*padding-top: 44px;*/
  }
  .city-tip{
    padding-left: 169px;
    /*padding-top: 44px;*/

  }


  .tag-font {
    font-size: 12px;
    color: #D0D0D0;
    width: 95px;
    height: 42px;
    margin-bottom: 21px;
    border: 1px solid #E9ECF1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tag-active {
    border: 1px solid #7ED321;
    color: #7ED321;
  }
</style>
