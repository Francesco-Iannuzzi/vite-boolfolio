<script>

export default {
    name: "AppHeader",
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand fixed-top">
            <div class="container">
                <div class="navbar_logo">
                    <router-link class="navbar-brand d-flex" :to="{ 'name': 'home' }">
                        <h3 class="mb-0 align-self-center">Portfolio</h3>
                    </router-link>
                </div>
                <div class="navbar_list">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link pb-1 d-flex gap-1" :to="{ 'name': 'projects' }">
                                <i class="fa-solid fa-diagram-project align-self-center"></i>
                                <h4 class="d-none d-md-block mb-0">Projects</h4>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pb-1 d-flex gap-1" :to="{ 'name': 'contacts' }">
                                <i class="fa-regular fa-envelope align-self-center"></i>
                                <h4 class="d-none d-md-block mb-0">Contacts</h4>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link pb-1 d-flex gap-1" :to="{ 'name': 'about' }">
                                <i class="fa-solid fa-address-card align-self-center"></i>
                                <h4 class="d-none d-md-block mb-0">About</h4>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- /navbar -->

    </header>
    <!-- /header -->
</template>

<style lang="scss" scoped></style>