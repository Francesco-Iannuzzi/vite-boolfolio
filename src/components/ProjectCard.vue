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
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="cover" :alt="title">
            <!-- /card-img-top -->

            <div class="card-body d-flex flex-column">
                <h4 class="card-title">
                    {{ title }}
                </h4>
                <small v-if="author">
                    <strong>Author: </strong>
                    {{ author }}
                </small>
                <small v-if="date">
                    <strong>Date: </strong>
                    {{ date }}
                </small>
                <div v-for="technology in technologies">
                    <span class="badge bg-primary">{{ technology.name }}</span>
                </div>
                <h5>{{ type.name }}</h5>
                <router-link class="text-center btn btn-warning"
                    :to="{ name: 'single-project', params: { 'slug': slug } }">More</router-link>
            </div>
            <!-- /card-body -->


            <div v-if="link || code" class="card-footer d-flex flex-column">
                <small v-if="link"><strong>Link: </strong>{{ link }}</small>
                <small v-if="code"><strong>Code Link: </strong>{{ code }}</small>
            </div>
            <!-- /card-footer -->
        </div>
    </div>
</template>

<style lang="scss" scoped></style>