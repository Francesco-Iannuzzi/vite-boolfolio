<script>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import { store } from "../store";

export default {
    name: "ContactsView",
    components: {
        AppBanner,
        AppFooter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <AppBanner :title="store.views[2].contacts.title" :description="store.views[2].contacts.banner_description" />
    <!-- /Banner -->

    <section id="contacts_view" class="py-5">
        <div class="container">
            <div class="card border-0 p-3">
                <form action="post">
                    <div class="mb-3">
                        <label for="name" class="form-label">Name</label>
                        <input type="text" name="name" id="name" class="form-control" placeholder="Your name"
                            aria-describedby="nameHelper">
                        <small id="nameHelper">Insert here your name</small>
                    </div>
                    <!-- /form name -->

                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelper"
                            placeholder="example@example.com">
                        <small id="emailHelper" class="form-text">Insert here your email</small>
                    </div>
                    <!-- /form email -->

                    <div class="mb-3">
                        <label for="yourMessage" class="form-label">Message</label>
                        <textarea class="form-control" name="yourMessage" id="yourMessage" rows="5"
                            placeholder="Insert Here your Message"></textarea>
                    </div>
                    <!-- /form textarea -->

                    <button type="submit" class="btn btn-primary mt-4">Send</button>
                    <!-- /submit -->

                </form>
            </div>
        </div>
    </section>
    <!-- /contacts_view -->

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>