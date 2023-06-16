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

            <div class="card-body d-flex flex-column justify-content-between">

                <div class="card_body_top">
                    <div class="type">
                        <h5 class="fs-6">{{ type.name }}</h5>
                    </div>
                    <!-- /type -->

                    <small class="author" v-if="author">
                        <strong>Author: </strong>
                        <span>{{ author }}</span>
                    </small>
                    <!-- /author -->
                </div>
                <!-- /card_body_top -->

                <div class="card_body_bottom">
                    <div class="technology">
                        <span class="badge rounded-4 me-1" v-for="technology in technologies">
                            {{ technology.name }}
                        </span>
                    </div>
                    <!-- /technologies -->
                </div>
                <!-- /card_body_bottom -->

            </div>
            <!-- /card-body -->

            <div class="title card-footer">
                <h4 class="card-title">
                    {{ title }}
                </h4>
                <!-- /title -->
            </div>
            <!-- /card-footer -->

            <router-link class="text-center" :to="{ name: 'single-project', params: { 'slug': slug } }"></router-link>
            <!-- /link to SingleProject -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>