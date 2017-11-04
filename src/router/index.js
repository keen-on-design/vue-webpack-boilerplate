import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/pages/HelloWorld';
import Example from '@/pages/Example';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld,
    },
    {
      path: '/example',
      name: 'Example',
      component: Example,
    },
  ],
});
