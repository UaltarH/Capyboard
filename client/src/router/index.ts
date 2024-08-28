import AppLayout from '@/layout/AppLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: AppLayout,
      meta: {
        title: 'Home',
        icon: 'pi pi-home',
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: () => import('@/views/Dashboard.vue'),
          meta: {
            title: 'Dashboard',
            icon: 'pi pi-table'
          }
        },
        {
          path: '/uikit/formlayout',
          name: 'formlayout',
          component: () => import('@/views/uikit/FormLayout.vue'),
          meta: {
            title: 'Form Layout',
            icon: 'pi pi-id-card'
          }
        },
        {
          path: '/uikit/input',
          name: 'input',
          component: () => import('@/views/uikit/InputDoc.vue'),
          meta: {
            title: 'Input',
            icon: 'pi pi-check-square'
          }
        },
        {
          path: '/uikit/button',
          name: 'button',
          component: () => import('@/views/uikit/ButtonDoc.vue'),
          meta: {
            title: 'Button',
            icon: 'pi pi-mobile'
          }
        },
        {
          path: '/uikit/table',
          name: 'table',
          component: () => import('@/views/uikit/TableDoc.vue'),
          meta: {
            title: 'Table',
            icon: 'pi pi-table'
          }
        },
        {
          path: '/uikit/list',
          name: 'list',
          component: () => import('@/views/uikit/ListDoc.vue'),
          meta: {
            title: 'List',
            icon: 'pi pi-list'
          }
        },
        {
          path: '/uikit/tree',
          name: 'tree',
          component: () => import('@/views/uikit/TreeDoc.vue'),
          meta: {
            title: 'Tree',
            icon: 'pi pi-share-alt'
          }
        },
        {
          path: '/uikit/panel',
          name: 'panel',
          component: () => import('@/views/uikit/PanelsDoc.vue'),
          meta: {
            title: 'Panel',
            icon: 'pi pi-tablet'
          }
        },

        {
          path: '/uikit/overlay',
          name: 'overlay',
          component: () => import('@/views/uikit/OverlayDoc.vue'),
          meta: {
            title: 'Overlay',
            icon: 'pi pi-clone'
          }
        },
        {
          path: '/uikit/media',
          name: 'media',
          component: () => import('@/views/uikit/MediaDoc.vue'),
          meta: {
            title: 'Media',
            icon: 'pi pi-image'
          }
        },
        {
          path: '/uikit/message',
          name: 'message',
          component: () => import('@/views/uikit/MessagesDoc.vue'),
          meta: {
            title: 'Message',
            icon: 'pi pi-comment'
          }
        },
        {
          path: '/uikit/file',
          name: 'file',
          component: () => import('@/views/uikit/FileDoc.vue'),
          meta: {
            title: 'File',
            icon: 'pi pi-file'
          }
        },
        {
          path: '/uikit/menu',
          name: 'menu',
          component: () => import('@/views/uikit/MenuDoc.vue'),
          meta: {
            title: 'Menu',
            icon: 'pi pi-bars'
          }
        },
        {
          path: '/uikit/charts',
          name: 'charts',
          component: () => import('@/views/uikit/ChartDoc.vue'),
          meta: {
            title: 'Charts',
            icon: 'pi pi-chart-bar'
          }
        },
        {
          path: '/uikit/misc',
          name: 'misc',
          component: () => import('@/views/uikit/MiscDoc.vue'),
          meta: {
            title: 'Misc',
            icon: 'pi pi-circle-off'
          }
        },
        {
          path: '/uikit/timeline',
          name: 'timeline',
          component: () => import('@/views/uikit/TimelineDoc.vue'),
          meta: {
            title: 'Timeline',
            icon: 'pi pi-calendar'
          }
        },
        {
          path: '/pages/empty',
          name: 'empty',
          component: () => import('@/views/pages/Empty.vue'),
          meta: {
            title: 'Empty',
            icon: 'pi pi-circle-off'
          }
        },
        {
          path: '/pages/crud',
          name: 'crud',
          component: () => import('@/views/pages/Crud.vue'),
          meta: {
            title: 'Crud',
            icon: 'pi pi-pencil'
          }
        },
        {
          path: '/documentation',
          name: 'documentation',
          component: () => import('@/views/pages/Documentation.vue'),
          meta: {
            title: 'Documentation',
            icon: 'pi pi-question-circle'
          }
        }
      ]
    },
    {
      path: '/landing',
      name: 'landing',
      component: () => import('@/views/pages/Landing.vue'),
      meta: {
        title: 'Landing',
        icon: 'pi pi-globe'
      }
    },
    {
      path: '/pages/notfound',
      name: 'notfound',
      component: () => import('@/views/pages/NotFound.vue'),
      meta: {
        title: 'Not Found',
        icon: 'pi pi-exclamation-circle'
      }
    },

    {
      path: '/auth/login',
      name: 'login',
      component: () => import('@/views/pages/auth/Login.vue'),
      meta: {
        title: 'Login',
        icon: 'pi pi-user'
      }
    },
    {
      path: '/auth/access',
      name: 'accessDenied',
      component: () => import('@/views/pages/auth/Access.vue'),
      meta: {
        title: 'Access Denied',
        icon: 'pi pi-lock'
      }
    },
    {
      path: '/auth/error',
      name: 'error',
      component: () => import('@/views/pages/auth/Error.vue'),
      meta: {
        title: 'Error',
        icon: 'pi pi-times-circle'
      }
    }
  ]
});

export default router;
