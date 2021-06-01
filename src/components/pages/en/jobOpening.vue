<template>
    <div>
        <div
            class="kindergarten-preview"
            style="margin-top: 60px; text-align: right"
        >
            <div
                class="kindergarten-picture"
                style="display: inline-block; width: 59%; position: static"
            >
                <div class="picture-wrapper">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                        style=""
                    >
                        <a href="#">
                            <div class="img">
                                <img
                                    class="picture-part"
                                    src="@assets/img/images/img-Recruitment.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="schools-kindergarten">
            <div class="panel-group" id="accordion">
                <!-- <div
                    class="panel panel-default"
                    style="border-top: 1px solid #ddd"
                >
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseOne"
                                onclick="toggleCollapse('One')"
                            >
                                <div class="collapse-title One">
                                    <div class="collapse-word">
                                        English Teacher (Kindergarten / Primary
                                        / Middle School / High School)
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                        /><img
                                            class="expand-icon"
                                            style="display: none"
                                            src="@assets/img/icon/icon-Expand.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="info-word-title">We require:</div>
                            <div class="text-indent-wrapper">
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="info-word">
                                    • Native English speaker
                                </div>
                                <div class="info-word">
                                    • Bachelor’s or Master’sdegree in Education
                                    (English) or related areas
                                </div>
                                <div class="info-word">
                                    • Teaching qualification (QTS or equivalent)
                                    is an advantage
                                </div>
                                <div class="info-word">
                                    • Strong interestsin participating or
                                    leadingextra-curricula program
                                </div>
                                <div class="info-word">
                                    • Experience with Non-English speaking
                                    students is an advantage
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">
                                Main Responsibilities:
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • To take responsibility for the planning
                                    and implementation of age-appropriate
                                    curriculum, program activities, and
                                    assessment in subject of English
                                </div>
                                <div class="info-word">
                                    • To design, plan and organize school events
                                    and activities regarding the subject of
                                    English
                                </div>
                                <div class="info-word">
                                    • To provide support and collaborate with
                                    colleagues on other school events
                                </div>
                                <div class="info-word">
                                    • To provide an inspiring and effective
                                    learning environment for the students in
                                    supporting their learning
                                </div>
                                <div class="info-word">
                                    • To maintain close partnership with
                                    parents, colleagues and the community
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">We offer:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • International standard designed campuses
                                    and facilities and well-resourced classrooms
                                </div>
                                <div class="info-word">
                                    • On-going PD in relevant subject areas
                                </div>
                                <div class="info-word">
                                    • A competitive salary scale and benefits
                                    package including housing, annual flights,
                                    health insurance and family benefits (where
                                    applicable), meal allowance, etc.
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="panel panel-default" 
                v-for="item in careerList"
                :key="item.id"
                >
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                :href="`#${item.id}`"
                                @click="toggleCollapse(item.id)"
                            >
                                <div class="collapse-title">
                                    <div class="collapse-word" :style="{'color':expandFlag === item.id?'#0066cc':'#1c305c'}">
                                        {{item.name}}
                                        <!-- English Teacher (Intern: Kindergarten /
                                        Primary / Middle School / High School) -->
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                            v-show="expandFlag != item.id"
                                        /><img
                                            class="expand-icon"
                                            src="@assets/img/icon/icon-Expand.png"
                                            v-show="expandFlag === item.id"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div :id="item.id" class="panel-collapse collapse"  v-show="expandFlag === item.id">
                        <div class="panel-body">
                            <div class="info-word" v-html="item.contentEditor">
                                
                            </div>
                            <!-- <div class="info-word-title">We require:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • Native English speaker
                                </div>
                                <div class="info-word">
                                    • Major / Minor in Education or English or
                                    related areas
                                </div>
                                <div class="info-word">
                                    • Passionate in teaching
                                </div>
                                <div class="info-word">
                                    • Strong interestsin participating or
                                    leadingextra-curricula program
                                </div>
                                <div class="info-word">
                                    • Experience with Non-English speaking
                                    students is an advantage
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">
                                Main Responsibilities:
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • To work with full-time teachers on the
                                    planning and implementation of
                                    age-appropriate curriculum and assessment in
                                    subject of English
                                </div>
                                <div class="info-word">
                                    • To assist in designing, planning and
                                    organizing school events and activities
                                    regarding the subject of English
                                </div>
                                <div class="info-word">
                                    • To provide support and collaborate with
                                    colleagues on other school events
                                </div>
                                <div class="info-word">
                                    • To provide an inspiring and effective
                                    learning environment for the students in
                                    supporting their learning
                                </div>
                                <div class="info-word">
                                    • To assist in maintaining close partnership
                                    with parents, colleagues and the community
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">We offer:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • International standard designed campuses
                                    and facilities and well-resourced classrooms
                                </div>
                                <div class="info-word">
                                    • On-going PD in relevant subject areas
                                </div>
                                <div class="info-word">
                                    • A competitive benefits package including
                                    housing, annual flights, health insurance,
                                    family benefits (where applicable), meal
                                    allowance, etc.
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseThree"
                                onclick="toggleCollapse('Three')"
                            >
                                <div class="collapse-title Three">
                                    <div class="collapse-word">
                                        Teacher Librarian (Kindergarten /
                                        Primary / Middle School / High School)
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                        /><img
                                            style="display: none"
                                            class="expand-icon"
                                            src="@assets/img/icon/icon-Expand.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="panel-body">
                                <div class="info-word-title">We require:</div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • Native English speaker
                                    </div>
                                    <div class="info-word">
                                        • Bachelor’s or Master’s degree in
                                        Literatures or Education or related
                                        subjects, or equivalent qualifications
                                        in librarianship (Desirable)
                                    </div>
                                    <div class="info-word">
                                        • Teaching qualification (QTS or
                                        equivalent) is an advantage
                                    </div>
                                    <div class="info-word">
                                        • Strong interestsin participating or
                                        leadingextra-curricula program
                                    </div>
                                    <div class="info-word">
                                        • Experience in curriculum development
                                        and subject leading is an advantage
                                    </div>
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="info-word-title">
                                    Main Responsibilities:
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • To develop library curriculum (English
                                        reading) and deliver English reading
                                        classes
                                    </div>
                                    <div class="info-word">
                                        • To design, plan and organize school
                                        events and activities regarding English
                                        reading
                                    </div>
                                    <div class="info-word">
                                        • To provide support and collaborate
                                        with colleagues on other school events
                                        that are linked in with reading
                                    </div>
                                    <div class="info-word">
                                        • To promote school-wide information
                                        literacy across the school and areas of
                                        the curriculum
                                    </div>
                                    <div class="info-word">
                                        • To provide an inspiring and effective
                                        learning environment for the students in
                                        supporting their learning
                                    </div>
                                    <div class="info-word">
                                        • To maintain close partnership with
                                        parents, colleagues and the community
                                    </div>
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="info-word-title">We offer:</div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • International standard designed
                                        campuses and facilities and
                                        well-resourced classrooms
                                    </div>
                                    <div class="info-word">
                                        • On-going PD in relevant subject areas
                                    </div>
                                    <div class="info-word">
                                        • A competitive salary scale and
                                        benefits package including housing,
                                        annual flights, health insurance and
                                        family benefits (where applicable), meal
                                        allowance, etc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFour"
                                onclick="toggleCollapse('Four')"
                            >
                                <div class="collapse-title Four">
                                    <div class="collapse-word">
                                        Art Teacher (Kindergarten / Primary /
                                        Middle School / High School)
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                        /><img
                                            style="display: none"
                                            class="expand-icon"
                                            src="@assets/img/icon/icon-Expand.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFour" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="info-word-title">We require:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • A university degree
                                </div>
                                <div class="info-word">
                                    • Major in Arts or related fields, a good
                                    understanding of Fine Arts and education
                                </div>
                                <div class="info-word">
                                    • Teaching qualification (QTS or equivalent)
                                    is an advantage
                                </div>
                                <div class="info-word">
                                    • A clear vision for an outstanding Art
                                    department and the leadership skills
                                </div>
                                <div class="info-word">
                                    • Experience in teaching Drama is an
                                    advantage
                                </div>
                                <div class="info-word">
                                    • Support the mission, vision, and core
                                    values of the school
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">
                                Main Responsibilities:
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • To take responsibility for the planning
                                    and implementation of age-appropriate
                                    curriculum, program activities and
                                    assessment
                                </div>
                                <div class="info-word">
                                    • To design, plan and organize school events
                                    and activities regarding the subject of Art
                                </div>
                                <div class="info-word">
                                    • To provide support and collaborate with
                                    colleagues on other school events that are
                                    linked in with Art
                                </div>
                                <div class="info-word">
                                    • To provide an inspiring and effective
                                    learning environment for the students in
                                    supporting their learning
                                </div>
                                <div class="info-word">
                                    • To maintain close partnership with
                                    parents, colleagues and the community
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">We offer:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • International standard designed campuses
                                    and facilities and well-resourced classrooms
                                </div>
                                <div class="info-word">
                                    • On-going PD in relevant subject areas
                                </div>
                                <div class="info-word">
                                    • A competitive salary scale and benefits
                                    package including housing, annual flights,
                                    health insurance, meal allowance and family
                                    benefits (where applicable)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseFive"
                                onclick="toggleCollapse('Five')"
                            >
                                <div class="collapse-title Five">
                                    <div class="collapse-word">
                                        PE Teacher (Kindergarten / Primary /
                                        Middle School / High School)
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                        /><img
                                            style="display: none"
                                            class="expand-icon"
                                            src="@assets/img/icon/icon-Expand.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseFive" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="panel-body">
                                <div class="info-word-title">We require:</div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • Bachelor’s or Master’s degree in
                                        Education (Physical Education) or
                                        related subjects
                                    </div>
                                    <div class="info-word">
                                        • Teaching qualification (QTS or
                                        equivalent) is an advantage
                                    </div>
                                    <div class="info-word">
                                        • Strong interestsin participating or
                                        leadingextra-curricula program
                                    </div>
                                    <div class="info-word">
                                        • Experience in curriculum development
                                        and subject leading is an advantage
                                    </div>
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="info-word-title">
                                    Main Responsibilities:
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • To take responsibility for the
                                        planning and implementation of
                                        age-appropriate curriculum, program
                                        activities and assessment
                                    </div>
                                    <div class="info-word">
                                        • To design, plan and organize school
                                        events and activities regarding sports
                                        and/or physical activities
                                    </div>
                                    <div class="info-word">
                                        • To provide an inspiring and effective
                                        learning environment for the students in
                                        supporting their learning
                                    </div>
                                    <div class="info-word">
                                        • To maintain close partnership with
                                        parents, colleagues and the community
                                    </div>
                                </div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="info-word-title">We offer:</div>
                                <div
                                    class="info-word"
                                    style="height: 24px"
                                ></div>
                                <div class="text-indent-wrapper">
                                    <div class="info-word">
                                        • International standard designed
                                        campuses and well-resourced classrooms
                                    </div>
                                    <div class="info-word">
                                        • On-going PD in relevant subject areas
                                    </div>
                                    <div class="info-word">
                                        • A competitive salary and benefits
                                        package including shipping, housing,
                                        flights and health insurance and family
                                        benefits (where applicable)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4 class="panel-title">
                            <a
                                data-toggle="collapse"
                                data-parent="#accordion"
                                href="#collapseSix"
                                onclick="toggleCollapse('Six')"
                            >
                                <div class="collapse-title Six">
                                    <div class="collapse-word">
                                        Marketing Specialist
                                    </div>
                                    <div class="img-icon">
                                        <img
                                            class="collapse-icon"
                                            src="@assets/img/icon/icon-Collapse.png"
                                        /><img
                                            class="expand-icon"
                                            style="display: none"
                                            src="@assets/img/icon/icon-Expand.png"
                                        />
                                    </div>
                                </div>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseSix" class="panel-collapse collapse">
                        <div class="panel-body">
                            <div class="info-word-title">We require:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • Bachelor’s or Master’s degree in related
                                    subjects
                                </div>
                                <div class="info-word">
                                    • Experience in marketing and communicating
                                    is an advantage
                                </div>
                                <div class="info-word">
                                    • Expertise in graphic design, or writing
                                    reports, or social media operating
                                </div>
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">
                                Main Responsibilities:
                            </div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • Understand the vision, mission and
                                    philosophy of J. School. Collaborate with
                                    Head of Marketing and Admissions in
                                    articulating the purpose and ongoing work of
                                    the school.
                                </div>
                                <div class="info-word">
                                    • Plan for and deploy digital activities:
                                    website, online campaigns, email marketing,
                                    social media and digital content production.
                                </div>
                                <div class="info-word">
                                    • Collaborate with Head of Marketing and
                                    Admissions in managing all aspects of the
                                    school’s print and electronic
                                    communications, ensuring the continuity of
                                    the school’s brand and logo. Oversee the
                                    work of graphic designers and print vendors
                                    in production of printed materials and web
                                    visuals.
                                </div>
                                <div class="info-word">
                                    • Collaborate with Head of Marketing and
                                    Admissions in organizing school events, take
                                    photography and video recording and release
                                    relevant news.
                                </div>
                            </div>

                            <div class="info-word" style="height: 24px"></div>
                            <div class="info-word-title">We offer:</div>
                            <div class="info-word" style="height: 24px"></div>
                            <div class="text-indent-wrapper">
                                <div class="info-word">
                                    • International standard designed campuses
                                    and well-resourced classrooms
                                </div>
                                <div class="info-word">
                                    • On-going PD in relevant subject areas
                                </div>
                                <div class="info-word">
                                    • A competitive salary and benefits package
                                    including shipping, housing, flights and
                                    health insurance and family benefits (where
                                    applicable)
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div class="info-word" style="height: 24px"></div>
            <!-- 概要 -->
            <div class="info-word" v-html="content">
            </div>
            <!-- <div class="info-word">
                For detailed information about above positions or other job
                opportunities, please contact Ms. Xiner Tong at
                <span style="color: #0066cc">xiner.tong@inqishun.com</span>.
            </div>
            <div class="info-word" style="height: 24px"></div>
            <div class="info-word">
                J. School is committed to safeguarding and promoting the welfare
                of all the children in our care and expects all applicants to
                share this commitment. We follow safe recruitment practice and
                appointments are subject to an interview, following-up
                references with previous employers and criminal record checks.
            </div> -->
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            content:'',
            careerList:[
                {
                    id:1,
                    name:'',
                    contentEditor:''
                }
            ],
            expandFlag:null

        }
    },
    mounted(){
        this.getContent()
        this.getList()

    },
    methods:{
        getContent() {
            let params = {
                type: 'enCareers',
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
        getList(){
            let params = {
                pageSize: 1000,
                pageNumber: 1
            };
            this.$http
            .get("/qishun/deployServer/careersList", params, this)
            .then((res) => {
                if (0 === res.code) {
                    this.careerList = res.result.list;
                } else {
                    // this.$message.error(res.resultMessage);
                }
            })
            .catch((error) => {
                // this.$message.error("获取列表数据失败");
            });
        },
        getListId(){
            let idArr = [];
            if(this.careerList.length>0){
                this.careerList.forEach((item)=>{
                    idArr.push(item.id)
                })
            }
            return idArr;
        },
        toggleCollapse(id){
            if (this.expandFlag == id){
                this.expandFlag = null
            } else {
                this.expandFlag = id
            }

        }

    }
}
</script>
<style scoped lang="scss">

</style>