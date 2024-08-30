export const Routes = {
    HomePageRoute: {
        path: `/`,
        name: "HomePage",
        component: () => import ("@/features/home/presentation/pages/HomePage.vue"),
        props: true,
    },
};