<template>
    <div>
        <div class="schools-kindergarten creat-new">
            <div class="graduate-top">
                <div class="kindergarten-link-title">
                    <div class="info-title info-title-new word-flex">
                        <div class="col-bar col-bar-creater"></div>
                        <div
                            style="
                                display: inline-block;
                                vertical-align: middle;
                            "
                        >
                            <div class="title-word title-word-new">举办者</div>
                            <div
                                class="title-word profile-title2 title-word-new"
                            >
                                上海齐舜教育集团
                            </div>
                        </div>
                    </div>
                </div>
                <div class="kindergarten-picture kindergarten-picture-new">
                    <div class="picture-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                            style=""
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        class="picture-part"
                                        src="@assets/img/images/img-creater.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word" v-html="content">
                </div>
                <!-- <div class="info-word">
                    界首齐舜学校由上海齐舜教育集团举办。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    上海齐舜教育集团成立于2014年，专注于在国内外开办面向中国家庭和学生的国际学校、双语学校以及高水平民办学校。上海齐舜教育集团的办学和管理团队来自于世界知名的教育集团——德威国际教育集团（<a
                        class="text-a"
                        >www.indulwich.com</a
                    >）和国内著名的学校。上海齐舜教育集团的核心领导团队成员均为教育专业背景，曾分别就读于哈佛大学、美国加州大学洛杉矶分校、匹兹堡大学以及国内著名的师范类院校如华东师范大学等，在过去二十年间于北京、上海和杭州等地创办和管理了一系列从幼儿园到高中（K-12）的知名民办学校、双语学校和国际学校。上海齐舜教育集团与诸多世界知名的国际教育集团、美国知名中小学及顶尖大学形成长期、稳定的战略合作关系，并得到其在学术质量、师资招聘和培训、教学管理、质量评估、学生管理、学生活动等方面的全面支持，以向中国学生提供高质量的国际国内教育，确保学校的办学品质。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    齐舜教育集团专注于教育领域，在开办、管理学校方面有着丰富及成功的经验，包括且不限于：
                </div>
                <div class="info-word">
                    • 创办及管理国际学校（外籍人员子女学校）；
                </div>
                <div class="info-word">
                    • 创办及管理国际化的双语学校及幼儿园；
                </div>
                <div class="info-word">
                    • 创办及管理面向高考的高水平的民办学校及幼儿园；
                </div>
                <div class="info-word">
                    • 本土化国际课程和中国课程国际化等。
                </div>

                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    齐舜教育集团拥有丰富的开办从幼儿园到高中的各类民办寄宿制学校的经验。齐舜学校的教室及学生活动场地均配备中央空调设备，提供空气净化及过滤设备，建立绿色环保校园；配备专业演出剧场、视觉艺术专业教室、专业戏剧小剧场、专业音乐排练厅、信息技术教室、技术工作坊、国学教室以及专业图书馆等。学校统一使用现代化信息技术设备，并提供充足的琴房及音乐器材；体育设施丰富，根据各地情况配有专业室内温水游泳池、壁球馆、瑜伽室、室内健身馆、舞蹈教室等。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    学校课程融合东西方教育理念，整合中西方教育精华，创办真正适合学生成长并能为其终身发展奠定扎实基础的、精细、优质、国际化的学校教育，提供最高学术标准的中外融合课程，实施融系统性、多元化、可选择性于一体的课程与教学。学校充分利用其国际化资源，博采国际教育的长处和资源，结合对中国教育优势的深刻理解，塑造高标准、国际化的优质教育。同时，学校始终以学生发展为本，培养兼具独创精神、中国情怀和国际视野的世界公民。
                </div> -->
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            content:'<p data-we-empty-p="" style="text-indent:2em;">界首齐舜学校由上海齐舜教育集团举办。<br/></p><p style="text-indent:2em;">上海齐舜教育集团成立于2014年，专注于在国内外开办面向中国家庭和学生的国际学校、双语学校以及高水平民办学校。上海齐舜教育集团的办学和管理团队来自于世界知名的教育集团——德威国际教育集团（<a href="https://www.dulwich.org/">www.indulwich.com</a>）和国内著名的学校。上海齐舜教育集团的核心领导团队成员均为教育专业背景，曾分别就读于哈佛大学、美国加州大学洛杉矶分校、匹兹堡大学以及国内著名的师范类院校如华东师范大学等，在过去二十年间于北京、上海和杭州等地创办和管理了一系列从幼儿园到高中（K-12）的知名民办学校、双语学校和国际学校。上海齐舜教育集团与诸多世界知名的国际教育集团、美国知名中小学及顶尖大学形成长期、稳定的战略合作关系，并得到其在学术质量、师资招聘和培训、教学管理、质量评估、学生管理、学生活动等方面的全面支持，以向中国学生提供高质量的国际国内教育，确保学校的办学品质。<br/></p><p style="text-indent:2em;">齐舜教育集团专注于教育领域，在开办、管理学校方面有着丰富及成功的经验，包括且不限于：<br/></p><p>• 创办及管理国际学校（外籍人员子女学校）；</p><p>• 创办及管理国际化的双语学校及幼儿园；</p><p>• 创办及管理面向高考的高水平的民办学校及幼儿园；</p><p>• 本土化国际课程和中国课程国际化等。</p><p><br/></p><p><span style="font-size:1em; text-indent:0;">齐舜教育集团拥有丰富的开办从幼儿园到高中的各类民办寄宿制学校的经验。齐舜学校的教室及学生活动场地均配备中央空调设备，提供空气净化及过滤设备，建立绿色环保校园；配备专业演出剧场、视觉艺术专业教室、专业戏剧小剧场、专业音乐排练厅、信息技术教室、技术工作坊、国学教室以及专业图书馆等。学校统一使用现代化信息技术设备，并提供充足的琴房及音乐器材；体育设施丰富，根据各地情况配有专业室内温水游泳池、壁球馆、瑜伽室、室内健身馆、舞蹈教室等。</span></p><p><span style="font-size:1em; text-indent:0;"><br/></span></p><p>学校课程融合东西方教育理念，整合中西方教育精华，创办真正适合学生成长并能为其终身发展奠定扎实基础的、精细、优质、国际化的学校教育，提供最高学术标准的中外融合课程，实施融系统性、多元化、可选择性于一体的课程与教学。学校充分利用其国际化资源，博采国际教育的长处和资源，结合对中国教育优势的深刻理解，塑造高标准、国际化的优质教育。同时，学校始终以学生发展为本，培养兼具独创精神、中国情怀和国际视野的世界公民。<span style="font-size:1em; text-indent:0;"><br/></span></p>'

        }
    },
    mounted(){
        this.getContent()

    },
    methods:{
        getContent() {
            let params = {
                type: 'organizer',
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

    }
}
</script>
<style scoped lang="scss">

</style>
<style lang="scss">

</style>