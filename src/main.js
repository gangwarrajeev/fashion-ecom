import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./routes/index.js";
import axios from 'axios'
import VueAxios from 'vue-axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { createPinia } from 'pinia'
const app = createApp(App);

const pinia = createPinia()
app.use(pinia);
axios.defaults.baseURL = 'http://localhost:9000';
app.use(VueAxios, axios)


// Add a request interceptor
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// Add a response interceptor
// const myInterceptor = axios.interceptors.response.use(function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response;
//   }, function (error) {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   });
//   axios.interceptors.request.eject(myInterceptor);

app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.provide('appName','Fashion Ecom');
router.beforeEach((to, from, next) => {
    // if (to.matched.some(record => record.meta.reuse === false)) {
    //     app.key = to.path
    //   } else {
    //     app.key = null
    //   }
    next()
}) 
// console.log('env',process.env.HTTP_BASE_URL)
app.use(router);
app.mount('#app')
