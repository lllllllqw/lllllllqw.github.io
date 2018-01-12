/** * Created by lei.ren on 2017/8/30. * 使用方法参考人员上传头像 */

<template>
    <div :class="{photoCon:true}" ref="photoCon" @mouseover="showDel" @mouseout="hideDel">
        <i class="icon-photo"></i>
        <input type="file" name="file" ref="fphoto" class="select-hide" @change="readPhoto">
        <img class="photo" ref="photo" :src="picture.src" v-show="picture.src != ''">
        <div class="photo-del" ref="delCon">
            <i class="icon-del" @click="delPhoto"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dms-photo",
        props: {
            picture: {
                type: Object
            }
        },
        methods: {
            readPhoto: function () {
                var ev = ev || window.event;
                var th = this;
                var reader = new FileReader();
                var nowPhoto = ev.target.files[0];
                this.$emit("up-change", nowPhoto);
                var check = this.picture.check;
                if (!check) {
                    th.picture.src = "";
                    this.$refs.delCon.style.visibility = "hidden";
                    this.$refs.fphoto.value = "";
                    return;
                }
                reader.readAsDataURL(nowPhoto);
                reader.onload = function () {
                    th.picture.src = this.result;
                };
                this.$emit("up-click", nowPhoto);
            },
            showDel: function () {
                if (this.picture.src != "") {
                    this.$refs.delCon.style.visibility = "visible";
                }
            },
            hideDel: function () {
                if (this.picture.src != "") {
                    this.$refs.delCon.style.visibility = "hidden";
                }
            },
            delPhoto: function () {
                this.$emit("up-delete");
                this.picture.src = "";
                this.$refs.delCon.style.visibility = "hidden";
                this.$refs.fphoto.value = "";
            }
        }
    };
</script>