import './bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/dist/sweetalert2.css';
import { createApp } from 'vue';
import app from './components/app.vue';
import router from './router';

window.Swal = Swal;
const toast = Swal.mixin({
    toast: true,
    position:'top-end',
    showConfirmButton:false,
    timer:3000,
    timeProgressBar:true,
});
window.toast = toast

createApp(app).use(router).mount('#app')