// frontend/src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import UserProfile from "../components/UserProfile.vue";


const routes = [
  { path: "/", component: UserProfile },
  { path: "/register", component: Register },
  { path: "/login", component: Login },
  { path: "/profile", component: UserProfile },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
