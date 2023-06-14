<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";

export default {
    name: "ProjectList",
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
        },
        getImage(path) {
            return this.api_url + 'storage/' + path;
        },
        prevPage(path) {
            this.getProjects(path)
        },
        nextPage(path) {
            this.getProjects(path)
        },
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

            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 mb-4">
                <ProjectCard :title="project.title" :author="project.made_by" :description="project.description"
                    :date="project.creation_date" :cover="getImage(project.cover)" :link="project.link"
                    :code="project.code_link" :trace="project.trace" :technologies="project.technologies"
                    :type="project.type" v-for="project in projects.data" />
                <!-- /ProjectCard -->
            </div>
            <!-- /row -->

            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" aria-label="Previous" v-if="projects.prev_page_url"
                            @click="prevPage(projects.prev_page_url)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" aria-label="Next" v-if="projects.next_page_url"
                            @click="nextPage(projects.next_page_url)">
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                    </li>
                </ul>
            </nav>
            <!-- /page navigation -->

        </div>


    </section>
</template>

<style lang="scss"></style>