import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userId: '',
        realName: '',
        email: '',
    },
    mutations: {
        setUserId(state, value) {
            state.userId = value;
        },
        setRealName(state, value) {
            state.realName = value;
        },
        setEmail(state, value) {
            state.email = value;
        },
    },
    getters: {
        realName(state) {
            return state.realName
        },
        userId(state) {
            return state.userId;
        },
        email(state) {
            return state.email;
        },
    }
});


export default store