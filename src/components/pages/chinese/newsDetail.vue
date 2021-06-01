<template>
    <div class="pg-news-detail">
        <div class="news-detail-container">
            <div class="news-bread">
                <span class="bread-line"></span>
                <span class="bread-title" @click="goHome">首页</span>
                <span class="gt-icon">&gt;</span>
                <span class="bread-title" @click="goList">新闻与活动</span>
                <span class="gt-icon">&gt;</span>
                <span class="bread-active">{{title}}</span>
            </div>
            <div class="news-title">
                {{title}}
            </div>
            <div class="news-date">
                <i class="iconfont iconrili" style="margin-right:6px;"></i>{{editDate}}
            </div>
            <div class="img-wrapper" v-if="type === '1'">
                <img :src="imgUrl"/>
            </div>
            <div class="img-wrapper" style="text-align:center;" v-else>
                <video width="94%" height="94%" controls="controls" autoplay="autoplay">
                    <source :src="videoUrl" type="video/mp4" />
                </video>
            </div>
            <div class="news-contant" v-html="content">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'',
            type:'1',
            editDate:'',
            imgUrl:'',
            videoUrl:'',
            content:''

        }
    },
    mounted(){
        this.getContent()
    },
    methods:{
        getContent(){
            if(this.$route.params.id){
                let params = {
                    id: this.$route.params.id,
                };
                this.$http
                .get("/qishun/deployServer/newsInfo", params, this)
                .then((res) => {
                    if (0 === res.code) {
                        this.title = res.result.info.title;
                        this.type = res.result.info.type;
                        this.editDate = res.result.info.editDate;
                        this.imgUrl = res.result.info.imgUrl;
                        this.videoUrl = res.result.info.videoUrl;
                        this.content = res.result.info.content;                        
                    } else {
                        // this.$message.error(res.resultMessage);
                    }
                })
                .catch((error) => {
                    // this.$message.error("获取数据失败");
                });

            }
        },
        goHome(){
            this.$router.push({
                name:'page_index_ch'
            })
        },
        goList(){
            this.$router.push({
                name:'page_news_ch'
            })
        }

    }
}
</script>
<style scoped lang="scss">
.pg-news-detail{
    .news-detail-container{
        width: 100%;
        margin: 0 auto;
        //面包屑
        .news-bread{
            font-size: 16px;
            color: #666666;
            display: flex;
            align-items: center;
            padding: 20px 0 20px 6%;
            .bread-line{
                width:4px;
                height:16px;
                display: inline-block;
                background: #1C305C;
                margin-right:9px;
            }
            .bread-title{
                cursor: pointer;
            }
            .bread-title:hover{
                color: #1C305C;
            }
            .bread-active{
                color: #1C305C
            }
            .gt-icon{
                margin: 0 10px;
            }

        }
        //标题
        .news-title{
            font-size: 36px;
            color:#B6212D;
            font-weight: bold;
            text-align: center;
        }
        //日期
        .news-date{
            font-size: 16px;
            color: #1C305C;
            text-align: center;
            margin: 20px 0 20px 0;
        }
        //图片或者视频
        .img-wrapper{
            img{
                width: 100%;
            }
        }
        //内容
        .news-contant{
            font-size: 16px;
            color: #333333;
            padding: 0 6%;
            margin-top: 32px;
            margin-bottom: 39px;
        }
    }
}
/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) {
    .pg-news-detail{
        .news-detail-container{
            width: 100%;
            //面包屑
            .news-bread{
                font-size: 16px;
                padding: 20px 0 20px 6%;
            }
            //标题
            .news-title{
                font-size: 36px;
            }
            //日期
            .news-date{
                font-size: 16px;
            }
            //图片或者视频
            .img-wrapper{
                img{
                    width: 100%;
                }
            }
            //内容
            .news-contant{
                font-size: 16px;
                padding: 0 6%;
            }
        }
    }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) {
    .pg-news-detail{
        .news-detail-container{
            width: 100%;
            //面包屑
            .news-bread{
                font-size: 16px;
                padding: 20px 0 20px 6%;
            }
            //标题
            .news-title{
                font-size: 36px;
            }
            //日期
            .news-date{
                font-size: 16px;
            }
            //图片或者视频
            .img-wrapper{
                img{
                    width: 100%;
                }
            }
            //内容
            .news-contant{
                font-size: 16px;
                padding: 0 6%;
            }
        }
    }
}

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) {
    .pg-news-detail{
        .news-detail-container{
            width: 80%;
            //面包屑
            .news-bread{
                font-size: 16px;
                padding: 20px 0 20px 6%;
            }
            //标题
            .news-title{
                font-size: 36px;
            }
            //日期
            .news-date{
                font-size: 16px;
            }
            //图片或者视频
            .img-wrapper{
                img{
                    width: 100%;
                }
            }
            //内容
            .news-contant{
                font-size: 16px;
                padding: 0 6%;
            }
        }
    }
}

</style>
<style  lang="scss">

</style>