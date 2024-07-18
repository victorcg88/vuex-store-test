import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
  state: () => ({
      filters: {},
      facets: []
  }),
  mutations: {
    setFilters(state:any, filters: any) {
      console.time('setFilters');
      filters.forEach((filter:any) => (state.filters[filter.id] = filter));
      console.timeEnd('setFilters');
    },
    setFacets(state:any, facets: any) {
      state.facets = facets;
    }
  }
})
