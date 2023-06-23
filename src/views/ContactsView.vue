<script>
import AppBanner from '../components/AppBanner.vue';
import AppFooter from '../components/AppFooter.vue';
import { store } from "../store";
import axios from 'axios';

export default {
    name: "ContactsView",
    components: {
        AppBanner,
        AppFooter
    },
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            loading: false,
            success: false,
            errors: {},
        }
    },
    methods: {
        sendForm() {
            this.loading = true;

            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }

            this.errors = {};

            axios
                .post(`${this.store.api_url + this.store.contacts_path}`, data)
                .then((response) => {
                    this.success = response.data.success;
                    if (!this.success) {
                        this.errors = response.data.errors;
                    } else {
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    }
                    this.loading = false;
                }).catch(err => {
                    console.log(err);
                })
        }
    }
}
</script>

<template>
    <!-- <AppBanner :title="store.views[2].contacts.title" :description="store.views[2].contacts.banner_description" />
    /Banner -->

    <section id="contacts_view">
        <div class="container">

            <div class="row">
                <div class="col-4">
                    <div class="alert alert-primary" role="alert">

                        <h4 class="alert-heading">Contact Me:</h4>

                        <hr>

                        <p>
                            I value your interest and would love to hear from you. Feel free to reach out using the form
                            below. Whether it's a potential collaboration, a question, or simply saying hello, I look
                            forward to
                            connecting with you and discussing how we can work together to bring your ideas to life.
                        </p>
                    </div>
                </div>
                <!-- /col -->

                <div class="col-8">

                    <div v-if="success" class="alert alert-success alert-dismissible fade show mb-5" role="alert">
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <strong>Message send!</strong> We will reply as soon as possible.
                    </div>
                    <!-- /alert send messages -->

                    <div class="card border-0 p-3">
                        <form @submit.prevent="sendForm()">

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" name="name" id="name" class="form-control"
                                    :class="{ 'is-invalid': errors.name }" placeholder="Your name"
                                    aria-describedby="nameHelper" v-model="name">
                                <small id="nameHelper">Insert here your name</small>
                                <p v-for="(error, index) in errors.name" :key="`message-error-${index}`"
                                    class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <!-- /form name -->

                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" :class="{ 'is-invalid': errors.email }"
                                    name="email" id="email" aria-describedby="emailHelper" placeholder="example@example.com"
                                    v-model="email">
                                <small id="emailHelper" class="form-text">Insert here your email</small>
                                <p v-for="(error, index) in errors.mail" :key="`message-error-${index}`"
                                    class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <!-- /form email -->

                            <div class="mb-3">
                                <label for="yourMessage" class="form-label">Message</label>
                                <textarea class="form-control" :class="{ 'is-invalid': errors.message }" name="yourMessage"
                                    id="yourMessage" rows="5" placeholder="Insert Here your Message"
                                    v-model="message"></textarea>
                                <p v-for="(error, index) in errors.message" :key="`message-error-${index}`"
                                    class="invalid-feedback">
                                    {{ error }}
                                </p>
                            </div>
                            <!-- /form textarea -->

                            <button type="submit" class="btn btn-primary mt-4" :disabled="loading">
                                <i class="fa-solid fa-paper-plane"></i>
                                {{ loading ? 'Sending...' : 'Send' }}
                            </button>
                            <!-- /submit -->

                        </form>
                    </div>
                </div>
                <!-- /col -->
            </div>


        </div>
    </section>
    <!-- /contacts_view -->

    <AppFooter />
    <!-- /Footer -->
</template>


<style lang="scss" scoped></style>