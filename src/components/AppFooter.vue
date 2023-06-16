<script>

export default {
    name: "AppFooter",
}
</script>

<template>
    <footer id="app_footer">

        <div class="footer_top">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-12 col-md-4 text-center">
                        <h4 class="fs-5 mb-3">CONTACT ME</h4>
                        <router-link class="nav-link pb-1" :to="{ 'name': 'contacts' }">
                            <strong>Send</strong> me a Message
                        </router-link>
                    </div>
                    <div class="social col-12 col-md-4 text-center">
                        <h4 class="fs-5 mb-3">AROUND THE WEB</h4>
                        <div class="d-flex justify-content-center gap-3">
                            <a href="#">
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="#">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <!-- /around the web -->
                    <div class="col-12 col-md-4 text-center">
                        <h4 class="fs-5 mb-3">ABOUT ME</h4>
                        <router-link class="nav-link pb-1" :to="{ 'name': 'about' }">
                            <strong>Discover:</strong> Click here to explore our story and learn more about us.
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- /footer_top -->

        <div class="footer_bottom text-center py-4">
            <span class="d-inline-block fs_fra_sm">Francesco Iannuzzi Portfolio</span>
        </div>
        <!-- /footer_bottom -->

    </footer>
    <!-- /app_footer -->
</template>

<style lang="scss" scoped></style>