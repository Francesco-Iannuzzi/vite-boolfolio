<script>
import AppBanner from '../components/AppBanner.vue';
import { store } from "../store";

export default {
    name: "ContactsView",
    components: {
        AppBanner,
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

    <section id="contacts_view"></section>
    <!-- /contacts_view -->
</template>


<style lang="scss" scoped></style>