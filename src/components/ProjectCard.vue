<script>
export default {
    name: "ProjectCard",
    props: {
        title: String,
    }
}
</script>

<template>
    <div class="col">
        <div class="card h-100">
            <h1 class="fs-4">{{ title }}</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>