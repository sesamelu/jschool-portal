<template>
    <div class="pg-index-en">
        <article class="content">
            <div class="schools-content">
                <div class="index-first index-first-new " v-if="topList && topList.length>0">
                    <div class="index-picture-part-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <!-- <a href="#"> -->
                                <div class="top-img">
                                    <!-- <img
                                        :src="topList[0].imgUrl"
                                        alt="img"
                                        style="object-fit:cover;"
                                    /> -->
                                    <video width="100%" height="100%" controls="controls">
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
                        Schools
                    </div>
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
                                            <div
                                                class="schools-part-title-info" v-if="departmentList.length>0"
                                            >
                                                {{departmentList[0].name}}
                                            </div>
                                            <div class="introduce-Info"  v-if="departmentList.length>0">
                                                <span >
                                                    {{departmentList[0].summaryEditor}}
                                                </span>
                                            </div>
                                            <div class="more-info-button">
                                                More
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
                                    <a @click="goDepartment('primary')" style="cursor:pointer;">
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
                                                class="schools-part-title-info"
                                                v-if="departmentList.length>1"
                                            >
                                                {{departmentList[1].name}}
                                            </div>
                                            <div  class="introduce-Info" v-if="departmentList.length>1">
                                                <span >
                                                    {{departmentList[1].summaryEditor}}
                                                </span>
                                            </div>
                                            <div class="center-btn">
                                                <div class="more-info-button">
                                                    More
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
                                                <span class="schools-part-title"
                                                v-if="departmentList.length>2"
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
                                            <div
                                                class="schools-part-title-info"
                                                v-if="departmentList.length>2"
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
                                    Academic Intensive
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
                                    Boarding
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
                                    Experienced and Caring Team
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
                                    Enrichment Programs
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
                                <div class="index-word-part right-word">
                                    Excellent Dining
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="height:62px;">
                        <!-- Modern Campus -->
                    </div>
                    <div class="campus-picture campus">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        src="@assets/img/images/index5.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                            <div class="index-word-part left-word">
                                Modern Campus
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
                    Educational Resources and Partners
                </div>
                <div class="other-school en-new" v-if="resourceFlag">
                    <div class="school-item"
                     v-for="item in resourceList"
                    :key="item.id"
                    >
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
                                    class="info info-resource"
                                    style="
                                        background-color: #1c305c;
                                        opacity: 0.76;
                                    "
                                >
                                    <span class="link-word"
                                        >{{item.title}}</span
                                    >
                                </div>
                            </a>
                        </div>
                    </div>
                </div> 
            </div>
        </article>
    </div>
</template>
<script>
import Swiper from 'swiper'
export default {
    name: "en_index",
    created() {},
    data() {
        return {
            topList:[
            ],
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
            resourceFlag: false,
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
                if(item.module === 'enSchoolResource' && item.isShow){
                    this.resourceFlag = true;
                    this.getList()
                }else{
                    this.resourceFlag = false;
                }
            })
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
        //教育资源列表
        getList(){
            let params = {
                type: 'en',
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
        //点击资源 跳转
        goResouce(link){
            window.open(link)
        }
    },

    components: {},
};
</script>
<style lang="scss">
.pg-index-en{
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
 .pg-index-en{
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
        left: 9%;
    }
    .swiper-button-next{
        right: 9%;
    }
    
   
    
}
@media  screen and  (max-width:1200px){
    .pg-index-en {
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
    .pg-index-en {
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
    .pg-index-en {
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
    .pg-index-en {
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