import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';


createApp(App).use(bootstrap).mount('#app')




