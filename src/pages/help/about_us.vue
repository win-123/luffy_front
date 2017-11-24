<template>
<main>
  <div class="top" style="position: absolute; z-index:123; width: 100%;">
    <div class="about-banner"></div>
    <header class="about-head">
      <ul class="header-list">
        <li class="header-item" @click.native="jump(0)">关于我们</li>
        <li class="header-item" @click.native="jump(2)">团队介绍</li>
        <li class="header-item" @click.native="jump(3)">联系我们</li>
      </ul>
    </header>
  </div>
  <div class="about-main">
    <div class="about-item about-us-wrap">
      <h3 class="about-tit">关于我们</h3>
      <em style="display: block; border-top: 2px solid #78C63F; width: 63px; margin: 30px auto 37px;"></em>
      <p class="about-dec">
        作为一家互联网创业公司，路飞学城是由老男孩教育携手一众信任老男孩的学员众筹发起的在线教育项目。我们怀揣着帮助有志向的年轻人通过努力学习获得体面工作与品质生活的使命，坚守初心，砥砺前行。<br><br>
        路飞学城是一个正在快速成长的团队，作为高端前沿技术的传递者，我们坚信互联网科技是未来的卓越挑战力。我们将坚持为您提供最前沿与实用的IT课程，助您在未来的职场中具备绝对地选择权。
      </p>
      <ul class="about-us-list about-img-mar">
        <li class="about-us-item">
          <img src="../../assets/img/about_img1.png" width="380" height="240" alt="">
        </li>
        <li class="about-us-item">
          <img src="../../assets/img/about_img2.png" width="380" height="240" alt="">
        </li>
        <li class="about-us-item">
          <img src="../../assets/img/about_img3.png" width="380" height="240" alt="">
        </li>
      </ul>
      <ul class="about-us-list about-text-mar">
        <li class="about-us-item">
          <h4 class="about-text-tit">我们的愿景</h4>
          <p class="us-hope">
            开启在线教育行业新可能，成为全球最具影响力的IT职业教育品牌。
          </p>
        </li>
        <li class="about-us-item">
          <h4 class="about-text-tit">价值观</h4>
          <p class="us-hope">
            把教学质量和学员满意度放在第一位！<br>
            做正确的事，不做容易的事！<br>
            Do the right thing!<br>
            把60分的事做到100分
          </p>
        </li>
        <li class="about-us-item">
          <h4 class="about-text-tit">为何取名为路飞学城？</h4>
          <p class="us-hope">
            只因我们与路飞一样，相信着“世界上只有一种英雄主义，就是看清生活的真相之后依然热爱生活。”
          </p>
        </li>
      </ul>
    </div>
    <div class="about-item about-service">
      <h3 class="about-service-tit">我们的服务</h3>
      <em style="display: block; border-top: 2px solid #78C63F; width: 63px; margin: 23px auto;"></em>
      <p class="about-service-dec">
        路飞学城职业培训涵盖Python、Linux等各学科最前沿技术的课程， 业内首创“在线一对一VIP辅导”的全新教学模式。依据学员个人基础与学习计划提供视频课程、一对一辅导、审阅代码、闯关学习、答疑、推荐就业等服务，有效保障学员的学习成效与就业。
      </p>
    </div>
    <div class="about-item about-team">
      <h3 class="about-team-tit">我们的团队</h3>
      <em style="display: block; border-top: 2px solid #78C63F; width: 63px; margin: 21px auto 57px;"></em>
      <p class="about-team-dec">
        我们的课程涵盖一线互联网企业最前沿的实战技术，由数10位BAT互联网企业的资深专业技术大牛共同研制。直击行业痛点的实战项目，能有效帮助学员在最短的时间内达成高效成长，最终具备独立完成项目与获取大型互联网企业青睐的技术水准。
      </p>
      <ul class="team-member-list">
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/tutor.png" width="100%" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">ALEX</span>
            <span class="team-member-profession">路飞学城创始人，知名网红讲师</span>
            <p class="team-member-dec">
              老男孩教育CTO & CO-FOUNDER <br>
              国内知名PYTHON语言推广者
              51CTO学院2016\2017年度最受学员喜爱10大讲师之一
              多款开源软件作者
              曾任职公安部、飞信、中金公司、NOKIA中国研究院、华尔街英语、ADVENT、汽车之家等公司

            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/oldboy_yan.png" width="100%" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">老男孩</span>
            <span class="team-member-profession">老男孩教育创始人，知名网红讲师</span>
            <p class="team-member-dec">
              15年+Linux领域技术经验
              Linux运维领域知名技术专家
              数本Linux畅销技术书籍作者
              51CTO学院2016\2017年度最受学员喜爱10大讲师之一
              NLP运维心理学创始人
              象棋大师

            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/wusir.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">Wu sir</span>
            <span class="team-member-profession">路飞学城知名网红讲师</span>
            <p class="team-member-dec">
              老男孩教育Python教学总监 <br>
              多年开发实战经验，先后任职于汽车之家、好大夫在线等多家大型互联网公司。擅长C#,Python,PHP等一大堆语言开发，现任某大型互联网公司高级自动化开发工程师，已精读多个开源软件源码，自行开发过改进版的Tornado WEB框架，讲课风趣幽默，深受学员喜爱。

            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/lidao.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">李导</span>
            <span class="team-member-profession">路飞学城高级讲师</span>
            <p class="team-member-dec">
              Linux运维技术专家，老男孩Linux金牌讲师，讲课风趣幽默、深入浅出、声音洪亮到爆炸
            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/egon.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">Egon Lin</span>
            <span class="team-member-profession">路飞学城讲师</span>
            <p class="team-member-dec">
              老男孩教育Python学科金牌讲师 <br>
              曾任某上市公司云计算部门主管多年一线运维和开发经验，追求极致的技术分享者，被技术耽误的相声演员。
            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/zhaoboshi.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">赵博士（清华大学计算机博士）</span>
            <span class="team-member-profession">路飞学城高级讲师</span>
            <p class="team-member-dec">
              对各种高精尖算法有较深研究，精读Python源码，了解Python解释器底层技术实现。擅长领域：C/C++、Python、Java、金融量化分析、机器学习与人工智能等。曾获国家奖学金，2015年“甲骨文杯”全国Java程序设计大赛一等奖。计算机专业知识相当扎实，跟二进制一样严谨，擅长将枯燥的专业知识生动形象的表达出来，深入浅出，深受学员喜爱
            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/yuanhao.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">Avrion(日天老师)</span>
            <span class="team-member-profession">路飞学城高级讲师</span>
            <p class="team-member-dec">
              闷骚IT屌丝，单身30年，语速可以和手速一样快
              擅长Python开发＼生物图像自动识别及处理技术，爱好看片。
            </p>
          </div>
        </li>
        <li class="team-member-item">
          <div class="team-member-img">
            <img src="../../assets/img/jingnvshen.png" width="100" height="100" alt="">
          </div>
          <div class="team-member-bout">
            <span class="team-member-name">景女神</span>
            <span class="team-member-profession">路飞学城高级讲师</span>
            <p class="team-member-dec">
              擅长Python\C++开发
              2项国家专利持有人
              北京土著＋N套房
              资深茶道大师
              曾就职神州泰岳、SOGO，任职高级开发工程师
              爱好茶道
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="about-item user-feedback-wrap">
      <div class="feedback-main">
        <h3 class="feedback-tit">用户反馈</h3>
        <div class="feedback-info">
          <div style="display: flex; text-align: left;">
            <input v-model="name" class="feedback-input" type="text" placeholder="您的名字">
            <input v-model="contact" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " minlength="11" maxlength="11" onafterpaste="this.value=this.value.replace(/[^\d]/g,'')" class="feedback-input" style="margin-left: 26px;" type="text" placeholder="电话">
          </div>
          <div>
            <select v-model="feedback_type" class="feedback-type" name="feedback_type" id="" >
              <option selected value="0">选择反馈的类型，点击下拉选择</option>
              <option  v-for="feedback in feedback_type_choices" value="{{feedback.id}}">{{feedback.value}}</option>
            </select>
          </div>
          <textarea  class="feedback-edit"  v-model="content" @click="onEnter()" placeholder="{{placeholder}}"></textarea>
          <span class="feedback-edit-error" >{{content_msg}}</span>
          <div class="feedback-btn-wrap">
            <button class="feedback-btn" @click="submitfeedback()">点击发送</button>
            <span class="feedback-tip">或者发送商务咨询到邮箱：<a href="mailto:customer@luffycity.com">customer@luffycity.com</a></span>
          </div>
          <div class="" style="display: flex; justify-content: space-between;">
            <div class="tip-main">
              <span class="tip-dec tip-font">您也可以通过以下方式联系我们</span>
              <span class="our-emil tip-font">邮箱：customer@luffycity.com</span>
              <address class="our-address tip-font">地址：北京市昌平区顺沙路八号院汇德商厦402</address>
            </div>
            <div>
              <img src="../../assets/img/erweima_code.jpg" width="110" alt="">
              <span class="erweima-dec">微信公众号</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        name: '',
        contact: '',
        placeholder:'认真填写您的反馈意见',
        feedback_type: '',
        content_msg: '',
        feedback_type_choices_msg: '',
        content: '',
        feedback_type_choices: [],
      }
    },
    ready: function(){
        $('.about-main').css('padding-top',$('.top').height());
        // Chrome
        document.body.scrollTop = 0;
        // Firefox
        document.documentElement.scrollTop = 0;
        // Safari
        window.pageYOffset = 0;
        this.load(Vue.http.options.root+'/api/v1/personal/feedback/');
    },
    computed: {

    },
    components: {},
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response) {
          if(response.data.error_no==0) {

            this.name=response.data.data.userinfo.name;
            this.contact=response.data.data.userinfo.contact;
            this.feedback_type_choices=response.data.data.feedback_type;
          }else {
            console.log(response.data.error_no)
          }

        })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      submitfeedback: function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;


        var params={
          name: this.name,
          contact: this.contact,
          feedback_type: this.feedback_type,
          content: this.content,
        };
        if (this.content.length==0) {
          this.placeholder='反馈内容不能为空哦';
          toastr.info('反馈内容不能为空哦');
          return;
        };
        this.$http.post(Vue.http.options.root+'/api/v1/personal/feedback/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.success('反馈成功,我们会及时处理');
              this.content='';
            }else if(response.data.error_no==2) {
              alert(response.data.error_msg)
                this.content_msg=response.data.error_msg
            }else {
              $('.error-edit-tip').text(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      jump:  function(index) {
        let jump = $('.about-item');
        // 获取需要滚动的距离
        let total = jump[index].offsetTop;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
        // Safari
        window.pageYOffset = total;
      },
      onEnter: function () {
        if (this.content.length==0){
          this.placeholder='认真填写您的反馈意见'
        }
      }

    }



  }
