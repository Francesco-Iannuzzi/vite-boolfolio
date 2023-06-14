<script>

export default {
    name: "AppBanner",
    props: {
        title: String,
    }

}
</script>

<template>
    <div class="px-5 py-3 mb-4 bg-light rounded-3 shadow">
        <div class="container-fluid py-5">
            <h1 class="display-5 fw-bold">{{ title }}</h1>
            <p class="col-md-8 fs-4 text-primary">
                Using a series of utilities, you can create this jumbotron, just like the one in
                previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your
                liking.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>