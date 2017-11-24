<template>
<div class="microWrap">
  <div class="top" style="background:#fff;">
    <div class="banner">
      <div class="micro-banner-shadow">
        <div class="micro-banner-text">
          <img src="../../assets/img/luffy-text-top.png" width="238" height="50" alt="">
          <!-- <h3 style="font-size: 48px;color: #4A4A4A;letter-spacing: 0.77px;">Python全栈开发工程师</h3>
           <p style="font-size: 20px;color: #989898;letter-spacing: 0.32px; margin-top: 24px; line-height: 29px;">
             零基础开始，6个月掌握<br>进入数据分析、人工智能领域的必备语言
           </p>-->
        </div>
        <div style="width: 100%; text-align: center; margin-top: 21px;">
          <img src="../../assets/img/luffxy-text-bot.png" width="746" height="55" alt="">
        </div>
        <div style="width: 100%; text-align: center; margin-top: 37px;">
          <span @click="jump()" style="cursor: pointer; display: inline-block; width: 239px; height: 74px; line-height: 74px; background: #84CC39; border-radius: 100px; font-size: 24px;color: #FFFFFF;">查看所有学位课程 </span>
        </div>
      </div>
      <!--<div >
        <img style="display: block; margin-bottom: 46px;" src="../../assets/img/micro-banner-top.png" alt="">
        <img style="display: block; margin-bottom: 70px;" src="../../assets/img/micro-banner-bot.png" alt="">
        <button class="join-btn">立即加入</button>
      </div>-->
    </div>
    <!--闯关学习-->
    <ul class="itemWrap">
      <li class="item">
        <div  style="display: flex; width: 252px; margin-bottom: 16px;">
          <img class="item-img" width="25" height="28" src="../../assets/img/icon1.png" alt="">
          <h4 class="sec-title" style="margin-left: 20px;">闯关学习</h4>
        </div>
        <p class="cont">
          学习从此不再枯燥乏味，而是如打游戏般充满冒险与乐趣，挑战各个知识关卡，通关者必成大器
        </p>
      </li>
      <li class="item">
        <div  style="display: flex; width: 252px; margin-bottom: 16px;">
          <img class="item-img" width="25" height="24" src="../../assets/img/icon2.png" alt="">
          <h4 class="sec-title" style="margin-left: 20px;">1对1资深导师辅导</h4>
        </div>
        <p class="cont">
          每位学员会配备一名资深技术导师，全程辅导你整个学习周期；你还将加入学习小组，在全方位辅导和监督下，用最短的时间高效成长
        </p>
      </li>
      <li class="item">
        <div  style="display: flex; width: 252px; margin-bottom: 16px;">
          <img class="item-img" width="25" height="25" src="../../assets/img/icon3.png" alt="">
          <h4 class="sec-title" style="margin-left: 20px;">实战项目</h4>
        </div>
        <p class="cont">
          精心研制多个互联网企业实战项目供你挑战，完成项目即相当于拿到了知名互联网企业的入场券
        </p>
      </li>
      <li class="item">
        <div  style="display: flex; width: 252px; margin-bottom: 16px;">
          <img class="item-img" width="27" height="24" src="../../assets/img/icon4.png" alt="">
          <h4 class="sec-title" style="margin-left: 20px;">知名网红导师亲自授课</h4>
        </div>
        <p class="cont">
          课程由业界知名Python导师；Alex、Wusir等亲自授课；技术过硬，授课经验丰富，不信请亲测
        </p>
      </li>
    </ul>
  </div>
  <div class="mainWrap about-main">
    <div class="" style="padding-top: 100px; width: 1176px; margin: 0 auto; cursor: pointer;" v-link="{name:'micro-detail',params:{id:1}}">
      <div style="width: 100%; display: flex;">
        <div style="width: 564px;">
          <h3 class="m-title">Python全栈开发中级</h3>
          <em style="border: 1px solid #7ED321; width: 72px; margin-bottom: 19px;"></em>
          <p class="m-des">
            Python 是一门新手友好、功能强大、高效灵活的编程语言，也是数据分析、人工智能领域必不可少的工具，期待你用 Python 开启无限可能的未来！
          </p>
          <div style="width: 100%; height:54px; display: flex; align-items: center;">
            <img src="../../assets/img/xiaoyun.png" width="54" height="54" alt="">
            <div style="margin-left: 6px;">

              <span class="name">赖同学</span>
              <span class="desc">python全栈开发03期·就职于58同城</span>
            </div>
          </div>
        </div>
        <div style="width: 540px; height: 240px; margin-left: 86px; margin-bottom: 60px;">
          <img src="../../assets/img/senior.png" width="100%" alt="">
        </div>
      </div>
    </div>
    <div style="width: 1176px; margin: 0 auto; cursor: pointer;"  @click="recording_remind() ">
      <div style="width: 100%; display: flex;">
        <div style="width: 564px;">
          <h3 class="m-title">Python全栈开发高级</h3>
          <em style="border: 1px solid #7ED321; width: 72px; margin-bottom: 19px;"></em>
          <p class="m-des">
            做一只能挣钱的程序员，学习未来所需技能，挑战实战项目，获得行业领导者的认可和认证，完成职业进阶，Python全栈开发进阶为您而开设。
          </p>
          <div style="width: 100%; height:54px; display: flex; align-items: center;">
            <img src="../../assets/img/girl.png" width="54" height="54" alt="">
            <div style="margin-left: 6px;">
              <span class="name">王同学</span>
              <span class="desc">python全栈开发02期·就职于360安全</span>
            </div>
          </div>
        </div>
        <div style="width: 540px; height: 240px; margin-left: 86px; margin-bottom: 60px;">
          <img src="../../assets/img/advanced.png" width="100%" alt="">
        </div>
      </div>
    </div>
  </div>
  <!--为何学python-->
  <div class="for-why">
    <h3 class="why-tit">为何学Python?</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec">Python已成为全球前4大最流行的编程语言之一， 其简洁、明了、强大的模块库使其不旦是云计算开发、人工智能、金融量化领域的首选语言，<br>
      还在WEB开发，爬虫、金融分析、科学运算、自动化运维、自动化测试、游戏开发等领域也有出色的表现</p>
    <course-scroll></course-scroll>
  </div>
  <!--谁在用Python?-->
  <div class="for-why" style="background: #fff;">
    <h3 class="why-tit">谁在用Python?</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec">国内：豆瓣、搜狐、金山、通讯、盛大、网易、百度、阿里、土豆、新浪等，国外：谷歌、NASA、YouTube、Facebook、红帽等企业都在广泛应用Python</p>
    <div class="slider1" >
      <div class="slide" style="margin: 0 auto;">
        <div class="user">
          <div class="user-item" style="border-left: 2px solid #F7F7F7;">
            <img id="ad" @mouseover="this.ad.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo1.png');" @mouseout="this.ad.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo1.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo1.png" title="学习面向对象知识、开发思想和套路，掌握编程开发规范，为以后写正式大型项目打下良好基础挑战开发“学员管理系统”项目" alt="">
          </div>
          <div class="user-item">
            <img id="cir" @mouseover="this.cir.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo2.png');" @mouseout="this.cir.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo2.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo2.png" title="美国最大的在线云存储网站，全部用Python实现，每天网站处理10亿个文件的上传和下载" alt="">
          </div>
          <div class="user-item">
            <img id="twi" @mouseover="this.twi.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo3.png');" @mouseout="this.twi.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo3.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo3.png" title="Google App Engine 、code.google.com 、Google earth 、谷歌爬虫、Google广告等项目都在大量使用Python开发" alt="">
          </div>
          <div class="user-item">
            <img id="fit" @mouseover="this.fit.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo4.png');" @mouseout="this.fit.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo4.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo4.png" title="美国知名的在线音乐平台" alt="">
          </div>
          <div class="user-item" style=" border-left: 2px solid #F7F7F7; border-bottom: 2px solid #F7F7F7;">
            <img id="atl" @mouseover="this.atl.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo5.png');" @mouseout="this.atl.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo5.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo5.png" title="世界知名的评论应用提供商" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="air" @mouseover="this.air.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo6.png');" @mouseout="this.air.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo6.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo6.png" title="后台订单处理中大量使用Python" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="spo" @mouseover="this.spo.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo7.png');" @mouseout="this.spo.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo7.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo7.png" title="全球最大的英文问答社区" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="inp" @mouseover="this.inp.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo8.png');" @mouseout="this.inp.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo8.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo8.png" title="世界知名的图片社交网站" alt="">
          </div>
        </div>
      </div>
      <div class="slide" style="margin: 0 auto;">
        <div class="user">
          <div class="user-item" style="border-left: 2px solid #F7F7F7;">
            <img id="ad1" @mouseover="this.ad1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo9.png');" @mouseout="this.ad1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo9.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo9.png" title="美国最大的图片分享社交网站，每天超过3千万张照片被分享，全部用python开发" alt="">
          </div>
          <div class="user-item">
            <img id="cir1" @mouseover="this.cir1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo10.png');" @mouseout="this.cir1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo10.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo10.png" title="国内最大的问答社区，通过Python开发" alt="">
          </div>
          <div class="user-item">
            <img id="twi1" @mouseover="this.twi1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo11.png');" @mouseout="this.twi1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo11.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo11.png" title="公司几乎所有的业务均是通过Python开发的" alt="">
          </div>
          <div class="user-item">
            <img id="fit1" @mouseover="this.fit1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo12.png');" @mouseout="this.fit1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo12.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo12.png" alt="">
          </div>
          <div class="user-item" style=" border-left: 2px solid #F7F7F7; border-bottom: 2px solid #F7F7F7;">
            <img id="atl1" @mouseover="this.atl1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo13.png');" @mouseout="this.atl1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo13.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo13.png" title="网易游戏后台大量使用Python开发自动化运维和测试工具" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="air1" @mouseover="this.air1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo14.png');" @mouseout="this.air1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo14.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo14.png" title="Openstack是全球最火的开源云计算框架" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="spo1" @mouseover="this.spo1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo15.png');" @mouseout="this.spo1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo15.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo15.png" title="腾讯蓝鲸运维平台即是基于Python开发" alt="">
          </div>
          <div class="user-item" style="border-bottom: 2px solid #F7F7F7;">
            <img id="inp1" @mouseover="this.inp1.attr('src','http://47.94.172.250:33333/static/frontend/index/c-logo16.png');" @mouseout="this.inp1.attr('src','http://47.94.172.250:33333/static/frontend/index/d-logo16.png')" src="http://47.94.172.250:33333/static/frontend/index/d-logo16.png" title="国内知名的在线医疗网站是用Python开发的" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Python就业前景-->
  <div class="for-why">
    <h3 class="why-tit">Python就业前景</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec" style="width: 788px; margin: 0 auto;">Python虽如此强大 ，但却是目前对程序员最友好的语言之一，语法简洁明了，简单易学，使开发者可以把更多<br>
      的精力放在要实现的业务功能上，而不是语言本身，或许这也是其为何成为最受开发者喜爱的编程语言的重要原因之一</p>
    <div class="jobWrap">
      <div class="line">
        <h5 style="padding-left: 34px; font-size: 14px; color: #9B9B9B;background: #FFFFFF;
