<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectList from '../components/ProjectList.vue';
export default {
    name: 'ProjectsView',
    components: {
        AppBanner,
        ProjectList,
    }
}
</script>

<template>
    <section>

        <AppBanner title="Projects" />
        <!-- /Banner -->

        <ProjectList />
        <!-- /ProjectList -->

    </section>
</template>


<style lang="scss" scoped></style>