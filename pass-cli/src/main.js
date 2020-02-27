import Vue from 'vue';
import App from './App.vue';
import VueClipboard from 'vue-clipboard2';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { MdCheckbox, MdButton, MdIcon, MdDialog } from 'vue-material/dist/components';

Vue.use(MdCheckbox);
Vue.use(MdButton);
Vue.use(MdIcon);
Vue.use(MdDialog);
Vue.use(VueClipboard);



Vue.config.productionTip = false;

new Vue({
    MdButton,
    MdDialog,
    MdCheckbox,
    render: h => h(App),
}).$mount('#app');