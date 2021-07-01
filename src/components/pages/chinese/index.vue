<template>
    <div class="pg-index-ch">
        <article class="content">
            <div class="schools-content">
                <div class="index-first index-first-new " v-if="topList && topList.length>0">
                    <div class="index-picture-part-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <!-- <a href="#"> -->
                                <div class="top-img">
                                    <video width="100%" height="100%" controls="controls" >
                                        <source :src="topList[0].vedioLink" type="video/mp4" />
                                    </video>
                                    <div class="vedio-title">
                                        {{topList[0].title}}
                                    </div>
                                </div>
                                <!-- <div class="img" v-if="topList[0].type === '1'">
                                    <img
                                        :src="topList[0].imgUrl"
                                        alt="img"
                                    />
                                </div> -->
                                <!-- <div style="text-align:center;" v-else>
                                    <video width="94%" height="94%" controls="controls" autoplay="autoplay">
                                        <source :src="topList[0].videoUrl" type="video/mp4" />
                                    </video>
                                </div> -->
                            <!-- </a> -->
                        </div>
                    </div>
                    <!-- <div class="index-word-part index-word-location index-new">
                        <span class="index-words-content"
                            >{{topList[0].title}}</span
                        >
                        <span class="learn-more" @click="goDetail(topList[0].id)">
                            了解更多
                        </span>
                    </div> -->
                </div>
                <div class="schools">
                    <div class="school-introduce school-introduce-new">
                        学部介绍
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
                                    <a @click="goDepartment('kindgarten',departmentList[0].id)" style="cursor:pointer;">
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
                                                </div>
                                                <span class="schools-part-title" v-if="departmentList.length>0"
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
                                            <div
                                                class="schools-part-title-info" v-if="departmentList.length>0"
                                            >
                                                {{departmentList[0].name}}
                                            </div>
                                            <div class="introduce-Info" v-if="departmentList.length>0" >
                                                <span>
                                                    {{departmentList[0].summaryEditor}}
                                                </span>
                                            </div>
                                            <div class="more-info-button">
                                                了解更多
                                            </div>
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
                                    <a @click="goDepartment('primary',departmentList[1].id)" style="cursor:pointer;">
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
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
                                            <div
                                                class="schools-part-title-info" v-if="departmentList.length>1"
                                            >
                                                {{departmentList[1].name}}
                                            </div>
                                            <div class="introduce-Info" v-if="departmentList.length>1">
                                                <span>
                                                    {{departmentList[1].summaryEditor}}
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
                                    <a @click="goDepartment('high',departmentList[2].id)" style="cursor:pointer;">
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
                                                </div>
                                                <span class="schools-part-title" v-if="departmentList.length>2"
                                                    >{{ departmentList[2].name}}</span
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
                                            <div
                                                class="schools-part-title-info" v-if="departmentList.length>2"
                                            >
                                                {{departmentList[2].name}}
                                            </div>
                                            <div class="introduce-Info" v-if="departmentList.length>2">
                                                <span >
                                                    {{departmentList[2].summaryEditor}}
                                                </span>
                                            </div>
                                            <div class="center-btn">
                                                <div
                                                    class="more-info-button"
                                                    href=""
                                                >
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

                <div class="index-second-part">
                    <div class="second-left">
                        <div class="second-left-content">
                            <div class="left-wrapper">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index2.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index2-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part left-word">
                                    <div>严格的学校管理</div>
                                    <div>全天紧张的学习安排</div>
                                    <div>确保孩子优异的学习成绩</div>
                                </div>
                            </div>
                            <div class="left-wrapper">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index6.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index6-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part left-word">
                                    <div>寄宿制</div>
                                    <div>省去家长接送以及课外辅导的烦恼</div>
                                    <div>确保孩子在学校的安全和学习</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-right">
                        <div class="second-right-content">
                            <div class="right-wrapper right-1">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index3.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index3-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word">
                                    <div>有经验的学校领导班子</div>
                                    <div>高质量的教师队伍</div>
                                    <div>确保孩子学得轻松效率高</div>
                                </div>
                            </div>
                            <div class="right-wrapper right-2">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index4.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index4-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word">
                                    <div>丰富的学生课外活动</div>
                                    <div>与北京上海和国外频繁的交流</div>
                                    <div>确保孩子全面发展视野广</div>
                                </div>
                            </div>
                            <div class="right-wrapper right-3">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index7.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index7-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word" >
                                    <div>安全健康的食堂和舒适的宿舍</div>
                                    <div>保证孩子的身体成长和良好睡眠</div>
                                    <div>确保孩子身体好</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="campus" style="height:62px;">
                    <!-- <div class="index-campus index-campus-word">
                        <div>
                            设施齐全、装修一流的新校园，确保良好的学习环境
                        </div>
                        <div></div>
                        （室内中央空调、400米跑道的操场、完善的体育文艺设施）
                    </div> -->
                </div>
                <div class="campus-picture campus">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="#">
                            <div class="img">
                                <img src="@assets/img/images/index5.png" alt="img" />
                            </div>
                        </a>
                        <div class="index-word-part left-word">
                            <div>设施齐全、装修一流的新校园，确保良好的学习环境</div>
                            <div>（室内中央空调、400米跑道的操场、完善的体育文艺设施）</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height:80px;" v-if="!resourceFlag"></div>
            <div
                class="school-introduce school-introduce-new"
                style="text-align: center"
                 v-if="resourceFlag"
            >
                教育资源及合作伙伴
            </div>
            <div class="other-school"  v-if="resourceFlag">
                <div class="school-item" 
                v-for="item in resourceList"
                :key="item.id">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a @click="goResouce(item.link)" style="cursor:pointer;">
                            <div class="img">
                                <img
                                    :src="item.logoUrl"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource info-resource-second"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word"
                                    >{{item.title}}</span
                                >
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name: "chinese_index",
    created() {},
    data() {
        return {
            topList:[],
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
            // 教育资源及合作伙伴
            resourceList: [
                // {
                //     id: 1,
                //     title: "Francis",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
                // {
                //     id: 2,
                //     title: "Francis Parker School",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
                // {
                //     id: 3,
                //     title: "德威英国",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
                // {
                //     id: 4,
                //     title: "Francis",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
                // {
                //     id: 5,
                //     title: "Francis Parker School",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
                // {
                //     id: 6,
                //     title: "德威英国",
                //     link: "https://www.francisparker.org/page",
                //     logoUrl: "http://www.jschool.org.cn/img/images/FPS%20Logo-index.png",
                //     editDate: "2021-01-11 12:00:21",
                // },
            ], 
            resourceFlag:false,
        };
    },
    mounted() {
        this.getTopList()
        this.getDepartmentList()
        this.getResourceFlag()
        
    },
    methods: {
        getTopList(){
            let params = {
                type: 'ch'
            };
            this.$http
            .get("/qishun/deployServer/homePageVideoList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.topList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
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
        //教育资源是否显示
        getResourceFlag(){
            this.$http
            .get("/qishun/deployServer/qrySwitch", {}, this)
            .then((res) => {
                if (0 === res.code) {
                    this.navTrans(res.result.list);
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        navTrans(list){
            list.forEach((item,index)=>{
                if(item.module === 'chSchoolResource' && item.isShow){
                    this.resourceFlag = true;
                    this.getList()
                }else{
                    this.resourceFlag = false;
                }
            })
        },
        //教育资源列表
        getList(){
            let params = {
                type: 'ch',
                pageSize: 6,
                pageNumber: 1
            };
            this.$http
            .get("/qishun/deployServer/schoolResourceList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.resourceList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        //点击学部跳转
        goDepartment(type,id){
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
                name: routerName,
                // query:{
                //     id:id
                // }
            })

        },
        //点击资源 跳转
        goResouce(link){
            window.open(link)
        }
        
    },

    components: {},
};
</script>
<style scoped lang="scss">
.pg-index-ch{
    
    .swiper-container{
        // width: 90%;
        .left-mask{
            width: 6%;
            height:100%;
            background: #fff;
            // background: linear-gradient(to right,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0)); 
            opacity: 0.4;
            position: absolute;
            top:0;
            left:0;
            z-index: 100;
        }
        .right-mask{
            width: 6%;
            height:100%;
            background: #fff;
            opacity: 0.4;
            position: absolute;
            top:0;
            right:0;
            z-index: 100;
        }
        
    }
    
}

</style>
<style lang="scss">
 .pg-index-ch {
     .top-img{
        .vedio-title{
            font-size: 24px;
            color: #1C305C;
            font-weight: bold;
            text-align: left;
            line-height: 48px;
        }
    }
     .swiper-img{
         height:600px;
     }
     .swiper-slide{
        width: 86%;
    }
    .swiper-pagination{
        position: relative;
        margin: 0 auto;
        .swiper-pagination-bullet{
            background: #E1E4EB;
            opacity: 1;
            width: 60px;
            height:4px;
            border-radius: 0;
            display:inline-block;
            margin-right:16px;
        }
        .swiper-pagination-bullet-active{
            background: #A8B1C6;
        }
    }
    .swiper-button-prev{
        left: 10%;
    }
    .swiper-button-next{
        right: 10%
    }
    
   
    
}
@media  screen and  (max-width:1200px){
    .pg-index-ch {
        .top-img{
            .vedio-title{
                font-size: 18px;
                line-height: 32px;
            }
        }
        .swiper-img{
            height:300px;
        }
        .swiper-pagination{
            .swiper-pagination-bullet{
                width: 60px;
                height:4px;
            }
        }
        .swiper-slide{
            width: 86%;
        }
        
    }
}
@media  screen and  (max-width:800px){
    .pg-index-ch {
        .top-img{
            .vedio-title{
                font-size: 14px;
                line-height: 30px;
            }
        }
        .swiper-img{
            height:240px;
        }
        .swiper-pagination{
            .swiper-pagination-bullet{
                width: 48px;
                height:3px;
            }
        }
        .swiper-button-prev,.swiper-button-next{
            display: none;
        }
        .swiper-slide{
            width: 100%;
        }
        .left-mask,.right-mask{
            display: none;
        }
    }    
}
@media  screen and  (max-width:550px){
    .pg-index-ch {
        .top-img{
            .vedio-title{
                font-size: 14px;
                line-height: 28px;
            }
        }
        .swiper-img{
            height:200px;
        }
        .swiper-pagination{
            .swiper-pagination-bullet{
                width: 36px;
                height:3px;
            }
        }
        .swiper-button-prev,.swiper-button-next{
            display: none;
        }
        .swiper-slide{
            width: 100%;
        }
        .left-mask,.right-mask{
            display: none;
        }
    }          
}
@media  screen and  (max-width:420px){
    .pg-index-ch {
        .top-img{
            .vedio-title{
                font-size: 14px;
                line-height: 28px;
            }
        }
        .swiper-img{
            height:200px;
        }
        .swiper-pagination{
            .swiper-pagination-bullet{
                width: 36px;
                height:3px;
            }
        }
        .swiper-button-prev,.swiper-button-next{
            display: none;
        }
        .swiper-slide{
            width: 100%;
        }
        .left-mask,.right-mask{
            display: none;
        }
    }
}

</style>