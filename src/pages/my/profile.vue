<template>
  <main class="information">
    <common  :is_update="is_update"></common>
    <div style="width: 1200px; margin: 0 auto;">
      <ul class="my-item-wrap">
        <li class="my-item" v-link="{name:'mine-account'}">我的账户</li>
        <li class="my-item" v-link="{name:'mine-older'}">我的订单</li>
        <li class="my-item" v-link="{name:'mine-collection'}">我的收藏</li>
        <li class="my-item my-active" v-link="{name:'mine-profile'}">个人资料</li>
        <li class="my-item" v-link="{name:'mine-safe'}">账号安全</li>
      </ul>
      <div style="border-top: 1px solid #E9E9E9;">
        <div class="info-content">
          <!-- 个人基本信息-->
          <div v-if="!edit_info" class="base-info base-info-spec">
            <div class="info-tit-wrap">
              <h5 class="info-tit">基本信息</h5>
              <button class="edit-btn" @click="editInfo()">修改</button>
            </div>
            <ul class="base-info-wrap">
              <li class="base-info-item">
                <label class="label">用户名</label>
                <span class="label-point">{{personal.username}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">性别</label>
                <span class="label-point">{{personal.gender}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">QQ</label>
                <span class="label-point">{{personal.qq}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">微信</label>
                <span class="label-point">{{personal.weixin}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">生日</label>
                <span class="label-point">{{personal.birthday}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">现居</label>
                <span class="label-point">{{personal.city}}</span>
              </li>
              <li class="base-info-item">
                <label class="label">学历</label>
                <span class="label-point">{{personal.degree}}</span>
              </li>
              <li style="display: flex;">
                <label class="label">签名</label>
                <span class="label-point">{{personal.signature}}</span>
              </li>
            </ul>
          </div>
          <!--修改状态下的个人基本信息-->
          <div v-if="edit_info" class="edit-base-wrap">
            <p class="user-name"><span class="name" style="display: inline !important;">{{personal.username}}</span>，请填写真实资料</p>
            <div>
              <ul class="edit-cont">
                <li class="edit-list">
                  <label class="edit-label">QQ</label>
                  <input v-model="personal_in.qq" class="edit-input" type="text" >
                </li>
                <li class="edit-list">
                  <label class="edit-label">微信</label>
                  <input v-model="personal_in.weixin" class="edit-input" type="text" >
                </li>
                <li class="edit-list">
                  <label class="edit-label">性别</label><!--0:women  1:man-->
                  <div>
                    <input @click="this.personal_in.gender=1" :class="['edit-input','sex-input',{'sex-input-active':personal_in.gender==1}]" type="button" value="男" >
                    <input @click="this.personal_in.gender=2" :class="['edit-input','sex-input','woman-spec', {'sex-input-active':personal_in.gender==2}]" type="button" value="女" >
                  </div>
                </li>
                <li class="edit-list">
                  <label class="edit-label">生日</label>
                  <input v-model="personal_in.birthday" id="date_time" @click="selectBirthday()"  class="edit-input" type="text" >
                </li>
                <li class="edit-list">
                  <label class="edit-label">现居</label>
                  <div>
                    <select v-model="province" @change="get_city()" class="edit-input sex-input" name="province">
                      <option v-for="province in all_province" value="{{province.id}}">{{province.name}}</option>
                    </select>
                    <select v-model="city" class="edit-input sex-input woman-spec" name="province">
                      <option v-for="city in all_city" value="{{city.id}}">{{city.name}}</option>
                    </select>
                  </div>
                </li>
                <li class="edit-list">
                  <label class="edit-label">学历</label>
                  <select v-model="personal_in.degree" class="edit-input select-input" name="education">
                    <option v-for="item in personal_in.degree_choices" value="{{item.id}}">{{item.value}}</option>
                  </select>
                </li>
                <li class="edit-list">
                  <label class="edit-label">签名</label>
                  <div contenteditable="true" class="signature edit-input" style="width: 710px; height: 125px; padding: 10px;">
                    {{personal_in.signature}}
                  </div>
                </li>
              </ul>
              <span class="error-edit-tip"></span>
            </div>
            <div style="text-align: center; margin-top: 20px;">
              <button class="modify-btn modify-cancel-btn" @click="this.edit_info=false">取消</button>
              <button class="modify-btn modify-sure-btn" @click="editInfoSuccess()">完成</button>
            </div>
          </div>
          <!-- 职业信息-->
          <div class="base-info">
            <div class="info-tit-wrap">
              <h5 class="info-tit">职业信息</h5>
               <!-- <button class="edit-btn" @click="this.edit_profession=true;">修改</button>-->
            </div>
            <div>
              <!--所属行业-->
              <div v-if="!edit_profession" style="display: flex; margin-bottom: 11px;">
                <label class="label">所属行业</label>
                <span class="label-point">{{personal.profession}}</span>
                <span class="modify-text" style="cursor: pointer;" @click="editProfession()">修改</span>
              </div>
              <!--修改状态下的所属行业-->
              <div v-if="edit_profession" style="padding-bottom: 35px;">
                <div style="padding-bottom: 60px; border-bottom: 1px solid #E9E9E9;">
                  <label class="edit-label">选择你的职业状态</label>
                  <ul style="width: 100%; display: flex; flex-wrap: wrap;">
                    <li @click="student()" :class="['pro-mark',{'pro-mark-active':this.profession_state=='学生'}]">学生</li>
                    <li @click="working()" :class="['pro-mark',{'pro-mark-active':this.profession_state=='在职'}]">在职</li>
                    <li @click="waitingJob()" :class="['pro-mark',{'pro-mark-active':this.profession_state=='待业'}]">待业</li>
                  </ul>
                  <ul class="edit-cont">
                    <li class="edit-list">
                      <select v-model="industry" @change="get_profession()" class="edit-input select-input" name="education">
                        <option value="">你所从事的行业</option>
                        <option v-show="this.profession_state=='学生'" value="学生">学生</option>
                        <option v-show="this.profession_state=='待业'" value="待业">待业</option>
                        <option v-show="this.profession_state=='在职'" v-for="item in all_industry" value="{{item.id}}">{{item.name}}</option>
                      </select>
                    </li>
                    <li class="edit-list">
                      <select v-model="profession" class="edit-input select-input" name="education">
                        <option value="">职位</option>
                        <option v-show="this.profession_state=='学生'" value="学生">学生</option>
                        <option v-show="this.profession_state=='待业'" value="待业">待业</option>
                        <option v-show="this.profession_state=='在职'" v-for="item in all_profession" value="{{item.id}}">{{item.name}}</option>
                      </select>
                    </li>
                  </ul>
                  <div style="text-align: center; margin-top: 20px;">
                    <button class="modify-btn modify-cancel-btn" @click="this.edit_profession=false">取消</button>
                    <button class="modify-btn modify-sure-btn" @click="editProfessionSuccess()">完成</button>
                  </div>
                </div>
              </div>
              <!-- 感兴趣-->
              <div v-show="!edit_interest" style="display: flex;">
                <div style="display: flex;">
                  <label class="label" style="display: inline-block; margin-right: 23px;">感兴趣</label>
                  <div style="width: 600px;">
                    <span v-for="(index,item) in personal.tags" style="margin-right: 20px;" class="label-point">{{item}}</span>
                    <span class="modify-text" style="cursor: pointer;" @click="editInterset()">添加感兴趣的职业方向</span>
                  </div>
                </div>
              </div>
              <!-- 修改状态下的感兴趣-->
              <div v-show="edit_interest">
                <div>
                  <label class="edit-label">感兴趣</label>
                  <ul style="width: 100%; display: flex; flex-wrap: wrap;">
                    <li @click="collecting($index)" v-for="tag in all_interested_tag" id="{{tag.id}}" :class="['pro-mark',{'pro-mark-active':this.collect_tags.indexOf(this.all_interested_tag[$index].id)!=-1}]">{{tag.name}}</li>
                  </ul>
                </div>
                <div style="text-align: center; margin-top: 20px;">
                  <button class="modify-btn modify-cancel-btn" @click="this.edit_interest=false">取消</button>
                  <button class="modify-btn modify-sure-btn" @click="editInterestSuccess()">完成</button>
                </div>
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
  import jeDate from 'jedate';
  import lazyload from '../../assets/js/jquery.lazyload.min';
  import common from '../../pages/my/children/common.vue';

  export default {
    data() {
      return {
        personal: '',
        personal_in: '',
        sex: '',
        industry: '',
        all_industry: '',
        profession: '',
        profession_state: '',
        all_profession: '',
        province: '',
        all_province: '',
        all_interested_tag: '',
        city: '',
        all_city: '',
        collect_tags: '',
        edit_info: false,
        edit_interest: false,
        edit_profession: false,
        is_update:false
      }
    },
    ready: function(){
      this.$store.state.study_hide=true;
      this.$store.state.study_show=false;
      this.load(Vue.http.options.wz_root+'/api/v1/personal/');
      this.get_industry();
      this.get_province();
    },
    components: {
      common
    },
    methods: {
      load: function(url) {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(url)
          .then(function(response) {

            if(response.data.error_no==0) {

              this.personal=response.data.data;
              this.sex=response.data.data.degree;

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editInfo: function () {
        this.edit_info=true;

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.wz_root+'/api/v1/personal_base/')
          .then(function(response) {

            if(response.data.error_no==0) {

              this.personal_in=response.data.data;
              this.province=response.data.data.province;
              this.city=response.data.data.city;
              this.get_city();

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editInfoSuccess: function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var params={
          qq: this.personal_in.qq,
          weixin: this.personal_in.weixin,
          signature: $('.signature').text(),
          province: this.province,
          gender: this.personal_in.gender,
          degree: this.personal_in.degree,
          city: this.city,
          birthday: $('#date_time').val()

        };

        this.$http.post(Vue.http.options.wz_root+'/api/v1/personal_base/',JSON.stringify(params))
          .then(function(response) {

            if(response.data.error_no==0) {
              this.load(Vue.http.options.wz_root+'/api/v1/personal/');
              this.is_update=!this.is_update;
              this.edit_info=false;

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
                $('.error-edit-tip').text(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editProfession: function () {
        this.edit_profession=true;

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.wz_root+'/api/v1/personal_profession/')
          .then(function(response) {

            if(response.data.error_no==0) {

                this.profession_state=response.data.data.show;
                this.industry=response.data.data.industry_id;
                Cookies.set('industry',response.data.data.industry_id);
                this.profession=response.data.data.profession_id;
                Cookies.set('profession',response.data.data.profession_id);
                this.get_profession();

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editProfessionSuccess: function () {
        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;

        var param={
          profession: this.profession
        };

        this.$http.post(Vue.http.options.wz_root+'/api/v1/personal_profession/', JSON.stringify(param))
          .then(function(response) {

            if(response.data.error_no==0) {
              this.edit_profession=false;
              this.load(Vue.http.options.wz_root+'/api/v1/personal/');
              this.is_update=!this.is_update;

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editInterset: function () {
        this.edit_interest=true;

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        this.$http.get(Vue.http.options.wz_root+'/api/v1/personal_tags/')
          .then(function(response) {

            if(response.data.error_no==0) {


              this.all_interested_tag=response.data.data.tag_list;
              this.collect_tags=response.data.data.tags;

            }else if(response.data.error_no==2) {

              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      editInterestSuccess: function () {

        Vue.http.headers.common['Authorization'] = this.$store.state.Authorization;
        var param={
            tags: this.collect_tags
        };
        this.$http.post(Vue.http.options.wz_root+'/api/v1/personal_tags/', JSON.stringify(param))
          .then(function(response) {

            if(response.data.error_no==0) {

              this.edit_interest=false;
              this.load(Vue.http.options.wz_root+'/api/v1/personal/');

            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_no)
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      collecting: function ($index) {
        if(this.collect_tags.length<=0){
          this.collect_tags.push(this.all_interested_tag[$index].id);
        }else {
            if(this.collect_tags.indexOf(this.all_interested_tag[$index].id)!=-1) {//存在
              this.collect_tags.splice(this.collect_tags.indexOf(this.all_interested_tag[$index].id),1);
            }else{
              this.collect_tags.push(this.all_interested_tag[$index].id);
            }
        }
      },
      get_province: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/province/')
          .then(function(response){

            if(response.data.error_no==0){
              this.all_province=response.data.data;
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      get_city: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/city/?province_id='+this.province)
          .then(function(response){

            if(response.data.error_no==0){
              this.all_city=response.data.data;
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      get_industry: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/industry/')
          .then(function(response){

            if(response.data.error_no==0){
              this.all_industry=response.data.data;
            }else {
              console.log('接口返回失败');
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      get_profession: function () {
        this.$http.get(Vue.http.options.wz_root+'/api/v1/profession/?industry_id='+this.industry)
          .then(function(response){

            if(response.data.error_no==0){
              this.all_profession=response.data.data;
            }else if(response.data.error_no==2) {
              this.$store.state.login_state=false;
              this.$route.router.go({name: 'home'});
              this.$store.state.login_ing=true;

            }else {
              console.log(response.data.error_msg);
            }

          })
          .catch(function(response) {
            console.log('接口请求失败')
          })
      },
      student: function () {
        this.profession_state='学生';
        this.industry='';
        this.profession='';
      },
      waitingJob: function () {
        this.profession_state='待业';
        this.industry='';
        this.profession='';
      },
      working: function () {
        this.profession_state='在职';
        this.industry= Cookies.get('industry');
        this.profession=Cookies.get('profession');
      },
      selectBirthday:function(){
        jeDate({
          dateCell:"#date_time",
          isTime: false,
          /*skinCell:"jedategreen",*/
          format: 'YYYY-MM-DD',
          minDate:"1910-09-19"
        });
      },
    }



  }
</script>
<style scoped>
  @import "../../assets/css/jebox.css";
  @import "../../assets/css/jedate.css";
  .my-item-wrap{
    width: 474px;
    height: 31px;
    margin: 41px auto 0;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .my-active {
    border-bottom: 1px solid #000;
  }
  .error-edit-tip {
    font-size: 10px;
    color: #FD7B4D;
    margin-top: 5px;
  }
  .modify-text {
    font-size: 14px;
    color: #4A90E2;
    display: inline-block;
    margin-left: 50px;
  }
  .identify {
    box-shadow: 0 -1px 0 0 rgba(238,238,238,0.50), 0 1px 0 0 #EEEEEE;
  }
  .label-point {
    font-size: 14px;
    color: #666666;
  }
  .label {
    display: block;
    width: 60px;
    text-align: right;
    margin-right: 28px;
    font-size: 14px;
    color: #BBBBBB;
    padding: 0;
    margin-bottom: 0;
    height: 20px;
    line-height: 20px;
  }
  .info-tit-wrap {
    width: 647px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  }
  .edit-btn {
    width: 58px;
    height: 23px;
    padding-left: 20px;
    background: url("../../assets/img/edit_icon.png") no-repeat 0 3px;
    background-size: 14px 15px;
    border: none;
    outline: none;
    font-size: 12px;
    color: #4A4A4A;
  }
  .info-tit {
    font-size: 18px;
    color: #4A4A4A;
    margin: 0;
  }
  .base-info-wrap {
    padding-left: 0;
  }
  .base-info-item {
    display: flex;
    margin-bottom: 20px;
  }
  .base-info {
    padding: 30px 0;
  }
  .base-info-spec {
    border-bottom: 1px solid #E9E9E9;
  }
  .info-content {
    width: 715px;
    margin: 0 auto;
  }
  .information {
    margin-bottom: 63px;
  }
  li {
    list-style: none;
  }
  .edit-base-wrap {
    padding-top: 30px;
    padding-bottom: 60px;
    border-bottom: 1px solid #E9E9E9;
  }
  .user-name {
    font-size: 12px;
    color: #5E5E5E;
    letter-spacing: 0.19px;
    margin-bottom: 21px;
  }
  .user-name>.name {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0.25px;
  }
  .edit-label {
    font-size: 14px;
    color: #4A4A4A;
    display: inline-block;
    margin-bottom: 10px;
  }
  .edit-input {
    padding: 0 20px;
    width: 100%;
    border:1px solid #D0D0D0;
    border-radius: 3px;
    height: 42px;
    font-size: 14px;
    color: #4A4A4A;
  }
  .edit-cont {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .edit-list {
    list-style: none;
    margin-bottom: 26px;
    width: 336px;
  }
  .sex-input {
    width: 157px;
    text-align: center;
    background: #fff;
  }
  .woman-spec {
    margin-left: 16px;
  }
  .sex-input-active {
    border: 1px solid #7ED321;
    border-radius: 2px;
  }
  .edit-list:nth-child(even) {
    margin-left: 40px;
  }
  .select-input {
    display: block;
    border: 1px solid #D0D0D0;
    border-radius: 3px;
  }
  .modify-btn {
    border-radius: 2px;
    width: 108px;
    height: 40px;
    outline: none;
    font-size: 14px;
  }
  .modify-cancel-btn {
    color: #7ED321;
    background: none;
    border: 1px solid #7ED321;
  }
  .modify-sure-btn {
    color: #FFFFFF;
    border: none;
    margin-left: 36px;
    background: #7ED321;
  }
  .pro-mark {
    list-style: none;
    width: 158px;
    height: 42px;
    border: 1px solid #E9E9E9;
    border-radius: 2px;
    font-size: 14px;
    color: #D0D0D0;
    text-align: center;
    line-height: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
  .pro-mark:nth-child(4),
  .pro-mark:nth-child(8) {
    margin-right: 0;
  }
  .pro-mark-active {
    border: 1px solid #7ED321;
    border-radius: 2px;
    font-size: 14px;
    color: #7ED321;
  }

</style>
