import { createRouter, createWebHistory, type RouteLocationNormalizedLoaded } from 'vue-router';
import MainLayout from '@/layouts/MainLayout.vue';
import { Links, PathNames } from '@/constants/route.constants';
import MainView from '@/views/MainView/MainView.vue';

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
    }
  ]
});

export default router;
