<template>
    <div class="pg-news-en">
        <div class="schools-content">
            <div class="swiper-container" v-if="swiperList && swiperList.length>0">
                <div class="left-mask">
                </div>
                <div class="right-mask">
                </div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide index-first index-first-new "
                    v-for="item in swiperList"
                    :key="item.id">
                        <div class="index-picture-part-wrapper">
                            <div
                                class="ih-item square effect6 from_top_and_bottom square-picture"
                            >
                                <!-- <a href="#"> -->
                                    <div class="swiper-img">
                                        <img
                                            :src="item.imgLink"
                                            alt="img"
                                            style="width:100%;object-fit:cover;"
                                        />
                                    </div>
                                <!-- </a> -->
                            </div>
                        </div>
                        <div class="index-word-part index-word-location index-new">
                            <span class="index-words-content"
                                >{{item.title}}</span
                            >
                        </div>
                    </div>
                </div>
                <div class="swiper-button-prev swiper-button-white"></div>
                <div class="swiper-button-next swiper-button-white"></div>
            </div>
            <div class="swiper-pagination-wrapper" v-if="swiperList && swiperList.length>0">
                <div class="swiper-pagination"></div>
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
import Swiper from 'swiper'
export default {
    data() {
        return {
            swiperList:[
                // {
                //     id:1,
                //     imgLink:'http://www.jschool.org.cn/img/images/index1.png',
                //     title:'从幼儿园到高中，从入学到大学；家长无忧，孩子开心，测试很擅长很长二环内很长超级长的文字适出角度看是否就收到回复',
                //     editDate:'2021-01-11 12:00:21',
                // },
                // {
                //     id:2,
                //     imgLink:'http://www.jschool.org.cn/img/images/index1.png',
                //     title:'随便写的',
                //     editDate:'2021-01-11 12:00:21',
                // },
                // {
                //     id:3,
                //     imgLink:'http://www.jschool.org.cn/img/images/index1.png',
                //     title:'活动照片',
                //     editDate:'2021-01-11 12:00:21',
                // },
                // {
                //     id:4,
                //     imgLink:'http://www.jschool.org.cn/img/images/index1.png',
                //     title:'随便写的',
                //     editDate:'2021-01-11 12:00:21',
                // },
                // {
                //     id:5,
                //     imgLink:'http://www.jschool.org.cn/img/images/index1.png',
                //     title:'随便写的',
                //     editDate:'2021-01-11 12:00:21',
                // },
            ],
            newsList:[],
            isEnd:true,
            // expandFlag:false
            pageNumber:1
        };
    },
    mounted() {
        this.getList()
        this.getSwiperList()
    },
    methods: {
        // 初始化轮播图
        initSwiper(){
            new Swiper ('.swiper-container', {
                loop: true,
                initialSlide :0,
                spaceBetween: 20,
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // paginationBulletRender: function (swiper, index, className) {
                //     return '<span class="'+className+'" style="width:60px;height:4px;border-radius:0;display:inline-block;margin-right:16px;"></span>';
                // },
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                // slidesOffsetBefore:100,
                // slidesOffsetAfter:100,
                // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
                //如果需要自动切换海报
                autoplay: 3000,
        })
        },
        //获取轮播图列表数据
        getSwiperList(){
            let params = {
                type: 'en',
            };
            this.$http.get("/qishun/deployServer/homePageList", params, this)
                .then((res) => {
                    if (0 === res.code) {
                        this.swiperList = res.result.list;
                    } else {
                        // this.$message.error(res.resultMessage);
                    }
                })
                .catch((error) => {
                    // this.$message.error("获取轮播图列表失败");
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
    updated(){
        this.initSwiper()

    },
};
</script>
<style scoped lang="scss">
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */
.pg-news-en {
    // 轮播图
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
<style lang="scss">
 .pg-news-en {
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
    .pg-news-en {
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
    .pg-news-en {
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
    .pg-news-en {
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
    .pg-news-en {
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