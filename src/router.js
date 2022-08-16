import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import User from "./components/pages/User.vue";
import Post from "./components/pages/Post.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/users", component: User },
  { path: "/posts", component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
