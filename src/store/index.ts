import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
    modules: {
        x: {
            namespaced: true
        },
    }
})
