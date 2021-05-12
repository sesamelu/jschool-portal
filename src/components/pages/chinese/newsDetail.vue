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
                {{editDate}}
            </div>
            <div class="img-wrapper">
                <img src="@assets/img/images/index1.png"/>
            </div>
            <div class="news-contant">
                如何正确选择国际学校呢?很过家长在为孩子选择国际学校时，都是迷茫的，没有任何头绪。那么如何正确选择国际学校？可以从以下几个方面考虑：

                一看：办学经验

                国际学校办学需要长期的摸索才能将国外的教学、师资与中国学生和学校的实际情况有机结合起来，很多刚刚创办的国际学校在课程体系的选择、课程设置、教学教研、外教管理、考试准备、学生思想引导和有效管理、大学申请等关键环节尚处在摸索阶段，提醒家长在选择时应多加留意，最好选择那些办学时间较长，办学经验丰富的学校。

                二看：办学方向

                一所真正的国际学校一定有自己的办学理念和育人目标，而不只是以盈利为目的的摇钱树。衡量的标准就是毕业生的去向和在国外综合能力的真实提升。

                因此，在为孩子选择国际学校前，一定要了解清楚国际学校毕业学生的去向，不能只看宣传，要分清学生升学是本科直接录取，还是出国读语言、预科、桥梁课程、大学双录取等唬人的所谓大学录取形式。是升入国外一流大学，还是进入野鸡大学?是绝大多数学生成功升学，还是只有少部分学生被名校录取?正确的办学方向是国际学校办学成功的唯一出路。

                三看： 课程、师资与升学

                目前国内多数的国际学校尚处在初创阶段，大致分为3种类型，要细加分辨。

                第一类，照搬照抄型：全套引进国外高中教材、SAT、AP课程，这类课程没有经过本土化改造，让母语非英语的学生一下子去和英美国家的高中生同步学习全英的文理科知识，很多学生无法适应，形成听天书的局面。此外，由于国外严格的课程课时要求，造成国际学校教学与考试复习和备考时间冲突、脱节，这类学校大都不承担海外考试的校内教学义务，学生需要到社会上培训SAT等课程，大大影响了学生的考试成绩。

                第二类，混搭拼凑型：高中文理科课程、外教课程、英语培训、雅思托福考试、SAT考试培训甚至是国学课程、课外活动混搭。这类课程看似不错，什么都有，但通常没有一套系统、主导的课程，再加上学生的时间、精力有限，很难形成扎实的基础，某国际学校向家长公布的各类课程总课时量甚至闹出比一周饱和课时量还要多的笑话。

                第三类，经验积累型：这类学校靠的是多年国际教育办学实践经验，属于经验积累型。在多年经验与教训的积累之上，以国外权威系统课程为主导，以国内理科双基强化练习为补充，在夯实中、外课程基础的前提下，在校内系统完成海外升学考试的复习与备考，达到事半功倍的办学效果。

                家长在选择国际学校时，一定要注意参考上述的几个点哦。


                附件下载：

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'如何正确选择国际学校',
            editDate:'2020-02-03',

        }
    },
    mounted(){

    },
    methods:{
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