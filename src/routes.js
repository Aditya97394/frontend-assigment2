import { createWebHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import CreateInvoice from './components/CreateInvoice.vue';
import History from './components/History.vue';

import Edit from './components/Edit.vue';
const routes = [

    {
        name: "Home",
        path: "/",
        component: Home
    },

    {
        name: 'History',
        path: '/History',

        component: History,

        children: [
            {
                path: '/History/Edit',
                component: Edit,

            },
        ]
    },
    {
        name: 'CreateInvoice',
        path: '/CreateInvoice',
        component: CreateInvoice,

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router