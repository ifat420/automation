import Vue from 'vue'
import Router from 'vue-router' 

import home from './pages/index.vue'
 
import login from './pages/login.vue'

import academicTeacher from './pages/index/academic/teacher.vue'
import academicStudent from './pages/index/academic/student.vue'
import academicStuff from './pages/index/academic/stuff.vue'
import academicHall from './pages/index/academic/hall.vue'

import userSuper from './pages/index/users/super.vue'
import userAdmin from './pages/index/users/admin.vue'
import userTeacher from './pages/index/users/teacher.vue'
import userStudent from './pages/index/users/student.vue'
import userStuff from './pages/index/users/stuff.vue'

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



Vue.use(Router)

var routes = [ 
    {
        path: '/',
        component: home,
        name: 'home',
        children: [
            {
                path: '/academic/teacher',
                component: academicTeacher,
                name: 'academicTeacher'
            },
            {
                path: '/academic/student',
                component: academicStudent,
                name: 'academicStudent'
            },
            {
                path: '/academic/stuff',
                component: academicStuff,
                name: 'academicStuff'
            },
            {
                path: '/academic/hall',
                component: academicHall,
                name: 'academicHall'
            },
            {
                path: '/user/super',
                component: userSuper,
                name: 'userSuper'
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
            }
            ,
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
                path: '/marks/table',
                component: marksTable,
                name: 'marksTable'
            },
            {
                path: '/marks/table',
                component: thirdExaminerTable,
                name: 'thirdExaminerTable'
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