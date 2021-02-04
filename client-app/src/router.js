import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeView.vue'

Vue.use(Router);

function loadView(view) {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    return () => import(/* webpackChunkName: "view-[request]" */ `./views/${view}View.vue`)
}

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/wf',
            name: 'wf',
            component: loadView('Wf')
        },
        
    ]
});