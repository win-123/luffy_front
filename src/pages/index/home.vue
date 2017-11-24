<template>
<!-- 主页 -->
<div class="home-wrap">
    <div class="flexslider">
      <ul class="slides">
        <!-- <li class="single_banner" v-link="{name:'single'}">
          <div class="single-banner-text">
            <p class="single-tit">
              <span>LuffyX学位课程7折</span><br/>
              <span>专题课程全场5折</span>
            </p>
            <p class="single-dec">双十一，公司没钱请策划人员，想不出更好的促销套路了，只能打折！就这样吧！</p>
            <p class="single-date">仅限11.05-11.12期间</p>
          </div>
        </li> -->
        <li class="index_banner">
          <img class="banner" src="../../assets/img/index_banner.png" alt="">
          <div class="index-banner-text">
            <img class="lazy luffy-city" src="../../assets/img/luffy_school.png" width="188" height="45" alt="">
            <img class="lazy" style="display: block; margin-bottom: 70px;" src="../../assets/img/index_help.png" width="538" height="79" alt="">
            <div @click="this.video_layer=true;" style="cursor: pointer;" class="video-btn">
              <img class="lazy" src="../../assets/img/video-play-icon.png" width="18" height="18" alt="">
              <span class="watch-video">WATCH VIDEO</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- /精品专题课程/ -->
    <div class="ani-auto fine-subject-model">
      <h3 class="home-model-tit">精品专题课程</h3>
      <p class="home-model-dec">囊括行业最前沿的技术，为你提供最全面、最优质、最精彩的精品专题课程</p>
      <em style="width: 77px; border-top: 1px solid #7ED321;  margin: 37px auto 60px;"></em>
      <ul class="fine-model-list">
        <li :class="['fine-model-item',{'cartoon':finance}]" v-link="{name:'finance-course-detail',params:{id:7}}" @mouseover="finance=true" @mouseout="finance=false">
          <img class="lazy" style="margin-top: 83px;" src="../../assets/img/home_fine_icon1.png" width="60" height="41" alt="">
          <span class="fine-item-text">金融量化分析</span>
        </li>
        <li :class="['fine-model-item',{'cartoon':manpower}]" @mouseover="manpower=true" @mouseout="manpower=false">
          <img class="lazy" style="margin-top: 73px;" src="../../assets/img/home_fine_icon2.png" width="50" height="50" alt="">
          <span class="fine-item-text">人工智能实战</span>
        </li>
        <li :class="['fine-model-item',{'cartoon':crawler}]" v-link="{name:'course-detail',params:{id:9}}"  @mouseover="crawler=true" @mouseout="crawler=false">
          <img class="lazy" style="margin-top: 68px;" src="../../assets/img/home_fine_icon3.png" width="50" height="55" alt="">
          <span class="fine-item-text">爬虫实战</span>
        </li>
      </ul>
    </div>
    <!--热门微专业课程 -->
    <div class="hot-micro-model" >
      <h3 class="home-model-tit">热门学位课程</h3>
      <p class="home-model-dec">不仅有独家Python全栈开发课程，带你逐步提升技能。更有Linux运维工程师，带来最极致的成长体验。</p>
      <em style="width: 77px; border-top: 1px solid #7ED321;  margin: 37px auto 87px;"></em>
      <ul style="width: 1141px; margin: 0 auto; padding: 0; display: flex;">
        <li class="home-model-item" v-link="{name:'micro-detail',params:{id:1}}">
          <div>
            <img class="lazy" src="../../assets/img/hot-micro-img.png"  width="553" height="280" alt="">
          </div>
          <div style="padding: 30px 61px 0 56px; border-bottom: 1px solid #E9E9E9;">
            <h3 class="hot-micro-tit">Python全栈开发专业</h3>
            <p class="hot-micro-dec">本课程将带你从基础开始，逐渐深入OOP编程、网络编程、数据库开发、WEB开发等知识，带你轻松完成职业进阶</p>
          </div>
          <ul style="padding: 30px 60px 0;">
            <li style="list-style: none; text-align: left;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 232px;">学习周期</span>
              <span class="hot-micro-item-bot-cont">大约5～6个月</span>
            </li>
            <li style="list-style: none; text-align: left; margin-top: 35px;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 262px;">难度</span>
              <span class="hot-micro-item-bot-cont">中级</span>
            </li>
            <li style="list-style: none; text-align: left; margin-top: 30px;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 232px;">预期工资</span>
              <span class="hot-micro-item-bot-cont">8-15K</span>
            </li>
          </ul>
        </li>
        <li class="home-model-item" style="margin-left: 35px;" @click="recording_remind()">
          <div>
            <img class="lazy" src="../../assets/img/rectangle6.png"  width="553" height="280" alt="">
          </div>
          <div style="padding: 30px 61px 0 56px; border-bottom: 1px solid #E9E9E9;">
            <h3 class="hot-micro-tit">Linux运维工程师</h3>
            <p class="hot-micro-dec">0基础开始，5到6个月带你学习https实战以及Ansible自动化运维工具精讲、集群全面深度优化、大数据Hadoop集群、Git版本管理等知识。</p>
          </div>
          <ul style="padding: 30px 60px 0;">
            <li style="list-style: none; text-align: left;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 232px;">学习周期</span>
              <span class="hot-micro-item-bot-cont">大约5～6个月</span>
            </li>
            <li style="list-style: none; text-align: left; margin-top: 35px;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 262px;">难度</span>
              <span class="hot-micro-item-bot-cont">中级</span>
            </li>
            <li style="list-style: none; text-align: left; margin-top: 30px;">
              <span class="hot-micro-item-bot-tit" style="margin-right: 232px;">预期工资</span>
              <span class="hot-micro-item-bot-cont">8-15K</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  <!--/为何选择路飞学城？/-->
  <div class="width-why">
    <span class="width-why-select">为何选择路飞学城？</span>
  </div>
  <div style="position: relative; z-index: 22;">
    <!--/来自一线互联网企业最前沿实战技术/-->
    <div style="padding: 155px 0 200px; width: 1200px; margin: 0 auto; display: flex;">
      <div style="margin-right: 96px; margin-top: 110px;">
        <img id="item_0 lazy" class="ani-auto lazy animated fadeInUp" src="http://luffycdn.oldboyedu.com/static/frontend/index/left-img-text.png" data-original="http://luffy-web.vpc100-oss-cn-beijing.aliyuncs.com/static/frontend/index/left-img-text.png" width="732" height="406" alt="">
      </div>
      <div id="item_1" class="ani-auto animated"  style="margin-top: 64px;">
        <img class="lazy" src="../../assets/img/hone-page-icon5.png" width="66" height="50" alt="">
        <div style="margin-top: 5px;">
          <img class="lazy" src="../../assets/img/01_icon.png" width="58" height="50" alt="">
        </div>
        <h3 class="home-from-tit">来自一线互联网企业最前沿实战技术</h3>
        <em style="width: 53px; border-top: 1px solid #7ED321;  margin: 30px 0;"></em>
        <p class="home-from-dec">课程与多位在一线BAT互联网企业工作多年资深技术专业共同研制，掌握互联网企业最新、最实用的技术，成为当前业内最抢手的技术人才。</p>
      </div>
    </div>
    <!--/知名大牛网红讲师亲自授课/-->
    <div style="padding: 112px 0 100px; width: 1200px; margin: 0 auto; display: flex;">
      <div style="margin-top: 64px; width: 535px; padding-left: 100px;">
        <img class="lazy" src="../../assets/img/hone-page-icon6.png" width="50" height="44" alt="">
        <div style="margin-top: 5px;">
          <img class="lazy" src="../../assets/img/02_icon.png" width="68" height="47" alt="">
        </div>
        <h3 class="home-from-tit">知名大牛网红讲师亲自授课</h3>
        <em style="width: 53px; border-top: 1px solid #7ED321;  margin: 30px 0 51px;"></em>
        <p class="home-from-dec">课程由业内知名的网红讲师Alex(金角大王)、WuSir(银角大王)、老男孩等亲自讲解，风趣幽默、庖丁解牛、深入浅出、包君满意！</p>
      </div>
      <div style="margin-left: 168px;">
        <img class="lazy animated fadeInUp" src="http://luffycdn.oldboyedu.com/static/frontend/index/teachers.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/teachers.png" width="499" height="580" alt="">
      </div>
    </div>
    <!--/高端项目实战演练/-->
    <div style="padding: 197px 0 250px; width: 1248px; margin: 0 auto; display: flex;">
      <div>
        <img class="lazy animated fadeInUp" src="http://luffycdn.oldboyedu.com/static/frontend/index/top_true.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/top_true.png" width="710" height="489" alt="">
      </div>
      <div class="animated" style="margin-top: -10px; width: 408px; margin-left: 126px;">
        <img class="lazy" src="../../assets/img/hone-page-icon7.png" width="51" height="51" alt="">
        <div style="margin-top: 5px;">
          <img class="lazy" src="../../assets/img/03_icon.png" width="68" height="45" alt="">
        </div>
        <h3 class="home-from-tit">高端项目实战演练</h3>
        <em style="width: 53px; border-top: 1px solid #7ED321;  margin: 32px 0 50px;"></em>
        <p class="home-from-dec">亲手挑战互联网名企实战项目！专家导师将逐行审阅你的代码，提供专业、细致的反馈。你还将加入学习小组，和志同道合的伙伴一起，在全方位辅导和监督下，用最短的时间高效成长！</p>
      </div>
    </div>
    <!--/1对1辅导权威教学体系/-->
    <div class="consult-wrap" style="width: 100%; height: 1074px; text-align: center; padding-top: 90px;">
      <h2 class="consult-tit">1对1辅导权威教学体系</h2>
      <p class="consult-tit-sec">谁的梦想不曾恢弘远大，但大多还都是因为懒、自制力差，从而活成了平庸的路人甲。路飞学城除了为每位学员会配备一位资深导师之外，还独家推出讲师、导师、班主任、高额奖赏金、自动劝学系统多方位逼你成才，人治+系统，助你快速学成出师！</p>
      <button :class="['consult-btn',{'consult-btn-active':want_consult}]" @mouseover="want_consult=true" @mouseout="want_consult=false" @click="popup('https://static.meiqia.com/dist/standalone.html?_=t&eid=81352&groupid=808eb62a840000322290b0f06efe789f')">立即咨询</button>
    </div>
    <!--/闯关式学习保障学习效果/-->
    <div style="width: 100%; padding-top: 128px; text-align: center; padding-bottom: 140px; border-bottom: 1px solid #E8E8E8;">
      <h4 class="pass-through-tit">闯关式学习保障学习效果</h4>
      <p class="pass-through-dec">学习是痛苦的，学不出来更痛苦，路飞学城独家推出闯关式学习，课程分为多个模块，每个模块又分多个小节，将大目标分解成小目标，每个模块设置关卡考核，如打游戏闯关般学习，最终通关者，必成大器！</p>
    </div>
    <!--/推荐就业进名企拿高薪/-->
    <div style="width: 100%; border-bottom: 1px solid #E8E8E8;">
      <div style="padding-top: 105px; width: 1200px; padding-bottom: 60px; margin: 0 auto;">
        <ul style="display: flex; justify-content: space-between;">
          <li style="width: 400px; list-style: none;">
            <img class="lazy" src="../../assets/img/jia_icon.png" width="58" height="58" alt="">
            <h3 class="famous-tit">推荐就业进名企拿高薪</h3>
            <p class="famous-sec">毕业后，你将获得路飞学城颁发的技术水平认证，获得工作内推，通过快速通道加入一线互联网企业团队！目前路飞学城已与百度、小米、搜狗、360、新浪微博、Facebook、Airbnb、今日头条、TalkingData、京东金融、中信证券等领先科技企业建立了内推合作关系。</p>
            <div style="text-align: center; ">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous7_1508384989.0583124.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous7_1508384989.0583124.png" width="347" height="435" alt="">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous4_1508384988.1885927.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous4_1508384988.1885927.png" width="347" height="435" alt="">
            </div>
          </li>
          <li style="width: 400px; margin-top: 190px; list-style: none;">
            <div style="text-align: center;">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous0_1508384988.9682279.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous0_1508384988.9682279.png" width="347" height="435" alt="">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous2_1508384989.2738.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous2_1508384989.2738.png" width="347" height="435" alt="">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous5_1508384988.4410846.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous5_1508384988.4410846.png" width="347" height="435" alt="">
            </div>
          </li>
          <li style="width: 400px; margin-top: 30px; list-style: none;">
            <div style="text-align: center; ">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous1_1508384989.1790102.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous1_1508384989.1790102.png" width="347" height="435" alt="">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous3_1508384989.3920171.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous3_1508384989.3920171.png" width="347" height="435" alt="">
              <img class="famous-img lazy" src="http://luffycdn.oldboyedu.com/static/frontend/index/famous6_1508384988.7555902.png" data-original="http://luffycdn.oldboyedu.com/static/frontend/index/famous6_1508384988.7555902.png" width="347" height="435" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--/首页底部企业LOGO-循环滚动/-->
    <div style="width: 100%;  padding-top: 110px; padding-bottom: 50px;">
      <div class="slider1" style="width: 1200px; overflow: hidden; margin: 0 auto;">
        <ul class="slide g1" style="display: flex;">
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="ad" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo1.png" @mouseover="this.ad.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo1.png');" @mouseout="this.ad.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo1.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="cir" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo2.png" @mouseover="this.cir.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo2.png');" @mouseout="this.cir.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo2.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="twi" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo3.png" @mouseover="this.twi.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo3.png');" @mouseout="this.twi.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo3.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="fit" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo4.png" @mouseover="this.fit.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo4.png');" @mouseout="this.fit.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo4.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="atl" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo5.png" @mouseover="this.atl.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo5.png');" @mouseout="this.atl.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo5.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="air" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo6.png" @mouseover="this.air.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo6.png');" @mouseout="this.air.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo6.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="spo" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo7.png" @mouseover="this.spo.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo7.png');" @mouseout="this.spo.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo7.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="inp" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo8.png" @mouseover="this.inp.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo8.png');" @mouseout="this.inp.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo8.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="ad1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo9.png" @mouseover="this.ad1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo9.png');" @mouseout="this.ad1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo9.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="cir1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo10.png" @mouseover="this.cir1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo10.png');" @mouseout="this.cir1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo10.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="twi1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo11.png" @mouseover="this.twi1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo11.png');" @mouseout="this.twi1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo11.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="fit1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo12.png" @mouseover="this.fit1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo12.png');" @mouseout="this.fit1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo12.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="atl1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo13.png" @mouseover="this.atl1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo13.png');" @mouseout="this.atl1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo13.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="air1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo14.png" @mouseover="this.air1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo14.png');" @mouseout="this.air1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo14.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="spo1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo15.png" @mouseover="this.spo1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo15.png');" @mouseout="this.spo1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo15.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img class="lazy" id="inp1" src="http://luffycdn.oldboyedu.com/static/frontend/index/d-logo16.png" @mouseover="this.inp1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/c-logo16.png');" @mouseout="this.inp1.attr('src','http://luffycdn.oldboyedu.com/static/frontend/index/d-logo16.png')" width="100%">
            </a>
          </li>
        </ul>

       <!-- <ul class="slide" style="display: flex;">
          <li class="partner-item">
            <a href="">
              <img id="ad1" src="http://47.94.172.250:33333/static/frontend/index/d-logo9.png" @mouseover="this.ad1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo9.png');" @mouseout="this.ad1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo9.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="cir1" src="http://47.94.172.250:33333/static/frontend/index/d-logo10.png" @mouseover="this.cir1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo10.png');" @mouseout="this.cir1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo10.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="twi1" src="http://47.94.172.250:33333/static/frontend/index/d-logo11.png" @mouseover="this.twi1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo11.png');" @mouseout="this.twi1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo11.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="fit1" src="http://47.94.172.250:33333/static/frontend/index/d-logo12.png" @mouseover="this.fit1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo12.png');" @mouseout="this.fit1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo12.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="atl1" src="http://47.94.172.250:33333/static/frontend/index/d-logo13.png" @mouseover="this.atl1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo13.png');" @mouseout="this.atl1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo13.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="air1" src="http://47.94.172.250:33333/static/frontend/index/d-logo14.png" @mouseover="this.air1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo14.png');" @mouseout="this.air1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo14.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="spo1" src="http://47.94.172.250:33333/static/frontend/index/d-logo15.png" @mouseover="this.spo1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo15.png');" @mouseout="this.spo1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo15.png')" width="100%">
            </a>
          </li>
          <li class="partner-item">
            <a href="">
              <img id="inp1" src="http://47.94.172.250:33333/static/frontend/index/d-logo16.png" @mouseover="this.inp1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo16.png');" @mouseout="this.inp1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo16.png')" width="100%">
            </a>
          </li>
        </ul>-->
      </div>
    </div>
  </div>
  <div v-show="video_layer" @click="this.video_layer=false;" class="video-shadow">
    <div class="course-introduce-video">
      <object id="cc_02C3BB010D4426C69C33DC5901307461" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1200" height="676" >
        <param name="movie" value="{{'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+'02C3BB010D4426C69C33DC5901307461'+'_false_94B724260B49E936_1/player.swf'}}"/>
        <param name="allowFullScreen" value="true" />
        <param name="allowScriptAccess" value="always" />
        <param value="transparent" name="wmode" />
        <embed :src="'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+'02C3BB010D4426C69C33DC5901307461'+'_true_94B724260B49E936_1/player.swf'" width="100%" height="100%" name="cc_02C3BB010D4426C69C33DC5901307461" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>
      </object>
    </div>
  </div>
