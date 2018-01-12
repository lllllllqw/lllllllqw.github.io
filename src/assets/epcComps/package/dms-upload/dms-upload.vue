/** * Created by zhangsaisai on 2017/7/4. */
<template>
    <div class="upload">
        <div class="upload-menu">
            <button type="button" class="upload-btn select-btn">
                <span>选取文件</span>
            </button>
            <input type="file" name="file" ref="fileBtn" class="select-hide" @change="readFile" :multiple="multiple">
        </div>
        <div class="upload-tip">{{tips}}</div>
        <ul class="upload-list">
            <li :class="{isReady:item.isUpload==0,isUp:item.isUpload==1}" v-for="(item,key) in list.showList" :key="key" :data-id="key"
                :data-edit="item.edit">
                <p>
                    <a class="file-name">
                        <i class="dms-icon icon-image" v-if="item.suffix=='.png'||item.suffix=='.jpg'||item.suffix=='.gif'"></i>
                        <i class="dms-icon icon-text" v-if="item.suffix=='.txt'"></i>
                        <i class="dms-icon icon-word" v-if="item.suffix=='.doc'||item.suffix=='.docx'"></i>
                        <i class="dms-icon icon-excel" v-if="item.suffix=='.xls'||item.suffix=='.xlsx'||item.suffix=='.xlsm'"></i>
                        <i class="dms-icon icon-ppt" v-if="item.suffix=='.ppt'||item.suffix=='.pptx'"></i>
                        <i class="dms-icon icon-pdf" v-if="item.suffix=='.pdf'"></i>
                        <i class="dms-icon icon-mpp" v-if="item.suffix=='.mpp'"></i>
                        <i class="dms-icon icon-visio" v-if="item.suffix=='.vsd'"></i>
                        <i class="dms-icon icon-wlkx" v-if="item.suffix=='.wlkx'"></i>
                        {{item.name}}
                    </a>
                    <input class="desc-name" :disabled="!item.edit" @keyup.enter="editFile(false)" v-model="item.desc">
                    <input class="desc-name" :disabled="!item.edit" @keyup.enter="editFile(false)" v-model="item.test_1">
                    <input class="desc-name" :disabled="!item.edit" @keyup.enter="editFile(false)" v-model="item.test_2">
                    <span class="icon-con">
                        <i class="dms-icon icon-sucess" v-if="item.isUpload=='1'"></i>
                        <i class="dms-icon icon-edit" v-if="item.isUpload==0&&item.edit==false" @click="editFile(true)"></i>
                        <i class="dms-icon icon-save" v-if="item.isUpload==0&&item.edit==true" @click="editFile(false)"></i>
                        <i class="dms-icon icon-del" @click="delFile"></i>
                    </span>
                </p>
                <progress :value="item.processVal" max="100" v-if="item.isUpload==2"></progress>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'dms-upload',
        data() {
            return {
                list: {
                    showList: [{
                        suffix: 0
                    }]
                }
            };
        },
        props: {
            // list: {
            //   type: Object
            // },
            multiple: {
                type: Boolean,
                default: false
            },
            tips: {
                type: String
            }
        },
        computed: {},
        methods: {
            readFile: function () {
                var ev = ev || window.event;
                var nowList = ev.target.files;
                this.$emit("up-change", this.list, nowList);
                if (!this.list.flag) {
                    this.$refs.fileBtn.value = "";
                    return false;
                }
                var th = this;
                for (var i = 0; i < nowList.length; i++) {
                    this.list.upList.push(nowList[i]);
                }
                if (this.multiple) {
                    for (var i = 0; i < nowList.length; i++) {
                        this.setProp(nowList[i]);
                    }
                } else {
                    for (var i in this.list.showList) {
                        Vue.delete(this.list.showList, i);
                    }
                    this.setProp(ev.target.files[0]);
                }
            },
            GenNonDuplicateID: function (randomLength) {
                return Number(
                    Math.random()
                    .toString()
                    .substr(3, randomLength) + Date.now()
                ).toString(36);
            },
            setProp: function (obj) {
                for (var i in this.list.showList) {
                    if (this.list.showList[i].name == obj.name) {
                        return false;
                    }
                }
                Vue.set(this.list.showList, this.GenNonDuplicateID(), {
                    name: obj.name,
                    desc: "",
                    suffix: String(obj.name.match(/\..+$/, "")),
                    type: obj.type,
                    size: obj.size,
                    isUpload: 0,
                    edit: true,
                    id: this.GenNonDuplicateID(),
                    processVal: 0
                });
            },
            delFile: function () {
                var ev = ev || window.event;
                var nowId = ev.target.parentNode.parentNode.parentNode.dataset.id;
                Vue.delete(this.list.showList, nowId);
                for (var i in this.list.upList) {
                    if (this.list.upList[i].name == name) {
                        this.list.upList.splice(i, 1);
                    }
                }
                if (JSON.stringify(this.list.showList) == "{}") {
                    this.$refs.fileBtn.value = "";
                }
            },
            editFile: function (flag) {
                var ev = ev || window.event;
                var nowId = "";
                if (ev.target.nodeName == "INPUT") {
                    nowId = ev.target.parentNode.parentNode.dataset.id;
                } else {
                    nowId = ev.target.parentNode.parentNode.parentNode.dataset.id;
                }
                if (!flag) {
                    this.$emit("up-check", this.list.showList[nowId]);
                } else {
                    Vue.set(this.list.showList[nowId], "edit", flag);
                }
            },
            upServer: function () {
                //上传检测事件
                this.$emit("up-click");
                /*判断是否存在未保存的数据*/
                for (var i in this.list.showList) {
                    if (this.list.showList[i].edit == true) {
                        this.$message.error("您还有数据未保存，不能上传！");
                        return false;
                    }
                }
                var upTime = new Date();
                var upList = document.querySelectorAll(".isReady");
                if (upList.length == 0) {
                    this.$message.error("您要上传的数据为空，请选择要上传的数据！");
                    return false;
                }
                /*判断文件是否上传中 isUpload字段0表示未上传，1表示已上传，2表示上传中*/
                /* for(var i=0;i<upList.length;i++){
                                    var upId=upList[i].dataset.id;
                                    Vue.set(this.list.showList[upId],"isUpload",2);
                                    Vue.set(this.list.showList[upId],"processVal",100);
                                };*/
                /*上传成功之后回调修改上传状态*/
                for (var i = 0; i < upList.length; i++) {
                    var upId = upList[i].dataset.id;
                    //Vue.set(this.list.showList[upId],"isUpload",1);
                    Vue.set(this.list.showList[upId], "upTime", upTime);
                    this.$refs.fileBtn.value = "";
                }
            }
        }
    };
</script>