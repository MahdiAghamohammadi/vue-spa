import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/pages/Home.vue";

import IndexUser from "./components/pages/users/Index.vue";
import TemplateUser from "./components/pages/users/TemplateUser.vue";
import ShowUser from "./components/pages/users/ShowUser.vue";

import TemplatePost from "./components/pages/posts/TemplatePost.vue";
import IndexPost from "./components/pages/posts/Index.vue";
import ShowPost from "./components/pages/posts/ShowPost.vue";
import CreatePost from "./components/pages/posts/CreatePost.vue";

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
  {
    path: "/posts",
    component: TemplatePost,
    children: [
      { path: "", name: "posts", component: IndexPost },
      { path: ":id", name: "showPost", component: ShowPost },
      { path: "create", name: "createPost", component: CreatePost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
