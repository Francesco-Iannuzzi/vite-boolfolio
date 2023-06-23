<script>
import axios from 'axios';
import { store } from "../store";
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
    name: 'SingleProjectView',
    components: {
        AppBanner,
        AppFooter
    },
    props: {

    },
    data() {
        return {
            store,
            project: null,
        }
    },
    mounted() {
        const url = store.api_url + store.projects_path + this.$route.params.slug;
        //console.log(url);
        axios
            .get(url)
            .then(response => {
                //console.log(response);
                //console.log(response.data.success);
                if (response.data.success) {
                    this.project = response.data.result;
                    //store.loading = false;
                    console.log(project);
                    console.log(project.technologies);
                } else {
                    // TODO 404
                    this.$router.push({ name: 'NotFound' })
                }
            })
            .catch(err => {
                console.log(err);
                store.error = err.message
            })
    }
}

</script>

<template>
    <section id="single_card">

        <!-- <AppBanner :title="project.title" v-if="project" />
        /Banner -->

        <div class="container py-5" v-if="project">
            <div class="row">
                <div class="col-3 image">
                    <img class="img-fluid" :src="store.getImage(project.cover)" :alt="project.title">

                    <!-- Button trigger modal -->
                    <button type="button" class="btn_modal btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered modal-xl">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                                        {{ project.title }}
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img class="img-fluid" :src="store.getImage(project.cover)" :alt="project.title">
                                </div>

                            </div>
                        </div>
                    </div>


                </div>
                <!-- /col image -->

                <div class="col-9 project_info_primary">
                    <h3>Author: {{ project.made_by }}</h3>
                    <!-- /author -->

                    <div class="info_meta py-3 d-flex flex-column gap-2">
                        <div class="type d-flex align-items-center gap-2">
                            <h4 class="mb-0">
                                Type:
                            </h4>
                            <a v-if="project.type" href="#" class="badge p-2">
                                {{ project.type.name }}
                            </a>
                            <span v-else>N/A</span>
                        </div>
                        <div class="technologies">
                            <ul v-if="project.technologies" class="ps-0 d-flex gap-3">
                                <li>
                                    <h4 class="mb-0 d-inline">Technologies:</h4>
                                </li>
                                <li v-for="technology in project.technologies" class="align-self-center">
                                    <span class="badge rounded-4">
                                        {{ technology.name }}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- /info_meta -->

                </div>
                <!-- col project_info_primary -->

                <div class="col-12 project_info_secondary mt-3">

                    <div class="info_link">
                        <small>
                            <strong>
                                Link:
                                <a v-if="project.link" :href="project.link">{{ project.link }}</a>
                                <small v-else>N/A</small>
                            </strong>
                        </small>
                        <!-- /project link -->

                        <br>

                        <small>
                            <strong>
                                Code Link:
                                <a v-if="project.code_link" :href="project.code_link">{{ project.code_link }}</a>
                                <small v-else>N/A</small>
                            </strong>
                        </small>
                        <!-- /code link -->
                    </div>
                    <!-- /info_link -->

                    <hr>

                    <div class="info_description">
                        <p>
                            <strong>Description: </strong>
                            {{ project.description }}
                        </p>
                        <p>
                            <strong>Trace: </strong>
                            {{ project.trace }}
                        </p>
                    </div>
                    <!-- /info_description -->

                </div>
                <!-- /project_info_secondary -->
            </div>
        </div>

    </section>

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>