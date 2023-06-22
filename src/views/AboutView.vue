<script>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import { store } from "../store";

export default {
    name: "AboutView",
    components: {
        AppBanner,
        AppFooter,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- <AppBanner :title="store.views[3].about.title" :description="store.views[3].about.banner_description" />
    /Banner -->

    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="img-fluid"
                        src="https://media.discordapp.net/attachments/1071838099073671259/1118919573895401494/unaltroDio_dark_blueprint_background_052cb6ab-bf93-4281-9ade-8c70379aeb07.png?width=1506&height=1506"
                        alt="">
                </div>
                <div class="col-7">
                    <h3>Francesco Iannuzzi</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illo nostrum, tenetur suscipit corrupti
                        repellendus excepturi nam alias. Consequatur magni laudantium dolore impedit beatae est provident
                        nemo labore unde aspernatur placeat deleniti, ratione enim ex sunt facilis. Illo iure impedit fugit,
                        nemo cum quisquam officia eum in iusto, labore optio ipsa hic excepturi quos aperiam? Fugit corrupti
                        iure dicta quam consectetur recusandae delectus exercitationem molestiae error excepturi assumenda
                        tenetur, beatae consequatur maxime eius? Quisquam, esse? Magni facere obcaecati incidunt
                        exercitationem non. Consequuntur cumque nostrum minima quis magnam reprehenderit nesciunt, qui eaque
                        sunt natus eveniet a omnis, accusamus, eligendi soluta voluptatibus?
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- /about_view -->

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>