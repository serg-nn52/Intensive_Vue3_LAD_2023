import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import LoginLayout from '@/layouts/LoginLayout/LoginLayout.vue';
import { Links, PathNames } from '@/constants/route.constants';
import MainView from '@/views/MainView/MainView.vue';
import { storeToRefs } from 'pinia';
import { useAuthStore } from '@/stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.HOME,
      name: PathNames.HOME,
      component: MainView,
      meta: {
        layout: MainLayout,
        title: 'Main Page',
        breadcrumb: () => [
          {
            title: 'Main Page'
          }
        ]
      }
    },
    {
      path: Links.POSTS,
      name: PathNames.POSTS,
      component: () => import('@/views/PostsView/PostsView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Posts',
        requiredAuth: true,
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Main Page',
            link: Links.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    },
    {
      path: `${Links.POSTS}/:id`,
      name: PathNames.POST,
      component: () => import('@/views/PostView/PostView.vue'),
      meta: {
        layout: MainLayout,
        title: 'Post',
        requiredAuth: true,
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Main Page',
            link: Links.HOME
          },
          {
            title: 'Posts',
            link: Links.POSTS
          },
          {
            title: route.params.id as string
          }
        ]
      }
    },
    {
      path: Links.LOGIN,
      name: PathNames.LOGIN,
      component: () => import('@/views/LoginView/LoginView.vue'),
      meta: {
        layout: LoginLayout,
        title: 'Login',
        breadcrumb: (route: RouteLocationNormalizedLoaded) => [
          {
            title: 'Main Page',
            link: Links.HOME
          },
          {
            title: route.meta.title
          }
        ]
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { isAuth } = storeToRefs(authStore);
  if (to.meta.requiredAuth && !isAuth.value) {
    alert('Нужна авторизация!');
    next({ name: PathNames.LOGIN });
  } else {
    next();
  }
});

export default router;
