import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';

import { createRouter, createWebHistory } from 'vue-router';

import Home  from "@/views/Home.vue"
import StaffLogin  from "@/views/StaffLogin.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/staff-login', name: 'Staff-Login', component: StaffLogin}
    ]
})

const app = createApp(App)
app.use(bootstrap)
app.use(router)
app.mount('#app')




