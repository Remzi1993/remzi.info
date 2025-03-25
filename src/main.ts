import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './main.scss'
import 'bootstrap'
import App from './App.vue'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'
import NotFound from './components/NotFound.vue'
import {createHead} from '@unhead/vue/client'

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
    .use(router)
    .use(createHead())
    .mount('#app')