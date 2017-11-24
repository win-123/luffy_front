<template>
  <div class="wrap">
    <div class="titleWrap flex ">
      <div class="title-cont">
        <span class="total-name" style="display: block;">LuffyX专业课程</span>
        <h3 class="title">{{micro_course.name}}</h3>
        <span class="title-tip" style="display: block;">迈出Python全栈开发工程师第一步</span>
      </div>
    </div>
    <div class="videoWrap flex">
      <div class="video-main">
        <video width="640" height="315" autoplay controls loop src="">

        </video>
      </div>
    </div>
    <div class="professionalWrap" style="background: #FAFBFC; height: auto; padding-top: 103px; padding-bottom: 96px;">
      <div class="" style="width:1176px; margin: 0 auto; display: flex; text-align: left; ">
        <div class="prof-main" style="width: 533px; margin-right: 175px;">
          <p class="text">
            <span class="text_span" style="display: block; margin-bottom: 30px;">学完后达到的能力</span>
            Python语言本身就像是一个万能兵器，其应用领域极为广泛，不同的企业用Python做的事情也不同。Python在每个擅长的领域都有非常多的知识值得我们花很多的精力学习，掌握的Python知识越多，就意味着更多的面试和工作机会。<br><br>
            本课程将从基础开始，逐渐带你深入OOP编程、网络编程、数据库开发、WEB开发等知识，毕业后，你将至少掌握以下能力:<br>
            1、熟练掌握计算机原理，熟悉Linux系统的使用<br>
            2、熟练掌握Python函数\面向对象编程，可开发基于各种业务场景下的Python工具<br>
            3、熟悉Socket网络编程、线程、进程知识，可以开发C/S架构的高并发的FTP文件共享软件<br>
            4、熟练掌握数据库常用操作，掌握自行设计合理、可扩展表结构的能力<br>
            5、熟练掌握缓存、队列等中间件技术，为以后开发大型项目打下坚实基础<br>
            6、熟练掌握前端HTML/CSS/JS/Jquery/Bootstrap知识，熟练掌握Django WEB框架<br>
            7、掌握开发实战项目BBS论坛、WEB微信、CRM软件、爬虫的能力
          </p>
          <button class="btn" @click="popup('https://static.meiqia.com/dist/standalone.html?_=t&eid=81352&groupid=808eb62a840000322290b0f06efe789f')">立即咨询</button>
        </div>
        <div style="width: 485px; padding-top: 3px;">
          <ul style="height: 146px; padding-left: 0; display: flex; box-shadow: 0 1px 0 0 #E8E8E8">
            <li style="list-style: none; width:50%;">
              <span class="key" style="display: block;">学习周期</span>
              <span class="value text_span" style="display: block;">大约5～6个月</span>
            </li>
            <li style="list-style: none; width:50%;">
              <span class="key" style="display: block;">难度</span>
              <div>
                <img src="../../../assets/img/hard-icon.png" width="15" height="20" alt="">
                <span class="value text_span" style="display: inline-block; margin-left: 21px;">中级</span>
              </div>
            </li>
          </ul>
          <div style="list-style: none; height: 125px; box-shadow: 0 1px 0 0 #E8E8E8;">
            <span class="key" style="display: block; margin-top: 36px; margin-bottom: 30px;">入学条件</span>
            <p class="value text_span" style="margin-top: 0;">掌握计算机日常使用&nbsp;具备至少专科或以上学历</p>
          </div>
          <ul style="padding-left: 0; display: flex;">
            <li style="list-style: none; width:50%;">
              <span class="key" style="display: block; margin-top: 36px; margin-bottom: 30px;">预期工资</span>
              <span class="value text_span" style="display: block;">8-15K</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div style="width:100%; background: #F7F7F7;">
      <div style="width:1200px; margin:0 auto; ">
        <h3 style="padding: 100px 0 80px 0; font-size: 30px; color: #4A4A4A; margin: 0; letter-spacing: 2.41px; ">课程大纲</h3>
        <div style="width: 100%; display: flex; flex-wrap: wrap;">
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 1</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">掌握Python开发基础</h5>
              <p class="micro-project-req">
                a、学习计算机基础知识，硬件、操作系统原理、网络基础知识等<br>
                b、学习Python的基础语法<br>
                c、字符串、列表、元组、字典、集合数据类型操作<br>
                if..else..for…while程序逻辑控制<br>
                d、掌握编码知识及转换操作<br>
                通过python对文件进行增删改查<br>
                掌握函数、高阶函数、闭包、迭代器、装饰器<br>
                开发小项目如登陆程序、三级菜单、员工信息表
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 2</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">掌握Python基础进阶知识，培养开发者思维</h5>
              <p class="micro-project-req">
                a、学习常用标准库的使用，如re正则、logging日志、json\xml处理等<br>
                b、学习面向对象知识、开发思想和套路<br>
                c、学习编程开发规范，为以后写正式项目打下良好基础<br>
                d、开发小项目如ATM信用卡程序、选课系统
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 3</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">网络编程基础-开发网络FTP程序</h5>
              <p class="micro-project-req">
                a、掌握TCP/IP协议通信原理<br>
                b、学习Socket套接字的Tcp、Udp开发<br>
                c、通过Socket实现远程命令调用及结果回传<br>
                d、高效的解决Socket粘包问题<br>
                e、通过Socket实现文件发送<br>
                f、项目实战之开发一个可支持上传、下载、安全认证、断点续传等功能的FTP程序
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 4</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">网络编程进阶-开发高并发FTP服务器</h5>
              <p class="micro-project-req">
                a、学习线程、进程、协程知识<br>
                b、熟悉GIL在Python多线程中的作用<br>
                c、掌握互斥锁、信号、事件、队列知识<br>
                d、项目实战之开发基于C/S架构、支持多用户且高并发的 FTP程序<br>
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 5</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">数据库应用与开发</h5>
              <p class="micro-project-req">
                a、了解数据库原理、特性、主键、外键、索引等基本知识<br>
                b、掌握表结构设计、创建、关联表依赖等知识<br>
                c、掌握常用数据库SQL增删改查、分组聚合、统计等语句<br>
                d、掌握事务操作、存储过程、视图、触发器等知识<br>
                e、通过Python操作MySql数据库<br>
                f、项目实战之开发基于MySql数据库的《教学管理系统》
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 6</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">前端开发知识学习</h5>
              <p class="micro-project-req">
                a、掌握HTML/CSS/JS知识<br>
                b、掌握原生Ajax/DOM操作<br>
                c、掌握Jquery/Bootstrap技术<br>
                d、项目实战之开发一个简单的商城系统
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 7</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">WEB框架学习</h5>
              <p class="micro-project-req">
                a、了解WEB框架原理、WEB请求周期<br>
                b、自行开发一个简单的WEB框架<br>
                c、学习MVC/MTV架构<br>
                d、学习Django ORM、模板语言、Admin、Form\ModelForm的使用<br>
                e、掌握Cookie\Session\Cache\中间件\XSS\CSRF\Ajax跨域知识<br>
                f、开发一个简单的图书管理系统
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 8</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">项目实战－开发博客系统、WEB微信聊天系统</h5>
              <p class="micro-project-req">
                一、基于Django 框架实现 – 模拟“博客园”的博客系统：<br>
                1. 登陆、注册、找回密码<br>
                2. 页面验证码<br>
                3. 帖子列表展示<br>
                4. 允许登陆用户发贴、评论、点赞<br>
                5. 上传图片以及预览<br>
                6. 多级评论<br>
                7. 分页
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 9</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">项目实战－开发CRM管理系统、爬虫项目</h5>
              <p class="micro-project-req">
                一、基于Django框架的CRM客户管理系统<br>
                角色管理<br>
                讲师角色：可创建每节上课纪录、管理班级、在线点名、批复作业、查看班级学员成绩<br>
                学员角色：可在线提交作业、查看成绩、查看合同、推荐学员、在线请假、下载学习课件<br>
                销售角色：可创建客户、跟踪客户纪录、在线办理报名手续、查看销售报表<br>
                权限管理<br>
              </p>
            </div>
          </div>
          <div class="micro-course-panel">
            <span class="computer-project-icon">PROJECT 10</span>
            <div style="width: 319px; height: 346px; overflow: hidden; margin: 0 auto; text-align: left;">
              <h5 class="sec-project-tit" style="line-height: 32px;">就业指导</h5>
              <p class="micro-project-req">
                a、如何让简历脱颖而出<br>
                b、企业笔试题库练习和技巧<br>
                c、面试策略和技巧<br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="width:100%; background: #FFF; padding-bottom: 140px;">
      <h3 style="padding: 70px 0 59px 0; font-size: 30px; color: #4A4A4A; margin: 0; letter-spacing: 2.41px;">附赠专题课程</h3>
      <div style="width:1200px; margin:0 auto; display: flex; flex-wrap: wrap; justify-content: space-between;">
        <div style="width:365px; background: #FFFFFF; box-shadow: 0 4px 12px 3px #E9E9E9;">
          <div style="width:365px; height:202px;">
            <div style="width:365px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../../assets/img/micro-detail-course1.png"  width="365" height="202">
            </div>
          </div>
          <div style="width:292px; height:275px; margin: 38px auto 0; text-align: left;">
            <h3 style="font-size: 24px;color: #4A4A4A;letter-spacing: 1.92px;">常用算法专题学习</h3>
            <div style="width: 292px; margin-top: 38px; text-align: left; font-size: 14px;color: #4A4A4A; letter-spacing: 1.12px; line-height: 30px;">
              a、数据结构：堆、栈、二叉树等；<br>
              b、排序：冒泡排序、快速排序、直接选择排序、堆排序、直接插入排序等；<br>
              c、查找：顺序查找、折半查找、哈希查找、二叉排序树等；
            </div>
          </div>
        </div>
        <div style="width:365px; background: #FFFFFF; box-shadow: 0 4px 12px 3px #E9E9E9;">
          <div style="width:365px; height:202px;">
            <div style="width:365px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../../assets/img/micro-detail-course2.png"  width="365" height="202">
            </div>
          </div>
          <div style="width:292px; height:275px; margin: 38px auto 0; text-align: left;">
            <h3 style="font-size: 24px;color: #4A4A4A;letter-spacing: 1.92px;">企业开发环境</h3>
            <div style="width: 292px; margin-top: 38px; text-align: left; font-size: 14px;color: #4A4A4A; letter-spacing: 1.12px; line-height: 30px;">
              a、git基本使用；<br>
              b、git合并、冲突解决、分支策略、协作开发等；<br>
              c、vitrualenv使用；
            </div>
          </div>
        </div>
        <div style="width:365px; background: #FFFFFF; box-shadow: 0 4px 12px 3px #E9E9E9;">
          <div style="width:365px; height:202px;">
            <div style="width:365px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../../assets/img/micro-detail-course3.png"  width="365" height="202">
            </div>
          </div>
          <div style="width:292px; height:275px; margin: 38px auto 0; text-align: left;">
            <h3 style="font-size: 24px;color: #4A4A4A;letter-spacing: 1.92px;">生产环境中Django部署</h3>
            <div style="width: 292px; margin-top: 38px; text-align: left; font-size: 14px;color: #4A4A4A; letter-spacing: 1.12px; line-height: 30px;">
              a、掌握生产环境中Django+uwsgi+Ngnix的部署；
            </div>
          </div>
        </div>
      </div>
      <div style="width: 1115px; margin: 160px auto 0; display: flex; justify-content: space-between;">
        <div style="margin-top: 58px; text-align: left;">
          <h3 style="font-size: 30px;color: #4A4A4A;letter-spacing: 2.41px;">你将获得的服务</h3>
          <ul style="padding-left: 20px; margin-top: 47px;">
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">根据一线互联网企业实际需求制作的独家顶尖课程</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">2年内视频有效期</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">6个月导师全程陪同1对1辅导</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">技术专家逐行审阅代码后为你提供的个性化反馈</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">和路飞导师一对一在线视频考核</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">班主任+导师+小组长 多维度帮扶、劝学机制</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">高额奖学金激励制度</span>
            </li>
            <li class="has-list-style" style="list-style: disc;">
              <span class="service-item">工作推荐、就业咨询等职业发展支持</span>
            </li>
          </ul>
        </div>
        <div>
          <img src="../../../assets/img/micro-detail-right.png" width="492" height="455" alt="">
        </div>
      </div>
    </div>
    <div style="width: 100%; background: #FAFBFC; padding-top: 100px; text-align: center;">
      <div style="width: 1200px; margin: 0 auto;">
        <h4 style="font-size: 30px;color: #5E5E5E;letter-spacing: 0.87px; margin-bottom: 80px;">项目讲师简介</h4>
        <ul class="teacher-brief-wrap" style="padding-bottom: 30px;">
          <li v-for="item in micro_course_teacher" class="teacher-brief-list">
            <div class="teacher-image">
              <img :src="item.image" width="200" height="200" alt="">
            </div>
            <div class="teacher-info" style="text-align: left;">
              <span class="teacher-name" style="display: inline-block;">{{item.name}}</span>
              <span class="teacher-name teacher-position" style="display: inline-block;">{{item.title}}</span>
              <p class="teacher-signal">{{item.signature}}</p>
              <p class="teacher-brief-detail">
               {{item.brief}}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div style="width: 100%; padding-bottom: 113px;">
      <h3 style="padding: 100px 0 80px; font-size: 28px; color: #333; margin: 0; letter-spacing: 3.33px;">项目导师简介</h3>
      <div style="width:1176px; margin:0 auto; display: flex; flex-wrap: wrap;">
        <div class="micro-tutor-item" v-for="item in micro_course_tutor">
          <div style="width: 144px; height: 144px; border-radius: 144px; overflow: hidden;">
            <img :src="item.image" width="144" height="144" alt="">
          </div>

          <span style="display: block; margin-top: 20px; font-size: 16px; color: #4A4A4A;letter-spacing: 1.61px;">{{item.name}}</span>
          <span style="display: block; margin-top: 12px; font-size: 14px; color: #9B9B9B;letter-spacing: 1.41px;">{{item.title}}</span>
        </div>
      </div>
    </div>
    <div style="width: 100%; background: #FAFBFC; padding-top: 98px; padding-bottom: 85px;">
      <div style="width: 940px; margin: 0 auto; text-align: center;">
        <h3 style="font-size: 30px;color: #4A4A4A;letter-spacing: 3.03px;">名额有限！立即报名加入课程内容</h3>
        <div style="width: 100%; display: flex; justify-content: space-between; margin-top: 80px;">
          <div style="width: 291px; padding-bottom: 30px; background: #FFFFFF; overflow: hidden; border-radius: 6px; box-shadow: 0 4px 8px 0 #E9E9E9;">
            <div style="width: 100%; height: 125px; background: #7ED321; text-align: center; padding-top: 33px;">
              <span style="font-size: 24px;color: #FFFFFF;letter-spacing: 2.42px; display: block;">本期学费</span>
              <span style="font-size: 24px;color: #FFFFFF;letter-spacing: 2.42px; display: block; margin-top: 2px;">&yen;{{micro_course.price}}</span>
            </div>
            <p style="width: 235px; margin: 14px auto; text-align: left;font-size: 13px;color: #4A4A4A;letter-spacing: 1.31px;line-height: 28px;">
              *&nbsp;&nbsp;知名网红讲师精心打造的课程<br>
              *&nbsp;&nbsp;全部课件、笔记、案例下载<br>
              *&nbsp;&nbsp;加入学习群，和众多伙伴一起学习<br>
              *&nbsp;&nbsp;群导师答疑，减少自学走弯路时间<br>
              *&nbsp;&nbsp;Alex老师精心熬制的心灵鸡汤<br>
              *&nbsp;&nbsp;一对一辅导
            </p>
            <span @click="buy()" class="micro-course-purchase" >立即购买</span>
          </div>
          <div style="width: 533px; text-align: left;">
            <h4 class="micro-join-tit">为什么名额有限</h4>
            <p class="micro-join-cont">在学习过程中你将要挑战路飞学城根据名企设计的实战项目，领域专家将逐行审阅你的代码，提供专业，细致的反馈，你还将加入学习小组，和志同道合的伙伴一起，在全方位辅导和监督下，用最短的时间高效成长。为了保证这些学习服务的最高质量，帮助你在最短时间达到你的学习目标，我们需要限名额保证良好的导师对学生比例。</p>
            <h4 class="micro-join-tit" style="margin-top: 32px;">什么叫LuffyX学位</h4>
            <p class="micro-join-cont">路飞学院LuffyX学位课程是业内首创“在线一对一VIP辅导”的全新教学模式的课程，通过对零基础的学员制定学习计划，提供系统性课程、一对一辅导、审阅代码、闯关式学习、答疑、推荐就业等服务，有效保障学员通过学习微专业的课程后具备独立完成项目与企业所需的技术水准。</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="width: 1200px; margin: 0 auto; text-align: left;">
        <h4 style="padding: 70px 0 0; font-size: 30px; text-align: center; color: #5E5E5E; margin: 0; letter-spacing: .87px;">常见问题</h4>
        <ul style="width: 100%; padding-bottom: 130px;">
          <li class="micro-common-question-list" v-for="item in micro_course_question" id="{{item.id}}">
            <h6 class="question-tit">Q:{{item.question}}</h6>
            <p class="question-answer">
              A: {{item.answer}}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../../assets/js/jquery.lazyload.min';
  import courseCard from 'src/components/common/course-card.vue'
  import subjectCard from 'src/components/common/subject-card.vue'
  import teacherImg from 'src/components/common/teacher-img.vue'
  import tutorImg from 'src/components/common/tutor-img.vue'
  import bus from '../../../assets/js/evenBus'

  export default {
    data() {
      return {
        micro_course_id: '',
        micro_course: '',
        micro_course_tutor: '',//导师
        micro_course_teacher: '',//讲师
        micro_course_question: '',//常见问题
        data:{}
      }
    },
    components: {
      courseCard,
      subjectCard,
      teacherImg,
      tutorImg
    },
    computed: {
      loading: function() {
        return Vue.$xz.sloading
      }
    },
    ready: function(){
      this.micro_course_id = this.$route.params.id;
      this.init_request();
      var that=this;

      // Chrome
      document.body.scrollTop = 0;
      // Firefox
      document.documentElement.scrollTop = 0;
      // Safari
      window.pageYOffset = 0;

      bus.$on("loginEvent",function(data){
        if (data=that.$route.name){
          that.init_request();
        }
      });
    },
    methods: {
      popup (url) {
        location.href = url
      },
      init_request:function () {
        this.load(Vue.http.options.x_root+'/api/v1/degree_course/'+this.micro_course_id+'/');

      },
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url).then(function(response){

          if(response.data.error_no==0){
            this.micro_course=response.data.data;
            this.micro_course_tutor=response.data.data.mentor_info.data;
            this.micro_course_teacher=response.data.data.teacher_info.data;
            this.micro_course_question=response.data.data.often_question_info.data;

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('微学位课程详情接口请求失败')
          })
      },
      buy: function () {
        var purchase_course=[];
        var buy_item={
          'courseId':this.micro_course_id,                 //int      课程ID
          'validPeriodId': this.micro_course.valid_period_id,              //int      有效期ID
          'price': this.micro_course.price,                  //int      课程对应价格
          'courseUrl': this.micro_course.course_img              //string   课程描述图
        };
        purchase_course.push(buy_item);

        Cookies.set('courseId',this.micro_course_id);
        Cookies.set('validPeriodId',this.micro_course.valid_period_id);

        Cookies.set('purchase_course',JSON.stringify(purchase_course));
        Cookies.set('purchase_course_price_sum',this.micro_course.price);
        Cookies.set('isDegreeCourse',1);
        Cookies.set('source','shop_course');
        if (this.$store.state.login_state){
          this.$route.router.go({name: 'purchase-course'});
        }
        else {
          toastr.info('Hey~,您还没有登陆哦');
          this.$store.state.login_ing=true;
        }
      }
    }
  }
