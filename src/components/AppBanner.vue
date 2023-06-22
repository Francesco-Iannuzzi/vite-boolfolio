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
    <section id="jumbo" class="px-5 py-1 mb-4 bg-light">
        <div class="container-fluid py-3">
            <h1 class="display-5 fw-bold mt-5">{{ title }}</h1>
            <p class="col-md-8 fs-4">
                {{ description }}
            </p>
        </div>
    </section>
    <!-- <section id="jumbo">
        <div class="bg-pan-left">
            ciao
        </div>
    </section> -->
</template>

<style lang="scss" scoped></style>