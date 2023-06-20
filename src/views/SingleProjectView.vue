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
        console.log(url);
        axios
            .get(url)
            .then(response => {
                console.log(response);
                console.log(response.data.success);
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
    <section>

        <AppBanner :title="project.title" v-if="project" />
        <!-- /Banner -->

        <div class="container py-5" v-if="project">
            <div>
                <img class="img-fluid" :src="store.getImage(project.cover)" :alt="project.title">
            </div>
            <!-- /img -->

            <h3>{{ project.made_by }}</h3>
            <small><strong>Link: </strong>{{ project.link }}</small><br>
            <small><strong>Code Link: </strong>{{ project.code_link }}</small>
            <div class="meta py-3 d-flex flex-column gap-2">
                <div class="type d-flex align-items-center gap-2">
                    <h4 class="mb-0">
                        Type:
                    </h4>
                    <a v-if="project.type" href="#" class="badge bg-primary text-decoration-none p-2">
                        {{ project.type.name }}
                    </a>
                    <span v-else>N/A</span>
                </div>
                <div class="technologies">
                    <h4 class="mb-0 d-inline">
                        Technologies:
                    </h4>
                    <ul v-if="project.technologies.name" class="ps-0">
                        <li v-for="technology in project.technologies" class="list-unstyled">
                            <i class="fa-solid fa-microchip"></i>
                            {{ technology.name }}
                        </li>
                    </ul>
                    <span v-else>N/A</span>
                </div>
            </div>
            <hr>
            <p><strong>Description: </strong>{{ project.description }}</p>
            <p><strong>Trace: </strong>{{ project.trace }}</p>
        </div>

    </section>

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>