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
            <div class="info-title">
                <span class="col-bar"></span
                ><span class="title-word title-word-new">HIGH SCHOOL</span>
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word">
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
