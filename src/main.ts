import {createApp} from 'vue'
import {VueHeadMixin, createHead} from '@unhead/vue'
import {createRouter, createWebHistory} from 'vue-router'
import BootstrapPlugin from './bootstrap-plugin.ts'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './main.scss'
import App from './App.vue'
import Home from '@/Home.vue'
import Resume from '@/Resume.vue'
import Portfolio from '@/Portfolio.vue'
import NotFound from '@/NotFound.vue'

const head = createHead()

// Routes
const routes = [
    {path: '/index.html', redirect: '/'},
    {path: '/', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/cv', component: Resume},
    {path: '/:pathMatch(.*)', component: NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        // always scroll to top
        return {top: 0}
    },
    linkActiveClass: "active",
    linkExactActiveClass: "active"
})

createApp(App)
    .use(head)
    .mixin(VueHeadMixin)
    .use(router)
    .use(BootstrapPlugin)
    .mount('#app')