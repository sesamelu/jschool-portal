<template>
    <div class="pg-index-ch">
        <article class="content">
            <div class="schools-content">
                <div class="index-first index-first-new">
                    <div class="index-picture-part-wrapper">
                        <div
                            class="ih-item square effect6 from_top_and_bottom square-picture"
                        >
                            <a href="#">
                                <div class="img">
                                    <img
                                        src="@assets/img/images/index1.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="index-word-part index-word-location index-new">
                        <span class="index-words-content"
                            >从幼儿园到高中，从入学到大学；家长无忧，孩子开心</span
                        >
                    </div>
                </div>
                <div class="schools">
                    <div class="school-introduce school-introduce-new">
                        学部介绍
                    </div>
                    <div class="schools-part">
                        <div class="schools-part-item">
                            <div
                                class="kindergarten"
                                onmouseover="showkindergartenInfo()"
                                onmouseout="showkindergartenTitle()"
                            >
                                <div
                                    class="ih-item square colored effect13 bottom_to_top"
                                >
                                    <a >
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
                                                </div>
                                                <span class="schools-part-title"
                                                    >幼儿园</span
                                                >
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
                                            <div
                                                class="schools-part-title-info"
                                            >
                                                幼儿园
                                            </div>
                                            <div>
                                                <span class="introduce-Info">
                                                    幼儿园以哈佛大学Gartner教授提出的多元智能理论为基础，结合英国学前教育国家课程(EYFS)和上海市学前教育大纲，采用先进的幼儿教学理念和教学方法，采用英文半浸润的教学环境，开展游戏、音乐、艺术、体育运动等各方面的课程。
                                                </span>
                                            </div>
                                            <div class="more-info-button">
                                                了解更多
                                            </div>
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
                                    <a href="@assets/pages/primary.html">
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
                                                </div>
                                                <span class="schools-part-title"
                                                    >小学初中部</span
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
                                            <div
                                                class="schools-part-title-info"
                                            >
                                                小学初中部
                                            </div>
                                            <div>
                                                <span class="introduce-Info">
                                                    学校按照国际学校标准设计建设，全部采取国际学校标准的教学设备、设施及教育教学材料。学校教学采用国家规定的课程及教材，实施部分双语教学以及丰富的校本课程，同时在课程设置中加强体育、艺术课程的内容。学校将长期聘用英国、美国、加拿大等英语母语国家的外教，为学生提供纯正的外语学习环境。
                                                </span>
                                            </div>
                                            <div class="center-btn">
                                                <div class="more-info-button">
                                                    了解更多
                                                </div>
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
                                    <a >
                                        <div
                                            class="img"
                                            style="position: relative"
                                        >
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
                                                    <span
                                                        class="Underline-bar"
                                                    ></span>
                                                </div>
                                                <span class="schools-part-title"
                                                    >高中部</span
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
                                            <div
                                                class="schools-part-title-info"
                                            >
                                                高中部
                                            </div>
                                            <div>
                                                <span class="introduce-Info">
                                                    学校按照国际学校标准设计建设，全部采取国际学校标准的教学设备、设施及教育教学材料。齐舜高中为全寄宿并强化日常管理。学校拥有一支非常优秀的教师团队，教学上结合齐舜教育集团国内外广泛且有效的教育资源，通过自适应学习等人工智能新技术，帮助学生更有效地学习。
                                                </span>
                                            </div>
                                            <div class="center-btn">
                                                <div
                                                    class="more-info-button"
                                                    href=""
                                                >
                                                    了解更多
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="index-second-part">
                    <div class="second-left">
                        <div class="second-left-content">
                            <div class="left-wrapper">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index2.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index2-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part left-word">
                                    <div>严格的学校管理</div>
                                    <div>全天紧张的学习安排</div>
                                    <div>确保孩子优异的学习成绩</div>
                                </div>
                            </div>
                            <div class="left-wrapper">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index6.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index6-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part left-word">
                                    <div>寄宿制</div>
                                    <div>省去家长接送以及课外辅导的烦恼</div>
                                    <div>确保孩子在学校的安全和学习</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="second-right">
                        <div class="second-right-content">
                            <div class="right-wrapper right-1">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index3.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index3-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word">
                                    <div>有经验的学校领导班子</div>
                                    <div>高质量的教师队伍</div>
                                    <div>确保孩子学得轻松效率高</div>
                                </div>
                            </div>
                            <div class="right-wrapper right-2">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index4.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index4-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word">
                                    <div>丰富的学生课外活动</div>
                                    <div>与北京上海和国外频繁的交流</div>
                                    <div>确保孩子全面发展视野广</div>
                                </div>
                            </div>
                            <div class="right-wrapper right-3">
                                <div
                                    class="ih-item square effect6 from_top_and_bottom square-picture"
                                >
                                    <a href="#">
                                        <div class="img">
                                            <img
                                                class="schools-img-column"
                                                src="@assets/img/images/index7.png"
                                                alt="img"
                                            />
                                            <img
                                                class="schools-img-row"
                                                src="@assets/img/images/index7-row.png"
                                                alt=""
                                            />
                                        </div>
                                    </a>
                                </div>
                                <div class="index-word-part right-word">
                                    <div>安全健康的食堂和舒适的宿舍</div>
                                    <div>保证孩子的身体成长和良好睡眠</div>
                                    <div>确保孩子身体好</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="campus">
                    <div class="index-campus index-campus-word">
                        <div>
                            设施齐全、装修一流的新校园，确保良好的学习环境
                        </div>
                        <div></div>
                        （室内中央空调、400米跑道的操场、完善的体育文艺设施）
                    </div>
                </div>
                <div class="campus-picture campus">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="#">
                            <div class="img">
                                <img src="@assets/img/images/index5.png" alt="img" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div
                class="school-introduce school-introduce-new"
                style="text-align: center"
            >
                教育资源及合作伙伴
            </div>
            <div class="other-school">
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a >
                            <div class="img">
                                <img
                                    src="@assets/img/images/FPS Logo-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource info-resource-first"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word"
                                    >Francis Parker School</span
                                >
                            </div>
                        </a>
                    </div>
                </div>
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="https://www.ljcds.org/page">
                            <div class="img">
                                <img
                                    src="@assets/img/images/LJCDS Logo-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource info-resource-second"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word"
                                    >La Jolla Country Day School</span
                                >
                            </div>
                        </a>
                    </div>
                </div>
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="https://shanghai-pudong.dulwich.org">
                            <div class="img">
                                <img
                                    src="@assets/img/images/deweilogo-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word">德威英国国际学校</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="http://ieducationm.com">
                            <div class="img">
                                <img
                                    src="@assets/img/images/IEM-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word">IEM</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="http://t.school">
                            <div class="img">
                                <img
                                    src="@assets/img/images/T School Logo-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word">T School</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="school-item">
                    <div
                        class="ih-item square effect6 from_top_and_bottom square-picture"
                    >
                        <a href="http://yangcong345.com/student.html">
                            <div class="img">
                                <img
                                    src="@assets/img/images/onion-index.png"
                                    alt="img"
                                />
                            </div>
                            <div
                                class="info info-resource"
                                style="background-color: #1c305c; opacity: 0.76"
                            >
                                <span class="link-word">洋葱数学</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>
<script>
export default {
    name: "chinese_index",
    created() {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},

    components: {},
};
</script>
<style scoped lang="scss">
.pg-index-ch {
}
</style>