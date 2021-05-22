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
                            <a @click="goBack('high')"
                                >&lt;&lt;&nbsp;High School</a
                            >
                        </div>
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
            <div class="info-title en">
                <span
                    class="col-bar"
                    style="vertical-align: -2px; height: 57px"
                ></span
                ><span class="title-word title-word-new"
                    >PRIMARY AND MIDDLE SCHOOL</span
                >
            </div>
            <div class="kindergarten-info-title high-new">
                <div class="info-word">
                    J. School Primary school and Middle school share one campus
                    with a land of 16 acres. The campus is designed and built
                    with an international standard, and is equipped with
                    advanced facilities. In primary and middle school, we mainly
                    adopt Chinese national curriculum, with partially bilingual
                    education and school-designed curriculum. In the teaching
                    team, besides excellent teachers from all over China, we
                    also have experienced teachers from overseas such as United
                    States, United Kindom, Canada, Australia, etc. to offer
                    students a diverse and partially English-immersed
                    environment.
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    In J. School, we offer a variety of sports activities
                    including basketball, tennis, rugby, volleyball, swimming
                    etc. for students to choose from since we believe that
                    health is the basics of student development. We also
                    consider interestsand hobbies critical for a happy life.
                    Henceforth we provide classes on music, all kinds of
                    instruments, arts, drama, and etc. to help students find a
                    lifelong interest.
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
