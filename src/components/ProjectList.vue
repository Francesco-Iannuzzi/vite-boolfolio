<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";
import { store } from "../store";

export default {
    name: "ProjectList",
    components: {
        ProjectCard,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    store.projects = response.data.result;
                    store.loading = false;
                    console.log(store.projects);
                })
                .catch(err => {
                    console.log(err);
                    store.error = error.message
                })
        },
        prevPage(path) {
            this.getProjects(path)
        },
        nextPage(path) {
            this.getProjects(path)
        },
    },
    mounted() {
        const url = store.api_url + store.projects_path
        this.getProjects(url);
    }
}
</script>

<template>
    <section class="vue-home">

        <div class="container py-5">

            <div v-if="store.projects && !store.loading"
                class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 mb-4">
                <ProjectCard :title="project.title" :slug="project.slug" :author="project.made_by"
                    :description="project.description" :date="project.creation_date" :cover="store.getImage(project.cover)"
                    :link="project.link" :code="project.code_link" :trace="project.trace"
                    :technologies="project.technologies" :type="project.type" v-for="project in store.projects.data" />
                <!-- /ProjectCard -->
            </div>
            <!-- /row -->
            <div v-else>
                <div class="row">
                    <div class="col">
                        <div class="card" aria-hidden="true">
                            <img src="http://127.0.0.1:8000/storage/placeholders/26c85b7c0475863bc6e1898b672c48b5.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a href="#" tabindex="-1" class="btn btn-warning disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" aria-hidden="true">
                            <img src="http://127.0.0.1:8000/storage/placeholders/26c85b7c0475863bc6e1898b672c48b5.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a href="#" tabindex="-1" class="btn btn-warning disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" aria-hidden="true">
                            <img src="http://127.0.0.1:8000/storage/placeholders/26c85b7c0475863bc6e1898b672c48b5.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a href="#" tabindex="-1" class="btn btn-warning disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card" aria-hidden="true">
                            <img src="http://127.0.0.1:8000/storage/placeholders/26c85b7c0475863bc6e1898b672c48b5.png"
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title placeholder-glow">
                                    <span class="placeholder col-6"></span>
                                </h5>
                                <p class="card-text placeholder-glow">
                                    <span class="placeholder col-7"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-4"></span>
                                    <span class="placeholder col-6"></span>
                                    <span class="placeholder col-8"></span>
                                </p>
                                <a href="#" tabindex="-1" class="btn btn-warning disabled placeholder col-6"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" aria-label="Previous" v-if="store.projects.prev_page_url"
                            @click="prevPage(store.projects.prev_page_url)">
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" aria-label="Next" v-if="store.projects.next_page_url"
                            @click="nextPage(store.projects.next_page_url)">
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