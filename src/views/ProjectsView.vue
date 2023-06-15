<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectList from '../components/ProjectList.vue';
import { store } from '../store';

export default {
    name: 'ProjectsView',
    components: {
        AppBanner,
        ProjectList,
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <AppBanner :title="store.views[1].projects.title" :description="store.views[1].projects.banner_description" />
    <!-- /Banner -->

    <section id="projects_view">

        <ProjectList />
        <!-- /ProjectList -->

    </section>
    <!-- /projects_view -->
</template>


<style lang="scss" scoped></style>