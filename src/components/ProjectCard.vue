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
            <div class="card-body d-flex flex-column justify-content-between rounded-top">

                <div class="card_body_top">
                    <h4 class="card-title">
                        {{ title }}
                    </h4>
                    <!-- /title -->

                    <small class="author" v-if="author">
                        <strong>Author: </strong>
                        <span>{{ author }}</span>
                    </small>
                    <!-- /author -->
                </div>
                <!-- /card_body_top -->

                <div class="card_body_bottom">
                    <div class="technology d-flex justify-content-start gap-2">
                        <span class="badge rounded-4" v-for="technology in technologies">
                            {{ technology.name }}
                        </span>
                    </div>
                    <!-- /technologies -->
                </div>
                <!-- /card_body_bottom -->

            </div>
            <!-- /card-body -->

            <div class="type card-footer border-0 rounded-bottom">
                <div v-if="type" class="type fs-4">
                    <span class="badge mb-2">{{ type.name }}</span>
                </div>
                <!-- /type -->
            </div>
            <!-- /card-footer -->

            <router-link class="text-center" :to="{ name: 'single-project', params: { 'slug': slug } }"></router-link>
            <!-- /link to SingleProject -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>