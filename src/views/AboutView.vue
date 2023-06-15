<script>
import AppBanner from '../components/AppBanner.vue';
import { store } from "../store";

export default {
    name: "AboutView",
    components: {
        AppBanner,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <AppBanner :title="store.views[3].about.title" :description="store.views[3].about.banner_description" />
    <!-- /Banner -->

    <section id="about_view"></section>
    <!-- /about_view -->
</template>


<style lang="scss" scoped></style>