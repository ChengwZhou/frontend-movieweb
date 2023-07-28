// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/components/Home'
import SearchResult from "@/components/searchResultPage/SearchResult";
import Register from '../components/RegisterPage/Register.vue'
import Login from '../components/UserLoginPage/Login.vue'
import MovieSet from "@/components/MoviePage/MovieSet"
import Recommand from "@/components/recomandpage/Recommand"
import Movie from '@/components/blogpage/Movie'
import ErrorPage from "@/components/common/ErrorPage";


import navItems from '../components/admin/PageCompo/navItems.vue'
import LoginPage from '../components/admin/LoginPage.vue';
import ModelSelect from '../components/admin/AdminPage.vue'
import ModelUpdate from '../components/admin/ModelUpdate.vue'
import EDA from '../components/admin/EDA.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        keepAlive: true
    }
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: SearchResult,
    meta: {
        keepAlive: true
    }
  },

  { path: '/login', 
    component: Login,
    meta: {
    keepAlive: false
  }
  },
  { path: '/register', 
    component: Register,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    meta: {
        keepAlive: true,
        requireAuth: true
    }
  },
  {
    path: '/movieset',
    name: 'MovieSet',
    component: MovieSet,
    meta: {
        keepAlive: true,
        requireAuth: true,
    }
  },  
  {
    path: '/recommand',
    name: 'Recommand',
    component: Recommand,
    meta: {
        keepAlive: true,
        requireAuth: true,
    }
  },
  


  { path: '/Adminlogin', component: LoginPage },
  { path: '/Admin', 
    props: true, 
    component: navItems,
    children: [
      {
        path: 'modelselect',
        props:true,
        component: ModelSelect,
      },
      {
        path: 'modelupdate',
        component: ModelUpdate ,
      },
      { 
        path: 'eda',
        component:EDA,
      }
    ] 
  },
  {
    path: '/404',
    name: 'ErrorPage',
    component: ErrorPage,
    meta: {
        keepAlive: false
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, _) => {// eslint-disable-line no-unused-vars
    console.log('Current route after navigation:', to);
});

export default router
