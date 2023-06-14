<script>
import AppBanner from '../components/AppBanner.vue';
import axios from 'axios';

export default {
    name: 'SingleProjectView',
    components: {
        AppBanner
    },
    props: {

    },
    data() {
        return {
            api_url: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects/',
            loading: true,
            project: null,
            error: null,
        }
    },
    mounted() {
        const url = this.api_url + this.projects_path + this.$route.params.slug;
        console.log(url);
        axios
            .get(url)
            .then(response => {
                console.log(response);
                console.log(response.data.success);
                if (response.data.success) {
                    console.log('ok');
                    this.project = response.data.result;
                    this.loading = false;
                    console.log(this.project);
                } else {
                    //404
                }
            })
            .catch(err => {
                console.log(err);
                this.error = err.message
            })
    }
}

</script>

<template>
    <section>

        <AppBanner :title="project.title" />
        <!-- /Banner -->
        <div class="container py-5" v-if="project">

        </div>

    </section>
</template>


<style lang="scss" scoped></style>