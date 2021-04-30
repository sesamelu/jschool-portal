<template>
    <div class="pg-index-en">
        <bd-header-en></bd-header-en>
        <router-view></router-view>
        <bd-footer-en></bd-footer-en>
    </div>
</template>
<script>
import headerEn from "@components/component/headerEn";
import footerEn from "@components/component/footerEn";
export default {
    name: "english_index",
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
        "bd-header-en": headerEn,
        // "bd-nav-ch": navCh,
        "bd-footer-en": footerEn,
    },
};
</script>
<style scoped lang="scss">
.pg-index-en{

}

</style>