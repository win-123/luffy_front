export default {
    install: function (Vue, opt) {
        Vue.$xz = {
            study: false,
            community_list:[],
            memberList:[],
            filter:{
              count:0,
              type_id:0,
              class_id:0,
              join_start_time:'',
              join_end_time:'',
              ex_start_time:'',
              ex_end_time:'',
              locale:'',
              order_type:''
            },
            config: {
                img_host:'http://47.95.64.113',
                //后台主机
                host:'http://47.94.172.250:33334',
                cz_host: 'http://47.94.172.250:33334',
                xy_host: 'http://47.94.172.250:33334',
                x_host: 'http://47.94.172.250:33334',
                wz_host: 'http://47.94.172.250:33334',
                y_host: 'http://47.94.172.250:33334',
                //晓云
              //   wz_host:'http://47.95.64.113',
              // y_host:'http://127.0.0.1:8000',
              // xy_host:'http://127.0.0.1:8000',
              //  x_host:'http://127.0.0.1:8000',
              //    host:'http://127.0.0.1:8000',
              // cz_host:'http://127.0.0.1:8000',
              //

            },
            options: function (opt) {
              for (var property in opt) {
                this.config[property] = opt[property]
              }
              Vue.http.options.root = this.config['host'];
              Vue.http.options.img_root = this.config['img_host'];
              Vue.http.options.x_root = this.config['x_host'];
              Vue.http.options.xy_root = this.config['xy_host'];
              Vue.http.options.cz_root = this.config['cz_host'];
              Vue.http.options.wz_root = this.config['wz_host'];
            },
            auth: {
                user: {
                    account: '',
                    phone: '',
                    userInfo: null,
                    id: ''
                },
                isReady: false,
                readyCallback: [],

                ready(callback){
                    if (!callback) {
                        this.isReady = true;
                        this.readyCallback.forEach(c=>c())
                    } else {
                        if (this.isReady) {
                            callback()
                        } else {
                            this.readyCallback.push(callback);
                        }
                    }
                },
                getAuthInfo: function (callback) {
                    Vue.http.get('http://192.168.70.138:9104/course-admin/get_user_info').then(
                        function (response) {
                            Vue.$xz.auth.user.account = JSON.parse(response.data).userinfo.account;
                            Vue.$xz.auth.user.id = JSON.parse(response.data).userinfo.id;
                            Vue.$xz.auth.user.userType = JSON.parse(response.data).userinfo.user_type;
                            callback(Vue.$xz.auth.user);
                        },
                        function (response) {
                        }
                    )
                },
                isAvailable: function () {
                    var account = Vue.$xz.auth.user.account;
                    if (account.length <= 0) {
                        account = Cookies.get('xz-account');
                        if (typeof(account) != 'undefined') {
                            Vue.$xz.auth.user.account = account
                        }
                    }
                    var userId = Vue.$xz.auth.user.id;
                    if (!userId) {
                        userId = Cookies.get('xz-userid');
                        Vue.$xz.auth.user.id = userId;
                    }
                    return Vue.$xz.auth.user.account.length > 0
                },
                getUserAccount: function () {
                    return Vue.$xz.auth.user.account
                },
                getUserId: function () {
                    return Vue.$xz.auth.user.id;
                },
                userInfoInflate: function (user) {
                    Vue.$xz.auth.user.account = user.account;
                    Vue.$xz.auth.user.id = user.id;
                    Vue.$xz.auth.user.userType = user.userType;
                    Cookies.set('xz-account', user.account);
                    Cookies.set('xz-userid', user.id);
                    Cookies.set('xz-phone', user.phone);
                },
                exit: function (context) {
                    Vue.http.get('').then(function (response) {
                        Vue.$xz.auth.user.account = '';
                        Cookies.set('xz-account', '');
                        Cookies.set('xz-userid','');
                        Cookies.set('xz-phone','');
                        context.$route.router.go({name: 'login'})
                    }, function (response) {
                        $.toast("无法连接到服务器，请稍后重试", "warning").show();
                    });
                }
            }
        }
    }
}
