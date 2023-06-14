<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
    name: "App",
    components: {
        AppHeader,
        AppMain
    },
    data() {
        return {

        };
    },
    mounted() {
    }
}
</script>

<template>
    <AppHeader />
    <!-- /Header -->
    <AppMain />
    <!-- /Main -->
    <router-view></router-view>
</template>

<style lang="scss" scoped></style>