</div>
</template>
<script>
    import Vue from 'vue';
    import lazyload from '../../assets/js/jquery.lazyload.min'
    import bxSlider from '../../assets/js/jquery.bxslider';
    import aniAuto from '../../assets/js/aniAuto.min';

    import imgscroll from '../../assets/js/jquery.imgscroll.min';
    import flexslider from '../../assets/js/jquery.flexslider-min';


    export default {
      data() {
         return {
           ad: '',
           cir: '',
           twi: '',
           fit: '',
           atl: '',
           air: '',
           spo: '',
           inp: '',
           ad1: '',
           cir1: '',
           twi1: '',
           fit1: '',
           atl1: '',
           air1: '',
           spo1: '',
           inp1: '',
           want_consult: false,
           finance: false,
           manpower: false,
           crawler: false,
           video_layer: false
         }
      },
      ready: function(){
        this.$store.state.study_hide=true;
        this.$store.state.study_show=false;
        this.ad=$('#ad');
        this.cir=$('#cir');
        this.twi=$('#twi');
        this.fit=$('#fit');
        this.atl=$('#atl');
        this.air=$('#air');
        this.spo=$('#spo');
        this.inp=$('#inp');
        this.ad1=$('#ad1');
        this.cir1=$('#cir1');
        this.twi1=$('#twi1');
        this.fit1=$('#fit1');
        this.atl1=$('#atl1');
        this.air1=$('#air1');
        this.spo1=$('#spo1');
        this.inp1=$('#inp1');
        $("img.lazy").lazyload({
          effect: "fadeIn", //载入效果
          threshold: 50, // 提前开始加载
          failurelimit : 10 // 图片排序混乱时
        });
        $.aniAuto();
        // $(".g1").imgscroll({
        //   speed: 20,    //图片滚动速度
        //   amount: 0,    //图片滚动过渡时间
        //   width: 1,     //图片滚动步数
        //   dir: "left"   // "left" 或 "up" 向左或向上滚动
        // })
        $('.flexslider').flexslider({
          directionNav: true,
          pauseOnAction: false
        });
        $('.famous-img,.home-model-item').bind('mouseover',function() {
            $(this).addClass('cartoon');
        }).on('mouseout',function() {
          $(this).removeClass('cartoon');
        });
    },
      methods: {
        popup (url) {
          location.href = url
        },
        over: function(op) {
            /*var $this=this;
            $('').addClass('cartoon');*/

        },
        recording_remind:function () {
          toastr.clear()
          toastr.info('《Linux运维工程师》正在紧急录制中')
        }
      }
}
</script>
<style scoped>
  @import "../../assets/css/animate.min.css";
  @import "../../assets/css/jquery.bxslider.css";
  /* flexslider */
  .slide {
    display: flex;
  }
  ol {
    width:100%;
    height: 100px;
    z-index: 99999;
  }
  .flexslider{
    position:relative;
    height:500px;
    overflow:hidden;
  }
  .slides {
    position:relative;
    z-index:1;
  }
  .slides li {
    height:611px;
  }
  .flex-control-nav {
    position: absolute;
    bottom: 130px;
    z-index: 2;
    width: 100%;
    text-align: center;
  }
  .flex-control-nav li {
    width: 14px;
    height: 14px;
    margin: 0 5px;
    /* *display: inline;
    zoom: 1; */
  }
  .flex-control-nav a{
    background: url(../../assets/img/dot.png) right 0 no-repeat;
    display: inline-block;
    width: 14px;
    height: 14px;
    line-height: 40px;
    overflow: hidden;
    cursor: pointer;
  }
  .flex-control-nav .flex-active {
    background-position: 0 0;
    width:200px;
    height: 200px;
    background: red;
  }
  .video-shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 99999;
    background: rgba(41,41,41,0.70);
  }
  .course-introduce-video {
    width: 55%;
    height: 65%;
    position: relative;
    background: #000;
    top: 50%;
    left: 50%;
    margin-top: -14%;
    margin-left: -27%;
  }
  .single-banner-text {
    position: absolute;
    left: 5%;
    top: 11%;
    color: #FFFFFF;
  }
  .single-tit {
    font-size: 50px;
    color: #FFFFFF;
  }
  .single-dec {
    margin-top: 20px;
    width: 580px;
    font-size: 22px;
    line-height: 49px;
  }
  .single-date {
    font-size: 28px;
    padding-top:4%;
  }
  .index-banner-text {
    height:auto;
    position: absolute;
    left: 5%;
    top: 0;
    margin: 0 auto;
  }
  .consult-wrap {
    background: url("../../assets/img/consult.png") no-repeat -160px 0;
    background-size: cover;
  }
  .luffy-city {
    display: block;
    margin-bottom: 48px;
  }
  @media screen and (min-width:1800px){
    .consult-wrap {
      background: url("../../assets/img/consult.png") no-repeat 0 -320px;
      background-size: 100% auto;
    }
    .course-introduce-video {
      width: 40%;
      height: 45%;
      margin-top: -13%;
      margin-left: -20%;
    }
    .single-date {
      font-size: 32px;
      margin-top: 53px;
    }
    .single-dec {
      font-size: 24px;
      margin-top: 38px;
    }
    .single-tit {
      font-size: 72px;
    }
    .single-banner-text {
      padding-top: 240px;
    }
    .index_banner{
      height: 982px;
    }
    .index_banner .banner{
      height: 100%;
    }
    .single_banner {
      height: 982px;
      position: relative;
    }
    .flexslider{
      height: 1068px;
    }
    .slides li{
      height: 982px;
    }
    .width-why {
      min-height: 800px;
    }
    .index-banner-text {
      width:1200px;
      margin: 0 auto;
      /* padding-top: 7%;
      padding-left: 22%; */
    }
  }
  .home-wrap {
    width: 100%;
    height: auto;
    position: relative;
    background: #fff;
  }
  .index-banner-text {
    width:1200px;
    margin:0 auto;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -600px;
    margin-top: -200px;
  }
  .index_banner{
    width: 1276px;
    height: auto;
    position: relative;
  }
  .index_banner .banner{
    width: 100%;
    height: auto;
  }
  .single_banner {
    background: url("../../assets/img/single_banner.png") no-repeat 0 0;
    background-size: 100% auto;
    width: 100%;
    height: 611px;
    cursor: pointer;
  }
  em {
    display: block;
  }
  .video-btn {
    background: #7ED321;
    border-radius: 2px;
    width: 239px;
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .watch-video {
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 2.09px;
    display: inline-block;
    margin-left: 17px;
  }
  .fine-subject-model {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    margin-top: 90px;
    padding-bottom: 120px;
  }
  .home-model-tit {
    font-size: 46px;
    color: #333333;
    letter-spacing: 1.08px;
    line-height: 42px;
    margin: 0;
  }
  .home-model-dec {
    font-size: 14px;
    color: #9A9A9A;
    letter-spacing: 0.03px;
    margin-top: 20px;
  }
  .fine-model-list {
    padding-top:25px;
    display: flex;
    justify-content: space-between;
  }
  .fine-model-item {
    list-style: none;
    width: 375px;
    height: 310px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px 0 #E8E8E8;
    cursor: pointer;
  }
  .fine-item-text {
    font-size: 30px;
    color: #000000;
    display: block;
    margin-top: 50px;
  }
  .hot-micro-model {
    width: 100%;
    background: url("../../assets/img/bgimg.png") no-repeat;
    background-size: contain;
    text-align: center;
    padding-top: 114px;
    padding-bottom: 220px;
  }
  .home-model-item {
    list-style: none;
    width: 553px;
    height: 689px;
    background: #FFFFFF;
    box-shadow: 0 4px 10px 0 #E8E8E8;
    /*box-shadow: 0 4px 0 0 #7ED321;*/
    cursor: pointer;
  }
  .hot-micro-tit {
    font-size: 34px;
    color: #333333;
    margin: 0;
  }
  .hot-micro-dec {
    font-size: 14px;
    color: #9B9B9B;
    padding: 20px 0 30px;
    line-height: 25px;
    text-align: left;
  }
  .hot-micro-item-bot-tit {
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 1.12px;
    display: inline-block;
  }
  .hot-micro-item-bot-cont {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.44px;
    display: inline-block;
  }
  .width-why {
    position: relative;
    /* min-height: 50%;*/
    width: 100%;
    min-height: 520px;
    background: url("../../assets/img/width-bank.png") no-repeat center center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .width-why-select {
    font-size: 48px;
    color: #FFFFFF;
    letter-spacing: 2px;
  }
  .home-from-tit {
    font-size: 32px;
    color: #4A4A4A;
    letter-spacing: 1.5px;
    line-height: 50px;
    margin: 0;
  }
  .home-from-dec {
    font-size: 21px;
    color: #4A4A4A;
    line-height: 46px;
    text-align: justify;
  }
  .consult-tit {
    font-size: 42px;
    color: #333333;
    letter-spacing: 1.39px;
    margin: 0;
  }
  .consult-tit-sec {
    width: 1044px;
    margin: 37px auto 0;
    font-size: 18px;
    color: #666666;
    letter-spacing: 0.52px;
    line-height: 29px;
  }
  .consult-btn {
    border: 1px solid #78C63F;
    border-radius: 68px;
    width: 255px;
    height: 67px;
    outline: none;
    font-size: 20px;
    color: #78C63F;
    background: none;
    letter-spacing: 0.58px;
    margin-top: 69px;
  }
  .consult-btn-active {
    background: #78C63F;
    color: #FFFFFF;
    border: none;
  }
  .pass-through-tit {
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0.69px;
    margin: 0;
  }
  .pass-through-dec {
    width: 1044px;
    margin: 36px auto 0;
    font-size: 20px;
    color: #666666;
    letter-spacing: 0.58px;
    line-height: 38px;
  }
  .famous-tit {
    font-size: 30px;
    color: #333333;
    margin-top: 45px;
  }
  .famous-sec {
    font-size: 14px;
    color: #9B9B9B;
    line-height: 30px;
    margin-top: 20px;
    width: 400px;
    padding-bottom: 48px;
  }
  .famous-img {
    box-shadow: 0 4px 10px 0 #E8E8E8;
    margin-bottom: 50px;
  }
  .partner-item {
    width: 150px;
    height: 50px;
    margin:0 10px;
    display: flex;
    align-items: center;
    text-align: center;
  }
  .partner-item img{
    width: 100%;
    height: auto;
  }
  .cartoon  {
    position: relative;
    top: -2px !important;
    box-shadow: 0 15px 40px 20px #EDEEF0 !important;
  }
</style>
