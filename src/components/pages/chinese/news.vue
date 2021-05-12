<template>
    <div class="pg-news">
        <div class="schools-content">
            <div class="index-first index-first-new ">
                <div class="index-picture-part-wrapper">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="#">
                            <div class="img">
                                <img
                                    src="@assets/img/images/index1.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="index-word-part index-word-location index-new">
                    <span class="index-words-content"
                        >从幼儿园到高中，从入学到大学；家长无忧，孩子开心，测试很擅长很长二环内很长超级长的文字适出角度看是否就收到回复</span
                    >
                    <span class="learn-more">
                        了解更多
                    </span>
                </div>
            </div>
        </div>
        <div class="pg-news-wrapper">            
            <!-- 列表 -->
            <div class="row">
                <div class="col-xs-12 col-sm-6 col-md-4"
                v-for="item in newsList"
                :key="item.id"
                >
                    <div class="thumbnail" @click="goDetail(item.id)">
                        <div class="img-wrapper">
                            <img
                                :src="item.img"
                                style="width: 100%"
                            />
                            <span class="play-icon" v-if="item.type === 2">
                                <img
                                    src="@assets/img/icon/play-icon.png"
                                    style="width: 80%"
                                />
                            </span>
                        </div>
                        <div class="caption">
                            <div class="news-title">{{item.title}}</div>
                            <div class="news-date">{{item.editDate}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-wrapper">
                <div class="expand" @click="expandMore">
                    <span>展开更多</span>
                    →
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsList:[
                {
                    id:1,
                    type:1,//1是图片，2是视频
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:2,
                    type:2,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:3,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:4,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:5,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:6,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
            ]
        };
    },
    mounted() {},
    methods: {
        //展开更多
        expandMore(){
            //判断是否还有可展开的内容，如果有把数据push进list，如果没有隐藏按钮
            this.newsList.push({
                    id:7,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },
                {
                    id:8,
                    title:'最多展示两行超出用省略号展示的是佛教的护法，的机会翻江倒海积分兑换附件',
                    editDate:'2020-03-30',
                    img:'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png',
                },)
        },
        //跳转到详情页
        goDetail(id){
            this.$router.push({
                name:'page_news_detail_ch',
                params:{
                    id:id
                }
            })
        }
    },
};
</script>
<style scoped lang="scss">
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */
.pg-news {
    //头条
    .index-words-content{
        width: 86%;
    }
    .index-word-location{
        display: flex;
        align-items: center;
    }
    //了解更多
    .learn-more{
        cursor: pointer;
        display: inline-block;
        width: 128px;
        height: 36px;
        border: 1px solid #FFFFFF;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        line-height: 36px;
        text-align: center;
    }
    .pg-news-wrapper {
        padding: 0 3%;
        .thumbnail{
            cursor: pointer;
            .caption{
                padding: 10px 20px;
                .news-title{
                    font-size: 16px;
                    color:#1C305C;
                    line-height: 26px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                     text-overflow: -o-ellipsis-lastline;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                .news-date{
                    font-size: 14px;
                    color: #8D97AD;
                    font-weight: normal;
                    line-height: 38px;
                }
            }
        }
    }
    // 展开更多
    .more-wrapper{
        margin: 38px 0 90px 0;
        .expand{
            cursor: pointer;
            width: 128px;
            height: 36px;
            border: 1px solid #B6212D;
            line-height: 36px;
            text-align: center;
            font-size: 16px;
            color: #B6212D;
            margin: 0 auto;
            font-family: Microsoft YaHei;
            font-weight: 400;
        }
    }
}
/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {
    .pg-news {
        .pg-news-wrapper {
            padding: 0 3%;
            .thumbnail{
                .caption{
                    padding: 10px 20px;
                    .news-title{
                        font-size: 18px;
                    }
                    .news-date{
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
    .pg-news {
        .pg-news-wrapper {
            padding: 0 5%;
            .thumbnail{
                .caption{
                    padding: 10px 20px;
                    .news-title{
                        font-size: 18px;
                    }
                    .news-date{
                        font-size: 16px;
                    }
                }
            }
        }
    }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {
    .pg-news {
        .pg-news-wrapper {
            padding: 0 14%;
            .thumbnail{
                .caption{
                    padding: 10px 20px;
                    .news-title{
                        font-size: 18px;
                    }
                    .news-date{
                        font-size: 16px;
                    }
                }
            }
        }
    }
}



</style>
<style lang="scss">
.pg-news{
    .thumbnail{
        padding: 0;
        border: none;
        box-shadow: 0px 3px 12px 0px rgba(28, 48, 92, 0.15);
        border-radius: 8px;
        .img-wrapper{
            position: relative;
            .play-icon{
                position: absolute;
                left:50%;
                top:50%;
                transform: translate(-40%, -50%);
            }
        }
    }

}

</style>