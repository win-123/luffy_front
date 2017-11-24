<template>
  <div class="course-banner">
    <div class="course-banner-top">
      <img src="../../assets/img/course-banner-top.png" width="529" height="50" alt="">
    </div>
    <div style="margin-top: 24px;">
      <img src="../../assets/img/course-banner-bottom.png" width="837" height="30" alt="">
    </div>
    <div style="width: 100%; text-align: center; margin-top: 58px;" v-link="{name:'python-course-detail',params:{id:5}}">
      <span style="cursor: pointer; display: inline-block; width: 239px; height: 74px; line-height: 74px; background: #84CC39; border-radius: 100px; font-size: 24px;color: #FFFFFF;">立即加入</span>
    </div>

    <!--<div style="display: flex">
      <div class="course-banner-img1">
        <img src="../../assets/img/course-banner-img1.png" width="150%" alt="">
      </div>
      <div class="course-banner-img2">
        <img src="../../assets/img/course-banner-img2.png" width="130%" alt="">
      </div>
    </div>
    <div class="course-banner-join">
      <img style="display: block; margin-bottom: 38px;" src="../../assets/img/course-banner-text-top.png"  alt="">
      <img style="display: block; margin-bottom: 60px;" src="../../assets/img/course-banner-text-bot.png"  alt="">
      <button class="join-btn">立即加入</button>
    </div>
    <div class="course-banner-img-wrap">
      <div class="course-banner-img3">
        <img src="../../assets/img/course-banner-img3.png" width="130%" alt="">
      </div>
      <div class="course-banner-img4">
        <img src="../../assets/img/course-banner-img4.png" width="160%" alt="">
      </div>
    </div>
    <div class="course-banner-img-wrap">
      <div class="course-banner-img5">
        <img src="../../assets/img/course-banner-img5.png" width="180%" alt="">
      </div>
      <div class="course-banner-img6">
        <img src="../../assets/img/course-banner-img6.png" width="90%" alt="">
      </div>
      <div class="course-banner-img7">
        <img src="../../assets/img/course-banner-img7.png" width="95%" alt="">
      </div>
      <div class="course-banner-img8">
        <img src="../../assets/img/course-banner-img8.png" width="170%" alt="">
      </div>
      <div class="course-banner-img9">
        <img src="../../assets/img/course-banner-img9.png" width="165%" alt="">
      </div>
    </div>-->
  </div>
  <!--项目实战 你的同行都在学-->
  <div class="course-model">
    <div class="model-wrap" style="width: 1150px; margin:0 auto;">
      <h3 class="course-model-tit">项目实战&nbsp;你的同行都在学</h3>
      <p class="course-model-dec">更全面的实战案例、更细致的讲解和课后辅导，让你的职业生涯能更轻松的完成进阶</p>
      <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <div style="width:350px; cursor: pointer;" v-link="{name:'course-detail',params:{id:9}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img1.png"  width="350" height="238">
            </div>
          </div>
          <div style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
            <div style="width: 301px; text-align: center;">
              <h4 class="course-tit">爬虫开发实战</h4>
              <p class="course-dec">通过掌握解锁更多高级爬虫知识，就可以有能力突破
                一些常规的反爬限制，爬取你想要的数据。</p>
              <span class="course-lever">难度：高级</span>
            </div>
          </div>
        </div>
        <div style="width:350px; cursor: pointer;" v-link="{name:'course-detail',params:{id:2}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/crm.png"  width="350" height="238">
            </div>
          </div>
          <div style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
            <div style="width: 301px; text-align: center;">
              <h4 class="course-tit">CRM客户关系管理系统项目开发实战</h4>
              <p class="course-dec">通过此项目，你将学会一个复杂项目如何从需求讨论、构思、架构设计、代码开发、功能实现的全过程！</p>
              <span class="course-lever">难度：中级</span>
            </div>
          </div>
        </div>
        <div style="width:350px; cursor: pointer;" v-link="{name:'course-detail',params:{id:6}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img3.png"  width="350" height="238">
            </div>
          </div>
          <div style="width:350px; height:180px; display: flex; justify-content: center; box-shadow: 0 4px 2px 0 #E8E8E8;">
            <div style="width: 301px; text-align: center;">
              <h4 class="course-tit">WEB QQ聊天项目实战</h4>
              <p class="course-dec">京东、淘宝的在线客服系统都用了什么技术？通过<br>此项目的学习，可以大大提高你的前端开发能力</p>
              <span class="course-lever">难度：中级</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!--精品推荐 涵盖网络编程和WEB开发-->
  <div class="course-model">
    <div class="model-wrap" style="width: 1150px; margin:0 auto;">
      <h3 class="course-model-tit">精品推荐 涵盖网络编程和WEB开发</h3>
      <p class="course-model-dec">信息时代，数据为王，数据库的使用和挖取带你体验信息时代的非同凡响</p>
      <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <div style="width:350px; cursor: pointer;" v-link="{name:'course-detail-sec',params:{id:3}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img src="../../assets/img/course-img4.png"  width="350" height="238">
            </div>
          </div>
          <div style="width:282px; position: relative; top: -51px; z-index: 22; margin:0 auto;  background: #FFFFFF;">
            <div style="width: 240px; text-align: left; margin: 0 auto; padding-top: 31px;">
              <span class="course-lever">难度：中级</span>
              <h4 class="course-tit" style="margin: 11px 0 25px;">Django框架学习</h4>
              <p class="course-dec" style="margin-bottom: 23px; text-align: left;">
                The framework for perfectionist with deadline! 一个为完美主义者且又开发工期很紧的人设计的框架。
              </p>
              <span class="recommend-more">see more >>></span>
            </div>
          </div>
        </div>
        <div style="width:350px; cursor: pointer;" v-link="{name:'net-course-detail',params:{id:11}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img5.png"  width="350" height="238" >
            </div>
          </div>
          <div style="width:282px; position: relative; top: -51px; z-index: 22; margin:0 auto;  background: #FFFFFF;">
            <div style="width: 235px; text-align: left; margin: 0 auto; padding-top: 31px;">
              <span class="course-lever">难度：中级</span>
              <h4 class="course-tit" style="margin: 11px 0 5px;">网络编程入门&FTP服务开发实战</h4>
              <p class="course-dec" style="margin-bottom: 23px; text-align: left;">
                本课程将深入讲解TCP/IP的编程接口Socket套接字的开发及应用，课程结束时，你将完成一个支持多用户同时在...
              </p>
              <span class="recommend-more">see more >>></span>
            </div>
          </div>
        </div>
        <div style="width:350px; cursor: pointer;" v-link="{name:'mysql-course-detail',params:{id:4}}">
          <div style="width:350px; height:238px;">
            <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img6.png"  width="350" height="238">
            </div>
          </div>
          <div style="width:282px; position: relative; top: -51px; z-index: 22; margin:0 auto;  background: #FFFFFF;">
            <div style="width: 235px; text-align: left; margin: 0 auto; padding-top: 31px;">
              <span class="course-lever">难度：初级</span>
              <h4 class="course-tit" style="margin: 11px 0 25px;">Mysql数据库从入门到进阶</h4>
              <p class="course-dec" style="margin-bottom: 23px; text-align: left;">信息时代，数据为王，数据做为项目开发中必不可少的重要组件，数据库的使用是开发人员必备知识</p>
              <span class="recommend-more">see more >>></span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <!--专业好课 涵盖金融与机器学习-->
  <div class="course-model">
    <div class="model-wrap" style="width: 1150px; margin:0 auto;">
      <h3 class="course-model-tit">专业好课 涵盖金融与机器学习</h3>
      <p class="course-model-dec">学习未来所需技能，挑战实战项目，获得行业领导者的认可和认证</p>
      <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
      <div style="width: 100%; display: flex; justify-content: space-between;">
        <div style="width:350px; cursor: pointer;" v-link="{name:'algorithm-course-detail',params:{id:10}}">
          <div style="width:350px; height:202px;">
            <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img src="../../assets/img/course-img7.png"  width="350" height="202">
            </div>
          </div>
          <div style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
            <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
              <div style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                <img src="../../assets/img/icon-line.png" alt="">
              </div>
            </div>
            <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">算法入门</h4>
            <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">算法是计算机科学中最有魅力的领域，算法培养的是思考问题解决问题的通性通法，掌握常用算法知识，重新思考如何把你的程序变高效</p>
            <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：初级</span>
            <!--<button class="course-subject-btn">查看更多</button>-->
          </div>
        </div>
        <div style="width:350px; cursor: pointer;" v-link="{name:'finance-course-detail',params:{id:7}}">
          <div style="width:350px; height:202px;">
            <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img8.png"  width="350" height="202">
            </div>
          </div>
          <div style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
            <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
              <div style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                <img src="../../assets/img/icon-line.png" alt="">
              </div>
            </div>
            <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">金融量化自动化分析&交易入门</h4>
            <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">Python在金融分析领域应用非常普遍，本课程将带你在掌握金融股票、量化交易相关知识的基础上，探索如何通过Python开发一个量化交易平台</p>
            <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：初级</span>
           <!-- <button class="course-subject-btn">查看更多</button>-->
          </div>
        </div>
        <div @click="recording_remind()" style="width:350px; cursor: pointer;" >
          <div style="width:350px; height:202px;">
            <div style="width:350px; height:202px; clear: both;overflow: hidden; zoom: 1;">
              <img class="sub-img" src="../../assets/img/course-img9.png"  width="350" height="202">
            </div>
          </div>
          <div  style="width:350px; height: 300px;  background: #FFFFFF; text-align: center; box-shadow: 0 4px 9px 0 #E9E9E9;">
            <div style="width: 100%; position: relative; top: -35px; left: 50%; z-index: 34;  margin:0 0 0 -35px;">
              <div style="width:70px; height: 70px; border-radius: 35px;background: #FFFFFF;box-shadow: 0 2px 4px 0 #E9E9E9;display: flex; align-items: center;justify-content: center;">
                <img src="../../assets/img/icon-line.png" alt="">
              </div>
            </div>
            <h4 class="course-tit" style="margin: -10px 0 25px; color: #000;">机器学习-根据自然语言分析预测票房走势</h4>
            <p class="course-dec" style="width: 278px; text-align: center; margin: 24px auto 0;">
              机器学习标志着计算机科学、数据分析、软件工程和人工智能领域内的重大技术突破。AlphaGo 战胜人类围棋冠军、人脸识别、大数据挖掘，都和机器学习密切相关。
            </p>
            <span class="course-lever" style="display: block; margin-top: 10px; height: 48px; line-height: 48px;">难度：中级</span>
           <!-- <button class="course-subject-btn">查看更多</button>-->
          </div>
        </div>
      </div>
      <!--初级好课 迅速Get新技能-->
      <div class="course-model" style="padding-bottom: 144px;">
        <div class="model-wrap" style="width: 1150px; margin:0 auto;">
          <h3 class="course-model-tit">初级好课 迅速Get新技能</h3>
          <p class="course-model-dec">零基础开始，掌握进入数据分析、人工智能领域必备的专业技能</p>
          <em style="width: 77px; border-top: 1px solid #7ED321; margin: 31px auto 78px; "></em>
          <div style="width: 100%; display: flex; justify-content: space-between;">
            <div style="width:350px; cursor: pointer;" v-link="{name:'python-course-detail',params:{id:5}}">
              <div style="width:350px; height:238px;">
                <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                  <img src="../../assets/img/course-img10.png"  width="350" height="238">
                </div>
              </div>
              <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
                <div style="width: 281px; text-align: left; margin: 0 auto;">
                  <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">Python开发21天入门必备</h4>
                  <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                    Python已经成为目前最流行的编程语言，人工智能、机器学习、云计算、大数据开发、爬虫、WEB开发、金融量化、自动化运维、测试、游戏开发等都是Python极为擅长的领域，掌握Python语言已成为技术人员的必备能力
                  </p>
                  <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
                </div>
              </div>
            </div>
            <div style="width:350px; cursor: pointer;" v-link="{name:'web-course-detail',params:{id:8}}">
              <div style="width:350px; height:238px;">
                <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                  <img src="../../assets/img/course-img11.png"  width="350" height="238">
                </div>
              </div>
              <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
                <div style="width: 281px; text-align: left; margin: 0 auto;">
                  <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">WEB开发入门</h4>
                  <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                    学习网页开发的基本原理和应用知识，为开发自己的WEB程序打下基础！
                  </p>
                  <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
                </div>
              </div>
            </div>
            <div style="width:350px; cursor: pointer;" v-link="{name:'computer-course-detail',params:{id:1}}">
              <div style="width:350px; height:238px;">
                <div style="width:350px; height:238px; clear: both;overflow: hidden; zoom: 1;">
                  <img src="../../assets/img/course-img12.png"  width="350" height="238">
                </div>
              </div>
              <div style="width:350px; height: 284px;  background: #FFFFFF; box-shadow: 0 4px 2px 0 #E9E9E9;">
                <div style="width: 281px; text-align: left; margin: 0 auto;">
                  <h4 class="course-tit" style="margin: 30px 0 0; color: #000;">计算机硬件与操作系统原理入门</h4>
                  <p class="course-dec" style="margin: 15px auto 0; text-align: left;">
                    对于非计算机专业从业者且想进入IT技术领域的初学者，了解计算机硬件之间的关系，操作系统的基本原理，软件与硬件之间如何交互等，都是必须要掌握的基础知识。
                  </p>
                  <span class="course-lever" style="display: block; margin-top: 11px;">难度：初级</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../assets/js/jquery.lazyload.min'
  import courseScroll from 'src/components/common/course-scroll.vue'

  export default {
    data() {
      return {

      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
    },
    components: {
      courseScroll
    },
    methods: {
      load: function() {

      },
      change: function(index,newhref) {

      },
      recording_remind:function () {
        toastr.clear()
        toastr.info('《机器学习-根据自然语言分析预测票房走势》正在紧急录制中')

      }
    }
  }
</script>
<style scoped>
  .course-banner-top {
    margin-top: 207px;
  }
  .course-banner{
    width: 100%;
    height: 611px;
    overflow: hidden;
    text-align: center;
    background: #F9F9F9;
    background: url("../../assets/img/course-banner.png") no-repeat;
    background-size: 100% 100%;
  }
  .course-banner-join {
    display: flex; flex-direction: column; align-items: center;
    margin-top: -310px;
  }
  .course-banner-img1 {
    position: relative; width: 274px; height: 411px; left:-30px; top:-67px; z-index: 12;
  }
  .course-banner-img2 {
    position: relative; width: 334px; height: 458px; top: -65px; left: 715px; z-index: 13;
  }
  .course-banner-img3 {
    position: relative; width: 27px; height: 80px; top: -60px; left: 250px;
  }
  .course-banner-img4 {
    position: relative; width: 27px; height: 80px; top: -60px; left: 280px;
  }
  .course-banner-img5 {
    position: relative; width: 184px; height: 460px; top: -130px; left:-44px; z-index: 15;
  }
  .course-banner-img6 {
    position: relative; width: 95px; height: 277px; top: -60px; left: -140px; z-index: 16;
  }
  .course-banner-img7 {
    position: relative; width: 95px; height: 277px; top: -42px; left: -175px; z-index: 16;
  }
  .course-banner-img8 {
    position: relative; width: 80px; height: 263px; top: -212px; left: 473px; z-index: 16;
  }
  .course-banner-img9 {
    position: relative; width: 230px; height: 343px; top: -105px; left: 486px; z-index: 16;
  }
  .course-banner-img-wrap {
    width: 1176px; margin: 0 auto; display: flex;
  }
  /*.course-banner-text {
    width:1176px;
    margin: 0 auto;
    text-align: center;
  }*/
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
    .course-banner{
      height: 982px;
    }
    .course-banner-top {
      margin-top: 357px;
    }
    .course-banner-join {
      margin-top: -160px;
    }
    .course-banner-img1 {
      position: relative; width: 534px; height: 411px; top:-132px; z-index: 12;
    }
    .course-banner-img2 {
      position: relative; width: 534px; height: 458px; top: -105px; left: 880px; z-index: 13;
    }
    .course-banner-img3 {
      position: relative; width: 40px; height: 80px; top: -50px; left: 150px;
    }
    .course-banner-img4 {
      position: relative; width: 40px; height: 80px; top: -50px; left: 180px;
    }
    .course-banner-img5 {
      position: relative; width: 394px; height: 460px; top: -130px; left:-300px; z-index: 15;
    }
    .course-banner-img6 {
      position: relative; width: 208px; height: 277px; top: -10px; left: -460px; z-index: 16;
    }
    .course-banner-img7 {
      position: relative; width: 208px; height: 277px; top: 10px; left: -520px; z-index: 16;
    }
    .course-banner-img8 {
      position: relative; width: 218px; height: 363px; top: -220px; left: 140px; z-index: 16;
    }
    .course-banner-img9 {
      position: relative; width: 481px; height: 343px; top: -50px; left: 180px; z-index: 16;
    }
    .course-banner-img-wrap {
      width: 1176px; margin: 0 auto; display: flex;
    }
  }
  .primary-tip {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #7ED321;
    letter-spacing: 0.27px;
    margin-top: 18px;
    display: block;
  }
  .course-subject-btn {
    width: 130px;
    height: 40px;
    background: #7ED321;
    border: none;
    outline: none;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.27px;
    margin-top: 25px;
  }
  .recommend-more {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #7ED321;
    letter-spacing: 0.27px;
  }
  .course-lever {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #9B9B9B;
    letter-spacing: 0.27px;
  }
  .course-dec {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #4A4A4A;
    letter-spacing: 0.27px;
    line-height: 25px;
    text-align: center;
  }
  .course-tit {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
    margin: 30px auto 16px;
  }
  em {
    display: block;
  }
  .course-model-dec {
    font-family: PingFangSC-Regular;
    font-size: 14px;
    color: #9A9A9A;
    letter-spacing: 0.03px;
    margin: 20px auto 19px;
  }
  .course-model-tit {
    font-family: PingFangSC-Regular;
    font-size: 24px;
    color: #333333;
    letter-spacing: 0.54px;
    line-height: 42px;
    padding-top: 78px;
    margin: 0;
  }
  .course-model {
    width: 100%;
    background: #fff;
    text-align: center;
  }
</style>
