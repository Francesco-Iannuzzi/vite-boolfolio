<script>
import axios from 'axios';
import ProjectCard from "./ProjectCard.vue";
import PlaceHolderCards from "../components/PlaceHolderCards.vue";
import { store } from "../store";

export default {
    name: "ProjectList",
    components: {
        ProjectCard,
        PlaceHolderCards
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

        <div class="container">
            <form id="search" class="search d-flex gap-2 mb-3" role="search">
                <div class="input-group">
                    <span class="input-group-text border-0">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="search" class="form-control border-0" placeholder="Search" aria-label="Search"
                        aria-describedby="search">
                </div>
                <button class="btn btn-outline-light" type="submit">Search</button>
            </form>

            <div v-if="store.projects && !store.loading" class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mb-4">
                <ProjectCard :title="project.title" :slug="project.slug" :author="project.made_by"
                    :description="project.description" :date="project.creation_date" :cover="store.getImage(project.cover)"
                    :link="project.link" :code="project.code_link" :trace="project.trace"
                    :technologies="project.technologies" :type="project.type" v-for="project in store.projects.data" />
                <!-- /ProjectCard -->
            </div>
            <!-- /row -->
            <div v-else>
                <PlaceHolderCards />
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