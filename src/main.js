import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from "./routes/index.js";
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

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
router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    next();
}) 
// console.log('env',process.env.HTTP_BASE_URL)
app.use(router);
app.mount('#app')
