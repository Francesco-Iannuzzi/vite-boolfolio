<script>

export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-sm fixed-top">
            <div class="container">
                <router-link class="navbar-brand me-5" :to="{ 'name': 'home' }">
                    <h5 class="mb-0">Portfolio</h5>
                </router-link>
                <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link pb-1" :to="{ 'name': 'projects' }">
                                <i class="fa-solid fa-diagram-project"></i>
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pb-1" :to="{ 'name': 'contacts' }">
                                <i class="fa-regular fa-envelope"></i>
                                Contacts
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pb-1" :to="{ 'name': 'about' }">
                                <i class="fa-solid fa-address-card"></i>
                                About
                            </router-link>
                        </li>
                    </ul>
                    <form id="search" class="search d-none d-lg-flex gap-2" role="search">
                        <div class="input-group">
                            <span class="input-group-text border-0">
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
    </header>
</template>

<style lang="scss" scoped></style>