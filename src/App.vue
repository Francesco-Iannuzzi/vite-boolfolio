<script>
import AppHeader from "./components/AppHeader.vue";

export default {
    name: "App",
    components: {
        AppHeader,
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
    <router-view></router-view>
</template>

<style lang="scss" scoped></style>
