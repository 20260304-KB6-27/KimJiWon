import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Members from '@/pages/Members.vue';
import MemberInfo from '@/pages/MemberInfo.vue';
import Videos from '@/pages/Videos.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/members', name: 'members', component: Members },
    { path: '/members/:id', name: 'members/id', component: MemberInfo },
    
    { path: '/Videos', component: Videos },
  ],
});

export default router;