box-shadow: 0 1px 0 0 #EFEFEF; height: 50px; line-height: 50px; text-align: left;">各语言工资差异</h5>
        <div style="width: 680px; height: 268px; margin: 33px auto 0;">
          <img src="../../assets/img/line.png" width="671" height="264" alt="">
        </div>
      </div>
      <div class="pie">
        <h5 style="padding-left: 34px; font-size: 14px; color: #9B9B9B;background: #FFFFFF;
box-shadow: 0 1px 0 0 #EFEFEF; height: 50px; line-height: 50px; text-align: left;">各职位需求量分析</h5>
        <div style="margin-top: 26px;">
          <img src="../../assets/img/pie.png" width="328" height="246" alt="">
        </div>
      </div>
    </div>
  </div>
  <!--为何选择路飞学城-->
  <div class="for-why" style="background: #fff;padding-bottom: 156px;">
    <h3 class="why-tit">为何选择路飞学城</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec" style="width:848px; margin: 0 auto;">坚持把教学质量和学员满意度放在第一位，坚持做正确的事，不做容易的事！Do the right thing!</p>
    <div class="jobWrap" style="margin-top: 143px;">
      <div class="luffy">
        <div style="width: 80%; text-align: left; padding-top: 80px;">
          <div style="display: flex;">
            <img src="../../assets/img/cup.png" alt="">
            <em style="width: 57px; border-top: 1px solid #7ED321; margin-top: 28px; margin-left: 30px; "></em>
          </div>
          <div style="margin-left: 15px;">
            <h4 class="tir-title">丰富的教学经验</h4>
            <p class="tir-dec">业内最早开设Python课程的机构，课程体系经过5年多次迭代，不断更新，确保学员学到业内最成熟的课程、最前沿的技术！</p>
            <p class="tir-dec" style="margin-top: 14px; margin-bottom: 16px;">知名网红讲师亲自授课,名师更易出高徒！</p>
          </div>
          <div style="width: 100%; height:54px; display: flex; align-items: center;">
            <img src="../../assets/img/teacher-img.png" width="54" height="54" alt="">
            <div style="margin-left: 6px;">
              <span class="name">Alex</span>
              <span class="desc">python全栈开发金牌讲师</span>
            </div>
          </div>
        </div>
        <div style="width: 20%; text-align: left; padding-top: 210px;">
          <div style="display: flex;">
            <em style="width: 57px; border-top: 1px solid #9C8061; margin-top: 24px; margin-right: 38px;"></em>
            <img src="../../assets/img/lian.png" alt="">
          </div>
          <div style="margin-left: 15px;">
            <h4 class="tir-title">坚持解决在线教育本质</h4>
            <p class="tir-dec">大多数在线教育平台只是在单纯的卖课程，却在购买后如何真正帮助学员完成课程方面做的不多，这也是为何在线课程普遍完课率不高、效果不佳的主要原因。路飞学城从成立第一天起就要致力解决在线教育的本质的问题，通过多种维度的劝学、助学措施，真正让学员学有所成。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--1V1的教学模式-->
  <div class="for-why" style="padding-bottom: 111px;">
    <h3 class="why-tit">1V1的教学模式</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 72px;"></em>
    <div style="display: flex; justify-content: center; margin: 0 auto;">
      <div style="width: 214px; padding-top: 36px;">
        <img src="../../assets/img/luffy-micro1.png" width="80" height="69" alt="">
        <div style="width: 100%; text-align: center;">
          <h5 class="fif-title" style="margin: 67px 0 15px;">高质量的视频内容</h5>
          <p class="fif-dec">
            通过在线视频学习，<br>
            学习每周内容，每节学完后提交作业，<br>
            作业中心，讲师24小时内作业批复，作<br>
            业合格可进入下一环节学习
          </p>
        </div>
      </div>
      <div style="margin-left: -20px;">
        <img src="../../assets/img/luffy-micro2.png" width="143" height="36" alt="">
      </div>
      <div style="width: 214px; padding-top: 36px; margin-left: -20px;">
        <img src="../../assets/img/luffy-micro3.png" width="60" height="78" alt="">
        <div style="width: 100%; text-align: center;">
          <h5 class="fif-title" style="margin: 64px 0 15px;">1对1辅导教学</h5>
          <p class="fif-dec">
            我们为你配备了专业的1对1技术导师<br>
            逐行帮你审阅你的作业及代码<br>
            qq、微信、视频答疑<br>
            有人带着学，怎能学不会
          </p>
        </div>
      </div>
      <div style="padding-top: 106px;">
        <img src="../../assets/img/luffy-micro4.png" width="143" height="36" alt="">
      </div>
      <div style="width: 240px; padding-top: 36px; margin-left: -30px;">
        <img src="../../assets/img/luffy-micro5.png" width="93" height="70" alt="">
        <div style="width: 100%; text-align: center;">
          <h5 class="fif-title" style="margin: 64px 0 15px;">闯关教学新体验</h5>
          <p class="fif-dec">
            学习都是循序渐进，<br>
            从一而终，通过科学的模块划分，从浅入深<br>
            闯关式教学；在闯关过程中可以根据能力获得<br>
            数量不等的奖学金。
          </p>
        </div>
      </div>
      <img src="../../assets/img/luffy-micro2.png" width="143" height="36" alt="">
      <div style="width: 264px; padding-top: 36px; margin-left: -30px;">
        <img src="../../assets/img/luffy-micro6.png" width="77" height="75" alt="">
        <div style="width: 100%; text-align: center;">
          <h5 class="fif-title" style="margin: 61px 0 15px;">实战项目，完成职业进阶</h5>
          <p class="fif-dec">
            亲手挑战互联网名企设计的实战项目！<br>
            领域专家导师将逐行审阅你的代码，提供专业、<br>
            细致的反馈。你还将加入学习小组，<br>
            在全方位辅导和监督下，用最短的时间高效成长！
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--闯关式教学-->
  <div class="for-why" style="background: #fff; padding-bottom: 25px;">
    <h3 class="why-tit">闯关式教学</h3>
    <em style="width: 87px; border-top: 1px solid #7ED321;  margin: 20px auto 56px;"></em>
    <div style="width: 1028px; display: flex; justify-content: center; margin: 0 auto;">
      <div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">模块1：操作系统与Linux基础</h4>
            <p class="micro-panel-font micro-panel-dec">
              学习操作系统基本知识，掌握软件和硬件的关系，掌握CPU 、内存、硬盘工作原理,掌握Linux系统基础命令知识
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">一周</span></span>
          </div>
        </div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">模块2：Python开发基础</h4>
            <p class="micro-panel-font micro-panel-dec">
              Python发展史、与其他语言的对比、解释器执行原理、字符编码/注释/变量/缩进、流程控制等知识点。学习数据类型内置方法、字符串格式化、运算符、输入输出、三元运算、collections、列表、字典、元组等
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">模块3：Python函数编程与常用模块学习</h4>
            <p class="micro-panel-font micro-panel-dec" style="height: 43px;">
              掌握python对文件进行增删改查，学习函数、高阶函数、闭包、迭代器、装饰器知识
              挑战开发小项目 员工信息表增删改查程序、计算器程序、ATM信用卡商城
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">模块4：面向对象编程</h4>
            <p class="micro-panel-font micro-panel-dec">
              学习面向对象知识、开发思想和套路，掌握编程开发规范，为以后写正式大型项目打下良好基础
              挑战开发“学员管理系统”项目
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">一周</span></span>
          </div>
        </div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">模块5：网络编程</h4>
            <p class="micro-panel-font micro-panel-dec">
              掌握TCP/IP协议通信原理,学习Socket套接字的Tcp、Udp开发,学习线程、进程、协程、信号、事件、生产者消费者模型、队列等知识
              挑战项目实战之开发一个可支持多用户同时上传、下载、安全认证、断点续传等功能的FTP程序
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-left-panel">
          <div class="micro-left-item">
            <h4 class="micro-panel-tit">赠送专题课程</h4>
            <p class="micro-panel-font micro-panel-dec">
              1. 常用算法如数据结构、堆栈、二叉树、各种排序、查找算法学习<br>
              2. 协作开发git使用<br>
              3. 企业生产环境中Django+uwsgi+Ngnix的部署
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
      </div>
      <div class="micro-gap-wrap">
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
        <span class="micro-gap-line"></span>
        <span class="micro-gap-point"></span>
      </div>
      <div style="margin-top: 133px; margin-left: 100px;">
        <div class="micro-right-panel">
          <div class="micro-right-item">
            <h4 class="micro-panel-tit">模块6：数据库开发</h4>
            <p class="micro-panel-font micro-panel-dec">
              了解数据库原理、特性、主键、外键、索引等基本知识,掌握表结构设计、创建、关联表依赖等知识,掌握常用数据库SQL增删改查、分组聚合、统计等语句,掌握事务操作、存储过程、视图、触发器等知识
              挑战项目实战之开发基于MySQL数据库的《教学管理系统》
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-right-panel">
          <div class="micro-right-item">
            <h4 class="micro-panel-tit">模块7：前端开发基础</h4>
            <p class="micro-panel-font micro-panel-dec">
              学习HTML/CSS/JS知识、掌握原生Ajax/DOM操作，掌握Jquery/Bootstrap技术
              挑战项目实战之开发一个简单的商城系统
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-right-panel">
          <div class="micro-right-item">
            <h4 class="micro-panel-tit">模块8：Web框架学习</h4>
            <p class="micro-panel-font micro-panel-dec">
              了解WEB框架原理、WEB请求周期,学习MVC/MTV架构、Django ORM、模板语言、Admin、Form\ModelForm的使用，掌握Cookie\Session\Cache\中间件\XSS\CSRF\Ajax跨域知识
              挑战项目实战之开发”一个简单的图书管理系统”
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">两周</span></span>
          </div>
        </div>
        <div class="micro-right-panel">
          <div class="micro-right-item">
            <h4 class="micro-panel-tit">模块9：项目实战</h4>
            <p class="micro-panel-font micro-panel-dec">
              开发博客系统、WEB微信、CRM客户关系管理系统、爬虫项目，通过4个项目的学习，使你能充分掌握运用Python开发各种软件项目的能力。
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">三周</span></span>
          </div>
        </div>
        <div class="micro-right-panel">
          <div class="micro-right-item">
            <h4 class="micro-panel-tit">模块10：就业指导</h4>
            <p class="micro-panel-font micro-panel-dec">
              职场人专业素养指导，学习如何让简历脱颖而出，企业笔试题库练习和技巧、面试策略和技巧
            </p>
            <span class="micro-panel-font">推荐时间：<span style="color: #4A4A4A;">三天</span></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--我们的讲师-->
  <div class="for-why" style="background: #FAFBFC; padding-top: 28px;">
    <h3 class="why-tit">我们的讲师</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec" style="width:848px; margin: 0 auto;">我们的课程涵盖一线互联网企业最前沿的实战技术，由多位BAT互联网企业的资深专业技术大牛共同研制。<br>
      直击行业痛点的实战项目，能有效帮助学员在最短的时间内达成高效成长，最终具备独立完成项目与获取大型互联网企业青睐的技术水准</p>
    <div style="padding-top: 89px; width: 1176px; margin: 0 auto;">
      <ul style="padding: 0; display: flex; flex-wrap: wrap; padding-bottom: 59px; margin: 0;">
        <li style="list-style: none; display: flex; margin-bottom: 70px;">
          <div style="width: 100px; height: 100px; border-radius: 100px; overflow: hidden;">
            <img src="../../assets/img/alex.png" width="100" height="100" alt="">
          </div>
          <div style="width: 364px; text-align: left; margin-left: 31px;">
            <span style="font-size: 18px; color: #333333; display: block; letter-spacing: 1.45px;">ALEX</span>
            <span style="font-size: 15px; color: #333333; display: block; letter-spacing: 1.2px;">路飞学城创始人，金牌讲师</span>

            <p class="micro-tea-dec" style="margin-top: 8px; text-align: justify;">
              CrazyEye,MadKing,TriAquae三款开源软件作者，老男孩教育Python教学总监，多年IT自动化运维及开发经验，国内知名PYTHON语言推广者。 曾就职于松下、国政通网络、飞信、中金公司、NOKIA等公司
            </p>
          </div>
        </li>
        <li style="list-style: none; margin-left: auto; display: flex; margin-bottom: 70px;">
          <div style="width: 100px; height: 100px; border-radius: 100px; overflow: hidden;">
            <img src="../../assets/img/wusir.png" width="100" height="100" alt="">
          </div>
          <div style="width: 364px; text-align: left; margin-left: 31px;">
            <span style="font-size: 18px; color: #333333; display: block; letter-spacing: 1.45px;">Wu sir</span>
            <span style="font-size: 15px; color: #333333; display: block; letter-spacing: 1.2px;">路飞学城金牌讲师</span>
            <p class="micro-tea-dec" style="margin-top: 8px; text-align: justify;">
              多年开发实战经验，先后任职于汽车之家、好大夫在线等多家大型互联网公司。擅长C#,Python,PHP等一大堆语言开发，现任某大型互联网公司高级自动化开发工程师，已精读多个开源软件源码，自行开发过改进版的Tornado WEB框架，讲课风趣幽默。
            </p>
          </div>
        </li>
        <li style="list-style: none; display: flex; margin-bottom: 70px;">
          <div style="width: 100px; height: 100px; border-radius: 100px; overflow: hidden;">
            <img src="../../assets/img/egon.png" width="100" height="100" alt="">
          </div>
          <div style="width: 364px; text-align: left; margin-left: 31px;">
            <span style="font-size: 18px; color: #333333; display: block; letter-spacing: 1.45px;">Egon</span>
            <span style="font-size: 15px; color: #333333; display: block; letter-spacing: 1.2px;">路飞学城金牌讲师</span>
            <p class="micro-tea-dec" style="margin-top: 8px; text-align: justify;">
              老男孩教育Python学科金牌讲师曾任某上市公司云计算部门主管多年一线运维和开发经验，追求极致的技术分享者，被技术耽误的相声演员。
            </p>
          </div>
        </li>
        <li style="list-style: none; margin-left: auto; display: flex; margin-bottom: 70px;">
          <div style="width: 100px; height: 100px; border-radius: 100px; overflow: hidden;">
            <img src="../../assets/img/zhao.png" width="100" height="100" alt="">
          </div>
          <div style="width: 364px; text-align: left; margin-left: 31px;">
            <span style="font-size: 18px; color: #333333; display: block; letter-spacing: 1.45px;">赵博士（清华大学计算机博士）</span>
            <span style="font-size: 15px; color: #333333; display: block; letter-spacing: 1.2px;">高级Python讲师</span>
            <p class="micro-tea-dec" style="margin-top: 8px; text-align: justify;">
              对各种高精尖算法有较深研究，精读Python源码，了解Python解释器底层技术实现。擅长领域：C/C++、Python、Java、金融分析、机器学习与人工智能等。曾获国家奖学金，2015年“甲骨文杯”全国Java程序设计大赛二等奖。计算机专业知识相当扎实，跟二进制一样严谨，擅长将枯燥的专业知识生动形象的表达出来，深入浅出，深受学员喜爱
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!--奖学金-->
  <div class="for-why" style="background: #F7F7F7; margin-top: 0; padding-bottom: 103px;">
    <h3 class="why-tit" style="margin: 0;">奖学金</h3>
    <em style="width: 120px; border-top: 1px solid #7ED321;  margin: 20px auto 19px;"></em>
    <p class="why-dec" style="width:848px; margin: 0 auto; padding-bottom: 56px;">为了鼓励小伙伴们快速完成学习，路飞学城为所有学位课程学员提供了可观的奖学金政策</p>
    <ul class="sch-wrap">
      <li class="sch-list">
        <span class="sch-week">正常周期5个月完成</span>
        <span class="sch-profit"><span>10%</span>返还</span>
        <span class="sch-programme">奖学金方案一</span>
        <span class="sch-pro-dec">Python全栈开发中级正常周期5、6个月</span>
        <span class="sch-progress">按时按照路飞学城的进度完成可返回学费的10%</span>
        <button class="green-join-btn" v-link="{name:'micro-detail',params:{id:1}}">立即加入</button>
      </li>
      <li class="sch-list" style="margin-top: 0; width: 423px; height: 544px;background: #7ED321;box-shadow: 0 4px 9px 0 rgba(245,245,245,0.50);">
        <span class="sch-week" style="font-size: 20px;color: #FAFAFA;">提前2个月完成</span>
        <span class="sch-profit" style="color: #fff;"><span style="font-size: 64px;">30%</span>返还</span>
        <span class="sch-programme" style="margin-top: 41px;background: #7ED321;
