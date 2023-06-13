<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
        author: String,
        description: String,
        date: String,
        cover: String,
        link: String,
        code: String,
        trace: String,
    },
    methods: {
        getImage(path) {
            return this.api_url + 'storage/' + path;
        }
    },
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="cover" :alt="title">
            <!-- /card-img-top -->

            <div class="card-body d-flex flex-column">
                <h4 class="card-title">{{ title }}</h4>
                <small v-if="author"><strong>Author: </strong>{{ author }}</small>
                <small v-if="date"><strong>Date: </strong>{{ date }}</small>
                <p v-if="description" class="card-text"><strong>Description: </strong>{{ description }}</p>
                <hr v-if="trace && description">
                <p v-if="trace" class="card-text"><strong>Trace: </strong>{{ trace }}</p>
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