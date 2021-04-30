<template>
    <div>
         <div class="schools-content">
            <div class="top-section">
                <div class="picture-part-wrapper" style="text-align: right">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                        style=""
                    >
                        <a href="#">
                            <div class="img">
                                <img
                                    class="picture-part"
                                    src="@assets/img/images/img-schools.png"
                                    alt="img"
                                />
                            </div>
                        </a>
                    </div>
                </div>
                <div class="word-part">
                    <span class="words-content">
                        In J. School, we offer Kindergarten education (age 3-6),
                        Primary School (age 7-12), Middle School (age 13-15),
                        and high school (age 16-18) education. J. School has
                        three separate but close-by campuses located in Yingnan
                        New District, Jieshou City. The philosophy of
                        student-centered will be executed on every one of our
                        student throughout the K-12 education. We are also
                        dedicated to implement up-to-the-minute technology such
                        as artificial intelligence, deep learning and etc. to
                        boost teaching and learning efficiency of teachers and
                        students.
                    </span>
                </div>
            </div>
            <div class="schools-part en-new">
                <div class="schools-part-item">
                    <div
                        class="kindergarten"
                        onmouseover="showkindergartenInfo()"
                        onmouseout="showkindergartenTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a>
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-kindergarten.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-kindergarten-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-kindergarten.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title"
                                            >Kindergarten
                                        </span>
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-kindergarten.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info">
                                        Kindergarten
                                    </div>
                                    <div>
                                        <span class="introduce-Info">
                                            In kindergarten, we mainly adopt the
                                            curriculum of Early Years Foundation
                                            Stage (EYFS) - a UK government
                                            framework that sets out welfare and
                                            development goals for children aged
                                            five and under. In this curriculum
                                            we offer Mandarin – English
                                            bilingual education, and through
                                            games, music, arts, sports and etc.
                                        </span>
                                    </div>
                                    <div class="more-info-button">More</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="schools-part-item">
                    <div
                        class="primary-junior-school"
                        onmouseover="showPrimaryInfo()"
                        onmouseout="showPrimaryTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a>
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-primary.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-primary-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-primary.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title"
                                            >Primary And Middle School</span
                                        >
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-primary.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info">
                                        Primary And Middle School
                                    </div>
                                    <div>
                                        <span class="introduce-Info">
                                            In primary and middle school, we
                                            mainly adopt Chinese national
                                            curriculum, with partially bilingual
                                            education and school-designed
                                            curriculum. In the teaching team,
                                            besides excellent teachers from all
                                            over China, we also have experienced
                                            teachers from overseas .
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button">More</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="schools-part-item high">
                    <div
                        class="high-school"
                        onmouseover="showHighInfo()"
                        onmouseout="showHighTitle()"
                    >
                        <div
                            class="ih-item square colored effect13 bottom_to_top"
                        >
                            <a>
                                <div class="img" style="position: relative">
                                    <img
                                        class="schools-img-column"
                                        src="@assets/img/images/img-high.png"
                                        alt="img"
                                    />
                                    <img
                                        class="schools-img-row"
                                        src="@assets/img/images/img-high-row.png"
                                        alt="img"
                                    />
                                    <div class="img-word-bottom"></div>
                                    <div class="img-word">
                                        <div>
                                            <img
                                                src="@assets/img/icon/icon-high.png"
                                                class="schools-icon"
                                            />
                                        </div>
                                        <div>
                                            <span class="Underline-bar"></span>
                                        </div>
                                        <span class="schools-part-title"
                                            >High School</span
                                        >
                                    </div>
                                </div>
                                <div class="info info-content">
                                    <div>
                                        <img
                                            src="@assets/img/icon/icon-high.png"
                                            alt=""
                                            class="schools-icon-info"
                                        />
                                    </div>
                                    <div class="schools-part-title-info">
                                        High School
                                    </div>
                                    <div>
                                        <span class="introduce-Info">
                                            In J. School, we are trying to
                                            utilize the technology of artificial
                                            intelligence and deep learning to
                                            personalize the learning for each
                                            student and hence boost the learning
                                            efficiency. In doing so, students
                                            will be able to spend less time on
                                            repeated practice while maintain
                                            good results on tests.
                                        </span>
                                    </div>
                                    <div class="center-btn">
                                        <div class="more-info-button" href="">
                                            More
                                        </div>
                                    </div>
                                </div>
                            </a>
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
        return {};
    },
    mounted() {},
    methods: {},
};
</script>
<style scoped lang="scss">
</style>