</script>
<style scoped>
  .micro-common-question-list {
    list-style: none;
    width: 100%;
    margin-top: 32px;
    padding-bottom: 50px;
    box-shadow: 0 1px 0 0 #F4F4F4;
  }
  .micro-tutor-item {
    width: 144px;
    text-align: center;
    margin-right: 50px;
    margin-bottom: 80px;
  }
  .micro-tutor-item:nth-child(6n) {
    margin-right: 0;
  }
  .micro-join-tit {
    font-size: 24px;
    color: #5E5E5E;
    letter-spacing: 2.42px;
  }
  .micro-join-cont {
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 1.41px;
    line-height: 27px;
    margin-top: 20px;
  }
  .micro-course-purchase {
    width: 231px;
    height: 46px;
    margin: 0 auto;
    background: #84CC39;
    box-shadow: 0 4px 8px 0 #D0D0D0;
    border-radius: 5px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.41px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .teacher-brief-wrap {
    width: 1140px;
    margin: 0 auto;
    padding-bottom: 18px;
  }
  .teacher-brief-list {
    width: 100%;
    height: 426px;
    margin-bottom: 71px;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 #E9E9E9;
    border-radius: 13px;
  }
  .teacher-image{
    width: 200px;
    height: 200px;
    border-radius: 100px;
    overflow: hidden;
    margin-left: 90px;
    margin-top: 72px;
  }
  .teacher-info {
    margin-left: 90px;
    margin-top: 72px;
    width: 682px;
  }
  .teacher-name {
    font-size: 30px;
    color: #333333;
    letter-spacing: 3.03px;
  }
  .teacher-position {
    display: inline-block;
    margin-left: 35px;
  }
  .teacher-signal {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.82px;
    margin-top: 17px;
  }
  .teacher-brief-detail {
    font-size: 20px;
    color: #333333;
    letter-spacing: 2.02px;
    margin-top: 37px;
    text-align: justify;
  }
  .has-list-style {
    font-size: 16px;
    color: #78C63F;
    line-height: 36px;
    padding-left: 13px;
  }
  .service-item {
    color: #4A4A4A;
    font-size: 18px;
    letter-spacing: 1.44px;
    line-height: 36px;
  }
  .micro-course-panel {
    width: 379px;
    text-align: left;
    height: 466px;
    margin-right: 31px;
    background: #FFFFFF;
    margin-bottom: 60px;
    box-shadow: 0 4px 9px 0 #E9E9E9;
  }
  .micro-course-panel:nth-child(3n) {
    margin-right: 0;
  }
  .wrap {
    width:100%;
    text-align: center;
  }
  .titleWrap {
    width: 100%;
  }
  .title-cont {
    width: 100%;
  }
  .total-name {
    font-size: 14px;
    color: #5E5E5E;
    letter-spacing: 1.12px;
    display: inline-block;
    margin-top: 77px;
  }
  .title {
    font-size: 32px;
    color: #333333;
    letter-spacing: 2.57px;
    margin-bottom: 43px;
    margin-top: 32px;
  }
  .title-tip {
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0.25px;
  }
  .videoWrap {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 41px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .video-main {
    background: #000;
    width: 640px;
    height: 315px;
  }
  .professionalWrap {
    /*height: 612px;*/
  }
  .text {
    font-size: 12px;
    color: #333333;
    letter-spacing: 0.96px;
    line-height: 25px;
    text-align: left;
  }
  .text_span {
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 1.44px;
  }
  .btn {
    width: 131px;
    height: 45px;
    background: #7ED321;
    border-radius: 4px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 1.12px;
    margin-top: 18px;
  }
  .key {
    font-size: 14px;
    color: #4A4A4A;
    letter-spacing: 1.12px;
  }
  .value {
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 1.44px;
    margin-top: 30px;
  }
  .serve {
    width: 100%;
    height: 525px;
    background: url("../../../assets/img/serve.png") no-repeat;
    background-size: 100% auto;
    margin-top: 100px;
  }
  .quesWrap {
    width: 895px;
    margin: 0 auto 20px;
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-left: 1px solid #E9E9E9;
  }
  .computer-project-icon {
    display: block;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 1.98px;
    border-left: 2px solid #78C63F;
    margin: 23px 0 0;
    padding-left: 29px;
  }
  .sec-project-tit {
    font-size: 18px;
    margin: 23px 0 20px;
    color: #333333;
  }
  .micro-project-req {
    font-size: 14px;
    color: #5E5E5E;
    line-height: 26px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 12;
    overflow: hidden;
  }
  .question-tit {
    font-size: 18px;
    color: #4A4A4A;
    letter-spacing: 0.14px;
  }
  .question-answer {
    font-size: 14px;
    color: #9B9B9B;
    letter-spacing: 0.1px;
    margin-top: 18px;
  }
</style>
