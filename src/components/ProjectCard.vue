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
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <h1 class="fs-4">{{ title }}</h1>
            <small>{{ author }}</small>
            <small>{{ description }}</small>
            <small>{{ date }}</small>
            <small>{{ link }}</small>
            <small>{{ code }}</small>
            <small>{{ trace }}</small>
            <img :src="cover" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped></style>