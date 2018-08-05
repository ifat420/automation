import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    faculty: [],
    dept: [],
    prog: [],
    session: [],
    semester: []
}

const mutations = {

}

const actions = {
    getFaculties() {
        console.log('dispatched!');
        Vue.http.get('get/department')
            .then(response => {
                return response.json(); 
            })
            .then(data => { 
                console.log('data: ', data);
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
