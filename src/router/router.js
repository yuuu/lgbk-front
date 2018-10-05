import VueRouter from 'vue-router';

import Register from '@pages/Register';
import Signin from '@pages/Signin';

import DatesIndex from '@pages/dates/index';

const router =  new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/register', name: 'Register', component: Register },
    { path: '/signin', name: 'Signin', component: Signin },
    { path: '/dates', name: 'DatesIndex', component: DatesIndex },
  ]
});

export default router;
