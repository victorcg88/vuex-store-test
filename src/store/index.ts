import { createStore } from 'vuex'

let run = 0;

// Create a new store instance.
export const store = createStore({
  state: () => ({
      filters: {},
      facets: []
  }),
  mutations: {
    setFilters(state:any, filters: any) {
      const currentRun = `run-${run++}`;
      console.time(currentRun);
      for(let i = 0; i < 5000; i++){
          state.filters[i] = 
          {
              "facetId": "categoryPaths",
              "label": "mid-rise-A" + i,
              "id": "categoryIds:e89db8635",
              "totalResults": 34,
              "parentId": null,
              "selected": false,
              "modelName": "HierarchicalFilter"
          };
      }
      console.timeEnd(currentRun);
    },
    setFacets(state:any, facets: any) {
      state.facets = facets;
    }
  }
})
