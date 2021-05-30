<template>
    <div>
        <div class="schools-kindergarten">
            <div class="graduate-top">
                <div class="kindergarten-link-title">
                    <div class="info-title info-title-new">
                        <span class="col-bar"></span
                        ><span
                            class="title-word-new founder-word"
                            style="vertical-align: middle"
                            >Founder's Words</span
                        >
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
                                        src="@assets/img/images/img-orangerWords.png"
                                        alt="img"
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="brige">
            </div> -->
            <div class="info-word" style="height: 24px"></div>
            <div class="info-word" v-html="content">
            </div>
            <!-- <div class="brige">
                <div>Qishun Schools: A Bridge to the World and Future</div>
                <div class="info-word" style="height: 24px"></div>
                <div style="text-indent: 7em">—— My dream on Education</div>
            </div>

            <div
                class="kindergarten-info-title"
                style="width: 100%; margin-top: 34px"
            >
                <div class="info-word">
                    When I left Harvard Graduate School of Education in 2011, I
                    told my advisor Professor Bridget Terry Long: I’m going back
                    to China and realize my ideas in fundamental education. From
                    then on, I have been working diligently in the field of
                    basic education. I opened and managed several inter-national
                    school and bilingual schools. It was full of difficulties,
                    frustrations, and also excitement and joy in every one of
                    the schools’ openings. I learnt a lot from the experience,
                    but more important-ly, I found what I am truly passionate at
                    in my life: how to improve the education quality in
                    tradi-tional Chinese fundamental education, especially in
                    tier 4, tier 5 cities and counties in mid-western China. It
                    is a significant topic for the development of China but
                    remains unsolved. I decided to de-vote myself into this
                    field and contribute as much as I can.
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    As people know, the development of economy and society in
                    China is rather unbalanced. There is a huge difference
                    between east coast cities (mostly tier 1, tier 2 cities) and
                    inland cities (mostly tier 3, 4, 5 cities). However, for
                    children, I believe, wherever they are born, they all have
                    the rights to re-ceive high quality education. And for
                    children in less developed areas, they shall receive even
                    better education to break the unbalancement and change their
                    fate. Nevertheless, the truth is that the level of economy
                    development determines the level of education. Undeniably,
                    the investment and re-sources in education in mid-western
                    China is far less than that in east coast cities. There is a
                    serious conflict between the actual situations and
                    children’s needs on high quality education in mid-western
                    China. After thinking for a long time, I made a decision
                    that in the coming decades, I will lead my colleagues in
                    Qishun Education Group to work on the following question:
                    how to deliver high quali-ty education in mid-western China
                    and provide opportunities for students to change their
                    lives?
                </div>
                <div class="info-word" style="height: 24px"></div>
                <div class="info-word">
                    From our investigation and observation, horizon and desire
                    are two key factors that can influence children’s future.
                    Many studies have shown that the environment can affect to a
                    great extend what children can achieve in their life. If a
                    child is born in a big city, it is highly possible that
                    he/she will have greater achievement in his/her life
                    compared with his/her peers in a small city. Surely these
                    are more opportunities and competitions in big cities, which
                    may contribute to the results. But children in big cities
                    always have more chances to broaden their hoziron, and hence
                    they have more desire for higher goals can also be a key
                    point. How can a person who has never seen a plane imagining
                    himself flying in the sky? The differences between oneself
                    and people around can stimulate his/her desire to evolve,
                    and that’s what children in mid-western cities lack in
                    growth. From what they see, everyone is living alongside a
                    similar path, and they never had a thought that one day,
                    they can be any different. Even if they know there is a
                    bigger world outside, they barely have the courage to relate
                    themselves with that unfamiliar space. Therefore, in J.
                    School and other Qishun schools, we are dedicated to bring
                    our students into that different, outside world. We want
                    them to know that they are not trapped in where they were
                    born, instead, they are part of this fascinating world, they
                    are the future, and they can make a difference in their
                    life.
                </div>

                <div class="info-word" style="height: 24px"></div>
                <div class="info-word" style="text-align: right">
                    November 2, 2018
                </div>
                <div class="info-word" style="text-align: right">
                    Jieshou, Anhui, Chin
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            content:""
        };
    },
    mounted() {
        this.getContent()
    },
    methods: {
        getContent() {
            let params = {
                type: 'enOurPeople',
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
    },
};
</script>
<style scoped lang="scss">
</style>
