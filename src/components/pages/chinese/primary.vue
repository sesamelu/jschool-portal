<template>
    <div>
        <div class="schools-kindergarten">
            <div class="kindergarten-preview">
                <div class="kindergarten-link-title">
                    <div class="kindergarten-link">
                        <div class="link-item"><a @click="goBack('schools')">&lt;&lt;&nbsp;返回 </a></div>
                        <div class="link-item">
                            <a @click="goBack('kindgarten')">&lt;&lt;&nbsp;幼儿园 </a>
                        </div>
                        <div class="link-item"><a @click="goBack('high')">&lt;&lt;&nbsp;高中部</a></div>
                    </div>
                </div>
                <div class="kindergarten-picture">
                    <div class="picture-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                            style=""
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        class="picture-part"
                                        src="@assets/img/images/img-primaryBig.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-title">
                <span class="col-bar"></span
                ><span class="title-word title-word-new">小学初中部</span>
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word">
                    小学及初中部位于界首市颍南新区，占地93亩，建筑面积62,000平方米。学校按照国际学校标准设计建设，全部采取国际学校标准的教学设备、设施及教育教学材料。学校教学采用国家规定的课程及教材，实施部分双语教学以及丰富的校本课程，同时在课程设置中加强体育、艺术课程的内容。学校将长期聘用英国、美国、加拿大等英语母语国家的外教，为学生提供纯正的外语学习环境。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    健康的体魄是人生发展的基石。学校坚持在满足课程要求的基础上，尽可能增加学生的户外运动时间，以保护学生视力、增强学生体质。学校将提供篮球、足球、网球、橄榄球、排球、游泳等等体育课程，供学生选择。我们相信，兴趣爱好是伴随一个人一生的朋友，除体育运动外，我们还将在课程设置中提供音乐、各类乐器、作曲、艺术、戏剧等课程，希望学生们在其中能够寻找到自己的兴趣所在。
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    mounted() {},
    methods: {
        //点击学部跳转
        goBack(type){
            let routerName = "";
            switch(type){
                case 'schools':
                    routerName = 'page_schools_ch';
                    break;
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
                name: routerName
            })
        },
    },
};
</script>
<style scoped lang="scss">
</style>
<style lang="scss">
</style>