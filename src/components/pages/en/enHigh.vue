<template>
    <div>
         <div class="schools-kindergarten schools-kindergarten-new">
            <div class="kindergarten-preview">
                <div class="kindergarten-link-title">
                    <div class="kindergarten-link">
                        <div class="link-item">
                            <a @click="goBack('schools')"
                                >&lt;&lt;&nbsp;Back
                            </a>
                        </div>
                        <div class="link-item">
                            <a @click="goBack('kindgarten')"
                                >&lt;&lt;&nbsp;Kindergarten</a
                            >
                        </div>
                        <div class="link-item">
                            <a @click="goBack('primary')"
                                >&lt;&lt;&nbsp;Primary And Middle School</a
                            >
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
            <div class="info-title en">
                <span class="col-bar"></span
                ><span class="title-word title-word-new">HIGH SCHOOL</span>
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word" v-html="departmentList[2].contentEditor">
                </div>
                <!-- <div class="info-word">
                    J. School High school campus covers 30 acres. High school is
                    more academic intensive since students will have more
                    pressure from the Gaokao – the Entrance Exam for
                    Universities and Colleges in China. Traditional, high school
                    students usually study more than 12 hours a day to do all
                    kinds of practices to prepare for Gaokao. But in J. School,
                    we are trying to utilize the technology of artificial
                    intelligence and deep learning to personalize the learning
                    for each student and hence boost the learning efficiency. In
                    doing so, students will be able to spend less time on
                    repeated practice while maintain good results on tests.
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    Online resources are valuable for students in tier 5 cities
                    like Jieshou to broaden their horizon. In J. School, we will
                    introduce wonderful lectures, speeches, and etc. through
                    online technology to help students keep pace with the
                    fast-changing world. We also hold online seminars for
                    students and experts in different fields both from in and
                    out of China.As a Chinese proverb says, traveling thousands
                    of miles, is better then reading thousands of books. (He
                    that travels far knows much.) In J. School we provides
                    enrichment programs every year for students to travel to
                    different places in the world, to let them see the
                    diversity, and to let them explore!
                </div> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
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
        };
    },
    mounted() {
        this.getDepartmentList()
    },
    methods: {
        //获取学部介绍列表数据
        getDepartmentList(){
            let params = {
                type: 'en',
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
                    routerName = 'page_schools_en';
                    break;
                case 'kindgarten':
                    routerName = 'page_kindgarten_en';
                    break;
                case 'primary':
                    routerName = 'page_primary_en';
                    break;
                case 'high':
                    routerName = 'page_high_en';
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
