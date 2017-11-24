<template>

  <main style="width: 1200px; margin: 0 auto;">
    <div class="apply-tit-wrap">
      <h3 class="apply-title">LUFFYX学位《PYTHON全栈开发》课程报名表</h3>
      <span class="apply-title-tip">为确保自己的权益，请务必填写个人真实信息</span>
    </div>
    <div class="apply-form-main">
      <div class="form-menu">
        <h4 class="form-model-tit">个人信息</h4>
        <ul class="form-content">
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">姓名</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <input  @click="check_input('name')" v-model="userInfo.name"   class="form-input error_msg name-box "   type="text"  placeholder="请填写真实信息">
            <span class="error-tip name-tip  tip-left"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;" @click="check_input('gender')">
            <label class="form-label right-label">性别</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <button :class="['sex-box','gender-box',{'sex-box-active':this.userInfo.gender==1}]" @click="this.userInfo.gender=1" style="margin-left: 25px;">男</button>
            <button :class="['sex-box','gender-box',{'sex-box-active':this.userInfo.gender==2}]" @click="this.userInfo.gender=2" style="margin-left: 14px;">女</button>
            <span class="error-tip gender-tip tip-right"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">QQ</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <input  @click="check_input('qq')" v-model="userInfo.qq" class="form-input qq-box" type="text"  placeholder="一对一导师，将通过QQ联系您，进行日常辅导，务必正确填写">
            <span class="error-tip qq-tip tip-left"></span>
          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label right-label">微信</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <input  @click="check_input('weixin')" v-model="userInfo.weixin" class="form-input weixin-box" type="text"  placeholder="一对一导师，将通过微信联系您，进行日常辅导，务必正确填写">
            <span class="error-tip weixin-tip tip-right"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">学历</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <select v-model="userInfo.degree" class="form-input degree-box" name="" @click="check_input('degree')">
              <option  value="">学历</option>
              <option v-for="degree in degree_choices" value="{{degree.id}}">{{degree.value}}</option>
            </select>
            <span class="error-tip degree-tip tip-left"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label right-label">邮箱</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <input  @click="check_input('email')" v-model="userInfo.email" class="form-input email-box" type="text"  placeholder="常用重要通知【作业成绩、奖学金变动情况等】都将发送到此邮件">
            <span class="error-tip email-tip tip-right"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">身份证号码</label>
            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <input  @click="check_input('id_card')" v-model="userInfo.id_card" class="form-input id_card-box" type="text"  placeholder="该号码将作为加密视频，观看的唯一秘钥凭证，务必仔细填写">
            <span class="error-tip id_card-tip tip-left"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label right-label">绑定微信</label>

            <img class="star-icon" src="../../assets/img/star.png" width="8" height="8" alt="">
            <a  v-if="is_bind_openid"  class="non_field_errors-box" style="cursor: pointer; font-size: 16px; color: #4A90E2; text-decoration: underline; display: inline-block; margin-right: 15px; margin-left: 25px;">已绑定</a>
            <a  v-else @click="this.code_show=true;"  class="non_field_errors-box" style="cursor: pointer; font-size: 16px; color: #4A90E2; text-decoration: underline; display: inline-block; margin-right: 15px; margin-left: 25px;">去绑定</a>
            <span style="font-size: 14px;color: #4A4A4A;">涉及奖学金变动、作业提醒通知会第一时间推送到微信</span>
            <span class="error-tip non_field_errors-tip tip-right"></span>

            <div v-show="code_show" @click="this.code_show=false" class="qrcode-shadow">
              <div class="pub_img">
                <!--<div class="message"></div>-->
                <div class="message"> 第一步:先扫一扫关注公众号</div>
                <img style="width: 256px;height: 256px" src="../../assets/img/publicimg.jpg" alt="">
              </div>
              <div  class="qrcode-content">
                <!--<div class="message">adadasdsad</div>-->
                <!--<img style="width: 256px;height: 256px" src="../../assets/img/publicimg.jpg" alt="">-->
                <div class="message">第二步：然后授权绑定微信</div>
                <div  id="qrcode"></div>
              </div>
              <div class="   message_info">提示：关注公众号并绑定微信号号，你将第一时间获取作业和奖惩的推送通知</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="form-menu">
        <h4 class="form-model-tit">公司信息</h4>
        <ul class="form-content">
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">最近公司名称</label>
            <input  @click="check_input('current_company')" v-model="company" class="form-input current_company-box" type="text"  placeholder="输入完整公司名称。">
            <span class="error-tip current_company-tip tip-left"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label right-label">职位</label>
            <input  @click="check_input('current_position')" v-model="position" class="form-input current_position-box" type="text"  placeholder="输入正确职位名称。如：python全栈开发">
            <span class="error-tip current_position-tip tip-right"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label">当前薪资</label>
            <input  @click="check_input('current_salary')" v-model="salary" class="form-input current_salary-box" type="text"  placeholder="输入正确薪资数字。如40000">
            <span class="error-tip current_salary-tip tip-left"></span>

          </li>
          <li style="list-style: none; margin-bottom: 40px;">
            <label class="form-label right-label">工作年限</label>
            <select @click="check_input('work_experience')" v-model="experience" class="form-input work_experience-box" name="">
              <option value="">点击下拉选择：您的工作年限</option>
              <option v-for="experience in experience_choices" value="{{experience.id}}">{{experience.value}}</option>
            </select>
            <span class="error-tip work_experience-tip tip-right"></span>

          </li>
        </ul>
      </div>
      <div class="form-menu">
        <h4 class="form-model-tit">专业学习信息</h4>
        <ul class="form-content">
          <li style="list-style: none; display: flex; align-items: center; margin-bottom: 42px;">
            <span class="form-label">专业导师选择</span>
            <div style="margin-left: 30px; display: flex; align-items: center;">
              <span v-show="this.schoolAppoint==false" @click="appointSchool()" class="form-null-select"></span>
              <span v-show="this.schoolAppoint==true" @click="appointSchool()" class="form-already-select"><span class="form-already-select-in"></span></span>
              <span class="form-study-font" style="display: inline-block; margin-left: 18px;">路飞学城统一分配</span>
            </div>
            <div style="margin-left: 30px; display: flex; align-items: center;">
              <span v-show="this.selfAppoint==false" @click="appoint()" class="form-null-select"></span>
              <span v-show="this.selfAppoint==true" @click="appoint()" class="form-already-select"><span class="form-already-select-in"></span></span>
              <span class="form-study-font" style="display: inline-block; margin-left: 15px;">自己指定</span>
              <input v-model="specifiedMentor" id="tutor" disabled="disabled" class="form-input" type="text"  placeholder="输入导师全名">
              <span class="form-label" style="color: #4A90E2;">什么是导师？</span>
            </div>
          </li>
          <li style="list-style: none; margin-bottom: 42px;">
            <div style="display: flex; align-items: center;">
              <span class="form-label">第一模块开通</span>
              <div style="display: flex; align-items: center;">
                <span class="form-study-font" style="display: inline-block; margin-left: 25px; margin-right: 16px;">{{moduleInfo}}</span>
                <span v-show="this.openModule==false" @click="this.openModule=true;" class="form-null-select"></span>
                <span v-show="this.openModule==true" @click="this.openModule=false;" class="form-already-select"><span class="form-already-select-in"></span></span>
                <span class="form-study-font" style="display: inline-block; margin-left: 13px;">是否开通</span>
              </div>
            </div>
            <span class="init-tip">提示：勾选开通模块后，将开始计算学习周期和生成作业提交时间表。近期无学习计划，可先不开通，届时联系工作人员开通。</span>
          </li>
          <li style="list-style: none; display: flex; align-items: center; margin-bottom: 42px;">
            <span class="form-label">我的学习计划</span>
            <select @click="check_input('study_plan')" v-model="study_plan" class="form-input study_plan-box">
              <option value="">学习时间安排</option>
              <option v-for="plan in studyPlay" value="{{plan.id}}">{{plan.value}}</option>
            </select>
            <span class="error-tip study_plan-tip study_plan-tip-right"></span>

          </li>
        </ul>
      </div>
      <div class="apply-bot-wrap">
        <h3 class="apply-bot-title">为了给您分配更适合的导师，以下信息务必认真填写</h3>
      </div>
      <div class="form-menu">
      <h4 class="form-model-tit">您报课初衷(缘由)：<span class="error-tip why_take_this_course-tip "></span></h4>

        <textarea   @click="check_input('why_take_this_course')" v-model="why_take_this_course" style="padding: 10px;" id="originalIntention" class="edit-box why_take_this_course-box"  placeholder="因为什么让你下定决心要来进行培训？不少于30个字" required></textarea>

      </div>
      <div class="form-menu"><span class="error-tip why_choose_us-tip "></span>
        <h4 class="form-model-tit">说说你为什么选择老男孩&路飞学城？</h4>
        <textarea  @click="check_input('why_choose_us')" v-model="why_choose_us" style="padding: 10px;" id="reason" class="edit-box why_choose_us-box"  placeholder="说说你和老男孩&路飞学城的缘分 不少于30个字" required></textarea>


      </div>
      <div class="form-menu"> <span class="error-tip your_expectation-tip "></span>
        <h4 class="form-model-tit">您报课的期望（想达到的效果）</h4>
        <textarea  @click="check_input('your_expectation')" v-model="your_expectation" style="padding: 10px;" id="expect" class="edit-box your_expectation-box" required placeholder="你希望通过6个月的的培训学习后，成为什么样的自己？你现在又是如何？ 不少于30个字"></textarea>


      </div>
    </div>
    <div style="width: 100%; text-align: center;">
      <button class="form-btn" @click="postSubmit()">提交</button>
    </div>
  </main>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import common from '../../pages/my/children/common.vue';
  import {jquery} from '../../assets/js/jquery.qrcode.min';

  export default {
    data() {
      return {
        applicationId: '',
        initData:'',
        userInfo: {
          name:'',
          gender:'',/*1:男 2：女*/
          qq: '',
          weixin: '',
          degree: '',
          email: '',
          id_card: ''
        },
        degree_choices: [],
        company: '',
        position: '',
        salary: '',
        experience: '',
        experience_choices:[],
        studyPlay: [],
        study_plan: '',
        moduleInfo: '',
        openModule: false,
        specifiedMentor: '',
        selfAppoint: false,
        schoolAppoint: true,
        why_take_this_course:'',
        why_choose_us:'',
        your_expectation:'',
        code_show: false,
        qr_code_link:'',
        is_bind_openid:false

      }
    },
    created:function () {
      this.applicationId=this.$route.params.id;
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.get_qrcode_link()

      // Chrome
      document.body.scrollTop = 0;
      // Firefox
      document.documentElement.scrollTop = 0;
      // Safari
      window.pageYOffset = 0;

    },
    ready: function(){
      this.init_request()

     },
    canReuse: false,
    components: {
      common
    },
    methods: {
      init_request:function () {
//        this.get_qrcode_link()
        this.load(Vue.http.options.root+'/api/v1/degree/registration_form/?enrolled_degree_id='+this.applicationId);
        this.init_qrcode()
      },
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
            console.log(url)
            this.degree_choices=response.data.data.user_info.degree_choices;
            this.userInfo.name=response.data.data.user_info.name;//姓名
            this.is_bind_openid=response.data.data.user_info.is_bind_openid;//姓名
            this.userInfo.gender=response.data.data.user_info.gender;//性别
            this.userInfo.qq=response.data.data.user_info.qq;//qq
            this.userInfo.weixin=response.data.data.user_info.weixin;//微信
            this.userInfo.degree=response.data.data.user_info.degree;//学历
            this.userInfo.email=response.data.data.user_info.email;//邮箱
            this.userInfo.id_card=response.data.data.user_info.id_card;//身份证号码
            this.company=response.data.data.current_company;//公司名称
            this.position=response.data.data.current_position;//职位
            this.salary=response.data.data.current_salary;//薪资
            this.experience=response.data.data.work_experience;//经验
            this.experience_choices=response.data.data.work_experience_choices;
            this.studyPlay=response.data.data.study_plan_choices;//学习计划
            this.moduleInfo=response.data.data.first_module_info;
            this.openModule=response.data.data.open_module;//是否开通第一模块学习


          }else if(response.data.error_no==2){

            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('报名表初始信息接口请求失败')
          })
      },
      appointSchool: function () {
        if(this.schoolAppoint){
          this.schoolAppoint=false;
        }else{
          this.schoolAppoint=true;
          this.selfAppoint=false;
          $('#tutor').attr('disabled',true)
        }
      },
      appoint: function () {
        if(this.selfAppoint){
          this.selfAppoint=false;
          $('#tutor').attr('disabled',true)
        }else{
          this.selfAppoint=true;
          this.schoolAppoint=false;
          $('#tutor').attr('disabled',false)
        }
      },
      check_input:function (ele) {
        $('.'+ele+'-tip').text('')
        $('.'+ele+'-box').css('border','1px solid  #E4E7ED');
      },
      init_qrcode:function () {


      },
      get_qrcode_link:function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.root+'/api/v1/user/bind_wechat/')
          .then(function(response) {
            if(response.data.error_no==0) {
              this.qr_code_link=response.data.data.access_url;
              jQuery('#qrcode').qrcode(
                {
          //            render: "table",
          //            width:288,
          //            height:288,
                  correctLevel:0,
                  background      : "#ffffff",//背景颜色
                  foreground      : "#000000" ,//前景颜色
                  text:this.qr_code_link
                }
              );

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }
          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      postSubmit: function () {

        var params={
          user_info: {
            name: this.userInfo.name,
            gender: this.userInfo.gender,
            qq: this.userInfo.qq,
            weixin: this.userInfo.weixin,
            degree: this.userInfo.degree,
            email: this.userInfo.email,
            id_card: this.userInfo.id_card
          },
          enrolled_degree_id: this.applicationId,
          current_company: this.company,
          current_position: this.position,
          current_salary: this.salary,
          work_experience: this.experience,
          open_module: this.openModule,
          stu_specified_mentor: this.specifiedMentor,
          study_plan: this.study_plan,
          why_take_this_course: this.why_take_this_course,
          why_choose_us: this.why_choose_us,
          your_expectation:this.your_expectation
        };
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.post(Vue.http.options.root+'/api/v1/degree/registration_form/',JSON.stringify(params)).then(function(response) {
          if(response.data.error_no==0) {

            this.$route.router.go({name: 'application-success'});

          }else if(response.data.error_no==2){
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_state=false;
            this.$store.state.login_ing=true;

          }
          else if(response.data.error_no==-1){
            if (response.data.userinfo){
              toastr.clear()
              toastr.info(response.data.error_msg)
            }
          }
          else if(response.data.error_no==1) {
            toastr.info('您还有未填写的必填项哦');

            var error_msg=response.data.error_msg;

            for (var i in error_msg ){
              if(error_msg[i][0]){
                $('.'+i+'-tip').text(error_msg[i][0])
                $('.'+i+'-box').css('border','1px solid  #FD7B4D');
              }
            }
          }
        })
          .catch(function(response) {
            console.log('报名表提交接口请求失败')
          })
      },
      update_openid: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {
            this.is_bind_openid=response.data.data.user_info.is_bind_openid;//姓名
          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;
          }else {
            console.log(response.data.error_msg)
          }
        })
          .catch(function(response) {
            console.log('报名表初始信息接口请求失败')
          })
      },
      check_openid:function () {
        this.code_show=false
      }
    },
    watch:{
      is_bind_openid: function (new_val,old_val) {
//        console.log('is_bind_openid',new_val,old_val)
        if ( !old_val && new_val
        ){
          toastr.success("微信号绑定成功");
        }
      },
      code_show:function (new_val,old_val) {
        console.log(new_val,old_val)
        if (old_val){
          this.update_openid(Vue.http.options.root+'/api/v1/degree/registration_form/?enrolled_degree_id='+this.applicationId);
        }

      }
    },

  }
