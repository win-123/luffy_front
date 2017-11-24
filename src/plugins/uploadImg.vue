<template>
    <div class="upload_img form-group">
        <label class="col-sm-2 control-label">{{ label }}</label>
        <div class="col-sm-10 file-area">
            <div class="file-select img-spec">
                <span style="color: red" v-if="img.width">请上传宽{{ img.width }}高{{ img.height }}大小 400k 规格的图</span>
                <span style="color: red" v-else>请上传大小400k以内规格的图</span>
                <!--<span class="file-status"><span class="badge">{{ uploader.status}}</span></span>-->
            </div>
            <div class="file-show ">
                <div class="row">
                    <div class="col-sm-6 col-md-4 upload-show">
                        <div class="thumbnail" id="browse{{ id }}">
                            <span style="display: none"> {{ logo_url }} </span>
                            <div v-if="show_logo">
                                <span @click="deleteImg" class="delete-thumb">x</span>
                                <img class="img-show" v-if="logo_url" :src="show_logo">
                            </div>
                            <img v-else src="/static/common/ueditor/add-photo.png" alt="">
                            <div class="caption">
                                <P style="color: #7A7979"> {{ uploader.status }}</P>
                                <!--<p><a href="#" class="btn btn-primary" role="button">Button</a></p>-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="progress progress-sm" v-if="uploader.percent > 0 && uploader.percent < 100">
                <div class="progress-bar progress-bar-success" role="progressbar"
                     :aria-valuenow="uploader.percent" aria-valuemin="0" aria-valuemax="100"
                     style="width: 60%;"></div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    var seq = 0

    import Vue from 'vue'
    export default{
        data(){
            return {
                form_product_url: '',
                form_brand_logourl: '',
                uploader: {
                    uper: '',
                    logo_exist_url: '',
                    logo_uploaded_url: '',
                    logo_brower_ret: '',
                    percent: 0,
                    status: '',
                },
                imgUrl: '',
                show_logo: '',
                id: seq++
            }
        },
        computed: {
            showUpload: function () {
                return this.uploader.logo_brower_ret.length > 0;
            },
            showProgress: function () {
                return this.uploader.percent > 0 && this.uploader.percent != 100
            },
            logo_url: function () {
                if (this.uploader.logo_uploaded_url.length > 0) {
                    this.show_logo = this.uploader.logo_uploaded_url;
                    return this.uploader.logo_uploaded_url
                }
                else {
                    this.show_logo = this.img.url;
                    return this.img.url
                }
            }
        },
        ready: function () {
            //todo: !replace this url use method
            var replace_url = Vue.http.options.root;
            this.uploader.uper = new plupload.Uploader({
                browse_button: 'browse' + this.id, //触发文件选择对话框的按钮，为那个元素id
                url: replace_url + '/common/media/upload?j',//服务器端的上传页面地址
                file_data_name: 'document',  //指定文件上传时文件域的名称，默认为file
                multi_selection: false,    //是否可以在文件浏览对话框中选择多个文件，true为可以，false为不可以
                filters: {
                    mime_types: [{             //用来限定上传文件的类型
                        title: "Image files",
                        extensions: "jpg,gif,png"
                    },],
                    max_file_size: this.img.size ? this.img.size : '400k',   //用来限定上传文件的大小默认大小设置为400k
                    prevent_duplicates: true  //是否允许选取重复的文件,为true时表示不允许
                },
                multipart_params: {  //上传时的附加参数，以键/值对的形式传入
                    urltemp_old: ''
                }
            });
            this.uploader.uper.init();
            this.uploader.uper.bind('FilesAdded', this.onFilesAdded)
            this.uploader.uper.bind('FileUploaded', this.onFileUploaded)
            this.uploader.uper.bind('QueueChanged', this.onQueueChanged)
            this.uploader.uper.bind('UploadProgress', this.onUploadProgress);
            this.uploader.uper.bind('Error', this.onError);
            this.uploader.logo_uploaded_url = this.img.url
        },
        methods: {
            upload: function () {
                this.uploader.uper.start()
                this.uploader.percent = 2 // show progress
                this.uploader.logo_brower_ret = ''; // reset
            },
            onFileUploaded: function (up, file, response) {
                var response_json = JSON.parse(response.response);
                if (response_json.code != 200) {
                    console.log("File uploading failed, server returns none 200 code:");
                    console.log(response_json);
                } else {
                    this.uploader.logo_uploaded_url = response_json.data.url;
                    //    this.data.user_img = this.uploader.logo_uploaded_url;
                    this.imgUrl = this.uploader.logo_uploaded_url;
                    //upload finish and set url
                    this.$emit("get-img-url", this.imgUrl)
                    // add for post: delete the pre-one temp file
                    this.uploader.uper.setOption('multipart_params', {urltemp_old: this.uploader.logo_uploaded_url})
                }
            },
            onQueueChanged: function (up, files) {
                if (up.files.length > 1) {
                    up.files.splice(0, (parseInt(up.files.length) - 1));
                }
            },
            /**
             * @param up
             * @param files 内含上传图片本地地址 用以加载入html 中 获取上传图的宽高
             * img.width : 限制上传图片宽度
             * img.height: 限制上传图片的高度
             */
            onFilesAdded: function (up, files) {
                var uper = this.uploader
                uper.logo_brower_ret = ''
                var img = new Image();
                img.src = URL.createObjectURL(files[0].getNative())
                //当所传参数含有 img{width:""}限制上传图片的width
                $(img).appendTo("body").css({
                    position: "absolute",
                    border: 0,
                    margin: 0,
                    outline: 0,
                    top: -9999,
                    opacity: 0
                });
                img.onload = () => {
                    Vue.config.debug && console.log("图片宽高" + img.offsetWidth, img.offsetHeight);
                    //uploader.start();
                    if (this.img.width) {
                        if (img.offsetWidth < this.img.width + 3 && img.offsetWidth > this.img.width - 3
                                && img.offsetHeight < this.img.height + 3 && img.offsetHeight > this.img.height - 3) {
                            this.upload();
                        } else {
                            $.toast("请严格按照图片提示尺寸进行上传", "danger").show()
                            up.removeFile(files[0])
                            return
                        }
                    }
                    this.upload();
                }

                plupload.each(files, function (file) {
                    uper.logo_brower_ret += '已选择: ' + ' (' + plupload.formatSize(file.size) + ')' + file.name
                })
                uper.status = uper.logo_brower_ret;
                //todo important direct upload img

            },
            onUploadProgress: function (up, file) {
                var percent = file.percent
                console.log(percent)
                this.uploader.percent = percent
                this.uploader.status = percent + '%'
                if (percent == 100) {
                    this.uploader.logo_brower_ret = ''; // reset
                    this.uploader.status = '';
                }
            },
            onError: function (up, err) {
                this.uploader.status = err.code + ': ' + err.message
            },
            deleteImg: function () {
                var url = Vue.http.options.root + '/common/media/delete'
                event.stopPropagation();
                if (!confirm("确定删除？")) return
                var data = {
                    image_url: this.show_logo
                };
                this.show_logo = ''
                this.$emit("get-img-url", this.show_logo)
                this.$http.post(url, data, {emulateJSON: false})
                        .then(function (response) {
                        }, function (response) {
                            // $.toast("图片从服务器删除失败", "warning").show();
                        });
            }
        },
        props: {
            img: [Object],
            label: {
                type: String,
                default: '上传头像'
            }
        }
    }
</script>

<style scoped>
    .col-sm-2 {
    }

    .delete-thumb {
        transition: .3s all;
        background: #ff0000;
        color: #ffffff;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, .4);
        text-align: center;
        padding: 3px;
        width: 25px;
        height: 25px;
        position: absolute;
        top: -10px;
        left: -10px;
        border-radius: 50%;
        z-index: 3;
        cursor: pointer;
    }

    .img-spec {
        margin-bottom: 10px;
    }

    .upload-show {
        max-width: 300px;
    }

    .img-show {
        width: 100%;
    }
</style>