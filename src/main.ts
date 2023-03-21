import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './style.scss'
import Home from '@/Home.vue'
import Resume from '@/Resume.vue'
import Contact from '@/Contact.vue'
import Portfolio from '@/Portfolio.vue'

// Routes
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/portfolio', name: 'Portfolio', component: Portfolio},
    {path: '/cv', name: 'Resume', component: Resume},
    {path: '/contact', name: 'Contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')