</script>
<style scoped>
  @import "../../assets/css/animate.min.css";
  @import "../../assets/css/jquery.bxslider.css";
  .qrcode-shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background: rgba(41,41,41,0.90);
  }
  .qrcode-content {
    /*width: 65%;*/
    /*height: 80%;*/
    position: relative;
    /*background: #000;*/
    top: 50%;
    left: 65%;
    /*transform-origin:（0）（0）;*/
    /*bottom: 50%;*/
    margin-top: -14%;
    margin-left: -10%;
  }
  .pub_img{
    position: absolute;
    top:21%;
    left: 25%;
  }
  #qrcode {
    /*display: inline-block;*/
    width: 300px;
    height:300px;
  }
  .message_info{
    position: absolute;
    left: 30%;
    top: 70%;
    font-size: 16px;
    color: white;

  }
  .message{
    font-size: 18px;
    color: white;
    margin-bottom: 20px;
  }
  .error-tip {
    font-size: 12px;
    color: red;
    /*margin-top: 5px;*/
    position: absolute;
    left: 55px;
  }
  .form-null-select {
    display: inline-block; width: 14px; height: 14px;
    border: 1px solid #E9E9E9; border-radius: 14px;
    cursor: pointer;
  }
  .form-already-select {
    width: 14px; height: 14px;
    border: 1px solid #78C63F;; border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
  }
  .form-already-select-in {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background: #78C63F;
  }
  .apply-tit-wrap {
    padding-top: 45px;
    text-align: center;
  }
  .apply-title{
    font-size: 30px;
    color: #333333;
    letter-spacing: 2.37px;
  }
  .apply-title-tip {
    margin-top: 17px;
    font-size: 14px;
    color: #333333;
    letter-spacing: 1.1px;
    display: block;
  }
  .error_msg{
    border-color: red;
  }
  .apply-form-main {
    margin-top: 43px;
  }
  .form-menu {
    margin-bottom: 30px;
  }
  .form-model-tit {
    font-size: 24px;
    color: #333333;
    letter-spacing: 0.38px;
  }
  .form-content {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .form-content {
    margin-top: 40px;
  }
  .form-label {
    font-size: 16px;
    color: #666666;
    width: 140px;
    text-align: right;
  }
  .right-label {
    width: 101px;
  }
  .star-icon {
    margin-left: -8px;
    margin-top: -37px;
  }
  .tip-left{
    left: 290px;
  }
  .tip-right{
    left: 860px;
  }
  .why_take_this_course-tip{
    left: 320px;
    font-size: 18px;

  }
  .why_choose_us-tip{
    left:520px;
    font-size: 18px;

  }
  .your_expectation-tip{
    left:450px;

    font-size: 18px;
  }
  .form-input {
    width: 440px;
    height: 60px;
    border: 1px solid #D0D0D0;
    border-radius: 3px;
    margin-left: 25px;
    padding-left: 20px;
  }
  .form-input::placeholder {
    font-size: 14px;
    color: #9B9B9B;
  }
  .sex-box {
    width: 210px;
    height: 60px;
    border: 1px solid #D0D0D0;
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    background: none;
    justify-content: center;
  }
  .sex-box-active {
    border: 1px solid #84CC39;
    color: #84CC39;
  }
  .study_plan-tip-right{
    left: 740px;
    font-size: 19px;
  }
  .form-study-font {
    font-size: 18px;
    color: #333333;
  }
  .init-tip {
    display: inline-block;
    font-size: 14px;
    color: #666666;
    margin-left: 176px;
    margin-top: 15px;
  }
  .apply-bot-wrap {
    margin-top: 21px;
    text-align: center;
    margin-bottom: 44px;
  }
  .apply-bot-title {
    font-size: 30px;
    color: #333333;
    letter-spacing: 0.48px;
  }
  .edit-box {
    width: 1129px;
    height: 309px;
    margin: 24px 50px 0;
    border: 1px solid #979797;
    margin-bottom: 58px;
  }
  textarea::placeholder{
    color:darkgray;
    font-size: 17px;
  }
  .form-btn {
    width: 396px;
    height: 80px;
    outline: none;
    border: none;
    background: #84CC39;
    font-size: 24px;
    margin: 2px auto 90px;
    color: #FFFFFF;
    letter-spacing: 0.38px;
  }

</style>
