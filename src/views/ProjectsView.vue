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
    <AppBanner title="Projects" />
    <!-- /Banner -->

    <section id="projects_view">

        <ProjectList />
        <!-- /ProjectList -->

    </section>
    <!-- /projects_view -->
</template>


<style lang="scss" scoped></style>