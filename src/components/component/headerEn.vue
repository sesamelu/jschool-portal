<template>
    <div class="pg-header-en">
        <div
            id="topWrapper"
            class="school-top-wrapper school-top-wrapper-middle"
        >
            <div class="school-top">
                <div class="school-menu-img">
                    <a style="cursor:pointer"  @click="clickMenu()"
                        ><img src="@assets/img/icon/icon-menu.png" alt="Menu"
                    /></a>
                </div>
                <div class="school-name-img">
                    <a class="lg-word-logo" style="cursor:pointer;" @click="goIndex"
                        ><img
                            src="@assets/img/images/img-logo-t.png"
                            alt="齐舜学校·界首"
                    /></a>
                </div>
                <div class="school-log" style="cursor:pointer;" @click="goIndex">
                    <a
                        ><img src="@assets/img/images/img-logo.png" alt="图片"
                    /></a>
                </div>
                <div class="school-home">
                    <a @click="goChPage()"
                        ><span class="school-language">中文</span></a
                    >
                </div>
            </div>
        </div>
        <div class="nav-wrapper-lg-ch">
            <div
                class="nav-item"
                v-for="item in navEnList"
                :key="item.label"
                :class="{
                    'middle-width': item.label === 'OUR PEOPLE' || item.label === 'OUR NETWORK',
                    'long-width': item.label === 'NEWS AND EVENTS',
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
                </span>
            </div>
        </div>
        <div class="nav-wrapper-sm-wrapper" v-if="smEnMenuFlag">
            <div class="nav-sm-left">
                <div class="nav-sm-close">
                    <img
                        src="@assets/img/icon/icon-close.png"
                        @click="closeMenu()"
                        alt="关闭"
                    />
                </div>
                <div class="nav-sm-list">
                    <div
                        class="nav-sm-item"
                        v-for="(item, index) in navEnList"
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
    data() {
        return {
            smEnMenuFlag: false, //移动端nav显示隐藏
            navEnList: [
                {
                    label: "ABOUT US",
                    name: "page_profile_en",
                    routerName: "page_profile_en",
                },
                {
                    label: "SCHOOLS",
                    name: [
                        "page_schools_en",
                        "page_kindgarten_en",
                        "page_primary_en",
                        "page_high_en"
                    ],
                    routerName: "page_schools_en",
                },
                {
                    label: "OUR PEOPLE",
                    name: "page_organizerword_en",
                    routerName: "page_organizerword_en",
                },
                {
                    label: "NEWS AND EVENTS",
                    name: "page_news_en",
                    routerName: "page_news_en",
                },
                {
                    label: "OUR NETWORK",
                    name: "page_resource_en",
                    routerName: "page_resource_en",
                },
                {
                    label: "JOB OPENING",
                    name: "page_jobworking_en",
                    routerName: "page_jobworking_en",
                },
            ],
        };
    },
    mounted() {},
    methods: {
        //点击logo跳转到首页
        goIndex(){
            this.$router.push({
                name:'page_index_en'
            })
        },
        //点击nav跳转到对应页面
        goPage(routerName) {
            this.$router.push({
                name: routerName,
            });
            this.smEnMenuFlag = false;
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
            this.navEnList.forEach((item, index) => {
                if (item.expandFlag) {
                    item.expandFlag = false;
                }
            });
            if (children) {
                this.$set(this.navEnList[index], "expandFlag", !expandFlag);
            } else {
                this.$router.push({
                    name: routerName,
                });
                this.smEnMenuFlag = false;
            }
        },
        //移动端打开menu
        clickMenu() {
            this.smEnMenuFlag = true;
            // var top;
            // top =$(this).scrollTop('0');
            // $('body').addClass('body-fixed');
            // $("#fixedNav").attr('class',"active-menu school-nav-content");
            // $('header').addClass('open-menu');
        },
        //移动端关闭menu
        closeMenu() {
            this.smEnMenuFlag = false;
            // $("#fixedNav").removeClass("active-menu");
            // $('header').removeClass('open-menu');
            // $('body').removeClass('body-fixed')
        },
        //跳转到中文版
        goChPage(){
            this.$router.push({
                name:'page_index_ch'
            })
        }
    },
};
</script>
<style scoped lang="scss">
.pg-header-en {
    position: relative;
    /* pc端 nav */
    .nav-wrapper-lg-ch {
        height: 50px;
        background: #1c305c;
        padding-left: 3%;
        padding-right: 3%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
    }
    .nav-item {
        display: inline-block;
        float: left;
        text-align: center;
        font-size: 16px;
        color: #fff;
        width: 13%;
    }
    .nav-item.middle-width {
        width: 15%;
    }
    .nav-item.long-width {
        width: 17%;
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
.pg-header-en .nav-wrapper-sm-wrapper {
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
    .pg-header-en .nav-wrapper-lg-ch {
        display: none;
    }
}
</style>