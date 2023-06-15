<script>
import AppBanner from '../components/AppBanner.vue';
import { store } from "../store";

export default {
    name: "HomeView",
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
    <AppBanner :title="store.views[0].home.title" :description="store.views[0].home.banner_description" />
    <!-- /Banner -->

    <section id="home_view">
        <h1 class="text-dark"></h1>
    </section>
    <!-- /home_view -->
</template>


<style lang="scss" scoped></style>