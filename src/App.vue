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
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
