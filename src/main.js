import Vue from 'vue';
//import App from './App';
import My from './components/My';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter({});

require('./router')(router);

router.start(My, '#app');

