<template>
    <div class="pg-index-ch">
        <!-- 中文header -->
        <bd-header-ch></bd-header-ch>
        <!-- <bd-nav-ch></bd-nav-ch> -->
        <router-view></router-view>
        <bd-footer-ch></bd-footer-ch>
    </div>
</template>
<script>
import HeaderCh from "@components/component/headerCh";
// import navCh from "@components/component/navCh";
import footerCh from "@components/component/footerCh";
export default {
    name: "chinese_index",
    created() {},
    data() {
        return {
        };
    },
    mounted() {
    },
    methods: {
    },

    components: {
        "bd-header-ch": HeaderCh,
        // "bd-nav-ch": navCh,
        "bd-footer-ch": footerCh,
    },
};
</script>
<style  lang="scss">
.pg-index-ch{
    // 概要页面添加滚动条
    .summary-wrapper{
        max-height: 286px;
        overflow-y: scroll;
    }
    .summary-wrapper::-webkit-scrollbar {display:none}

}

</style>