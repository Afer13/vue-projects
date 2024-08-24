import { createRouter,createWebHistory } from "vue-router";

import PageOne from "./components/PageOne.vue";
import PageTwo from "./components/PageTwo.vue";
import PageSingle from "./components/PageSingle.vue";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:PageOne},
        {path:'/page-two',component:PageTwo},
        {path:'/page-single/:id',component:PageSingle},
    ]
});

export default router;