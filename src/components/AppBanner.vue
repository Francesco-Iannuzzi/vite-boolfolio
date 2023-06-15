<script>

export default {
    name: "AppBanner",
    props: {
        title: String,
        description: String,
    }

}
</script>

<template>
    <section id="jumbo" class="px-5 py-3 mb-4 bg-light shadow-lg">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">{{ title }}</h1>
            <p class="col-md-8 fs-4">
                {{ description }}
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>