<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "AppMain",
    components: {
        ProjectCard,
    },
    data() {
        return {
            api_url: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
            loading: true,
            projects: [],
            error: null,
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.projects = response.data.projects;
                    this.loading = false;
                    console.log(this.projects);
                })
                .catch(err => {
                    console.log(err);
                    this.error = error.message
                })
        }
    },
    mounted() {
        const url = this.api_url + this.projects_path
        //console.log(url);
        this.getProjects(url);
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container py-5">
            <h1 class="fs-4 text-secondary my-4">Projects</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
                <div class="col" v-for="project in projects">
                    <div class="card h-100">
                        <ProjectCard></ProjectCard>
                        <!-- /ProjectCard -->
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss"></style>