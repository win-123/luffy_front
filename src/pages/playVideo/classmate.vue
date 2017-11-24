<template>
  <header class="playing-header">
    <div class="play-header-main">
      <div class="play-header-left">
        <img @click="goBack()" style="cursor: pointer;" src="../../assets/img/pre.png" width="16" height="16" alt="">
        <h3 class="play-video-title play-com-font">{{module_name}}<small class="playing-sec-title">{{section_name}}</small></h3>
      </div>
      <!-- <ul class="play-header-right">
        <li class="play-com-font" v-link="{name:'study'}" style="list-style: none; cursor: pointer;">
          <img src="../../assets/img/study-logo.png" width="22" height="22" alt="">
        </li>
        <li class="play-com-font" style="display: flex; list-style: none; margin:0 30px; cursor: pointer;">
          <img src="../../assets/img/message-logo.png" width="22" height="22" alt="">
          <span v-show="this.$store.state.noticeNumber>0" class="info-num-tip">{{$store.state.noticeNumber}}</span>
        </li>
        <li style="list-style: none; cursor: pointer;">
          <div v-link="{name:'mine-profile'}" style="width: 26px; height: 26px; border-radius: 26px; overflow: hidden;">
            <img src="../../assets/img/userImg-logo.png" width="26" height="26" alt="">
          </div>
        </li>
      </ul> -->
    </div>
    <main style="margin: 0; padding: 0 0 80px 0;">
      <div style="width: 100%; height: 878px;background: #292929;">
        <div style="width: 1200px; height: 676px; margin: 0 auto; background: #ccc; overflow: hidden;">
          <!--文档-->
          <div v-if="sectionType!='video'" style="width: 1200px; height: 676px; margin: 0 auto;">
            <iframe :src="'http://luffy.oldboyedu.com/plugins/pdfjs/web/viewer.html?file=http://luffy.oldboyedu.com/'+vid" width="100%" height="676"></iframe>
          </div>
          <!--视频播放器-->
          <div  v-show="sectionType=='video'" id="bulletsUL" >
            <img v-if="loading_img" class="playing_img" src="../../assets/img/playing_img.png" alt="">

            <object id="{{'cc_'+vid}}" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="1200" height="676">
              <param name="movie" value="{{'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_false_94B724260B49E936_1/player.swf'}}"/>
              <param name="allowFullScreen" value="true" />
              <param name="allowScriptAccess" value="always" />
              <param value="transparent" name="wmode" />
              <div style="width: 1200px ; height: 676px" >
              <embed v-show="reload_play" :src="'https://p.bokecc.com/flash/single/D90C6BABEBFD8C03_'+vid+'_true_94B724260B49E936_1/player.swf'" width="1200" height="676" name="{{'cc_'+vid}}" allowFullScreen="true" wmode="transparent" allowScriptAccess="always" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash"/>
              </div>
            </object>
          </div>
          <!--展开目录-->
          <img v-show="!catalog_isopen" @click="show_side()" class="showing" style="position: relative; top: -338px; left:1186px; margin-top: -46px; z-index: 14;" src="../../assets/img/side_btn_close.png" width="15" height="92" alt="">
          <!--关闭目录-->
          <img  v-show="catalog_isopen" @click="close_side()" class="" style="position: relative; top: -338px; left:857px; margin-top: -46px; z-index: 14;" src="../../assets/img/side_btn.png" width="15" height="92" alt="">
          <!--课时目录-->
          <div :class="['side_bar',{'side_bar_act':sectionType=='video'}]">
            <!--<img  @click="close_side()" style="position: relative; top: 318px; margin-top: -46px; z-index: 14;" src="../../assets/img/side_btn.png" width="15" height="92" alt="">-->
            <div class="column" style="padding: 77px 30px 25px; margin-top: -47px;">
              <h3 style="font-size: 16px; color: #B5B9BC; margin: 0;">{{videoList.name}}</h3>
              <ul v-if="videoList.coursechapters.length>0" style="padding: 0;">
                <li v-for="(index,section_list) in videoList.coursechapters" id="{{section_list.id}}" style="list-style: none; padding-top: 30px;">
                  <h4 style="font-size: 14px;color: #B5B9BC; width: 280px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{section_list.name}}</h4>
                  <ul v-if="section_list.coursesections.length>0" style="padding: 0 0 0 10px;">
                    <!--<li @click="playing(index,item)" v-for="(item,course_item) in section_list.coursesections" id="{{course_item.id}}" style="cursor: pointer; display: flex; height: 37px; align-items: center;">-->
                    <li @click="playing(course_item.id)" v-for="(item,course_item) in section_list.coursesections" id="{{course_item.id}}" style="cursor: pointer; display: flex; height: 37px; align-items: center;">
                      <div style="display: flex; height: 37px; align-items: center;">
                        <img v-if="course_item.section_type=='video'" src="../../assets/img/video_menu_icon.png" width="5" height="7" alt="">
                        <img v-if="course_item.section_type=='document'" src="../../assets/img/document.png"  alt="">
                        <img v-if="course_item.section_type=='practise'" src="../../assets/img/practise.png"  alt="">
                        <h5 style="font-size: 13px;color: #787D81; margin:0 8px 0 13px; width: 150px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{course_item.name}}</h5>

                        <span v-show="course_item.duration!=null" style="font-size: 12px;color: #787D81;">({{course_item.duration}})</span>
                        <span v-show="course_item.free_trail" style="font-size: 10px; color: #F5441C; display: inline-block; margin-left: 8px;">试看</span>
                      </div>
                      <div style="display: flex; margin-left: auto; align-items: center;">
                        <span v-show="course_item.status"  style="font-size: 12px; display: inline-block; margin-right: 12px; color: #84CC39;">正在学</span>
                        <div v-if="course_item.progress=='未看'" style="border: 1px solid #787D81; width: 10px; height: 10px; border-radius: 8px;"></div>
                        <div v-if="course_item.progress=='在看'"><img  src="../../assets/img/video_playing.png" alt=""></div>
                        <div v-if="course_item.progress=='已看'"><img  src="../../assets/img/video_played.png" alt=""></div>
                        <div v-if="course_item.progress=='看完'"><img  src="../../assets/img/video_play_over.png" alt=""></div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div> -->
          <!-- end-->

          </div>
          <!--加载过程-->

        </div>
        <div v-if="sectionType=='video'">
          <!--loading_status-->
          <div class="loading-container" v-show="loading_status">
            <loading :title=""></loading>
          </div>
        </div>
      <div style="width: 1200px; height: 60px; margin: 0 auto; background: #1F1F1F;">
        <!--<a style="color: #fff;" @click="this.ccplayer.setBulletCurtainVisible(0)">隐藏</a>
        <a style="color: #fff;" @click="this.ccplayer.setBulletCurtainVisible(1)">显示</a>
        <a style="color: #fff;" @click="this.ccplayer.setBulletCurtainAlpha(0.5)">半透明</a>
        <a style="color: #fff;" @click="this.ccplayer.setBulletCurtainAlpha(1)">不透明</a>-->
      </div>
      </div>
      <div style="width: 1200px; padding-top: 30px; margin: 0 auto; display: flex;">
        <div class="cont-main">
          <header class="play-header">
            <span :class="['play-header-title',{'play-header-title-active':this.comment_show}]" @click="this.comment_show=true;">评论</span>
            <span :class="['play-header-title',{'play-header-title-active':!this.comment_show}]" style="margin-left: 30px;" @click="this.comment_show=false;">同学社区</span>
          </header>
          <!--评论-->
          <div v-show="comment_show" style="width: 814px;">

            <div  @click="check_input('content')" contenteditable="true" style="padding: 10px;" class="play-edit-question content-box  contenteditable-input comments-input-content" placeholder="写下您的精彩评论"></div>
            <div class="play-ques-btn-wrap">
              <button class="play-ques-btn" @click="asking_comment()">发表评论</button>
            </div>
            <ul class="play-ques-list">
              <!--评论模块-评论-列表-->
              <li v-for="(q_index,comments) in commentsList" @mouseover="onEnter($index)" @mouseout="onLeave()"  id="{{comments.id}}" class="play-ques-item comm-list" style=" padding-top: 49px;">
                <div class="play-ques-item-wrap">
                  <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                    <img :src="comments.userinfo.head_img" width="100%" alt="">
                  </div>
                  <div style="margin-left: 15px; width: 755px;">
                    <div style="display: flex;">
                      <span class="play-ques-user-name">{{comments.userinfo.username}}</span>
                      <span class="play-ques-date">{{comments.date}}</span>
                      <div style="">
                        <span v-if="$store.state.login_state">
                          <span v-if="comments.userinfo.username==$store.state.username">
                            <span v-if="data.comment_img==q_index" @click="delete_question_warn($index)" style="cursor: pointer; color: #87909B; font-size: 14px; position: relative; left: 550px;">X</span>
                          </span>
                        </span>
                        <!--删除评论-->
                        <div class="delete-com-wrap" style="margin-left: 160px;">
                          <div class="delete-qestion-icon-bkg">
                            <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该评论和所有回复吗？</span>
                          </div>
                          <div class="delete-btn-wrap">
                            <button class="delete-cancel" @click="delete_cancel(q_index)">取消</button>
                            <button class="delete-sure" @click="delete_common(q_index,null)">确定</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="play-ques-detail">
                      <span class="play-ques-cont">
                        {{comments.content}}
                      </span>
                    </div>
                    <div style="display: flex; margin-top: 20px;">
                      <div style="height: 25px;">
                        <span @click="com_reply(q_index)" style="cursor: pointer;" class="play-ques-state">回复&nbsp;·&nbsp;</span>
                        <a class=" collapse-lable" role="button" data-toggle="collapse" :href="'#collapseExample'+comments.id">
                          <span class="play-ques-state">{{comments.reply_nums}}条回复</span>
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div style="display: flex; align-items: center; margin-left: auto;">
                        <div @click="comment_like(q_index,null)" style="cursor: pointer; display: flex; align-items: center; font-size: 12px; color: #999999;">
                          <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                          <span style="display: inline-block; margin-left: 5px;">{{comments.agree_number}}</span>
                        </div>
                        <div @click="comment_unlike(q_index,null)" style="cursor: pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                          <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                          <span style="display: inline-block; margin-left: 5px;">{{comments.disagree_number}}</span>
                        </div>
                      </div>
                    </div>
                    <div class="reply-input com-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                      <div style="height: 48px; padding: 0 25px;">
                        <input class="reply-input-second" @keyup.enter="reply_common_reply(q_index,null)"  v-model="data.reply_com" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text" placeholder="写下您的回复...">
                      </div>
                      <div style="position: absolute; margin-top: -48px;">
                        <div @click="reply_common_reply(q_index,null)" style="cursor: pointer; position: absolute; margin-left: 653px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--评论模块-回复-列表-->
                <ul v-if="comments.child.length>0" style="padding-left: 67px;">
                  <li class="collapse" id="collapseExample{{comments.id}}">
                  <div v-for="(item,replys) in comments.child" id="{{replys.id}}" class="play-ques-item answer-list">
                    <div class="play-reply" style="display: flex;">
                      <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                        <img :src="replys.userinfo.head_img" width="100%" alt="">
                      </div>
                      <div style="margin-left: 15px; width: 664px;">
                        <span class="play-ques-user-name">{{replys.userinfo.username}}<span v-if="replys.reply_to!=''">&nbsp;&nbsp;<span style="color: #666666;">回复：</span>&nbsp;&nbsp;{{replys.reply_to}}</span></span>
                        <span class="play-ques-date">{{replys.date}}</span>
                        <div class="play-ques-detail">
                          <span class="play-ques-cont" style="text-align: justify;">
                            {{replys.content}}
                          </span>
                        </div>
                        <div style="display: flex; margin-top: 20px; height: 20px;">
                          <div>
                            <span @click="com_reply_com(q_index,item)" style="cursor: pointer;" class="play-ques-state">回复</span>
                            <!--判断已经登陆-->
                            <span v-if="replys.userinfo.username==$store.state.username" >
                            <span @click="delete_answer_warn(q_index,item)" class="play-ques-state" style="margin-left: 5px; cursor: pointer;">删除</span>
                            <!--删除回答-->
                            </span>
                            <div class="delete-co-wrap">
                              <div class="delete-qestion-icon-bkg" style="padding: 20px 0 20px 30px">
                                <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该条回复吗？</span>
                              </div>
                              <div class="delete-btn-wrap">
                                <button class="delete-cancel" @click="delete_cancel(q_index,item)">取消</button>
                                <button class="delete-sure" @click="delete_common(q_index,item)">确定</button>
                              </div>
                            </div>
                          </div>
                          <div style="display: flex; align-items: center; margin-left: auto;">
                            <div @click="comment_like(q_index,item)" style="display: flex; align-items: center; font-size: 12px; color: #999999;">
                              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                              <span style="display: inline-block; margin-left: 5px;">{{replys.agree_number}}</span>
                            </div>
                            <div @click="comment_unlike(q_index,item)" style="cursor: pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                              <span style="display: inline-block; margin-left: 5px;">{{replys.disagree_number}}</span>
                            </div>
                          </div>
                        </div>
                        <div class="reply-input com-reply-com" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                          <div style="height: 48px; padding: 0 25px;">
                            <input class="com-reply-com-input" @keyup.enter="reply_common_reply(q_index,item)" placeholder="写下您的回复..." v-model="data.reply_com" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                          </div>
                          <div style="position: absolute; margin-top: -48px;">
                            <div @click="reply_common_reply(q_index,item)" style="cursor: pointer; position: absolute; margin-left: 562px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!--同学社区-->
          <div v-show="!comment_show" style="width: 814px;">
            <input @click="check_input('name')"  class="play-question-title name-box"  v-model="data.title" type="text" placeholder="请输入问题标题" name="questionTitle">
            <div  @click="check_input('content')" contenteditable="true" style="padding: 10px;" class="play-edit-question content-box contenteditable-input question-input-content" placeholder="请输入您的问题描述"></div>
            <div class="play-ques-btn-wrap">
              <button class="play-ques-btn" @click="asking()">去提问</button>
            </div>
            <ul class="play-ques-list">
              <!--同学社区-问题-列表-->
              <li class="play-ques-item question-list" style=" padding-top: 49px;"  v-for="(q_index,question) in questionsList" @mouseover="onEnter($index)" @mouseout="onLeave()"  id="{{question.id}}">
                <div class="play-ques-item-wrap">
                  <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                    <img :src="question.userinfo.heading" width="38" height="38" alt="">
                  </div>
                  <div style="margin-left: 15px; width: 755px;">
                    <div style="display: flex;">
                      <span class="play-ques-user-name">{{question.userinfo.username}}</span>
                      <span class="play-ques-date">{{question.date}}</span>
                      <div style="">
                        <span v-if="$store.state.login_state">
                          <span v-if="question.userinfo.username==$store.state.username">
                            <span v-if="data.img==q_index" style="cursor: pointer; color: #87909B; font-size: 14px; position: relative; left: 630px;" @click="delete_question_warn($index)">X</span>
                          </span>
                        </span>
                        <!--删除问题-->
                        <div class="delete-video-wrap">
                          <div class="delete-qestion-icon-bkg">
                            <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该问题和相关回复吗？</span>
                          </div>
                          <div class="delete-btn-wrap">
                            <button class="delete-cancel" @click="delete_cancel(q_index)">取消</button>
                            <button class="delete-sure" @click="delete_question(q_index)">确定</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 class="play-ques-tit">{{question.name}}</h3>
                    <div class="play-ques-detail">
                    <span class="play-ques-cont">
                      {{question.content}}
                    </span>
                      <!--<span class="play-look-ques">查看更多</span>-->
                    </div>
                    <div style="display: flex; margin-top: 20px;">
                      <div style="height: 25px;">
                        <span @click="an_reply(q_index)" style="cursor: pointer;" class="play-ques-state">回答&nbsp;·&nbsp;</span>
                        <a class="collapse-lable" role="button" data-toggle="collapse" :href="'#collapseExample'+question.id">
                          <span class="play-ques-state">{{question.answernum}}条回答</span>
                          <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                      </div>
                      <div :class="['same-ask',{'same-ask-active':this.questionsList[q_index].has_click_same}]" @click="agree_ask(q_index)">
                        同问&nbsp;|&nbsp;{{question.enquiries_count}}
                      </div>
                    </div>
                    <div class="reply-input an-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                      <div style="height: 48px; padding: 0 25px;">
                        <input class="reply-input-second" placeholder="写下您的答案..." v-model="data.reply" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                      </div>
                      <div style="position: absolute; margin-top: -48px;">
                        <div @click="an_answer(q_index)" style="cursor: pointer; position: absolute; margin-left: 644px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--同学社区-问题-老师回答-列表-->
                <ul v-if="question.answers.length>0" style="padding-left: 67px;">
                  <li class="collapse" id="collapseExample{{question.id}}">
                  <div v-for="(item,answer) in question.answers" id="{{answer.id}}" class="play-ques-item answer-list">
                    <div class="play-reply" style="display: flex;">
                      <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                        <img :src="answer.userinfo.headimg" width="100%" alt="">
                      </div>
                      <div style="margin-left: 15px; width: 664px;">
                        <span class="play-ques-user-name">{{answer.userinfo.username}}</span>
                        <span class="play-ques-date">{{answer.answer_date}}</span>
                        <div class="play-ques-detail">
                        <span class="play-ques-cont" style="text-align: justify;">
                          {{answer.content}}
                        </span>
                        </div>
                        <div style="display: flex; margin-top: 20px; height: 20px;">
                          <div>
                            <span @click="answer_reply(q_index,item)" style="cursor: pointer;" class="play-ques-state">回复</span>
                            <span @click="delete_answer_warn(q_index,item)" class="play-ques-state" style="margin-left: 5px; cursor: pointer;">删除</span>
                            <!--删除回答-->
                            <div class="delete-answer-wrap">
                              <div class="delete-qestion-icon-bkg">
                                <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除此答案及相关回复吗？</span>
                              </div>
                              <div class="delete-btn-wrap">
                                <button class="delete-cancel" @click="delete_cancel(q_index,item)">取消</button>
                                <button class="delete-sure" @click="delete_answer(q_index,item)">确定</button>
                              </div>
                            </div>
                          </div>
                          <div style="display: flex; align-items: center; margin-left: auto;">
                            <div @click="answer_like(q_index,item)" style="cursor: pointer; display: flex; align-items: center; font-size: 12px; color: #999999;">
                              <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                              <span style="display: inline-block; margin-left: 5px;">{{answer.agree_number}}</span>
                            </div>
                            <div @click="answer_unlike(q_index,item)" style="cursor: pointer; display: flex; align-items: center; margin-left: 30px; font-size: 12px; color: #999999;">
                              <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                              <span style="display: inline-block; margin-left: 5px;">{{answer.disagree_number}}</span>
                            </div>
                          </div>
                        </div>
                        <div class="reply-input answer-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                          <div style="height: 48px; padding: 0 25px;">
                            <input v-model="data.reply" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                          </div>
                          <div style="position: absolute; margin-top: -48px;">
                            <div @click="replying_answer(q_index,item)" style="cursor: pointer; position: absolute; margin-left: 548px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!--同学社区-问题-老师回答-回复-列表-->
                    <ul v-if="answer.answer_comments.length>0" style="padding: 0;">
                      <li v-for="(list,comment) in answer.answer_comments" id="{{comment.id}}" class="play-ques-item play-reply" style="display: flex;">
                        <div style="width: 38px; height: 38px; border-radius: 38px; overflow: hidden;">
                          <img :src="comment.userinfo.headimg" width="100%" alt="">
                        </div>
                        <div style="margin-left: 15px; width: 664px;">
                        <span class="play-ques-cont" style="color:#666;">
                          <span class="play-ques-user-name">{{comment.userinfo.username}}</span>
                            &nbsp;回复&nbsp;
                          <span class="play-ques-user-name">{{comment.userinfo.reply_to}}</span>
                        </span>
                          <span class="play-ques-date">{{comment.date}}</span>
                          <div class="play-ques-detail">
                            <span class="play-ques-cont" style="text-align: justify;">
                              {{comment.comment}}
                            </span>
                          </div>
                          <div style="margin-top: 20px; height: 20px;">
                            <span @click="comment_reply(q_index,item,list)" class="play-ques-state" style="cursor: pointer;">回复</span>
                            <span @click="delete_comment_warn(q_index,item,list)" class="play-ques-state" style="margin-left: 5px; cursor: pointer;">删除</span>
                            <!--删除回复-->
                            <div class="delete-comment-wrap">
                              <div class="delete-qestion-icon-bkg">
                                <span class="delete-text" style="display: inline-block; margin-left: 10px;">你确定删除该条回复吗？</span>
                              </div>
                              <div class="delete-btn-wrap">
                                <button class="delete-cancel" @click="delete_cancel(q_index,item,list)">取消</button>
                                <button class="delete-sure" @click="delete_comment(q_index,item,list)">确定</button>
                              </div>
                            </div>
                          </div>
                          <div class="reply-input comment-reply" style="width: 100%; margin-top: 23px; border: 1px solid #E8E8E8;">
                            <div style="height: 48px; padding: 0 25px;">
                              <input v-model="data.reply" style="outline: none; border: none; width: 100%; height: 100%; overflow-y: scroll; padding: 15px 0; box-sizing: border-box;" type="text">
                            </div>
                            <div style="position: absolute; margin-top: -48px;">
                              <div @click="replying_comment(q_index,item,list)" style="cursor: pointer; position: absolute; margin-left: 548px; text-align: center; line-height: 48px; width: 100px; height: 48px; background: #D8D8D8;font-size: 14px;color: #999999;letter-spacing: 0.22px;">回复</div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                    </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="side-main">
          <div v-if="hot_courses.length>0" class="play-side-course">
            <div class="titWrap">
              <b class="play-side-model-icon"></b>
              <h4 class="model-tit">看了此课程也在看</h4>
            </div>
            <ul class="play-course-list">
              <li v-for="course in hot_courses" style="cursor: pointer" @click="course_link(course.id)" id="{{course.id}}" class="play-course-item">
                <img :src="course.course_img" width="282" height="159" alt="">
                <h5 class="article-tit" style="margin: 29px 0 7px;">{{course.name}}</h5>
                <span class="look-detail" style="cursor: pointer;">查看详情</span>
              </li>
            </ul>
          </div>
          <div v-if="hot_news.articles.length>0" class="play-side-model">
            <div class="titWrap">
              <b class="play-side-model-icon"></b>
              <h4 class="model-tit">热门资讯</h4>
            </div>
            <ul class="play-news-list">
              <li v-for="article in hot_news.articles" id="{{article.article_id}}" v-link="{name: 'news-detail',params:{id:article.article_id}}" class="play-news-item">
                <img :src="article.head_img" width="120" height="72" alt="">
                <div class="side-news-list">
                  <h4 class="side-news-tit">{{article.title}}</h4>
                  <p class="news-dec">{{article.brief}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </header>
</template>
<script>
  import Vue from 'vue';
  import Vuex from 'vuex';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import Loading from '../../base/loading/loading'
  import bus from '../../assets/js/evenBus'


  export default {
    data() {
      return {
        section_id: '',
        playing_section_id: '',
        index_number: '',
        module_name:'',
        reload_play:false,
        section_name: '',
        commentsList: '',
        ccplayer: '',
        started: false,
        pluginReady: false,
        bulletsUL:'',
        bulletIndex: 0,
        bullets: [],
        bulletSelected: NaN,
        questionsList:'',
        videoList: '',
        CourseName: '',
        comment_input:false,
        comm_rep_input:false,
        answer_input:false,
        answer_rep_input:false,
        SectionName: '',
        sectionType: 'video',
        catalog_isopen:false,
        loading_status:true,
        loading_img:true,

        position:false,
        vid:'',
        hot_news: '',
        hot_courses: '',
        community: false,
        comment_show: true,
        community_show: false,
        data:{
          "img": '',
          comment_img:'',
          ask: '',
          title: '',
          content: '',
          reply: '',
          reply_com: ''
        }
      }
    },
    created:function () {
      this.section_id = this.$route.params.id;
    },
    ready: function(){
      this.init_request()
      var that=this
      bus.$on("loginEvent",function(data){
        if (data=that.$route.name){
          that.init_request();
        }
      });


      document.addEventListener('playing_now', function (e) {
//        关闭正在加载动画效果
        that.loading_status=false
        that.loading_img=false

        that.close_side()
//        关闭菜单栏

      }, false);

      //      订阅失败通知
      document.addEventListener('playing_fail', function (e) {
//        关闭正在加载动画效果
        that.loading_status=false
        that.loading_img=false

//        关闭菜单栏

      }, false);




      this.$store.state.study_hide=false;
      this.$store.state.study_show=false;
      this.bulletsUL=$('#bulletsUL');

      var i=1;
      //虚拟数据
      var time = Math.floor(i/10)*2.5 + (i*0.15);
      var text = "弹幕内容";
      var borderColor = i%10==5 ? 0xFF0000 : -1;
      this.bullets.push({time:time,text:text,id:100+"",type:0,size:25,color:0xFFFFFF,borderColor:borderColor});

      //页面展示
      var li = document.createElement("li");
      li.id = "bulletsLI"+i;
      li.style.color = 0;
      li.style.height = 20;
      li.innerHTML = text;
      this.bulletsUL.append(li);

    },
    components: {
      Loading
    },
    methods: {
      init_request:function () {

        this.load_video(Vue.http.options.cz_root+'/api/v1/study/course_catalog/?courseSectionId='+this.section_id);

        this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');

        this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

        this.loadSide(Vue.http.options.root+'/api/v1/hot_articles/');
        this.loadSide(Vue.http.options.root+'/api/v1/hot_courses/');
      },
      load: function(url) {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.questionsList=response.data.data.result;
             /* console.log(Cookies.get('questionId'));*/
              /*// 获取需要滚动的距离
              let total = $('#'+Cookies.get('questionId')).offsetTop;
              // Chrome
              document.body.scrollTop = total;
              // Firefox
              document.documentElement.scrollTop = total;
              // Safari
              window.pageYOffset = total;*/

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

      goBack: function () {
//        window.history.back();
        this.$route.router.go({name: 'study-courses'});

      },
      load_video: function (url) {
        console.log("关闭播放器")
        this.reload_play=false
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.videoList=response.data.data;
              this.sectionType=response.data.data.section_type;
              this.module_name=response.data.data.name;
              this.section_name=response.data.data.section_name;
              this.vid=response.data.data.section_link;
              console.log("开启播放器")
              this.reload_play=true

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
          });

      },
      playing: function (section_id) {

        this.section_id=section_id
        this.loading_img=true

        this.loading_status=true

        this.init_request()


        this.$route.router.go({name: 'classmate-play', params: {id: section_id}});



//        this.vid=this.videoList.coursechapters[index].coursesections[item].section_link;
//        this.module_name=this.videoList.coursechapters[index].name;
//        this.section_name=this.videoList.coursechapters[index].coursesections[item].name;
//        this.sectionType=this.videoList.coursechapters[index].coursesections[item].section_type;
//        this.playing_section_id=this.videoList.coursechapters[index].coursesections[item].id;
//

      },
      load_comment: function(url) {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.commentsList=response.data.data.result;

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
      /*删除一级评论、社区问题提醒*/
      delete_question_warn: function (q_index) {

        $('.delete-video-wrap:eq('+q_index+')').fadeIn();
        $('.delete-com-wrap:eq('+q_index+')').fadeIn();
      },
      /*删除社区答案提醒*/
      delete_answer_warn: function (q_index,item) {
        $('.question-list:eq('+q_index+')').find('.delete-answer-wrap:eq('+item+')').fadeIn();
        $('.comm-list:eq('+q_index+')').find('.delete-co-wrap:eq('+item+')').fadeIn();
      },
      /*删除社区答案回复提醒*/
      delete_comment_warn: function (q_index,item,list) {

        $('.question-list:eq('+q_index+')').find('.delete-answer-wrap:eq('+item+')').parents('.answer-list').find('.delete-comment-wrap:eq('+list+')').fadeIn();

      },
      /*取消删除*/
      delete_cancel: function () {
        $('.delete-video-wrap').fadeOut();
        $('.delete-answer-wrap').fadeOut();
        $('.delete-comment-wrap').fadeOut();
        $('.delete-com-wrap').fadeOut();
        $('.delete-co-wrap').fadeOut();
      },
      /*删除社区问题*/
      delete_question: function (index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.delete(Vue.http.options.xy_root+'/api/v1/section_questions/?question_id='+this.questionsList[index].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('删除问题成功');

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

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
      /*删除社区答案*/
      delete_answer: function (index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.delete(Vue.http.options.xy_root+'/api/v1/section_answer/?answer_id='+this.questionsList[index].answers[item].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('删除答案成功');

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

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
      /*删除社区答案回复*/
      delete_comment: function (index,item,list) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.delete(Vue.http.options.xy_root+'/api/v1/section/question_comment/?answer_comment_id='+this.questionsList[index].answers[item].answer_comments[list].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('删除回复成功');

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

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
      /*同问*/
      agree_ask: function (index) {
        if(this.questionsList[index].has_click_same){
          toastr.clear()
          toastr.info('您已同问过该问题了！');
          return
        }

         Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

         this.$http.put(Vue.http.options.xy_root+'/api/v1/section_questions/?question_id='+this.questionsList[index].id+'&section_id='+this.section_id) /*this.section_id*/
           .then(function(response) {

             if(response.data.error_no==0) {
               toastr.clear()
               toastr.success('同问成功');
               this.questionsList[index].has_click_same=true;
               this.questionsList[index].enquiries_count+=1;


             }else if(response.data.error_no==2) {
               this.$store.state.login_state=false;
//               this.$route.router.go({name: 'home'});
               this.$store.state.login_ing=true;

             }else {
               toastr.clear()
               toastr.error('发布失败了，稍后再试');

               console.log(response.data.error_msg)
             }

           })
           .catch(function(response) {
             console.log('接口请求失败')
           })

      },
      /*发表问题*/
      asking: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var content=$('.question-input-content').text()
        if (content.length==0){
          $('.play-question-title').css('border','1px solid #FD7B4D');
          toastr.clear()
          toastr.info('问题描述不能为空!');
          return
        }else {
          $('.play-question-title').css('border','1px solid #E4E7ED');
        }
        if ($('.question-input-content').text().length==0){
          toastr.clear()
          toastr.info('具体描述内容不能为空哦');
          $('.question-input-content').css('border','1px solid #FD7B4D');
          return
        }else {
          // $('.question-input-content').css('');
        }
        var params={
          name: this.data.title,
          content: $('.question-input-content').text(),
          section_id: this.section_id
        };

        this.$http.post(Vue.http.options.xy_root+'/api/v1/section_questions/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('问题发布成功！');
//              清空原来的值
              this.data.title=''
              $('.question-input-content').text('')

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');


            }else if(response.data.error_no==2) {


              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*对老师答案发表回复显示回复框*/
      an_reply: function (q_index) {
        if(!this.answer_input){
          $('.an-reply:eq('+q_index+')').fadeIn();
        }else {
          $('.reply-input').css('display','none');
        }
        this.answer_input=!this.answer_input
      },
      answer_reply: function (q_index,item) {

        if (!this.answer_rep_input){
          $('.question-list:eq('+q_index+')').find('.answer-reply:eq('+item+')').fadeIn();
        }else {
          $('.reply-input').css('display','none');
        }
        this.answer_rep_input=!this.answer_rep_input

      },
      com_reply: function (q_index) {
//        $('.reply-input').css('display','none');
          if (!this.comment_input){
          $('.com-reply:eq('+q_index+')').fadeIn();
        }else {
            $('.reply-input').css('display','none');
            $('.com-reply:eq('+q_index+')').fadeOut();
          }
        this.comment_input=!this.comment_input
      },
      com_reply_com: function (q_index,item) {
//        $('.reply-input').css('display','none');
        if (!this.comm_rep_input){
            $('.comm-list:eq('+q_index+')').find('.com-reply-com:eq('+item+')').fadeIn();
        }else{
            $('.com-reply-com').css('display','none');

        }
        this.comm_rep_input=!this.comm_rep_input
      },
      /*对回复发表回复显示回复框*/
      comment_reply: function (q_index,item,list) {
        $('.reply-input').css('display','none');
        $('.question-list:eq('+q_index+')').find('.answer-reply:eq('+item+')').parents('.answer-list').find('.comment-reply:eq('+list+')').fadeIn();
      },
      onEnter:function($index) {

        var $this=this;
        setTimeout(function(){
          $this.data.img=$index;
          $this.data.comment_img=$index;
        },10);
      },
      onLeave:function() {
        var $this=this;
        setTimeout(function(){
          $this.data.img=null;
          $this.data.comment_img=null;
        },10)
      },
      /*删除评论或回复*/
      an_answer: function ($index) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if (this.data.reply.length==0){
          toastr.clear()
          toastr.info('答案不能为空哦');
          return
        }

        var params={
          question_id: this.questionsList[$index].id,
          content: this.data.reply,
          section_id: this.section_id
        };

        this.$http.post(Vue.http.options.xy_root+'/api/v1/section_answer/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              this.delete_cancel()
              this.data.reply=''
              toastr.clear()
              toastr.success('回答成功');
              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2) {

              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*对老师答案发表回复*/
      replying_answer: function (index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var params={
          answer_id: this.questionsList[index].answers[item].id,
          comment: this.data.reply,
          section_id: this.section_id,
          reply_to_id: null
        };
        if (this.data.reply.length==0){
          toastr.clear()
          toastr.info('回复不能为空哦');
          return
        }
        this.$http.post(Vue.http.options.xy_root+'/api/v1/section/question_comment/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('发表回复成功');
              this.data.reply=''
              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2) {

              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*对回复发表回复*/
      replying_comment: function (index,item,list) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        if (this.data.reply.length==0){
          toastr.clear()
          toastr.info('回复不能为空哦');
          return
        }

        var params={
          answer_id: this.questionsList[index].answers[item].id,
          comment: this.data.reply,
          section_id: this.section_id,
          reply_to_id: this.questionsList[index].answers[item].answer_comments[list].id
        };

        this.$http.post(Vue.http.options.xy_root+'/api/v1/section/question_comment/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              this.data.reply=''
              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');


            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*发表评论*/
      asking_comment: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var content=$('.comments-input-content').text()
        if (content.length==0){
          toastr.clear()
          toastr.info('评论内容不能为空哦');
          $('.comments-input-content').css('border','1px solid #FD7B4D');
          return
        }else {
          $('.comments-input-content').css('border','1px solid #E4E7ED');

        }
        var params={

          content: $('.comments-input-content').text(),
          p_node_id: null,
          section_id: this.section_id
        };

        this.$http.post(Vue.http.options.xy_root+'/api/v1/section_comments/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('评论发布成功！');
              $('.comments-input-content').text('');

              this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');


            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*对评论发表回复*/
      reply_common_reply: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        if (this.data.reply_com.length==0){
          toastr.clear()
          toastr.info('回复内容不能为空！');
          return
        }

        if(item==null) {
          var params={
            content: this.data.reply_com,
            p_node_id: this.commentsList[q_index].id,
            section_id: this.section_id
          };
        }else {
          var params={

            content: this.data.reply_com,
            p_node_id: this.commentsList[q_index].child[item].id,
            section_id: this.section_id
          };
        }

        this.$http.post(Vue.http.options.xy_root+'/api/v1/section_comments/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              this.data.reply_com=''
              toastr.clear()
              toastr.success('回复成功');

              this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');


            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else if(response.data.error_no==-1) {

              if(response.data.userinfo){
                toastr.clear()
                toastr.info(response.data.error_msg);
              }


            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      /*删除评论或回复*/
      delete_common: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var url='';

        if(item==null){
          url=Vue.http.options.xy_root+'/api/v1/section_comments/?comment_id='+this.commentsList[q_index].id;
        }else {
          url=Vue.http.options.xy_root+'/api/v1/section_comments/?comment_id='+this.commentsList[q_index].child[item].id;
        }

        this.$http.delete(url)
          .then(function(response) {

            if(response.data.error_no==0) {
              this.delete_cancel()
              toastr.clear()
              toastr.success('删除评论成功');

              this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');

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
      show_side: function () {
        $('.showing').css('display','none');
        $('.side_bar').css('transform','translateX(-360px)');
        this.catalog_isopen=true
      },
      mouse: function () {
        setTimeout(function () {
          $('.side_bar').css('transform','translateX(360px)');
          $('.showing').css('display','block');
        },1000*5)
      },
      close_side: function () {
        $('.side_bar').css('transform','translateX(360px)');
        $('.showing').css('display','block');
        this.catalog_isopen=false
      },
      on_cc_player_init: function (vid, objectID) {
//        alert(1);
        this.ccplayer = this.getSWF(objectID);
        if (this.ccplayer) {
          var config = {};
          config.loading_enable = 0;
          config.play_start_time = 0;
          config.on_player_start = "on_player_start";
          config.on_player_seek = "on_player_seek";

          // 通过配置启用 BulletCurtain 插件
          config.player_plugins = {
            BulletCurtain:{
              font : "微软雅黑",   //字体
              color : 0xFFFFFF,   //颜色,默认白色
              size : 16,          //大小,默认30
              duration : 10,      //显示时长(单位秒),默认10秒
              alpha : 1,          //不透明度(0-1),默认1
              visible : 1         //是否可见(不可见:0 或 可见:1),默认1
            }
          };
          this.ccplayer.setConfig(config);
        } else {
          console.info("未获取到播放器对象");
        }
      },
      on_cc_player_pluginready: function (name, vid, objectID) {
        if( name == "BulletCurtain" ){

          //该插件准备就绪,意味着该插件相关接口可用
          //BulletCurtain插件包括以下接口:
          //  setBulletCurtainAlpha(alpha)
          //  setBulletCurtainVisible(visible)
          //  addBullet(data)
          //  removeBullet(id)

          console.info("BulletCurtain ready");
          this.pluginReady = true;
          this.tryStartupBulletCurtain();
        }
      },
      tryStartupBulletCurtain: function () {
        if( this.pluginReady && this.started ){
          console.info("BulletCurtain startup");
          this.findBulletIndex();
          setInterval("runBulletCurtain()",100);
        }
      },
      findBulletIndex: function () {
        var pos = ccplayer.getPosition();
        var begin = 0;
        var end = bullets.length-1;
        while( end - begin > 1 ){
          var centerIndex = begin + Math.floor((end-begin)/2);
          if( bullets[centerIndex]["time"] < pos ){
            begin = centerIndex;
          }else{
            end = centerIndex;
          }
        }
        this.bulletIndex = end;
        console.info("findBulletIndex("+pos+") =",this.bulletIndex);
      },
      getSWF: function (objectID) {
        if (window.document[objectID]) {
          return window.document[objectID];
        } else if (navigator.appName.indexOf("Microsoft") == -1) {
          if (document.embeds && document.embeds[objectID]) {
            return document.embeds[objectID];
          }
        } else {
          return document.getElementById(objectID);
        }
      },
      on_player_seek: function (from,to) {
        this.findBulletIndex();
      },
      runBulletCurtain: function () {
        var pos = this.ccplayer.getPosition();
        while( this.bullets[bulletIndex]["time"] < pos ){
          this.ccplayer.addBullet(this.bullets[bulletIndex],bulletsMenu);
          this.bulletIndex++;
        }
      },
      deleteBullet: function (data) {
        this.ccplayer.removeBullet(data["id"]);
      },
      selectBullet: function (data) {
        var index = data["id"];
        var li;
        if( !isNaN(this.bulletSelected) ){
          li = document.getElementById("bulletsLI"+this.bulletSelected);
          li.style.color = 0;
        }
        this.bulletsUL.scrollTop = index * 20;
        this.bulletSelected = index;
        li = document.getElementById("bulletsLI"+this.bulletSelected);
        li.style.color = "#FF0000";
      },
      answer_like: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/answer/agree/?aid='+this.questionsList[q_index].answers[item].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点赞成功');

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      answer_unlike: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/answer/disagree/?aid='+this.questionsList[q_index].answers[item].id)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点踩成功');

              this.load(Vue.http.options.xy_root+'/api/v1/section_questions/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      comment_like: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var cid='';
        if(item==null) {
          cid=this.commentsList[q_index].id;
        }else {
          cid=this.commentsList[q_index].child[item].id;
        }

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/comment/agree/?cid='+cid)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点赞成功');


              this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      comment_unlike: function (q_index,item) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var cid='';
        if(item==null) {
          cid=this.commentsList[q_index].id;
        }else {
          cid=this.commentsList[q_index].child[item].id;
        }

        this.$http.get(Vue.http.options.cz_root+'/api/v1/actions/comment/disagree/?cid='+cid)
          .then(function(response) {

            if(response.data.error_no==0) {
              toastr.clear()
              toastr.success('点踩成功');

              this.load_comment(Vue.http.options.xy_root+'/api/v1/section_comments/?section_id='+this.section_id+'&page=1');

            }else if(response.data.error_no==2){
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              toastr.clear()
              toastr.info(response.data.error_msg);

              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      loadSide: function (url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function (response) {

            if (response.data.error_no == 0) {

              if (url == Vue.http.options.root + '/api/v1/hot_articles/') {
                this.hot_news = response.data.data;
              }

              if (url == Vue.http.options.root + '/api/v1/hot_courses/') {
                this.hot_courses = response.data.data;
              }


              //console.log(this.hot_courses);

            } else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
//              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg)
            }

          })
          .catch(function (response) {
            console.log('接口请求失败')
          })
      },
      course_link:function (course_id) {
        this.$route.router.go(this.$store.state.course_link[course_id]);
      },
      check_input:function (ele) {
        $('.'+ele+'-box').css('border','');
      },
    },
  }
</script>
<style scoped>
  @import "../../assets/css/font-awesome.min.css";
  .side_bar {
    position: relative;
    top: -677px;
    left: 1217px;
    width: 360px;
    height:681px;
    overflow-y: scroll;
    background: #333333; z-index: 13;
  }
  .side_bar_act {
    top: -747px;
  }
  .video-play-icon {
    /*background: url("../../assets/img/video_menu_icon.png") no-repeat 0 15px;*/
    background-size: 5px 7px;
  }
  .info-num-tip {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -9px;
    margin-top: -6px;
    width:14px;
    height: 14px;
    background: red;
    border-radius: 8px;
    font-size: 12px;
    color: #fff;
  }
  .playing-header {
    width: 100%;
    height: 82px;
    background: #292929;
  }
  .play-header-main {
    width: 1200px;
    margin: 0 auto;
    height: 82px;
    display: flex;
    align-items: center;
  }
  .play-header-left {
    display: flex; align-items: center;
  }
  .play-video-title {
    margin-left: 10px;
  }
  .play-video-title .playing-sec-title{
    display: inline-block;
    font-size: 16px;
    color: #D0D0D0;
    margin-left: 5px;
  }
  .play-com-font {
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0.25px;
  }
  .play-header-right {
    margin-left: auto; display: flex; align-items: center; padding: 0;
    margin-bottom: 0;
  }
  .user-img-wrap {
    width: 38px; height: 38px; border-radius: 38px;
  }
  .column {
    background: #14191D;
    padding: 35px 30px 25px;
    margin-top: -47px;
  }
  .column::-webkit-scrollbar {
    display: none;
  }
  .section_title {
    font-size: 16px;
    color: #B5B9BC;
  }
  /*删除-style-start*/
  .delete-qestion-icon-bkg {
    padding: 20px 0 10px 30px;
    width: 190px;
    display: flex;
    background: url('../../assets/img/warn-icon.png') no-repeat 20px 23px;
    background-size: 14px 14px;
  }
  .delete-video-wrap,
  .delete-com-wrap {
    position: relative;
    margin-left: 200px;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-answer-wrap,
  .delete-co-wrap {
    position: relative;
    margin-left: -91px;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-comment-wrap {
    margin-left: -594px;
    position: relative;
    margin-top: -212px;
    top: 80px;
    left: 100%;
    width: 211px;
    height: 116px;
    background: url("../../assets/img/tip-panel.png") no-repeat;
    background-size: 100% 100%;
    display: none;
  }
  .delete-text {
    font-size: 12px;
    color: #666666;
    line-height: 18px;
  }
  .delete-btn-wrap {
    text-align: right;
    padding-right: 20px;
  }
  .delete-cancel,
  .delete-sure {
    width: 44px;
    height: 27px;
    outline: none;
    border-radius: 4px;
    font-size: 12px;
    line-height: 18px;
  }
  .delete-cancel {
    background: none;
    border: 1px solid #D9D9D9;
    color: #666666;
  }
  .delete-sure {
    background: #108EE9;
    border: none;
    color: #FFFFFF;
    margin-left: 4px;
  }
  /*删除-style-end*/

  /*回复效果样式*/
  .reply-btn-wrap {
    height: 48px;
    width: 548px;
    background: #FAFAFA;
  }
  .reply-input {
    display: none;
  }
  .cont-main {
    width: 835px;
    height: auto;
  }
  .side-main {
    width: 340px;
    margin-left: auto;
  }
  .play-header {
    width: 100%;
    height: 57px;
    display: flex;
    align-items: center;
    background: #FAFAFA;
  }
  .play-header-title {
    font-size: 14px;
    color: #333333;
    height: 57px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
  }
  .play-header-title-active {
    border-bottom: 1px solid #84CC39;
  }
  .play-question-title {
    width: 100%;
    height: 48px;
    margin-top: 40px;
    padding-left: 20px;
    border: 1px solid #E8E8E8;
  }
  .play-question-title::placeholder {
    font-size: 14px;
    color: #9D9D9D;
  }
  .play-edit-question {
    width: 100%;
    height: 108px;
    border: 1px solid #E8E8E8;
    margin-top: 30px;
  }
  .play-ques-btn-wrap {
    width: 100%;
    display: flex;
  }
  .play-ques-btn {
    width: 100px;
    height: 38px;
    margin-left: auto;
    background: #7ED321;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0.22px;
    margin-top: 26px;
    border: none;
    outline: none;
  }
  .play-ques-list {
    width: 100%;
    padding: 0;
  }
  .play-ques-item {
    list-style: none;
  }
  .play-ques-item-wrap {
    display: flex;
    border-bottom: 1px solid rgba(242,242,242,0.50);
    padding-left: 15px;
    padding-bottom: 25px;
  }
  .play-ques-user-name {
    font-size: 14px;
    color: #9B9B9B;
  }
  .play-ques-date {
    font-size: 14px;
    color: #9B9B9B;
    display: inline-block;
    margin-left: 20px;
  }
  .play-ques-tit {
    font-size: 14px;
    color: #4A4A4A;
    font-weight: bold;
    margin: 10px 0 0;
  }
  .play-ques-detail {
    font-size: 12px;
    color: #4A4A4A;
    margin: 12px 0 0;
  }
  .play-look-ques {
    font-size: 12px;
    color: #4990E2;
  }
  .play-ques-state {
    font-size: 14px;
    color: #4A90E2;
    display: inline-block;
    margin-right: 4px;
  }
  .play-agree-ques {
    width: 70px;
    height: 25px;
    border: 1px solid #979797;
    border-radius: 100px;
    margin-left: auto;
    font-size: 12px;
    color: #9D9D9D;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .play-reply {
    padding: 30px 0 25px 44px;
    border-bottom: 1px solid rgba(242,242,242,0.50);
  }







  .same-ask {
    width: 70px;
    height: 25px;
    border: 1px solid #979797;
    border-radius: 100px;
    margin-left: auto;
    font-size: 12px;
    color: #9D9D9D;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .same-ask-active {
    border: 1px solid #84CC39;
    color: #84CC39;
  }
  .play-side-course {
    width: 100%;
    background: #FAFAFA;
    padding-top: 22px;
    margin-bottom: 31px;
  }
  .play-side-model {
    width: 100%;
    height: 447px;
    background: #FAFAFA;
    padding-top: 22px;
    margin-bottom: 31px;
  }
  .titWrap {
    width: 309px;
    height: 25px;
    display: flex;
    align-items: center;
  }
  .play-side-model-icon {
    display: block;
    height:17px;
    background: #000;
    width:3px;
  }
  .play-course-list {
    width: 279px;
    margin:0 auto;
    padding: 10px 0 0;
  }
  .play-course-item {
    list-style: none;
    padding: 24px 0 26px;
    border-bottom: 1px solid #EDEDED;
  }
  .play-course-item:last-child {
    border-bottom: none;
  }
  .model-tit {
    font-size: 18px;
    color: #333333;
    letter-spacing: 0.29px;
    margin-left: 27px;
  }
  .article-tit {
    font-size: 18px;
    line-height: 24px;
    color: #414A60;
    letter-spacing: 0.29px;
    margin: 30px 0 25px;
  }
  .look-detail {
    font-size: 14px;
    color: #999999;
    letter-spacing: 0.22px;
    display: block;
  }
  .play-news-list {
    width: 295px;
    margin:0 auto;
    padding: 0;
  }
  .play-news-item {
    cursor: pointer;
    display: flex;
    padding: 30px 0;
    border-bottom: 1px solid #EDEDED;
    justify-content: center;
  }
  .side-news-list {
    margin-left: 14px;
    width: 144px;
  }
  .side-news-tit {
    font-size: 14px;
    color: #4A4A4A;
  }
  .side-news-dec {
    font-size: 12px;
    color: #9B9B9B;
    overflow: hidden;
  }
  .news-dec {
    font-size: 12px;
    width: 140px;
    color: #9B9B9B;
    display: inline-block;
    margin-top: 10px;
  }
  .loading-container{
    position: relative;
    width: 100%;
    top: -190px;
    left: 110px;
    /*transform: translateY(-50%)*/
  }
  .playing_img{
    position: absolute;
    /*right: 100px;*/
  }
</style>
