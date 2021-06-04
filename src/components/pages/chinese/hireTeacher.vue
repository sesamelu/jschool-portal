<template>
    <div>
        <div class="schools-kindergarten">
            <div class="graduate-top">
                <div class="kindergarten-link-title schools-kindergarten-new">
                    <div class="info-title info-title-new">
                        <span class="col-bar"></span
                        ><span
                            class="title-word-new"
                            style="vertical-align: middle"
                            >在职教师招聘</span
                        >
                    </div>
                </div>
                <div class="kindergarten-picture kindergarten-picture-new">
                    <div class="picture-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                            style=""
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        class="picture-part"
                                        src="@assets/img/images/img-Recruitment.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kindergarten-info-title" style="width:100%">
                <div class="info-word" v-html="content">
                </div>
                <!-- <div class="info-word">
                    因学校教学需要，现面向全国诚邀高中部、初中部和小学部优秀教师加入，共创一所理念先进、过程高效、内容全面、形式丰富、结果出色的高水平学校。具体事项公告如下：
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word-title">一、 招聘学部及学科：</div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">学部：高中、初中及小学</div>
                <div class="info-word">
                    学科：语文、数学、英语、物理、化学、政治、历史、地理、生物、信息、体育、音乐、美术等。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word-title">
                    二、 招聘要求（满足如下条件之一）：
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    1、特级教师、省市教坛新星、省市学科带头人、省市骨干教师、市教学大赛一等奖及以上获得者；
                </div>
                <div class="info-word">
                    2、国家级学科竞赛优秀教练员和高校自主招生辅导教练；
                </div>
                <div class="info-word">3、目前在高水平学校任教的优秀教师；</div>
                <div class="info-word">
                    4、教育教学理念先进，教研、课改意识强，勇挑重担的优秀年轻教师。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word-title">三、薪酬福利：</div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">1、薪酬：</div>
                <div class="info-word">
                    •&nbsp;&nbsp;教师岗位年薪为15-50万元，特别优秀的老师面议。根据具体情况可签5-15年的长期劳动合同；
                </div>
                <div class="info-word">
                    •&nbsp;&nbsp;教学获得突出成绩者重奖（可高达50万元每项每人）；
                </div>
                <div class="info-word">
                    •&nbsp;&nbsp;取得高考或竞赛突出成绩的老师，学校奖励住房或提供子女国内外学费资助。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">2、福利：</div>
                <div class="info-word">•&nbsp;&nbsp;缴纳五险一金；</div>
                <div class="info-word">•&nbsp;&nbsp;提供教师公寓；</div>
                <div class="info-word">•&nbsp;&nbsp;教职工年度体检；</div>
                <div class="info-word">
                    •&nbsp;&nbsp;子女申请入读齐舜学校（从幼儿园到高中）学位预留、学费减免；
                </div>
                <div class="info-word">•&nbsp;&nbsp;工作日餐费补贴等。</div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    以上职位长期招聘，如有咨询，请致电：17309688426，或发送邮件至<span
                        style="color: #0066cc"
                        >hr@inqishun.com</span
                    >。
                </div> -->
                <div class="info-word" style="height: 24px"></div>
                <div class="red-line"></div>
                <div class="info-word" style="height: 12px"></div>
                <div class="info-word">附件下载：</div>
                <div class="info-word" style="height: 12px"></div>
                <div v-if="fileList.length>0">
                    <div class="info-word" 
                        style="margin-bottom:14px;"
                        v-for="(item) in fileList"
                        :key="item.fileId">
                        <a
                            class="download"
                            :href="item.fileLink"
                        >
                            <img src="@assets/img/icon/download.png" alt="下载" /><span
                                >&nbsp;{{item.fileName}}</span
                            >
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            content:'',
            // fileId:'',
            // fileName:'2018年在职教师招聘报名表',
            // fileLink:'http://www.jschool.org.cn:10002/qishun/fileManageService/downloads?fileIds=e582bbd5-cba8-43d5-a38f-504c5e002595.docx'
            fileList:[]
        }
    },
    mounted(){
        this.getContent()

    },
    methods:{
        getContent() {
            let params = {
                type: 'hireTeacher',
            };
            this.$http
                .get("/qishun/deployServer/nonListInfo", params, this)
                .then((res) => {
                    if (0 === res.code) {
                        this.content = res.result.info.content;
                        this.fileList = res.result.info.fileList;
                    } else {
                        // this.$message.error(res.resultMessage);
                    }
                })
                .catch((error) => {
                    // this.$message.error("获取数据失败");
                });
        },

    }
}
</script>
<style scoped lang="scss">
.red-line{
    width:100%;
    height: 2px;
    background: #B6212D;
    margin-left: 2em;
}
</style>
<style lang="scss">

</style>