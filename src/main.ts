import {createApp} from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.scss'
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'

// Routes
const routes = [
    {path: '/', name: 'Home', component: Home},
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