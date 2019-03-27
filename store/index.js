import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		token: '',
		username: '',
		id: '',
		type: '',
		userID: '',
		markers: [],
	},
	getters: {},
	mutations: {
		tokenStorage(state, data) {
			state.token = data;
		},
		usernameStorage(state, data) {
			state.username = data;
		},
		idStorage(state, data) {
			state.id = data;
		},
		typeStorage(state, data) {
			state.type = data;
		},
		userIDStorage(state, data) {
			state.userID = data;
		},
		markersStorage(state, data) {
			state.markers = data;
		},
	},
	actions: {}
})

export default store