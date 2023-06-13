<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    }
}
</script>

<template>
    <section class="vue-home">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column justify-content-center align-items-center vh-100">
                    <h1>APP VUE!!!</h1>
                    <HelloWorld />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
