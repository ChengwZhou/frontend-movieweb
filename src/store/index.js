import { createStore } from 'vuex'

const store = createStore({
    state: {
        user: {
            username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
        },
        adminMenus: []
    },
    mutations: {
        login (state, user) {
            state.user = user
            window.localStorage.setItem('user',JSON.stringify(user))
        },
        logout (state) {
            state.user = []
            window.localStorage.removeItem('user')
        },
        initAdminMenu(state, menus) {
            state.adminMenus = menus
        }
    }
})

export default store