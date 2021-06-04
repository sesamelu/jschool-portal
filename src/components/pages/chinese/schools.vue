<template>
    <div>
        <div class="schools-content">
            <div class="top-section top-section-new">
                <div
                    class="picture-part-wrapper picture-part-wrapper-new"
                    style="text-align: right"
                >
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                        style=""
                    >
                        <a href="#">
                            <div class="img">
                                <img
                                    class="picture-part"
                                    src="@assets/img/images/img-schools.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="word-part word-part-new summary-wrapper">
                    <span class="words-content" v-html="content">
                        <!-- 界首齐舜学校由幼儿园、小学部、初中部、高中部组成。学校对各学部集中、统一管理，以确保学生安全和教学质量。齐舜办学团队以学生为中心的理念将一以贯之地落实在每个学部和每位学生身上。在知识学习方面,学校将实施采用集中化的教学信息系统，该系统利用人工智能技术和大数据,帮助老师从出卷、阅卷等重复性机械劳动中解放出来，从而有更多的时间用于教研和教学;同时,该信息系统可以准确地测试、记录及预测每一位学生的知识掌握状况.帮助学生实现个性化、更高效地学习。 -->
                        </span
                    >
                </div>
            </div>
            <div class="schools-part">
                <div class="schools-part-item">
                    <div
                        class="kindergarten"
                        onmouseover="showkindergartenInfo()"
                        onmouseout="showkindergartenTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a @click="goDepartment('kindgarten')" style="cursor:pointer;">
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-kindergarten.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-kindergarten-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-kindergarten.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title"  v-if="departmentList.length>0"
                                            >{{departmentList[0].name}}</span
                                        >
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-kindergarten.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info"  v-if="departmentList.length>0">
                                        {{departmentList[0].name}}
                                    </div>
                                    <div class="introduce-Info"  v-if="departmentList.length>0" >
                                        <span>
                                            {{departmentList[0].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="more-info-button">了解更多</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="schools-part-item">
                    <div
                        class="primary-junior-school"
                        onmouseover="showPrimaryInfo()"
                        onmouseout="showPrimaryTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a @click="goDepartment('primary')" style="cursor:pointer;">
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-primary.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-primary-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-primary.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title"  v-if="departmentList.length>1"
                                            >{{departmentList[1].name}}</span
                                        >
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-primary.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info" v-if="departmentList.length>1">
                                        {{ departmentList[1].name}}
                                    </div>
                                    <div class="introduce-Info" v-if="departmentList.length>1">
                                        <span>
                                            {{ departmentList[1].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button">
                                            了解更多
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="schools-part-item high">
                    <div
                        class="high-school"
                        onmouseover="showHighInfo()"
                        onmouseout="showHighTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a @click="goDepartment('high')" style="cursor:pointer;">
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-high.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-high-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-high.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title" v-if="departmentList.length>2"
                                            >{{departmentList[2].name}}</span
                                        >
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-high.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info" v-if="departmentList.length>2">
                                        {{departmentList[2].name}}
                                    </div>
                                    <div class="introduce-Info" v-if="departmentList.length>2">
                                        <span>
                                            {{ departmentList[2].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button" href="">
                                            了解更多
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:"",
            //学部介绍
            departmentList:[
                // {
                //     id:1,
                //     name:'幼儿园',
                //     editDate:'编辑时间',
                //     summaryEditor:'编辑时间概要编辑概要编辑概要编辑概要编辑概要编辑概要编辑',
                //     contentEditor:'编辑时间正文正文正文正文正文正文正文正文正文正文正文正文正文'
                // },
                // {
                //     id:2,
                //     name:'小学初中部',
                //     editDate:'编辑时间',
                //     summaryEditor:'小学初中部门概要编辑概要编辑概要编辑概要编辑概要编辑概要编辑',
                //     contentEditor:'小学初中部门正文正文正文正文正文正文正文正文正文正文正文正文正文'
                // },
                // {
                //     id:3,
                //     name:'高中部',
                //     editDate:'编辑时间',
                //     summaryEditor:'高中部概要编辑概要编辑概要编辑概要编辑概要编辑概要编辑',
                //     contentEditor:'高中部正文正文正文正文正文正文正文正文正文正文正文正文正文'
                // }
            ],
        };
    },
    mounted() {
        this.getContent()
        this.getDepartmentList()
    },
    methods: {
         getContent() {
            let params = {
                type: 'schools',
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
        //获取学部介绍列表数据
        getDepartmentList(){
            let params = {
                type: 'ch',
            };
            this.$http
            .get("/qishun/deployServer/departmentList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.departmentList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        //点击学部跳转
        goDepartment(type){
            let routerName = "";
            switch(type){
                case 'kindgarten':
                    routerName = 'page_schools_kindgarten_ch';
                    break;
                case 'primary':
                    routerName = 'page_schools_primary_ch';
                    break;
                case 'high':
                    routerName = 'page_schools_high_ch';
                    break;
            }
            this.$router.push({
                name: routerName
            })

        },
    },
};
</script>
<style scoped lang="scss">
</style>
<style lang="scss">
</style>