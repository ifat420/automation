import Vue from 'vue'
import Router from 'vue-router' 

import home from './pages/index.vue'
 
import login from './pages/login.vue'

import academicTeacher from './pages/index/academic/teacher.vue'
import academicStudent from './pages/index/academic/student.vue'
import academicStuff from './pages/index/academic/staff.vue'
import academicHall from './pages/index/academic/hall.vue'

import grandAdmin from './pages/index/users/super.vue'
import userAdmin from './pages/index/users/admin.vue'
import userTeacher from './pages/index/users/teacher.vue'
import userStudent from './pages/index/users/student.vue'
import userStuff from './pages/index/users/staff.vue'

import sessionAdmin from './pages/index/admins/session.vue'

import faculty from './pages/index/faculty.vue'
import department from './pages/index/department.vue'
import program from './pages/index/program.vue'

import sessionList from './pages/index/session/list.vue'
import sessionAdd from './pages/index/session/new.vue'

import courseAdd from './pages/index/course/add.vue'
import courseList from './pages/index/course/list.vue'
import courseAssign from './pages/index/course/assign.vue'
import courseRegister from './pages/index/course/register.vue'

import marksTable from './pages/index/marks/table.vue'
import thirdExaminerTable from './pages/index/marks/thirdexaminertable.vue'
import finalResultAllTogather from './pages/index/marks/finalresultalltogather.vue' 
 
import errorPermission from './pages/index/error/permission.vue' 



Vue.use(Router)

var grandAccess = (to, from, next) => {
    // let type = localStorage.getItem('type')
    // if(type && type === 'grand') next();
    // else next('/error/permission')
    next()
}

var routes = [ 
    {
        path: '/',
        component: home,
        name: 'home',
        beforeEnter: (to, from, next) => { 
            var flag = localStorage.getItem('login');
            if(flag === '1') next();
            else next('/login'); 
        },
        children: [
            {
                path: '/academic/teacher',
                component: academicTeacher,
                name: 'academicTeacher',
                beforeEnter: grandAccess
            },
            {
                path: '/academic/student',
                component: academicStudent,
                name: 'academicStudent',
                beforeEnter: grandAccess
            },
            {
                path: '/academic/stuff',
                component: academicStuff,
                name: 'academicStuff',
                beforeEnter: grandAccess
            },
            {
                path: '/academic/hall',
                component: academicHall,
                name: 'academicHall',
                beforeEnter: grandAccess
            },
            {
                path: '/admins/session',
                component: sessionAdmin,
                name: 'sessionAdmin'
            },
            {
                path: '/admins/grand',
                component: grandAdmin,
                name: 'grandAdmin'
            },
            {
                path: '/user/admin',
                component: userAdmin,
                name: 'userAdmin'
            },
            {
                path: '/user/teacher',
                component: userTeacher,
                name: 'userTeacher'
            },
            {
                path: '/user/student',
                component: userStudent,
                name: 'userStudent'
            },
            {
                path: '/user/stuff',
                component: userStuff,
                name: 'userStuff'
            },
            {
                path: '/faculty',
                component: faculty,
                name: 'faculty'
            },
            {
                path: '/department',
                component: department,
                name: 'department'
            },
            {
                path: '/program',
                component: program,
                name: 'program'
            },
            {
                path: '/session/list',
                component: sessionList,
                name: 'sessionList'
            },
            {
                path: '/session/add',
                component: sessionAdd,
                name: 'sessionNew'
            },
            {
                path: '/course/add',
                component: courseAdd,
                name: 'courseAdd'
            },
            {
                path: '/course/list',
                component: courseList,
                name: 'courseList'
            },
            {
                path: '/course/assign',
                component: courseAssign,
                name: 'courseAssign'
            },
            {
                path: '/course/register',
                component: courseRegister,
                name: 'courseRegister'
            },
            {
                path: '/marks/marksTable',
                component: marksTable,
                name: 'marksTable'
            },
            {
                path: '/marks/thirdExaminerTable',
                component: thirdExaminerTable,
                name: 'thirdExaminerTable'
            },
            {
                path: '/marks/finalResultAllTogather',
                component: finalResultAllTogather,
                name: 'finalResultAllTogather'
            },
            {
                path: '/error/permission',
                component: errorPermission,
                name: 'errorPermission'
            } 
        ]
    },
    {
        path: '/login',
        component: login,
        name: 'login'
    }
]

export default new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      if (to.hash) {
        return {
          selector: to.hash
        };
      }
      return {
        x: 0,
        y: 0
      };
    }
});