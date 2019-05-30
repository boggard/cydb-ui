import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false;
Vue.use(Vuetify, {
    theme: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c'
    }
});

new Vue({
    render: h => h(App),
}).$mount('#app');

