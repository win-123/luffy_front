<template>
<main class="older-evaluation-wrap">
  <div class="older-evaluation-header">
    <h3 class="older-evaluation-tit">评价订单</h3>
    <span class="older-num">订单号：<span class="older-number">{{order_number}}</span></span>
    <span class="older-time older-num">{{older_date}}</span>
  </div>
  <ul class="older-evaluation-main">
    <li v-for="(item,course) in comment_course" id="{{course.enroll_id}}" class="older-evaluation-detail courseItem-{{item}}">
      <div class="older-course-ceil">

        <img class="older-course-cover" :src="course.course_img" width="170" height="115" alt="">
        <h3 class="older-course-tit">{{course.course_name}}</h3>

      </div>
      <ul class="user-evaluation-wrap BOX " >
        <li class="evaluation-list star" style="list-style: none; display: flex; align-items: center;">
          <span class="evaluation-label">内容实用</span>
          <ul @click="check_input('about_course',item)" class="evaluation-cont star_UL" sid="0"  style=" display: flex;">
            <li style="list-style: none;"><a href="javascript:;">1</a></li>
            <li style="list-style: none;"><a href="javascript:;">2</a></li>
            <li style="list-style: none;"><a href="javascript:;">3</a></li>
            <li style="list-style: none;"><a href="javascript:;">4</a></li>
            <li style="list-style: none;"><a href="javascript:;">5</a></li>
          </ul>
          <span  class="star_result_span content-fen">
			      <span class="fenshu"></span>&nbsp;&nbsp;<a v-show="true"></a><i  class="about_course-tip"></i>
		      </span>
        </li>
        <li class="evaluation-list star" style="list-style: none; margin-top: 20px; display: flex; align-items: center;">
          <span class="evaluation-label">讲解清晰</span>
          <ul @click="check_input('about_teacher',item)" class="evaluation-cont star_UL" sid="0" style=" display: flex;">
            <li style="list-style: none;"><a href="javascript:;">1</a></li>
            <li style="list-style: none;"><a href="javascript:;">2</a></li>
            <li style="list-style: none;"><a href="javascript:;">3</a></li>
            <li style="list-style: none;"><a href="javascript:;">4</a></li>
            <li style="list-style: none;"><a href="javascript:;">5</a></li>
          </ul>
          <span  class="star_result_span speak-fen">
			      <span class="fenshu"></span>&nbsp;&nbsp;<a v-show="true"></a><i  class="about_teacher-tip"></i>
		      </span>
        </li>
        <li class="evaluation-list star" style="list-style: none; margin-top: 20px; display: flex; align-items: center; margin-bottom: 35px;">
          <span class="evaluation-label">通俗易通</span>
          <ul @click="check_input('about_video',item)" class="evaluation-cont star_UL" sid="0" style=" display: flex;">
            <li style="list-style: none;"><a href="javascript:;">1</a></li>
            <li style="list-style: none;"><a href="javascript:;">2</a></li>
            <li style="list-style: none;"><a href="javascript:;">3</a></li>
            <li style="list-style: none;"><a href="javascript:;">4</a></li>
            <li style="list-style: none;"><a href="javascript:;">5</a></li>
          </ul>
          <span  class="star_result_span understand-fen">
			      <span class="fenshu"></span>&nbsp;&nbsp;<a v-show="true"></a><i  class="about_video-tip"></i>
		      </span>
          <!--<span class=" error-tip  comment_score">111</span>-->
        </li>

        <li class="evaluation-list   tags">
          <span class="evaluation-label">买家印象</span>
          <ul @click="check_input('tags',item)" :class="['evaluation-cont','tags-box','buyer-impression',{'impression-tags':select_tags}]">
            <li v-for="(index,tag) in marks" @click="selectTag(item,index)" id="{{tag.id}}" :class="['buyer-mark',{'pro-mark-active':this.collect_tags.indexOf(this.marks[$index].id)!=-1}]">{{tag.name}}</li>
          </ul>
          <span id="tags-tip" class=" error-tip tags-tip"></span>

        </li>

        <li class="evaluation-list">
          <span class="evaluation-label">买家评语</span>

          <div @click="check_input('review',item)" contenteditable="true" @focus="falsePlaceholder()" @blur="falsePlaceholder()"  tabindex="1" :class="['evaluation-cont','review-box','edit-evaluation' ,'contenteditable-input',{'comments-input':review}]" placeholder="课程是否给力，快分享你的心情吧"></div>
          <span class=" error-tip review-tip"></span>

        </li>
        <li v-show="edit_placeholder" @click="falsePlaceholder()" style="list-style: none; position: relative; top: -179px; left: 165px;">
         <!-- 课程是否给力，快分享你的心情吧-->
        </li>
        <li class="font-num-limit">10/1024字</li>
      </ul>

    </li>
  </ul>
  <div style="margin-top: 100px; display: flex; justify-content: center; align-items: center;">
    <button class="older-evaluation-submit-btn" @click="postComment()">提交</button>
    <!--<div v-show="!selected" class="anonymous-select anonymous-select-mar" @click="select_anonymous()"></div>-->
    <!--<img v-show="selected" @click="select_anonymous()" class="anonymous-select-mar" src="../../assets/img/no-name-submit.png" width="16" height="16" alt="">-->
    <!--<span class="anonymous-text">匿名评价</span>-->
  </div>
