import { createApp } from 'vue'
import App from './App.vue'

//import SCSS
import "./assets/scss/app.scss";

// Import all of Bootstrap's JS
import * as bootstrap from '../node_modules/bootstrap/scss/bootstrap.scss'

import { router } from './router'

createApp(App).use(router).mount('#app')
