<template>
    <div>
        <div class="schools-content">
            <div class="top-section">
                <div class="picture-part-wrapper" style="text-align: right">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                        style=""
                    >
                        <a href="#">
                            <div class="img">
                                <img
                                    class="picture-part"
                                    src="@assets/img/images/img-tenYears.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="word-part" style="top: 152px">
                    <div class="info-word" v-html="content">
                    </div>
                    <!-- <div class="info-word">
                        经界首齐舜学校理事会批准，界首齐舜高中拟在未来10年累计投入人民币不少于2亿元设立“十年双百颖才专项计划”，目标为在未来十年培养不少于100名考取清华、北大的高中毕业生、不少于100名被世界排名前50位的高校录取的高中毕业生。
                    </div>
                    <div class="info-word" style="height: 24px"></div>
                    <div class="info-word">
                        “颖（ying）才”为“聪颖之才”、“颍州人才”之义，旨在培养兼具中华文化底蕴和国际视野的优秀高中毕业生。根据该专项计划，学校将每年面向全国遴选不超过80名优秀初中毕业生进入“颖才计划”，所有入选“颖才计划”的学生将入读齐舜学校“颖才部”，在读期间可享受2-10万元人民币奖学金；高中毕业被清华大学或北京大学录取的学生，学生每人另行获得“颖才奖学金”人民币50万元。
                    </div>
                    <div class="info-word" style="height: 24px"></div>
                    <div class="info-word">
                        齐舜高中“颖才部”按照全方位高标准的办学理念建设。具体为：
                    </div> -->
                </div>
            </div>
        </div>
        <div class="section-wrapper">
            <div class="two-col">
                <div
                    class="ih-item square effect6 from_top_and_bottom square-picture"
                    style=""
                >
                    <a href="#">
                        <div class="img">
                            <img
                                class="two-col-img picture-part"
                                style="max-width: 860px; max-height: 300px"
                                src="@assets/img/images/img-tenYears-1.png"
                                alt="img"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div class="two-col" style="width: 30%; margin-left: 50px">
                <div class="title-word2" v-if="tenYearsList.length>0">{{ tenYearsList[0].name}}</div>
                <div class="info-word top-distance" v-if="tenYearsList.length>0" v-html="tenYearsList[0].contentEditor">
                </div>
            </div>
        </div>
        <div class="section-wrapper" style="text-align: right">
            <div
                class="two-col"
                style="width: 30%; margin-right: 50px; text-align: right"
            >
                <div class="title-word2" v-if="tenYearsList.length>1">{{tenYearsList[1].name}}</div>
                <div class="info-word top-distance" style="text-align: left" v-if="tenYearsList.length>1" v-html="tenYearsList[1].contentEditor">
                    
                </div>
            </div>
            <div class="two-col">
                <div
                    class="ih-item square effect6 from_top_and_bottom square-picture"
                    style=""
                >
                    <a href="#">
                        <div class="img">
                            <img
                                class="two-col-img picture-part"
                                style="max-width: 880px; max-height: 300px"
                                src="@assets/img/images/img-tenYears-2.png"
                                alt="img"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="section-wrapper" style="margin-bottom: 140px">
            <div class="two-col">
                <div
                    class="ih-item square effect6 from_top_and_bottom square-picture"
                    style=""
                >
                    <a href="#">
                        <div class="img">
                            <img
                                class="two-col-img picture-part"
                                style="max-width: 860px; max-height: 300px"
                                src="@assets/img/images/img-tenYears-3.png"
                                alt="img"
                            />
                        </div>
                    </a>
                </div>
            </div>
            <div class="two-col" style="width: 30%; margin-left: 50px">
                <div class="title-word2" v-if="tenYearsList.length>1">{{tenYearsList[2].name}}</div>
                <div class="info-word top-distance" v-if="tenYearsList.length>1" v-html="tenYearsList[2].contentEditor">
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
            tenYearsList:[]

        };
    },
    mounted() {
        this.getContent()
        this.getList()
    },
    methods: {
        getContent() {
            let params = {
                type: 'tenYearsProfile',
            };
            this.$http
                .get("/qishun/deployServer/nonListInfo", params, this)
                .then((res) => {
                    if (0 === res.code) {
                        this.content = res.result.info.content;
                    } else {
                        // this.$message.error(res.resultMessage);
                    }
                })
                .catch((error) => {
                    // this.$message.error("获取数据失败");
                });
        },
        //获取列表数据
        getList(){
            let params = {};
            this.$http
            .get("/qishun/deployServer/talentPlanList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.tenYearsList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
    },
};
</script>
<style scoped lang="scss">
</style>
<style lang="scss">
</style>