<script>

export default {
    name: "AppHeader",

    data() {
        return {

        }
    },
    methods: {

    },

}
</script>

<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="nav navbar-nav">
            <router-link class="nav-link" :to="{ 'name': 'home' }" aria-current="page">Home</router-link>
            <router-link class="nav-link" :to="{ 'name': 'projects' }">Projects</router-link>
            <router-link class="nav-link" :to="{ 'name': 'contacts' }">Contacts</router-link>
            <router-link class="nav-link" :to="{ 'name': 'about' }">About</router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>