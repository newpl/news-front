import Vue from 'vue';
import Router from 'vue-router';

import Account from '~/app/account/Account.vue';
import Main from '~/app/main/Main.vue';
import User from '~/app/user/User.vue';

Vue.use(Router);
/* 페이지 이동 경로 router */
const router = new Router({
    routes: [
        { path: '/'            , redirect: '/main'   },
        { path: '/main'        , component: Main     },
        { path: '/account'       , component: Account    },
        { path: '/profile'    , component: User },
    ]
})

// router.beforeEach(function(to, from, next) {
//     // error 처리
// })

export default router;