import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: { title: 'Home' }
      },
      {
        path: 'profile',
        component: () => import('@/views/Pages/profile.vue'),
        name: 'profile',
        meta: { title: 'Profile' }
      },
      {
        path: "/layout",
        name: 'Layout',
        component: () => import('@/views/Pages/layout.vue'),
        meta: { title: 'Layout' }
      },
      {
        path: "/pages/400",
        name: '400',
        component: () => import('@/views/Pages/400.vue')
      },
      {
        path: "/pages/403",
        name: '403',
        component: () => import('@/views/Pages/403.vue')
      },
      {
        path: "/pages/404",
        name: '404',
        component: () => import('@/views/Pages/404.vue')
      },
      {
        path: "/pages/500",
        name: '500',
        component: () => import('@/views/Pages/500.vue')
      },
      {
        path: "/pages/503",
        name: '503',
        component: () => import('@/views/Pages/503.vue')
      },
      {
        path: "/pages/gallery",
        name: 'gallery',
        component: () => import('@/views/Pages/gallery.vue')
      },
      {
        path: "/pages/login",
        name: 'login',
        component: () => import('@/views/Auth/login.vue')
      },
      {
        path: "/pages/register",
        name: 'register',
        component: () => import('@/views/Auth/register.vue')
      },
      {
        path: "/pages/profile",
        name: 'profile',
        component: () => import('@/views/Auth/profile.vue')
      },
      {
        path: "/pages/forgotpassword",
        name: 'ForgotPassword',
        component: () => import('@/views/Auth/forgotpwd.vue')
      },
      {
        path: "/map/googlemap",
        name: 'googlemap',
        component: () => import('@/views/Map/googlemap.vue')
      },
      {
        path: "/map/kakaomap",
        name: 'kakaomap',
        component: () => import('@/views/Map/kakaomap.vue')
      },
      {
        path: "ui/panel",
        name: 'panel',
        component: () => import('@/views/UI/panel.vue')
      },
      {
        path: "ui/buttons",
        name: 'buttons',
        component: () => import('@/views/UI/buttons.vue')
      },
      {
        path: "ui/dropdowns",
        name: 'dropdowns',
        component: () => import('@/views/UI/dropdowns.vue')
      },
      {
        path: "ui/icons",
        name: 'icons',
        component: () => import('@/views/UI/icons.vue')
      },
      {
        path: "ui/list",
        name: 'list',
        component: () => import('@/views/UI/list.vue')
      },
      {
        path: "ui/tooltip",
        name: 'tooltip',
        component: () => import('@/views/UI/tooltip.vue')
      },
      {
        path: "ui/dialog",
        name: 'dialog',
        component: () => import('@/views/UI/dialog.vue')
      },
      {
        path: "ui/tab",
        name: 'tab',
        component: () => import('@/views/UI/tab.vue')
      },
      {
        path: "ui/images",
        name: 'images',
        component: () => import('@/views/UI/images.vue')
      },
      {
        path: "ui/colors",
        name: 'colors',
        component: () => import('@/views/UI/colors.vue')
      },
      {
        path: "ui/progressbars",
        name: 'ProgressBars',
        component: () => import('@/views/UI/progressbars.vue')
      },
      {
        path: "ui/carousel",
        name: 'carousel',
        component: () => import('@/views/UI/carousel.vue')
      },
      {
        path: "ui/animation",
        name: 'animation',
        component: () => import('@/views/UI/animation.vue')
      },
      {
        path: "ui/scrollable",
        name: 'scrollable',
        component: () => import('@/views/UI/scrollable.vue')
      },
      {
        path: "ui/rating",
        name: 'rating',
        component: () => import('@/views/UI/rating.vue')
      },
      {
        path: "ui/alert",
        name: 'alert',
        component: () => import('@/views/UI/alert.vue')
      },
      {
        path: "ui/treeview",
        name: 'treeview',
        component: () => import('@/views/UI/treeview.vue')
      },
      {
        path: "/form/generalfrm",
        name: 'generalfrm',
        component: () => import('@/views/Form/generalfrm.vue')
      },
      {
        path: "form/materialfrm",
        name: 'materialfrm',
        component: () => import('@/views/Form/materialfrm.vue')
      },
      {
        path: "form/wizardfrm",
        name: 'wizardfrm',
        component: () => import('@/views/Form/wizardfrm.vue')
      },
      {
        path: "form/validfrm",
        name: 'validfrm',
        component: () => import('@/views/Form/validfrm.vue')
      },
      {
        path: "form/uploadfrm",
        name: 'uploadfrm',
        component: () => import('@/views/Form/uploadfrm.vue')
      },
      {
        path: "Editors/markdown",
        name: 'markdown',
        component: () => import('@/views/Editors/markdown.vue')
      },
      {
        path: "editors/codeeditor",
        name: 'codeeditor',
        component: () => import('@/views/Editors/codeeditor.vue')
      },
      {
        path: "table/basictables",
        name: 'basictables',
        component: () => import('@/views/Tables/basic.vue')
      },
      {
        path: "table/edittables",
        name: 'edittables',
        component: () => import('@/views/Tables/edit.vue')
      },
      {
        path: "table/treetable",
        name: 'treetable',
        component: () => import('@/views/Tables/treetable.vue')
      },
      {
        path: "/chart/barchart",
        name: 'barchart',
        component: () => import('@/views/Chart/barchart.vue')
      },
      {
        path: "/chart/linechart",
        name: 'linechart',
        component: () => import('@/views/Chart/linechart.vue')
      },
      {
        path: "/chart/piechart",
        name: 'piechart',
        component: () => import('@/views/Chart/piechart.vue')
      },
      {
        path: "/apps/calendar",
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: "/apps/mailbox",
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: "/apps/media",
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: "/apps/forum",
        name: 'About',
        component: () => import('@/views/About.vue')
      },
      {
        path: '*',
        redirect: '/pages/404',
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