</script>
<style scoped>
  .about-banner {
    width: 100%;
    height: 610px;
    background: url("../../assets/img/help_banner.png") no-repeat 0 0;
    background-size: 100% auto;
  }
  @media screen and (min-width: 1800px) {
    .about-banner{
      height: 982px;
    }
  }
  .about-main {
    width: 100%;
  }
  .about-head {
    width: 100%;
    height: 80px;
    background: #FAFBFC;
  }
  .header-list {
    width: 444px;
    margin: 0 auto;
    height: 80px;
    display: flex;;
    align-items: center;
    justify-content: space-around;
  }
  .header-item {
    font-size: 16px;
    color: #555555;
    list-style: none;
    cursor: pointer;
  }
  .about-us-wrap {
    padding-top: 73px;
    background: #fff;
    text-align: center;
    width: 1200px;
    margin: 0 auto;
  }
  .about-tit {
    font-size: 36px;
    color: #555555;
    letter-spacing: 2.9px;
    margin: 0;
  }
  .about-dec {
    font-size: 18px;
    color: #555555;
    letter-spacing: 1.45px;
    line-height: 36px;
    text-align: left;
  }
  .about-us-list {
    display: flex;
    justify-content: space-between;
  }
  .about-img-mar {
    margin-top: 68px;
  }
  .about-text-mar {
    margin-top: 120px;
    text-align: left;
  }
  .about-text-mar>li {
    width: 332px;
  }
  .about-text-tit {
    font-size: 24px;
    color: #555555;
    letter-spacing: 1.93px;
  }
  .about-us-item {
    list-style: none;
  }
  .us-hope {
    font-size: 18px;
    color: #555555;
    letter-spacing: 1.45px;
    line-height: 36px;
    margin-top: 40px;
  }
  .about-service {
    width: 100%;
    height: 598px;
    padding-top: 144px;
    background: url("../../assets/img/about-service-bkg.png") no-repeat 0 0;
    background-size: cover;
    text-align: center;
  }
  .about-service-tit {
    font-size: 36px;
    color: #FFFFFF;
    letter-spacing: 2.9px;
    margin: 0;
  }
  .about-service-dec {
    width: 1148px;
    margin: 0 auto;
    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 1.93px;
    line-height: 48px;
  }
  .about-team {
    padding-top: 118px;
    width: 1118px;
    margin: 0 auto;
    text-align: center;
  }
  .about-team-tit {
    font-size: 36px;
    color: #555555;
    letter-spacing: 2.9px;
  }
  .about-team-dec {
    font-size: 18px;
    color: #555555;
    letter-spacing: 1.45px;
    line-height: 36px;
    text-align: left;
  }
  .team-member-list {
    margin-top: 97px;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30px;

  }
  .team-member-item {
    width: 495px;
    display: flex;
    margin-bottom: 70px;
  }
  .team-member-item:nth-child(even) {
    margin-left: 115px;
  }
  .team-member-img {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    overflow: hidden;
  }
  .team-member-bout {
    width: 364px;
    margin-left: 31px;
    text-align: left;
  }
  .team-member-name {
    display: block;
    font-size: 18px;
    color: #333333;
    letter-spacing: 1.45px;
  }
  .team-member-profession {
    display: block;
    font-size: 15px;
    color: #333333;
    letter-spacing: 1.2px;
  }
  .team-member-dec {
    font-size: 12px;
    color: #333333;
    letter-spacing: 0.96px;
    margin-top: 8px;
  }
  .user-feedback-wrap {
    width: 100%;
    border-top: 1px solid #E8E8E8;
    padding-top: 110px;
    padding-bottom: 77px;
  }
  .feedback-main {
    width: 654px;
    margin: 0 auto;
    text-align: center;
  }
  .feedback-tit {
    font-size: 30px;
    color: #333333;
    letter-spacing: 0.48px;
    margin: 0;
  }
  .feedback-info {
    margin-top: 47px;
  }
  .feedback-input {
    width: 312px;
    height: 42px;
    line-height: 42px;
    padding-left: 10px;
    margin-bottom: 20px;
    border: 1px solid #DEDEDE;
  }
  .feedback-type {
    width: 100%;
    border: 1px solid #DEDEDE;
    height: 42px;
    line-height: 42px;
    padding-left: 10px;
    margin-bottom: 20px;

  }
  .feedback-edit  {
    width: 100%;
    height: 138px;
    border: 1px solid #DEDEDE;
    margin-bottom: 23px;
    text-align: left;
    padding: 10px;
  }
  textarea::placeholder{

  }
  .feedback-btn-wrap {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 56px;
  }
  .feedback-edit-error{
    text-align: left;
    color: red;
  }
  .feedback-btn {
    width: 170px;
    height: 50px;
    background: #7ED321;
    border-radius: 4px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.22px;
  }
  .feedback-tip {
    font-size: 14px;
    color: #777677;
    letter-spacing: 0.22px;
  }
  .feedback-tip>a {
    color: #4990E2;
  }
  .tip-dec {
    font-size: 20px;
    color: #4A4A4A;
    letter-spacing: 0.32px;
  }
  .tip-font {
    display: block;
    margin-bottom: 15px;
  }
  .our-emil,
  .our-address {
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 0.22px;
  }
  .tip-main {
    text-align: left;
    margin-top: 15px;
  }
  .erweima-dec {
    display: block;
    margin-top: 5px;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0.19px;
  }
  input::placeholder,
  select {
    font-size: 14px;
    color: #9B9B9B;
  }
</style>