box-shadow: 0 -1px 0 0 #B8E986, 0 1px 0 0 #B8E986; color: #fff;">奖学金方案二</span>
        <span class="sch-pro-dec" style="background: #7ED321;
box-shadow: 0 -1px 0 0 #B8E986, 0 1px 0 0 #B8E986; color: #fff;">Python全栈开发中级正常周期5、6个月</span>
        <span class="sch-progress" style="color: #fff;">按时按照路飞学城的进度完成可返回学费的30%</span>
        <button class="green-join-btn" v-link="{name:'micro-detail',params:{id:1}}" style="background: #FFFFFF; color: #7ED321;">立即加入</button>
      </li>
      <li class="sch-list">
        <span class="sch-week">提前3个月完成</span>
        <span class="sch-profit"><span>50%</span>返还</span>
        <span class="sch-programme">奖学金方案三</span>
        <span class="sch-pro-dec">Python全栈开发中级正常周期5、6个月</span>
        <span class="sch-progress">按时按照路飞学城的进度完成可返回学费的50%</span>
        <button class="green-join-btn" v-link="{name:'micro-detail',params:{id:1}}">立即加入</button>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min'
  import bxSlider from '../../assets/js/jquery.bxslider'
  import courseScroll from 'src/components/common/course-scroll.vue'

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
        inp1: ''
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      $(".lt").bind('click',function(){
        $(".lt").addClass('course-active');
      });

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


      $('.slider1').bxSlider({

        slideWidth: 1100,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 10,
        auto: true,
        autoControls: true,
        autoHover: true,
        wrapperClass: 'bx-wrapper'
      });


    },
    components: {
      courseScroll
    },
    methods: {
      load: function() {

      },
      jump:  function() {

        // 获取需要滚动的距离
        let total = $('.top').height()+60;
        // Chrome
        document.body.scrollTop = total;
        // Firefox
        document.documentElement.scrollTop = total;
        // Safari
        window.pageYOffset = total;
      },
      recording_remind:function () {
        toastr.clear()
        toastr.info('《Python全栈开发高级》正在紧急录制中')

      }

    }



  }
