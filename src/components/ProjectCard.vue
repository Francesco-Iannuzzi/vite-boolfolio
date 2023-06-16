<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        slug: String,
        author: String,
        description: String,
        date: String,
        cover: String,
        link: String,
        code: String,
        trace: String,
        technologies: Array,
        type: Object,
    },
    mounted() {
        let tech = this.technologies
        console.log(tech[1]);
    }
}
</script>

<template>
    <div class="col">
        <div id="project_card" class="card shadow h-100 border-0" :style="{ 'background-image': `url(${cover})` }">
            <!-- <img class="card-img-top" :src="cover" :alt="title"> -->
            <!-- /card-img-top -->

            <div class="card-body d-flex flex-column justify-content-between">
                <h4 class="card-title">
                    {{ title }}
                </h4>
                <small v-if="author">
                    <strong>Author: </strong><br>
                    <span>{{ author }}</span>
                </small>
                <small v-if="date">
                    <strong>Date: </strong><br>
                    <span>{{ date }}</span>
                </small>
                <div>
                    <span v-for="technology in technologies">
                        <span class="badge rounded-4 me-1">{{ technology.name }}</span>
                    </span>
                </div>
                <router-link class="text-center" :to="{ name: 'single-project', params: { 'slug': slug } }"></router-link>
            </div>
            <!-- /card-body -->


            <div class="card-footer shadow">
                <h5 class="fs-6 text-center">{{ type.name }}</h5>
            </div>
            <!-- /card-footer -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>