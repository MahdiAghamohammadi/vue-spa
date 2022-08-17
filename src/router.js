import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";
import IndexUser from "./components/pages/users/Index.vue";
import TemplateUser from "./components/pages/users/TemplateUser.vue";
import ShowUser from "./components/pages/users/ShowUser.vue";
import Post from "./components/pages/Post.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    component: TemplateUser,
    children: [
      { path: "", name: "users", component: IndexUser },
      { path: ":id", name: "showUser", component: ShowUser },
    ],
  },
  { path: "/posts", name: "posts", component: Post },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
