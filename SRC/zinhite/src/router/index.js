import { createRouter, createWebHistory } from 'vue-router'
// import dynamic from './dynamic'
// import store from '../store'
// import dailyReg from '../pages/visitMg/daily/dailyReg'
// import dailyInfo from '../pages/visitMg/daily/dailyInfo'
import Home from '../pages/home'
import inOutMg from './inOutMg.js'
import store from '../store'


// import Daily from '../pages/daily/index.vue'

const router = createRouter({
    history: createWebHistory(),
    // routes: dynamic(store)
    routes: [
        {
            path: '/', 
            name: 'Home', 
            component: Home,
            beforeEnter: (to, from, next) => {
                // console.log("home router", to, from)
                // console.log("home store", store.state.treeMenu.tree)
                store.commit('temp/setIsMain', false)
                next()
            }
        },
        ...inOutMg,
    ]
})

export default router;  
