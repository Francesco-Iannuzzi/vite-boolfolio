<script>

export default {
    name: "AppHeader",
}
</script>

<template>
    <nav class="navbar navbar-expand-md fixed-top">
        <div class="container">
            <router-link class="navbar-brand" :to="{ 'name': 'home' }">Portfolio</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ 'name': 'projects' }">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ 'name': 'contacts' }">Contacts</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ 'name': 'about' }">About</router-link>
                    </li>
                </ul>
                <form class="d-flex gap-2" role="search">
                    <div class="input-group">
                        <span class="input-group-text border-0" id="search">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="search" class="form-control border-0" placeholder="Search" aria-label="Search"
                            aria-describedby="search">
                    </div>
                    <button class="btn btn-outline-light" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>