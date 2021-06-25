<template>
    <div class="pg-header-ch">
        <div
            id="topWrapper"
            class="school-top-wrapper school-top-wrapper-middle"
        >
            <div class="school-top">
                <div class="school-menu-img">
                    <a style="cursor:pointer" @click="clickMenu()">
                        <!-- <img src="@assets/img/icon/icon-menu.png" alt="Menu" /> -->
                        <svg class="icon iconicon_liebiao-copy " aria-hidden="true" style="width: 24px;height:19px;">;
                            <use xlink:href="#iconicon_liebiao-copy"></use>
                        </svg>
                    </a>
                </div>
                <div class="school-name-img">
                    <!-- <a class="lg-word-logo" style="cursor:pointer;" @click="goIndex"> -->
                        <!-- <img
                            src="@assets/img/images/img-logo-t.png"
                            alt="齐舜学校·界首"
                        /> -->
                        <div style="cursor:pointer;" @click="goIndex" class="school-log-left-svg-wrapper">
                            <svg class="icon iconlogo_zuhe school-log-left-svg" aria-hidden="true" >;
                                <use xlink:href="#iconlogo_zuhe"></use>
                            </svg>
                        </div>
                    <!-- </a> -->
                </div>
                <div class="school-log" style="cursor:pointer;" @click="goIndex">
                    <!-- <a> -->
                        <svg class="icon iconlogo2 school-log-right-svg" aria-hidden="true" >;
                            <use xlink:href="#iconlogo2"></use>
                        </svg>
                        <!-- <img src="@assets/img/images/img-logo.png" alt="图片"/> -->
                    <!-- </a> -->
                </div>
                <div class="school-home">
                    <a @click="goEnPage()"><span class="school-language">EN</span></a>
                </div>
            </div>
        </div>
        <div class="nav-wrapper-lg-ch">
            <div
                class="nav-item"
                v-for="item in navList"
                :key="item.label"
                :class="{
                    'middle-width': item.label === '新闻与活动',
                    'long-width': item.label === '十年双百颖才计划',
                }"
            >
                <span
                    class="nav-item-name"
                    :class="{
                        active: activeTrans(item.name),
                    }"
                >
                    <span @click="goPage(item.routerName)">{{
                        item.label
                    }}</span>
                    <div class="nav-droplist" v-if="item.children">
                        <div
                            v-for="ele in item.children"
                            :key="ele.label"
                            @click="goPage(ele.routerName)"
                        >
                            {{ ele.label }}
                        </div>
                    </div>
                </span>
            </div>
        </div>
        <div class="nav-wrapper-sm-wrapper" v-if="smMenuFlag">
            <div class="nav-sm-left">
                <div class="nav-sm-close"  @click="closeMenu()">
                    <!-- <img
                        src="@assets/img/icon/icon-close.png"
                        @click="closeMenu()"
                        alt="关闭"
                    /> -->
                    <span style="cursor:pointer;">
                        <svg class="icon iconguanbi " aria-hidden="true" style="width: 26px;height:26px;">;
                            <use xlink:href="#iconguanbi"></use>
                        </svg>
                    </span>
                </div>
                <div class="nav-sm-list">
                    <div
                        class="nav-sm-item"
                        v-for="(item, index) in navList"
                        :key="item.label"
                    >
                        <span
                            class="nav-sm-name"
                            @click="
                                expandNav(
                                    item.children,
                                    index,
                                    item.expandFlag,
                                    item.routerName
                                )
                            "
                            >{{ item.label }}</span
                        >
                        <div class="nav-sm-droplist" v-show="item.expandFlag">
                            <div
                                class="nav-sm-drop-item"
                                v-for="ele in item.children"
                                :key="ele.label"
                                @click="goPage(ele.routerName)"
                            >
                                {{ ele.label }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-sm-right"></div>
        </div>
    </div>
</template>
<script>
export default {
    created() {},
    data() {
        return {
            smMenuFlag: false, //移动端nav显示隐藏
            navList: [
                {
                    label: "学校概况",
                    name: ["page_organizer_ch", "page_profile_ch","page_organizerWord_ch"], //用于高亮
                    routerName: "",
                    children: [
                        {
                            label: "举办者",
                            routerName: "page_organizer_ch",
                        },
                        {
                            label: "界首齐舜学校",
                            routerName: "page_profile_ch",
                        },
                        {
                            label: "创始人的话",
                            routerName: "page_organizerWord_ch",
                        },
                    ],
                },
                {
                    label: "学部介绍",
                    name: [
                        "page_schools_ch",
                        "page_schools_kindgarten_ch",
                        "page_schools_primary_ch",
                        "page_schools_high_ch"
                    ],
                    routerName: "page_schools_ch",
                },
                // {
                //     label: "学校团队",
                //     name: ["page_organizerWord_ch"], //用于高亮
                //     routerName: "",
                //     children: [
                //         {
                //             label: "创始人的话",
                //             routerName: "page_organizerWord_ch",
                //         },
                //         // {
                //         //     label: "教师团队",
                //         //     routerName: "",
                //         // },
                //     ],
                // },
                {
                    label: "新闻与活动",
                    name: "page_news_ch",
                    routerName: "page_news_ch",
                },
                {
                    label: "学校资源",
                    name: "page_resource_ch",
                    routerName: "page_resource_ch",
                },
                {
                    label: "招聘和招生",
                    name: [
                        "page_hireTeacher_ch",
                        "page_graduatesHire_ch",
                        "page_recruitStudents_ch",
                    ], //用于高亮
                    routerName: "",
                    children: [
                        {
                            label: "在职教师招聘",
                            routerName: "page_hireTeacher_ch",
                        },
                        {
                            label: "应届生招聘",
                            routerName: "page_graduatesHire_ch",
                        },
                        {
                            label: "招生",
                            routerName: "page_recruitStudents_ch",
                        },
                    ],
                },
                {
                    label: "十年双百颖才计划",
                    name: "page_tenYears_ch",
                    routerName: "page_tenYears_ch",
                },
            ],
        };
    },
    mounted() {},
    methods: {
        //点击logo跳转到首页
        goIndex(){
            this.$router.push({
                name:'page_index_ch'
            })
        },
        //点击nav跳转到对应页面
        goPage(routerName) {
            this.$router.push({
                name: routerName,
            });
            this.smMenuFlag = false;
        },
        //判断当前路由name是否和二级页面name对应
        activeTrans(name) {
            let routerName = this.$route.name;
            if (name.indexOf(routerName) > -1) {
                return true;
            } else {
                return false;
            }
        },
        // 移动端menu 展开关闭二级下拉菜单
        expandNav(children, index, expandFlag, routerName) {
            this.navList.forEach((item, index) => {
                if (item.expandFlag) {
                    item.expandFlag = false;
                }
            });
            if (children) {
                this.$set(this.navList[index], "expandFlag", !expandFlag);
            } else {
                this.$router.push({
                    name: routerName,
                });
                this.smMenuFlag = false;
            }
        },
        //移动端打开menu
        clickMenu() {
            this.smMenuFlag = true;
            // var top;
            // top =$(this).scrollTop('0');
            // $('body').addClass('body-fixed');
            // $("#fixedNav").attr('class',"active-menu school-nav-content");
            // $('header').addClass('open-menu');
        },
        //移动端关闭menu
        closeMenu() {
            this.smMenuFlag = false;
            // $("#fixedNav").removeClass("active-menu");
            // $('header').removeClass('open-menu');
            // $('body').removeClass('body-fixed')
        },
        //跳转到英文版
        goEnPage(){
            this.$router.push({
                name:'page_index_en'
            })
        }
    },

    components: {},
};
</script>
<style scoped lang="scss">
.pg-header-ch {
    position: relative;
    .open-menu{
        cursor: pointer;
    }
    .school-log-right-svg{
        width: 78px;
        height:78px;
        transform:scale(1.5)
    }
    .school-log-left-svg-wrapper{
        width:352px;
        height: 52px;
        overflow: hidden;
    }
    .school-log-left-svg{
        transform:scale(2.1);
        margin-top: -14%;
        margin-left: 2%;
    }
    /* pc端 nav */
    .nav-wrapper-lg-ch {
        height: 50px;
        background: #1c305c;
        padding-left: 3%;
        padding-right: 3%;
    }
    .nav-item {
        display: inline-block;
        float: left;
        text-align: center;
        font-size: 16px;
        color: #fff;
        width: 16%;
    }
    .nav-item.middle-width {
        width: 15%;
    }
    .nav-item.long-width {
        width: 18.5%;
    }
    .nav-item .nav-item-name {
        display: inline-block;
        height: 50px;
        line-height: 50px;
        cursor: pointer;
        position: relative;
    }
    .nav-item .nav-item-name:hover {
        font-weight: bold;
    }
    .nav-item .nav-item-name.active {
        border-bottom: 6px solid #b6212d;
    }
    .nav-item .nav-item-name .nav-droplist {
        display: none;
        font-size: 16px;
        color: #666;
        font-weight: normal;
        position: absolute;
        left: 15%;
        top: 42px;
        min-width: 160px;
        background: #fff;
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        z-index: 100;
        text-align: left;
        padding: 10px 20px;
        line-height: 38px;
    }
    .nav-item .nav-item-name .nav-droplist div:hover {
        color: #333;
    }
    .nav-item .nav-item-name:hover .nav-droplist {
        display: block;
    }
}

/* 移动端 nav */
.pg-header-ch .nav-wrapper-sm-wrapper {
    display: flex;
    display: -webkit-flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 50;
    animation: fadeRight 0.3s;
    -moz-animation: fadeRight 0.3s;
    -webkit-animation: fadeRight 0.3s;
    .nav-sm-left {
        width: 375px;
        background-color: #fff;
        height: 100%;
        .nav-sm-close {
            height: 82px;
            padding-left: 32px;
            line-height: 82px;
            img {
                cursor: pointer;
            }
        }
        .nav-sm-list {
            padding-left: 32px;
            .nav-sm-item {
                color: #333;
                font-size: 16px;
                .nav-sm-name {
                    height: 40px;
                    line-height: 40px;
                    cursor: pointer;
                    &:hover {
                        color: #0066cc;
                    }
                    &.active {
                        color: #0066cc;
                    }
                }
                .nav-sm-droplist {
                    padding-left: 20px;
                    line-height: 40px;
                    .nav-sm-drop-item {
                        color: #333;
                        cursor: pointer;
                        &:hover {
                            color: #0066cc;
                        }
                    }
                }
            }
        }
    }
    .nav-sm-right {
        background-color: #000;
        opacity: 0.6;
        flex: 1;
    }
}
// 隐藏pc端nav
@media screen and (max-width: 1100px) {
    .pg-header-ch .school-log-right-svg{
        width: 40px;
        height:40px;
    }
    .pg-header-ch .school-log-left-svg-wrapper{
        width:146px;
        height: 28px;
    }
    .pg-header-ch .school-log-left-svg{
        transform:scale(0.8);
        margin-top: -42%;
        margin-left: -52%;
    }
    .pg-header-ch  .nav-wrapper-lg-ch {
        display: none;
    }
}
</style>