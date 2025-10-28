import { createRouter, createWebHistory } from 'vue-router'

// Import các page components
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Skills from '../views/Skills.vue'
import Projects from '../views/Projects.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Trang Chủ - Portfolio Cá Nhân'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Giới Thiệu - Portfolio Cá Nhân'
    }
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills,
    meta: {
      title: 'Kỹ Năng - Portfolio Cá Nhân'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Dự Án - Portfolio Cá Nhân'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Liên Hệ - Portfolio Cá Nhân'
    }
  },
  // Redirect any unknown routes to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Set page title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router