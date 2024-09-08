import { createRouter, createWebHistory } from "vue-router";
import { Routes } from "./routes";

const routes = [Routes.HomePageRoute];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
