import VueRouter from 'vue-router';

import Register from '@pages/Register';
import Signin from '@pages/Signin';

const router =  new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/register', name: 'Register', component: Register },
    { path: '/signin', name: 'Signin', component: Signin },
  ]
});

export default router;