</script>
<style scoped>
  @import "../../assets/css/jquery.bxslider.css";
  .micro-tea-dec {
    font-size: 12px;
    color: #666666;
    line-height: 22px;
  }
  .micro-gap-wrap {
    margin-top: 83px;
    margin-left: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .micro-gap-point {
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 11px;
    background: #7ED321;
  }
  .micro-gap-line {
    display: block;
    height: 124px;
    width: 1px;
    border-left: 1px solid #E9E9E9;
  }
  .micro-panel-font {
    font-size: 14px;
    color: #9B9B9B;
  }
  .micro-panel-dec {
    width: 100%;
    text-align: justify;
    height: 63px;
    margin: 16px 0 12px;
    border-bottom: 1px solid #E8E8E8;
    overflow: auto;
    text-overflow:ellipsis;
    /*display:-webkit-box;*/
    -webkit-box-orient:vertical;
    -webkit-line-clamp:3;
  }
  .micro-panel-tit {
    font-size: 20px;
    color: #333333;
  }
  .micro-left-panel {
    width: 417px;
    height: 190px;
    background: url("../../assets/img/micro-panel-left.png") no-repeat;
    background-size: contain;
    margin-bottom: 82px;
  }
  .micro-right-panel {
    width: 417px;
    height: 190px;
    background: url("../../assets/img/micro-panel-right.png") no-repeat;
    background-size: contain;
    margin-bottom: 82px;

  }
  .micro-right-item {
    width: 360px;
    padding-left: 40px;
    padding-top: 27px;
    text-align: left;
  }
  .micro-left-item {
    width: 342px;
    padding-left: 20px;
    padding-top: 27px;
    text-align: left;
  }
  .green-join-btn {
    font-size: 14px;
    color: #FFFFFF;
    width: 168px;
    height: 43px;
    background: #7ED321;
    outline: none;
    border: none;
    margin-top: 51px;
  }
  .sch-wrap {
    padding: 0;
    display: flex;
    width: 1176px;
    margin: 0 auto;
  }
  .sch-list {
    list-style: none; text-align: center; margin-top: 35px; width: 390px; height: 475px;background: #FFFFFF;box-shadow: 0 4px 9px 0 #F5F5F5;
  }
  .sch-week {
    font-size: 18px;
    color: #666666;
    display: block;
    margin-top: 47px;
  }
  .sch-profit {
    display: block;
    margin-top: 15px;
    color: #7ED321;
  }
  .sch-profit span {
    font-size: 56px;
  }
  .sch-programme {
    display: block;
    width: 334px;
    height: 46px;
    line-height: 46px;
    margin: 26px auto 0;
    background: #FFFFFF;
    box-shadow: 0 -1px 0 0 #E9E9E9, 0 1px 0 0 #E9E9E9;
    font-size: 18px;color: #9D9D9D;
  }
  .sch-pro-dec {
    display: block;
    width: 334px;
    height: 46px;
    line-height: 46px;
    margin: 0 auto;
    background: #FFFFFF;
    box-shadow: 0 -1px 0 0 #E9E9E9,  0 1px 0 0 #E9E9E9;
    font-size: 13px;color: #9D9D9D;
  }
  .sch-progress {
    display: block;
    margin-top: 18px;
    font-size: 13px;
    color: #9D9D9D;
  }
  .banner {
    width: 100%;
    height: 611px;
    background: url("../../assets/img/micro-banner.png") no-repeat;
    background-size: 100% auto;
  }
  .micro-banner-shadow {
    width: 100%;
    height: 611px;
    background: rgba(74,73,74,0.45);
  }
  .micro-banner-text {
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-top: 180px;
  }
  .join-btn {
    width: 278px;
    height: 74px;
    border: 1px solid #7ED321;
    border-radius: 36px;
    background: none;
    outline: none;
    font-size: 24px;
    color: #7ED321;
  }
  @media screen and (min-width: 1800px) {
    .banner,
    .micro-banner-shadow{
      height: 982px;
    }
    .micro-banner-text {
      padding-top: 320px;
    }
  }
  em {
    display: block;
  }
  .img {
    cursor: pointer;
    transition: all 0.3s;
  }
  .course-active {
    transform: scale(1.4);
  }
  .cont-tit {
    font-size: 20px;
    color: #333333;
    letter-spacing: 1.6px;
    margin-bottom: 8px;
  }
  .num-more {
    width: 42px;
    text-align: left;
  }
  .num-cont {
    font-size: 12px;
    color: #333333;
    letter-spacing: 0.96px;
    width: 536px;
  }
  .number {
    width: 92px;
    font-size: 48px;
    color: #5E5E5E;
    letter-spacing: 3.85px;
  }
  .fif-title {
    font-size: 16px;
    color: #333333;
  }
  .fif-dec {
    font-size: 12px;
    color: #666666;
    line-height: 22px;
  }
  .tir-dec {
    font-size: 12px;
    color: #5E5E5E;
    width: 252px;
    line-height: 28px;
  }
  .tir-title {
    font-size: 16px;
    color: #000000;
    margin: 30px 0 14px;
  }
  .luffy {
    margin: 0 auto;
    width: 1166px;
    height: 510px;
    background: url("../../assets/img/luffy.png") no-repeat center;
    display: flex;
  }
  .pie {
    width: 424px;
    height: 388px;
    background: #fff;
    margin-left: 30px;
  }
  .line {
    width: 739px;
    height: 388px;
    background: #fff;
  }
  .jobWrap {
    width: 1193px;
    height: 545px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 157px;
  }
  .user-item {
    width: 275px;
    height: 190px;
    border-top: 2px solid #F7F7F7;
    border-right: 2px solid #F7F7F7;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .user {
    padding-top: 7px;
    padding-bottom: 90px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .div-scale {
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

  .rangeWrap {
    width: 1176px;
    margin: 0 auto;
    padding-top: 34px;
    overflow: hidden;
    position: relative;
    height:430px;
  }
  .why-dec {
    font-size: 14px;
    color: #9B9B9B;
    padding-bottom: 34px;
    line-height: 30px;
  }
  .why-tit {
    font-size: 24px;
    color: #333333;
    padding-top: 80px;
    margin: 0;
  }
  .for-why {
    width: 100%;
    background: #FAFAFA;
    text-align: center;
  }
  li {
    list-style: none;
  }
  span {
    border-top: none !important;
  }
  .microWrap{
    width: 100%;
  }
  .mainWrap {
    width: 100%;
    border: 1px solid #EEEEEE;
    background: #fff;
  }
  .itemWrap {
    width: 1176px;
    margin: 0 auto;
    margin-top: 84px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 89px;
  }
  .item {
    list-style: none;
    width: 252px;
  }
  .sec-title {
    font-size: 16px;
    color: #000000;
    margin: 2px 0 12px 0;
    letter-spacing: 0.25px;
  }
  .cont {
    font-size: 12px;
    color: #9B9B9B;
    letter-spacing: 0.19px;
    line-height: 27px;
  }
  .m-title {
    font-size: 24px;
    color: #333333;
    margin: 20px 0;
  }
  .m-des {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0;
    margin-bottom: 21px;
  }
  .name {
    font-size: 14px;
    color: #000000;
    display: block;
    padding: 4px 14px;
  }
  .desc {
    font-size: 12px;
    color: #9B9B9B;
    display: block;
    padding: 4px 14px;
  }
</style>
