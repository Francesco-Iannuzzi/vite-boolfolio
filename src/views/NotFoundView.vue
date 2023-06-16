<script>
import AppBanner from '../components/AppBanner.vue';

export default {
    name: "NotFoundView",
    components: {
        AppBanner,
    }
}

</script>

<template>
    <AppBanner title="???" description="404 Not Found" />
    <!-- /Banner -->

    <section class="container">
        <router-link :to="{ name: 'home' }">
            Back to Home
        </router-link>

    </section>
</template>

<style lang="sass" scoped>

</style>