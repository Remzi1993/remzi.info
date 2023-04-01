import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './style.scss'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import Home from '@/Home.vue'
import Resume from '@/Resume.vue'
import Contact from '@/Contact.vue'
import Portfolio from '@/Portfolio.vue'
import NotFound from '@/NotFound.vue'
import AssetsDirListing from '@/AssetsDirListing.vue'

// Routes
const routes = [
    {path: '/index.html', redirect: '/'},
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/cv', component: Resume},
    {path: '/contact', component: Contact},
    {path: '/assets', component: AssetsDirListing},
    {path: '/:pathMatch(.*)', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return {top: 0}
    },
})

createApp(App)
    .use(router)
    .use(Vue3Lottie, {name: 'LottieAnimation'})
    .mount('#app')