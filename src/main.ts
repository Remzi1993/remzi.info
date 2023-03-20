import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import 'bootstrap-icons/font/bootstrap-icons.scss'
import './style.scss'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Portfolio from './components/Portfolio.vue'

// Routes
const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/portfolio', name: 'Portfolio', component: Portfolio},
    {path: '/resume', name: 'Resume', component: Resume},
    {path: '/contact', name: 'Contact', component: Contact},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')