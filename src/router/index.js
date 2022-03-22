import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import ("@/views/home/Home")
const Category = () => import ("@/views/category/Category")
const ShopCar = () => import ("@/views/shopCar/ShopCar")
const Profile = () => import ("@/views/profile/Profile")
const Detail = () => import('@/views/detail/Detail')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/shopCar',
    name: 'ShopCar',
    component: ShopCar,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Detail/:iid',//动态路由传参数
    name: 'Detail',
    component: Detail,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
