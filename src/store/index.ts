import { createStore } from 'vuex'
import { moduleA } from './module-a'
import { moduleB } from './module-b'

// Create a new store instance.
export const store = createStore({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
