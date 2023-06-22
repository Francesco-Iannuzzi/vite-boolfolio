<script>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import { store } from "../store";

export default {
    name: "HomeView",
    components: {
        AppBanner,
        AppFooter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- <AppBanner :title="store.views[0].home.title" :description="store.views[0].home.banner_description" />
    /Banner -->

    <section id="home">
        <div class="container">
            <h1>Hello,</h1>
            <h1>I'm Francesco</h1>
            <div class="d-flex">
                <p class="mb-0">
                    and this is my Portfolio! <br>
                    Scroll to see MY Projects, MY History and if you want to contact ME.
                </p>
            </div>
        </div>
    </section>
    <!-- /home_view -->

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>