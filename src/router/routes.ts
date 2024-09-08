export const Routes = {
  HomePageRoute: {
    path: `/products`,
    name: "HomePage",
    component: () => import("@/features/home/presentation/pages/HomePage.vue"),
    props: true,
  },
};
