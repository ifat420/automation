import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    faculty: [],
    department: [],
    program: [],
    session: [],
    semester: [] 
}

const mutations = {
    fillFaculty(state, payload) {
        state.faculty = payload.faculty;
        // console.log('payload: ', payload.faculty);
        // console.log('state.faculty : ', state.faculty ); 
    },
    fillDepartment(state, payload){
        state.department = payload.department;
        // console.log('state.department: ', state.department);
    },

    fillProgram(state, payload){
        state.program = payload.program;
        // console.log('state.program: ', state.program);
       
    },
    fillSession(state, payload){
        state.session = payload.session;
        // console.log('state.session: ', state.session);
       
    },
    fillSemester(state, payload){
        state.semester = payload.semester;
        // console.log('state.session: ', state.session);
       
    } 
}

const actions = {
    getFaculties({ commit }) { 
        var faculty = [];
        faculty.push({
            name: 'All',
            value: 'all'
        })
        Vue.http.get('get/faculty')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                // console.log('data: ', data);
                data.forEach(fac => {
                    faculty.push({
                        value: fac[1],
                        name: fac[1]
                    });
                });
                
                // console.log('data found');
                commit({
                    type: 'fillFaculty',
                    faculty: faculty
                })
            })
            .catch(e => {
                console.log('e: ', e);

            })
    },
    getDepartments({ commit }) { 
        var department = [];
        department.push({
            name: 'All',
            value: 'all'
        })
        Vue.http.get('get/department')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                // console.log('data: ', data);
                data.forEach(dept => {
                    department.push({
                        name: dept[1],
                        value: dept[1]
                    });
                });
                // console.log('data found');
                commit({
                    type: 'fillDepartment',
                    department: department
                })
            })
            .catch(e => {
                console.log('e: ', e);

            })
    },

    getPrograms({ commit }) { 
        var program = [];
        program.push({
            name: 'All',
            value: 'all'
            
        });
        Vue.http.get('get/program/distinct')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                // console.log('data: ', data);
                data.forEach(p => {
                    program.push({
                        name: p[0],
                        value: p[0]
                        
                    });
                });
                // console.log('data found');
                commit({
                    type: 'fillProgram',
                    program: program
                })
            })
            .catch(e => {
                console.log('e: ', e);

            })
    },
    getSessions({ commit }) { 
        var session = [];
        session.push({
            name: 'All',
            value: 'all'
        })
        Vue.http.get('get/session/distinct')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                // console.log('data: ', data);
                data.forEach(s => {
                    session.push({
                        name: s[0],
                        value: s[0]
                        
                    });
                });
                // console.log('data found');
                commit({
                    type: 'fillSession',
                    session: session
                })
            })
            .catch(e => {
                console.log('e: ', e);

            })
    },

    getSemester({ commit }) { 
        var semester = [];
        semester.push({
            name: 'All',
            value: 'all'
        })
        Vue.http.get('get/semester')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                // console.log('data: ', data);
                data.forEach(s => {
                    semester.push({
                        name: s[0],
                        value: s[0]
                        
                    });
                });
                // console.log('data found');
                commit({
                    type: 'fillSemester',
                    semester: semester
                })
            })
            .catch(e => {
                console.log('e: ', e);

            })
    }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  actions: actions
})
