import { createApp } from 'vue'

import { router } from "./router";

import App from './App.vue'

// Import all of Bootstrap's JS
import * as bootstrap from '../node_modules/bootstrap/scss/bootstrap.scss'

createApp(App).use(router).mount('#app')
