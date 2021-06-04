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
                    </span>
                </div>
            </div>
            <!-- <div class="top-section">
                <div class="picture-part-wrapper" style="text-align: right">
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
                <div class="word-part">
                    <span class="words-content" v-html="content">
                        In J. School, we offer Kindergarten education (age 3-6),
                        Primary School (age 7-12), Middle School (age 13-15),
                        and high school (age 16-18) education. J. School has
                        three separate but close-by campuses located in Yingnan
                        New District, Jieshou City. The philosophy of
                        student-centered will be executed on every one of our
                        student throughout the K-12 education. We are also
                        dedicated to implement up-to-the-minute technology such
                        as artificial intelligence, deep learning and etc. to
                        boost teaching and learning efficiency of teachers and
                        students.
                    </span>
                </div>
            </div> -->
            <div class="schools-part en-new">
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
                                        <span class="schools-part-title" v-if="departmentList.length>0"
                                            >{{departmentList[0].name}}
                                        </span>
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
                                    <div class="schools-part-title-info" v-if="departmentList.length>0">
                                        {{departmentList[0].name}}
                                    </div>
                                    <div class="introduce-Info"  v-if="departmentList.length>0">
                                        <span>
                                            {{departmentList[0].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="more-info-button">More</div>
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
                                        <span class="schools-part-title" v-if="departmentList.length>1"
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
                                        {{departmentList[1].name}}
                                    </div>
                                    <div class="introduce-Info" v-if="departmentList.length>1">
                                        <span>
                                            {{departmentList[1].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button">More</div>
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
                                            {{departmentList[2].summaryEditor}}
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button" href="">
                                            More
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
                //     name:'Kindergarten',
                //     editDate:'编辑时间',
                //     summaryEditor:'KindergartenKindergartenKindergartenKindergartenKindergartenKindergarten',
                //     contentEditor:'编辑时间正文正文正文正文正文正文正文正文正文正文正文正文正文'
                // },
                // {
                //     id:2,
                //     name:'Primary And Middle School',
                //     editDate:'编辑时间',
                //     summaryEditor:'Primary And Middle SchoolPrimary And Middle SchoolPrimary And Middle SchoolPrimary And Middle School',
                //     contentEditor:'小学初中部门正文正文正文正文正文正文正文正文正文正文正文正文正文'
                // },
                // {
                //     id:3,
                //     name:'High School',
                //     editDate:'编辑时间',
                //     summaryEditor:'High SchoolHigh SchoolHigh SchoolHigh SchoolHigh School',
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
                type: 'enSchools',
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
                type: 'en',
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
                    routerName = 'page_kindgarten_en';
                    break;
                case 'primary':
                    routerName = 'page_primary_en';
                    break;
                case 'high':
                    routerName = 'page_high_en';
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
