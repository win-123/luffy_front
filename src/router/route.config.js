/*路由配置文件*/
import Vue from 'vue';
export function configRouter(router) {

    router.map({
        'luffycity': {
            name: 'worker',
            component: (resolve) => require(['../pages/worker.vue'], resolve),
            subRoutes: {
                '/index': {//首页
                  name: 'home',
                  component: (resolve) => require(['../pages/index/home.vue'], resolve)
                },
                '/activity/internal': {//双十一活动页
                  name: 'single',
                  component: (resolve) => require(['../pages/activity/singlesDay.vue'], resolve)
                },
                '/micro': {//微专业
                    name: 'micro-professional',
                    component: (resolve) => require(['../pages/micro/micro.vue'], resolve)
                },
                '/micro/other/detail/:id': {
                    name: 'other-micro-detail',
                    component: (resolve) => require(['../pages/micro/children/detail_sec.vue'], resolve)
                },
                '/micro/detail/:id': {//微专业详情
                  name: 'micro-detail',
                  component: (resolve) => require(['../pages/micro/children/detail.vue'], resolve)
                },
                '/micro/play/:id': {
                    name: 'micro-play',
                    component: (resolve) => require(['../pages/playVideo/micro_video.vue'], resolve)
                },
                '/classmate/play/:id': {
                    name: 'classmate-play',
                    component: (resolve) => require(['../pages/playVideo/classmate.vue'], resolve)
                },
                '/news': {//资讯
                    name: 'news',
                    component: (resolve) => require(['../pages/news/news.vue'], resolve)
                },
                '/news/detail/:id': {//资讯详情
                    name: 'news-detail',
                    component: (resolve) => require(['../pages/news/children/detail.vue'], resolve)
                },
                '/news/video/detail/:id': {//视频详情
                  name: 'video-detail',
                  component: (resolve) => require(['../pages/news/children/detail_video.vue'], resolve)
                },
                '/study': {
                    name: 'study',
                    component: (resolve) => require(['../pages/study/study.vue'], resolve),
                    // subRoutes: {
                    //   '/question':{
                    //   name:'my-question',
                    //   component: (resolve) => require(['src/pages/study/children/question.vue'], resolve),
                    //   }
                    // }
                },
                '/study/question': {
                    name: 'study-question',
                    component: (resolve) => require(['../pages/study/study_question.vue'], resolve)
                },
                '/study/answer': {
                    name: 'study-answer',
                    component: (resolve) => require(['../pages/study/study_answer.vue'], resolve)
                },
                '/study/courses': {
                    name: 'study-courses',
                    component: (resolve) => require(['../pages/study/study_courses.vue'], resolve)
                },
                '/study/micro': {
                    name: 'study-micro',
                    component: (resolve) => require(['../pages/study/study_micro.vue'], resolve)
                },
                '/my/rewards_punishment/:id': {//奖惩记录
                    name: 'rewards_punishment_record',
                    component: (resolve) => require(['../pages/my/rewards_punishment_record.vue'], resolve)
                },
                '/my/collection': {//我的收藏
                    name: 'mine-collection',
                    component: (resolve) => require(['../pages/my/collection.vue'], resolve)
                },
                '/my/older': {//我的订单
                    name: 'mine-older',
                    component: (resolve) => require(['../pages/my/older.vue'], resolve)
                },
                '/my/profile': {//个人资料
                    name: 'mine-profile',
                    component: (resolve) => require(['../pages/my/profile.vue'], resolve)
                },
                '/my/account': {//我的账户
                    name: 'mine-account',
                    component: (resolve) => require(['../pages/my/account.vue'], resolve)
                },
                '/my/account/safe': {//我的账户安全
                    name: 'mine-safe',
                    component: (resolve) => require(['../pages/my/account_safe.vue'], resolve)
                },
                '/cash': {//提现
                    name: 'get-cash',
                    component: (resolve) => require(['../pages/cash/cash.vue'], resolve)
                },
                '/cash/submit': {//确认提现
                    name: 'submit-cash',
                    component: (resolve) => require(['../pages/cash/submit_cash.vue'], resolve)
                },
                '/cash/success': {//提现成功
                  name: 'success-cash',
                  component: (resolve) => require(['../pages/cash/cash_success.vue'], resolve)
                },
                '/coupon': {//优惠券
                    name: 'coupon',
                    component: (resolve) => require(['../pages/coupon/coupon.vue'], resolve)
                },
                '/purchase/shopping_cart': {//购物车
                  name: 'shopping-cart',
                  component: (resolve) => require(['../pages/purchase/shopping_cart.vue'], resolve)
                },
                '/purchase/submit_older': {//提交订单
                  name: 'submit_older',
                  component: (resolve) => require(['../pages/purchase/place_older.vue'], resolve)
                },
                '/homework/grade/:id': {//作业成绩
                  name: 'homework_grade',
                  component: (resolve) => require(['../pages/homework/homework_grade.vue'], resolve)
                },
                '/homework/:id': {//课堂作业
                  name: 'homework',
                  component: (resolve) => require(['../pages/homework/homework.vue'], resolve)
                },
                '/homework/detail/:id': {//作业详情
                  name: 'homework_detail',
                  component: (resolve) => require(['../pages/homework/homework_detail.vue'], resolve)
                },
                '/course/homework/:id': {//普通作业
                  name: 'course_homework',
                  component: (resolve) => require(['../pages/homework/course_homework.vue'], resolve)
                },
                '/course/homework/detail/:id': {//普通作业详情
                  name: 'course_homework_detail',
                  component: (resolve) => require(['../pages/homework/course_homework_detail.vue'], resolve)
                },
                '/community/mine/question/:id': {//同学社区-我的问答
                  name: 'community-mine',
                  component: (resolve) => require(['../pages/community/community.vue'], resolve)
                },
                '/community/all/question/:id': {//同学社区-全部问题
                  name: 'community-all',
                  component: (resolve) => require(['../pages/community/all_question.vue'], resolve)
                },
                '/course/evaluation': {//订单评价
                  name: 'older_evaluation',
                  component: (resolve) => require(['../pages/purchase/older_evaluation.vue'], resolve)
                },
                '/course': {//课程
                    name: 'course',
                    component: (resolve) => require(['../pages/course/index.vue'], resolve)
                },
                '/course/detail/:id': {//课程详情模板一
                  name: 'course-detail',
                  component: (resolve) => require(['../pages/course/detail.vue'], resolve)
                },
                '/course/detail/sec/:id': {//Django课程详情模板
                  name: 'course-detail-sec',
                  component: (resolve) => require(['../pages/course/detail_sec.vue'], resolve)
                },
                '/course/detail/net/:id': {//网络编程课程详情模板
                  name: 'net-course-detail',
                  component: (resolve) => require(['../pages/course/net_course_detail.vue'], resolve)
                },
                '/course/detail/mysql/:id': {//Mysql数据库课程详情模板
                  name: 'mysql-course-detail',
                  component: (resolve) => require(['../pages/course/mysql_course_detail.vue'], resolve)
                },
                '/course/detail/finance/:id': {//金融量化分析
                  name: 'finance-course-detail',
                  component: (resolve) => require(['../pages/course/finance_course_detail.vue'], resolve)
                },
                '/course/detail/algorithm/:id': {//算法入门课程详情模板
                  name: 'algorithm-course-detail',
                  component: (resolve) => require(['../pages/course/algorithm_course_detail.vue'], resolve)
                },
                '/course/detail/computer/:id': {//算法入门课程详情模板
                  name: 'computer-course-detail',
                  component: (resolve) => require(['../pages/course/computer_course_detail.vue'], resolve)
                },
                '/course/detail/python/:id': {//python开发21天入门必备课程详情模板
                  name: 'python-course-detail',
                  component: (resolve) => require(['../pages/course/python_course_detail.vue'], resolve)
                },
                '/course/detail/web/:id': {//WEB开发入门课程详情模板
                  name: 'web-course-detail',
                  component: (resolve) => require(['../pages/course/web_course_detail.vue'], resolve)
                },
                '/course/detail/linux/:id': {//WEB开发入门课程详情模板
                  name: 'linux-course-detail',
                  component: (resolve) => require(['../pages/course/linux_detail.vue'], resolve)
                },
                '/course/buy': {//课程购买页
                  name: 'purchase-course',
                  component: (resolve) => require(['../pages/purchase/buy.vue'], resolve)
                },
                '/application/form/:id': {//报名表
                  name: 'application-form',
                  component: (resolve) => require(['../pages/application/application_form.vue'], resolve)
                },
                '/application/success': {//报名表填写成功
                  name: 'application-success',
                  component: (resolve) => require(['../pages/application/application_success.vue'], resolve)
                },
                '/help/about': {//帮助中心-关于我们
                  name: 'about-us',
                  component: (resolve) => require(['../pages/help/about_us.vue'], resolve)
                },
                '/message': {//帮助中心-关于我们
                  name: 'message',
                  component: (resolve) => require(['../pages/message/message.vue'], resolve)
                },
                '/help': {//帮助中心-常见问题
                  name: 'help',
                  component: (resolve) => require(['../pages/help/common_problem.vue'], resolve),
                  subRoutes: {
                    '/course': {
                      name:'help-course',
                      component: (resolve) => require(['../components/help/course.vue'], resolve),
                    },
                    '/bance': {
                      name:'bance',
                      component: (resolve) => require(['../components/help/bance.vue'], resolve),
                    },
                    '/coupons': {
                      name:'coupons',
                      component: (resolve) => require(['../components/help/coupons.vue'], resolve),
                    },
                    '/homework': {
                      name:'homework-help',
                      component: (resolve) => require(['../components/help/homework.vue'], resolve),
                    },
                    '/how_buy': {
                      name:'how_buy',
                      component: (resolve) => require(['../components/help/how_buy.vue'], resolve),
                    },
                    '/luffy_x': {
                      name:'luffy_x',
                      component: (resolve) => require(['../components/help/luffy_x.vue'], resolve),
                    },
                    '/mentor': {
                      name:'mentor',
                      component: (resolve) => require(['../components/help/mentor.vue'], resolve),
                    },
                    '/scholarship': {
                      name:'scholarship',
                      component: (resolve) => require(['../components/help/scholarship.vue'], resolve),
                    },
                    '/copyright': {
                      name:'copyright',
                      component: (resolve) => require(['../components/help/copyright.vue'], resolve),
                    },
                    '/payment': {
                      name:'payment',
                      component: (resolve) => require(['../components/help/payment.vue'], resolve),
                    },
                    '/useragreemen': {
                      name:'useragreemen',
                      component: (resolve) => require(['../components/help/useragreemen.vue'], resolve),
                    },

                  }
                },
                '/rights': {//播放页-权限认证
                  name: 'rights',
                  component: (resolve) => require(['../pages/specials/rights.vue'], resolve)
                }/*,
                '*':{
                  name: 'home',
                  component: (resolve) => require(['../pages/index/home.vue'], resolve)
                }*/
            }
        }
    });
    router.redirect({
        '*': {'name':'home'},
    });
    /*router.beforeEach(function (transition) {
        if (Cookies.get('admin_id')=='') {
            return transition.redirect({'name':'login'});
        } else {
            return transition.next();
        }
    });*/
  //


}
