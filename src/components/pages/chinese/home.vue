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
<style scoped lang="scss">
.pg-index-ch{

}

</style>