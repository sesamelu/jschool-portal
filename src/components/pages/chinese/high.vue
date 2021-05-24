<template>
    <div>
        <div class="schools-kindergarten schools-kindergarten-new">
            <div class="kindergarten-preview">
                <div class="kindergarten-link-title">
                    <div class="kindergarten-link">
                        <div class="link-item">
                            <a @click="goBack('schools')">&lt;&lt;&nbsp;返回 </a>
                        </div>
                        <div class="link-item">
                            <a @click="goBack('kindgarten')">&lt;&lt;&nbsp;幼儿园 </a>
                        </div>
                        <div class="link-item">
                            <a @click="goBack('primary')">&lt;&lt;&nbsp;小学初中部</a>
                        </div>
                    </div>
                </div>
                <div class="kindergarten-picture">
                    <div class="picture-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        class="picture-part"
                                        src="@assets/img/images/img-highBig.png"
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
                ><span class="title-word title-word-new">高中部</span>
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word" v-html="departmentList[2].contentEditor">
                </div>
                <!-- <div class="info-word">
                    齐舜学校高中部位于界首市颍南新区，占地180亩，建筑面积106,000平方米。学校按照国际学校标准设计建设，全部采取国际学校标准的教学设备、设施及教育教学材料。齐舜高中为全寄宿并强化日常管理。学校拥有一支非常优秀的教师团队（培养过省地市高考状元或清华北大毕业生的特级或优秀高级教师），教学上结合齐舜教育集团国内外广泛且有效的教育资源，通过自适应学习等人工智能新技术，帮助学生更有效地学习，从而全面、大幅度地提高高考一本升学率，并帮助优秀学生发挥自身的潜能，顺利考取清华大学、北京大学以及世界前五十强的著名大学。
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    学校将充分利用网络和线上教育资源，将国内外最优秀的讲座、演讲带入校园，让学生们身在教室即可了解世界和未来，并能与来自于全世界的专家、教师和学生进行交流和共同学习；还能与各行各业最一流的专家和人才进行深入的交流和探讨。此外，学校还将定期组织国内外的游学活动，带领学生们走出校园，去切身感受这个世界的多样化，去实践读万卷书，行万里路！
                </div> -->
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            departmentList:[
                {
                    contentEditor:'<p data-we-empty-p="" style="text-indent:2em;">界首齐舜学校由上海齐舜教育集团举办。<br/></p><p style="text-indent:2em;">上海齐舜教育集团成立于2014年，专注于在国内外开办面向中国家庭和学生的国际学校、双语学校以及高水平民办学校。上海齐舜教育集团的办学和管理团队来自于世界知名的教育集团——德威国际教育集团（<a href="https://www.dulwich.org/">www.indulwich.com</a>）和国内著名的学校。上海齐舜教育集团的核心领导团队成员均为教育专业背景，曾分别就读于哈佛大学、美国加州大学洛杉矶分校、匹兹堡大学以及国内著名的师范类院校如华东师范大学等，在过去二十年间于北京、上海和杭州等地创办和管理了一系列从幼儿园到高中（K-12）的知名民办学校、双语学校和国际学校。上海齐舜教育集团与诸多世界知名的国际教育集团、美国知名中小学及顶尖大学形成长期、稳定的战略合作关系，并得到其在学术质量、师资招聘和培训、教学管理、质量评估、学生管理、学生活动等方面的全面支持，以向中国学生提供高质量的国际国内教育，确保学校的办学品质。<br/></p><p style="text-indent:2em;">齐舜教育集团专注于教育领域，在开办、管理学校方面有着丰富及成功的经验，包括且不限于：<br/></p><p>• 创办及管理国际学校（外籍人员子女学校）；</p><p>• 创办及管理国际化的双语学校及幼儿园；</p><p>• 创办及管理面向高考的高水平的民办学校及幼儿园；</p><p>• 本土化国际课程和中国课程国际化等。</p><p><br/></p><p><span style="font-size:1em; text-indent:0;">齐舜教育集团拥有丰富的开办从幼儿园到高中的各类民办寄宿制学校的经验。齐舜学校的教室及学生活动场地均配备中央空调设备，提供空气净化及过滤设备，建立绿色环保校园；配备专业演出剧场、视觉艺术专业教室、专业戏剧小剧场、专业音乐排练厅、信息技术教室、技术工作坊、国学教室以及专业图书馆等。学校统一使用现代化信息技术设备，并提供充足的琴房及音乐器材；体育设施丰富，根据各地情况配有专业室内温水游泳池、壁球馆、瑜伽室、室内健身馆、舞蹈教室等。</span></p><p><span style="font-size:1em; text-indent:0;"><br/></span></p><p>学校课程融合东西方教育理念，整合中西方教育精华，创办真正适合学生成长并能为其终身发展奠定扎实基础的、精细、优质、国际化的学校教育，提供最高学术标准的中外融合课程，实施融系统性、多元化、可选择性于一体的课程与教学。学校充分利用其国际化资源，博采国际教育的长处和资源，结合对中国教育优势的深刻理解，塑造高标准、国际化的优质教育。同时，学校始终以学生发展为本，培养兼具独创精神、中国情怀和国际视野的世界公民。<span style="font-size:1em; text-indent:0;"><br/></span></p>'
                },
                {
                    contentEditor:'<p data-we-empty-p="" style="text-indent:2em;">界首齐舜学校由上海齐舜教育集团举办。<br/></p><p style="text-indent:2em;">上海齐舜教育集团成立于2014年，专注于在国内外开办面向中国家庭和学生的国际学校、双语学校以及高水平民办学校。上海齐舜教育集团的办学和管理团队来自于世界知名的教育集团——德威国际教育集团（<a href="https://www.dulwich.org/">www.indulwich.com</a>）和国内著名的学校。上海齐舜教育集团的核心领导团队成员均为教育专业背景，曾分别就读于哈佛大学、美国加州大学洛杉矶分校、匹兹堡大学以及国内著名的师范类院校如华东师范大学等，在过去二十年间于北京、上海和杭州等地创办和管理了一系列从幼儿园到高中（K-12）的知名民办学校、双语学校和国际学校。上海齐舜教育集团与诸多世界知名的国际教育集团、美国知名中小学及顶尖大学形成长期、稳定的战略合作关系，并得到其在学术质量、师资招聘和培训、教学管理、质量评估、学生管理、学生活动等方面的全面支持，以向中国学生提供高质量的国际国内教育，确保学校的办学品质。<br/></p><p style="text-indent:2em;">齐舜教育集团专注于教育领域，在开办、管理学校方面有着丰富及成功的经验，包括且不限于：<br/></p><p>• 创办及管理国际学校（外籍人员子女学校）；</p><p>• 创办及管理国际化的双语学校及幼儿园；</p><p>• 创办及管理面向高考的高水平的民办学校及幼儿园；</p><p>• 本土化国际课程和中国课程国际化等。</p><p><br/></p><p><span style="font-size:1em; text-indent:0;">齐舜教育集团拥有丰富的开办从幼儿园到高中的各类民办寄宿制学校的经验。齐舜学校的教室及学生活动场地均配备中央空调设备，提供空气净化及过滤设备，建立绿色环保校园；配备专业演出剧场、视觉艺术专业教室、专业戏剧小剧场、专业音乐排练厅、信息技术教室、技术工作坊、国学教室以及专业图书馆等。学校统一使用现代化信息技术设备，并提供充足的琴房及音乐器材；体育设施丰富，根据各地情况配有专业室内温水游泳池、壁球馆、瑜伽室、室内健身馆、舞蹈教室等。</span></p><p><span style="font-size:1em; text-indent:0;"><br/></span></p><p>学校课程融合东西方教育理念，整合中西方教育精华，创办真正适合学生成长并能为其终身发展奠定扎实基础的、精细、优质、国际化的学校教育，提供最高学术标准的中外融合课程，实施融系统性、多元化、可选择性于一体的课程与教学。学校充分利用其国际化资源，博采国际教育的长处和资源，结合对中国教育优势的深刻理解，塑造高标准、国际化的优质教育。同时，学校始终以学生发展为本，培养兼具独创精神、中国情怀和国际视野的世界公民。<span style="font-size:1em; text-indent:0;"><br/></span></p>'
                },
                {
                    contentEditor:'<p data-we-empty-p="" style="text-indent:2em;">界首齐舜学校由上海齐舜教育集团举办。<br/></p><p style="text-indent:2em;">上海齐舜教育集团成立于2014年，专注于在国内外开办面向中国家庭和学生的国际学校、双语学校以及高水平民办学校。上海齐舜教育集团的办学和管理团队来自于世界知名的教育集团——德威国际教育集团（<a href="https://www.dulwich.org/">www.indulwich.com</a>）和国内著名的学校。上海齐舜教育集团的核心领导团队成员均为教育专业背景，曾分别就读于哈佛大学、美国加州大学洛杉矶分校、匹兹堡大学以及国内著名的师范类院校如华东师范大学等，在过去二十年间于北京、上海和杭州等地创办和管理了一系列从幼儿园到高中（K-12）的知名民办学校、双语学校和国际学校。上海齐舜教育集团与诸多世界知名的国际教育集团、美国知名中小学及顶尖大学形成长期、稳定的战略合作关系，并得到其在学术质量、师资招聘和培训、教学管理、质量评估、学生管理、学生活动等方面的全面支持，以向中国学生提供高质量的国际国内教育，确保学校的办学品质。<br/></p><p style="text-indent:2em;">齐舜教育集团专注于教育领域，在开办、管理学校方面有着丰富及成功的经验，包括且不限于：<br/></p><p>• 创办及管理国际学校（外籍人员子女学校）；</p><p>• 创办及管理国际化的双语学校及幼儿园；</p><p>• 创办及管理面向高考的高水平的民办学校及幼儿园；</p><p>• 本土化国际课程和中国课程国际化等。</p><p><br/></p><p><span style="font-size:1em; text-indent:0;">齐舜教育集团拥有丰富的开办从幼儿园到高中的各类民办寄宿制学校的经验。齐舜学校的教室及学生活动场地均配备中央空调设备，提供空气净化及过滤设备，建立绿色环保校园；配备专业演出剧场、视觉艺术专业教室、专业戏剧小剧场、专业音乐排练厅、信息技术教室、技术工作坊、国学教室以及专业图书馆等。学校统一使用现代化信息技术设备，并提供充足的琴房及音乐器材；体育设施丰富，根据各地情况配有专业室内温水游泳池、壁球馆、瑜伽室、室内健身馆、舞蹈教室等。</span></p><p><span style="font-size:1em; text-indent:0;"><br/></span></p><p>学校课程融合东西方教育理念，整合中西方教育精华，创办真正适合学生成长并能为其终身发展奠定扎实基础的、精细、优质、国际化的学校教育，提供最高学术标准的中外融合课程，实施融系统性、多元化、可选择性于一体的课程与教学。学校充分利用其国际化资源，博采国际教育的长处和资源，结合对中国教育优势的深刻理解，塑造高标准、国际化的优质教育。同时，学校始终以学生发展为本，培养兼具独创精神、中国情怀和国际视野的世界公民。<span style="font-size:1em; text-indent:0;"><br/></span></p>'
                },

            ]

        }
    },
    mounted(){
        this.getDepartmentList()

    },
    methods:{
        //获取学部介绍列表数据
        getDepartmentList(){
            let params = {
                type: 'ch',
            };
            this.$http
            .get("/qishun/deployServer/departmentList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.departmentList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
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

    }
}
</script>
<style scoped lang="scss">

</style>
<style lang="scss">

</style>