</main>
</template>
<script>
  import Vue from 'vue';
  import lazyload from '../../assets/js/jquery.lazyload.min';


  export default {
    data() {
      return {
        edit_placeholder: true,
        about_teacher:false,
        about_course:false,
        about_video:false,
        review:false,
        select_tags:false,
        selected: false,
        comment_course: JSON.parse(Cookies.get('comment_course')),
        older_date: Cookies.get('older_date'),
        order_type: Cookies.get('order_type'),
        order_number: Cookies.get('order_number'),
        marks:[],
        collect_tags: [],
        tags: [],
        data:{
        }
      }
    },
    ready: function(){
      /*scoreFun($("#speak_start"));
      scoreFun($("#understand_start"));
      scoreFun($("#content_start"));*/
      $(function(){
        var aMsg = [
          "很不满意|差得太离谱，",
          "不满意|效果比较差，远远低于期望值!",
          "一般|效果一般,希望继续努力改进!",
          "满意|效果不错，还是挺满意的!",
          "非常满意|效果非常好，非常满意!"
        ];

        var arrStars = $('.BOX > .star');//  几组星星
        console.log(arrStars.length);

        for(var k = 0; k < arrStars.length; k++){
          arrStars[k].className = 'star0'+k;
          var star_arrLi = $('.star0'+[k] +'> .star_UL > li');//  几个星星
          console.log(star_arrLi);
          var star_strong = $('.star0'+[k] +'> .star_result_span > span');//星星后面的分数
          var star_a = $('.star0'+[k] +' > .star_result_span a');//星星后面的满意的程度

          fun(star_arrLi, star_strong ,star_a);
        }

        function fun(arrLi,strong ,strong_a ){
          for (var i =0; i<arrLi.length; i++) {
            arrLi[i].index = i+1;
            arrLi[i].onmouseover = function(){
              //显现值几个星星
              ShowTars(this.index);
              strong.text(this.index + '分');// 星星后面的分数
              strong_a.text(aMsg[this.index - 1].match(/\|(.+)/)[1]);//星星后面的满意的程度
            };

            //鼠标离开后恢复到上次显现的几个星星
            arrLi[i].onmouseout = function() {
              var sidNum = $(this).parents('ul').attr('sid');

              if(sidNum == 0){
                strong.text("");// 星星后面的分数
                strong_a.text("");//星星后面的满意的程度
              }else{
                strong.text(sidNum + '分');// 星星后面的分数
                strong_a.text(aMsg[sidNum - 1].match(/\|(.+)/)[1]);//星星后面的满意的程度
              }
              ShowTars(sidNum);// 显现值几个星星
            };

            //点击后进行评分处理
            arrLi[i].onclick = function() {
              strong.text(this.index + '分');// 星星后面的分数
              strong_a.text(aMsg[this.index - 1].match(/\|(.+)/)[1]);//星星后面的满意的程度
              $(this).parents('ul').attr('sid',this.index);
            };
          }

          // 显现值几个星星
          function ShowTars(num) {
            for(var i = 0; i < arrLi.length; i++)
              arrLi[i].className = i < num ? "on" : "";

          };
        };
      });

      this.load();
    },
    components: {
    },
    methods: {
      load: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(Vue.http.options.root+'/api/v1/order/review/tags/').then(function(response) {
          if(response.data.error_no==0) {

            this.marks=response.data.data.tags;

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else {
            console.log(response.data.error_msg)
          }

        })
          .catch(function(response) {
            console.log('订单评价标签请求失败')
          })
      },
      select_anonymous: function () {
          if(!this.selected) {
            this.selected=true;
          }else {
            this.selected=false;
          }

      },
      selectTag: function (item,$index) {
        this.select_tags=false;
        if(this.collect_tags.length<=0){

          this.collect_tags.push(this.marks[$index].id);
        }else {
          if(this.collect_tags.indexOf(this.marks[$index].id)!=-1) {//存在
            this.collect_tags.splice(this.collect_tags.indexOf(this.marks[$index].id),1);
          }else{
            this.collect_tags.push(this.marks[$index].id);
          }
        }
        this.tags[item]=this.collect_tags;
      },
      postComment:function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var courseList=[];
          for(var i=0; i<this.comment_course.length; i++){
            var item={
              enrolled_course: this.comment_course[i].enroll_id,
              about_teacher: parseFloat($('.speak-fen:eq('+i+')').find('.fenshu').text()),
              about_course: parseFloat($('.content-fen:eq('+i+')').find('.fenshu').text()),
              about_video: parseFloat($('.understand-fen:eq('+i+')').find('.fenshu').text()),
              tags:this.tags[i],
              review: $('.edit-evaluation:eq('+i+')').text()


            };
//            this.check_data(item);
            courseList.push(item);
          }
        var params={
          order_number: this.order_number,
          order_type: parseInt(this.order_type),
          appraise_array: courseList
        };

        this.$http.post(Vue.http.options.root+'/api/v1/order/product/appraise/',JSON.stringify(params)).then(function(response) {
          if(response.data.error_no==0) {
            toastr.clear()
            toastr.success('评价成功');
            this.$route.router.go({name: 'mine-older'});

          }else if(response.data.error_no==2){
            this.$store.state.login_state=false;
//            this.$route.router.go({name: 'home'});
            this.$store.state.login_ing=true;

          }else if(response.data.error_no==1) {
            toastr.clear()
            toastr.info('按照标红提示，注意填写哦');
            var error_msg=response.data.error_msg;
            for (var i=0; i<this.comment_course.length; i++ ){
              for (var err in error_msg[i] ){
                if(error_msg[i][err][0]){
                  $('.courseItem-'+i+' '+'.'+err+'-tip').text(error_msg[i][err][0])
                  $('.courseItem-'+i+' '+'.'+err+'-box').css('border','1px solid  #FD7B4D');
                }
              }
            }
          }else if (response.data.error_no==-1){
            if (response.data.userinfo){
              toastr.info(response.data.error_msg);
            }

          }

        })
          .catch(function(response) {
            console.log('订单评价接口请求失败')
          })
      },
      check_data:function (item) {
        if(!item.about_course) {
          this.about_course=true

        }
        if(!item.about_teacher) {
          this.about_teacher=true

        }
        if(!item.about_video) {
          this.about_video=true;

        }

        if (!item.tags){
          toastr.clear()
          toastr.info('您还没选择买家印象哦');
          this.select_tags=true;

          return
        }
        if (item.review.length<10 || item.review.length>500) {
          toastr.clear()
          toastr.info('买家评语最少10个字，最多500个字哦');
          this.review=true;
          return
        }
      },
      falsePlaceholder: function () {
        this.review=false;

        if($('.edit-evaluation').text()!=''){
          this.edit_placeholder=false;
        }else {
          this.edit_placeholder=true;
        }

      },
      quit_about_course:function () {
        if(this.about_course){
          this.about_course=false
        }
      },
      quit_about_teacher:function () {
        if(this.about_teacher){
          this.about_teacher=false
        }
      },
      quit_about_video:function () {
        if(this.about_video){
          this.about_video=false
        }
      },
      review_input:function () {
        console.log('dianji')
        if(this.review){
          this.review=false
        }
        console.log( this.review)
      },
      check_input:function (ele,i) {
        $('.courseItem-'+i+' '+'.'+ele+'-tip').text('')
        $('.courseItem-'+i+' '+'.'+ele+'-box').css('border','');
//        $('.courseItem-'+i+' '+'.'+ele+'-box').css('border','1px solid  #E4E7ED');
      },
    }



  }
