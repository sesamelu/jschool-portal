<template>
    <div>
        <div class="schools-kindergarten">
            <div class="graduate-top">
                <div class="kindergarten-link-title">
                    <div class="info-title info-title-new">
                        <span class="col-bar"></span
                        ><span
                            class="title-word-new"
                            style="vertical-align: middle"
                            >招生</span
                        >
                    </div>
                </div>
                <div class="kindergarten-picture kindergarten-picture-new">
                    <div class="picture-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        class="picture-part"
                                        src="@assets/img/images/img-recruitStudents.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kindergarten-info-title" style="width: auto">
                <div class="info-word" v-html="content">
                </div>
                <!-- <div class="info-word">
                    界首齐舜学校将于2019年9月1日正式开学，招生工作将于2019年3月正式启动。2019学年，学校将招收幼儿园、小学、初中和高中学段的优秀学生。具体招生安排请关注学校微信“齐舜教育”见随后公告，也可联系学校招生电话17358925169咨询。
                </div> -->
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">附件下载：</div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word" v-if="fileName">
                    <a
                        class="download"
                        :href="fileLink"
                    >
                        <img
                            src="@assets/img/icon/download.png"
                            alt="下载"
                        /><span>&nbsp;{{fileName}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:'',
            fileId:'',
            fileName:'2018年在职教师招聘报名表',
            fileLink:'http://www.jschool.org.cn:10002/qishun/fileManageService/downloads?fileIds=e582bbd5-cba8-43d5-a38f-504c5e002595.docx'
        
        };
    },
    mounted() {
        this.getContent()
    },
    methods: {
        getContent() {
            let params = {
                type: 'recruitStudents',
            };
            this.$http
                .get("/qishun/deployServer/nonListInfo", params, this)
                .then((res) => {
                    if (0 === res.code) {
                        this.content = res.result.info.content;
                        this.fileId =  res.result.info.fileId;
                        this.fileName = res.result.info.fileName;
                        this.fileLink =  res.result.info.fileLink;
                    } else {
                        // this.$message.error(res.resultMessage);
                    }
                })
                .catch((error) => {
                    // this.$message.error("获取数据失败");
                });
        },

    },
};
</script>
<style scoped lang="scss">
</style>
<style lang="scss">
</style>