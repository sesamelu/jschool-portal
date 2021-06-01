<template>
    <div class="pg-resource-en">
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
                                    src="@assets/img/images/schoolresource.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="word-part word-part-new">
                    <span class="words-content" v-html="content"></span
                    >
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
                                    src="@assets/img/images/schoolresource.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="word-part" style="top: 152px">
                    <div class="info-word">
                        齐舜教育集团在过去的办学中积累了丰富的优质教育资源及合作伙伴，包括哈佛大学教育学院、上海外国语大学等国内外著名的大学；国内优质的公立、私立学校；德威英国国际学校等顶尖国际学校；Francis
                        Parker School、La Jolla Country Day
                        School等美国顶尖私立高中；T school等一系列创新学校等。
                    </div>
                </div>
            </div> -->
            <div class="add-resource-wrapper">
                <div class="row">
                    <div class="col-xs-12 col-sm-6 col-md-4"
                    v-for="item in resourceList"
                    :key="item.id"
                    >
                        <div class="add-resource-container">
                            <div class="add-resource-img">
                                <img
                                    :src="item.logoUrl"
                                    alt=""
                                />
                            </div>
                            <div style="text-align:center;"><span class="resource-title"
                                @click="goPage(item.link)">{{item.title}}</span
                            ></div>
                            <div class="add-resource-content" v-html="item.contentEditor">
                            </div>
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
            content:'',
            resourceList:[
                {
                    id: 1,
                    title: "Francis",
                    link: "http://www.456.com",
                    editDate: "2021-01-11 12:00:21",
                    logoUrl:'http://www.jschool.org.cn/img/images/LJCDS%20Logo-index.png',
                    contentEditor:'Francis Parker School (FPS)始建于1912年，有106年的历史，是一所全美高度认可的私立学校。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把打款发货的技术开发多少积分付款的肌肤帕返回数据反馈行但是看见反函数棵艰苦大师傅艰苦大师傅觉得克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把打款发货的技术开发多少积分付款的肌肤帕返回数据反馈行但是看见反函数棵艰苦大师傅艰苦大师傅觉得克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献'
                },
                {
                    id: 2,
                    title: "La",
                    link: "http://www.123.com",
                    editDate: "2021-01-11 12:00:21",
                    logoUrl:'http://www.jschool.org.cn/img/images/LJCDS%20Logo-index.png',
                    contentEditor:'Francis Parker School (FPS)始建于1912年，有106年的历史，是一所全美高度认可的私立学校。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把帕克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献。'
                },
                {
                    id: 3,
                    title: "德威英国",
                    link: "http://www.789.com",
                    editDate: "2021-01-11 12:00:21",
                    logoUrl:'http://www.jschool.org.cn/img/images/LJCDS%20Logo-index.png',
                    contentEditor:'Francis Parker School (FPS)始建于1912年，有106年的历史，是一所全美高度认可的私立学校。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把帕克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献。'
                },
                {
                    id: 4,
                    title: "La",
                    link: "http://www.123.com",
                    editDate: "2021-01-11 12:00:21",
                    logoUrl:'http://www.jschool.org.cn/img/images/LJCDS%20Logo-index.png',
                    contentEditor:'Francis Parker School (FPS)始建于1912年，有106年的历史，是一所全美高度认可的私立学校。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把帕克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献。'
                },
                {
                    id: 5,
                    title: "德威英国",
                    link: "http://www.789.com",
                    editDate: "2021-01-11 12:00:21",
                    logoUrl:'http://www.jschool.org.cn/img/images/LJCDS%20Logo-index.png',
                    contentEditor:'Francis Parker School (FPS)始建于1912年，有106年的历史，是一所全美高度认可的私立学校。学校致力于培养学生追求学术成就，实现自我价值和具有全球视野。学校被华尔街日报评为能为顶尖大学提供学生的最好的私立中学之一。2011年，CBS电视台把帕克学校评为美国西海岸最好的“常青藤大学预备学校”。学校的使命是在多元化社区中培养学业优异、具有全球视野、意志坚强及独立思考的学生，帮助他们为世界发展做出有意义的贡献。'
                },
            ]
        };
    },
    mounted() {
        this.getContent()
        this.getList()
    },
    methods: {
        getContent() {
            let params = {
                type: 'enOurNetwork',
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
        //获取列表数据
        getList(){
            let params = {
                type: 'en',
                pageSize: 1000,
                pageNumber: 1
            };
            this.$http
            .get("/qishun/deployServer/schoolResourceList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.resourceList = res.result.list;
                    // this.total = res.result.total;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        goPage(link){
            window.open(link)
        }

    },
};
</script>
<style scoped lang="scss">
.pg-resource-en{
    .add-resource-wrapper{
        padding: 0 8% ;
        .add-resource-container{
            border: 1px solid #dddddd;
             margin: 10px 0;
             height:680px;
            .add-resource-img{
                height: 160px;
                text-align: center;

            }
            .resource-title{
                font-size: 24px;
                color:#b6212d;
                cursor: pointer;
                text-align: center;
                border-bottom:1px solid #b6212d

            }
            .add-resource-content{
                padding: 0 20px;
                margin-top:24px;
                margin-bottom: 24px;
                text-align: justify;
                font-size: 16px;
                line-height: 24px;
                color: #333;
                text-indent: 2em;
                height: 430px;
                overflow-x: hidden;

            }
            .add-resource-content::-webkit-scrollbar {display:none}

        }

    }

}
</style>
