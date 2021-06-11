<template>
    <div class="pg-news-en">
        <div class="schools-content">
            <div class="index-first index-first-new " v-if="topList && topList.length>0">
                <div class="index-picture-part-wrapper">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <!-- <a href="#"> -->
                            <div class="top-img">
                                <img
                                    :src="topList[0].imgUrl"
                                    alt="img"
                                    style="object-fit:cover;"
                                />
                                <span class="play-icon" v-if="topList[0].type === '2'" @click="goDetail(topList[0].id)">
                                    <!-- <img
                                        src="@assets/img/icon/play-icon.png"
                                        style="width: 100%"
                                    /> -->
                                    <svg class="icon iconbofang " aria-hidden="true" style="width: 100%;height:100%;">;
                                        <use xlink:href="#iconbofang"></use>
                                    </svg>
                                </span>
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
                <div class="index-word-part index-word-location index-new">
                    <span class="index-words-content"
                        >{{topList[0].title}}</span
                    >
                    <span class="learn-more" @click="goDetail(topList[0].id)">
                        了解更多
                    </span>
                </div>
            </div>
        </div>
        <div class="pg-news-wrapper">            
            <!-- 列表 -->
            <div class="row" style="margin-left:0;margin-right:0;">
                <div class="col-xs-12 col-sm-6 col-md-4"
                v-for="item in newsList"
                :key="item.id"
                >
                    <div class="thumbnail" @click="goDetail(item.id)">
                        <div class="img-wrapper" v-if="item.imgUrl" >
                            <img
                                :src="item.imgUrl"
                                style="width: 100%;height:100%;object-fit:cover;"
                            />
                            <span class="play-icon" v-if="item.type === '2'">
                                <!-- <img
                                    src="@assets/img/icon/play-icon.png"
                                    style="width: 80%"
                                /> -->
                                <svg class="icon iconbofang " aria-hidden="true" style="width: 90%;height:90%;">;
                                    <use xlink:href="#iconbofang"></use>
                                </svg>
                            </span>
                        </div>
                        <div class="img-wrapper" v-else>
                            <img
                                src="@assets/img/images/news-list-default.png"
                                style="width: 100%;height:100%;object-fit:cover;"
                            />
                        </div>
                        <div class="caption">
                            <div class="news-title">{{item.title}}</div>
                            <div class="news-date">
                                <i class="iconfont iconrili"></i>
                                {{item.editDate}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="more-wrapper">
                <div class="expand" @click="expandMore" v-show="!isEnd">
                    <span>展开更多
                        <i class="iconfont iconicon_xiangxia"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            topList:[
            ],
            newsList:[],
            isEnd:true,
            // expandFlag:false
            pageNumber:1
        };
    },
    mounted() {
        this.getTop()
        this.getList()
    },
    methods: {
        getTop(){
            let params = {
                type: 'en',
                isTop: 1, //1-是，0-否，不传-返回所有
                pageSize:1,
                pageNumber: 1
            };
            this.$http
            .get("/qishun/deployServer/newsList", params, this)
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
        getList(){
            let params = {
                type: 'en',
                isTop: 0, //1-是，0-否，不传-返回所有
                pageSize:6,
                pageNumber: this.pageNumber
            };
            this.$http
            .get("/qishun/deployServer/newsList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.newsList.push(...res.result.list)
                    this.isEnd = res.result.isEnd;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        //展开更多
        expandMore(){
            //判断是否还有可展开的内容，如果有把数据push进list，如果没有隐藏按钮
            if(!this.isEnd){
                this.pageNumber++;
                this.getList()
            }
        },
        //跳转到详情页
        goDetail(id){
            this.$router.push({
                name:'page_news_detail_en',
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
.pg-news-en {
    .top-img{
        height: 200px;
        position: relative;
        .play-icon{
            cursor: pointer;
            width: 60px;
            height: 60px;
            position: absolute;
            left:50%;
            top:50%;
            transform: translate(-40%, -50%);
        }

    }
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
        margin-top: 40px;
        .thumbnail{
            cursor: pointer;
            .caption{
                padding: 10px 20px;
                .news-title{
                    font-size: 16px;
                    color:#1C305C;
                    line-height: 24px;
                    height:48px;
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
    .pg-news-en {
        .top-img{
            height: 500px;
            .play-icon{
                width: 60px;
                height: 60px;
            }
        }
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
    .pg-news-en {
        .top-img{
             height: 600px;
            .play-icon{
                width: 60px;
                height: 60px;
            }
        }
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
    .pg-news-en {
        .top-img{
            height: 600px;
            .play-icon{
                width: 80px;
                height: 80px;
            }
        }
        .pg-news-wrapper {
            padding: 0 12%;
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
.pg-news-en{
    .thumbnail{
        padding: 0;
        border: none;
        box-shadow: 0px 3px 12px 0px rgba(28, 48, 92, 0.15);
        border-radius: 8px;
        .img-wrapper{
            position: relative;
            height: 236px;
            .play-icon{
                position: absolute;
                width: 60px;
                height: 60px;
                left:50%;
                top:50%;
                transform: translate(-40%, -50%);
            }
        }
    }

}

</style>