</script>
<style scoped>
  /*评分*/
  .clearfix::after{
    display:block;
    content:'';
    height:0;
    overflow:hidden;
    clear:both;
  }
  .star_UL li {
    width: 16px;
    cursor: pointer;
    text-indent: -9999px;
    background: url("../../assets/img/stark.png") no-repeat 0 5px;
  }
  .star_UL li.on {
    background: url("../../assets/img/stars.png") no-repeat 0 5px;
  }
  .star_result_span {
    font-size: 14px;
    color: #F5A623;
    display: inline-block;
    margin-left: 45px;
  }
  .block{
    display: flex;
    align-items: center;
  }
  .block p,.block .attitude{
    padding-left:20px;
    display:inline-block;
    margin-bottom: 0;
    font-size: 14px;
    color: #F5A623;
  }
  .block p span{
    font-size: 14px;
    color: #F5A623;
  }
  .star_score {
    background: url("../../assets/img/stark.png");
    width: 80px;
    height: 10px;
    display: flex;
  }

  .star_score a{
    height: 10px;
    display: block;
  }

  .star_score a:hover{
    background:url("../../assets/img/stars.png");
  }

  .star_score a.clibg{
    background:url("../../assets/img/stars.png");
  }
  #tags-tip{
    font-size: 16px;
    color: red;
    margin-top: -50px;
    position: absolute;
    left: 625px;

  }
  .review-tip {
    font-size: 16px;
    color: red;
    margin-top: 105px;
    position: absolute;
    left: 625px;
  }
  .comment_score{
    margin:0 auto;
    position:absolute;
    left: 530px;
    /*left:0;*/
    top:405px;
    /*right:0;*/
    /*bottom:0*/
  }
  .older-evaluation-wrap {
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0 140px;
  }
  .older-evaluation-header {
    width: 100%;
    height: 80px;
    background: #F7F7F7;
    display: flex;
    align-items: center;
  }
  .older-evaluation-tit {
    font-size: 18px;
    color: #666666;
    margin: 0 0 0 58px;
  }
  .older-num {
    font-size: 14px;
    color: #666666;
    display: inline-block;
    margin-left: 40px;
  }
  .older-num>.older-number {
    color: #333333;
  }
  .older-evaluation-main {
    width: 100%;
    margin: 50px 0 0;
    padding: 0;
  }
  .older-evaluation-detail {
    width: 100%;
    height: 540px;
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    border-radius: 2px;
    list-style: none;
    display: flex;
  }
  .older-course-ceil {
    width: 368px;
    text-align: center;
    height: 100%;
    border-right: 1px solid #E9E9E9;
  }
  .older-course-cover {
    margin-top: 120px;
  }
  .older-course-tit {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.36px;
    margin: 35px 0 0;
  }
  .user-evaluation-wrap {
    width: 848px;
    padding: 30px 0 0;
  }
  .evaluation-list {
    display: flex;
    list-style: none;
    align-items: center;
    margin-bottom: 20px;
  }
  .evaluation-label {
    font-size: 14px;
    color: #4A4A4A;
    width: 110px;
    text-align: right;
    display: inline-block;
  }
  .evaluation-cont {
    margin-left: 35px;
  }
  .buyer-impression {
    width: 690px;
    display: flex;
    flex-wrap: wrap;
  }
  .buyer-mark {
    list-style: none;
    width: 146px;
    height: 42px;
    border: 1px solid #E9E9E9;
    border-radius: 2px;
    font-size: 14px;
    color: #9B9B9B;
    text-align: center;
    line-height: 40px;
    margin: 0 26px 26px 0;
    cursor: pointer;
  }
  .buyer-mark:nth-child(4),
  .buyer-mark:nth-child(8) {
    margin-right: 0;
  }
  .edit-evaluation {
    width: 660px;
    height: 173px;
    border: 1px solid #D4D4D4;
    border-radius: 3px;
    padding: 17px 27px;
    font-size: 14px;
    color: #9B9B9B;
  }
  .font-num-limit {
    display: block;
    font-size: 14px;
    color: #9B9B9B;
    position: relative;
    left: 728px;
    top: -50px;
  }
  .older-evaluation-submit-btn {
    background: #7ED321;
    border-radius: 2px;
    width: 160px;
    height: 50px;
    border: none;
    outline: none;
    font-size: 20px;
    color: #FFFFFF;
  }
  .anonymous-select {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #ccc;
  }
  .anonymous-select-mar {
    margin-left: 51px;
  }
  .anonymous-text {
    font-size: 14px;
    color: #666666;
    margin-left: 8px;
    display: inline-block;
  }
  .pro-mark-active {
    border: 1px solid #7ED321;
    border-radius: 2px;
    font-size: 14px;
    color: #7ED321;
  }
  .impression-tags{
    border: 1px solid #FD7B4D;
  }
  .comments-input{
    border: 1px solid #FD7B4D;

  }
</style>
