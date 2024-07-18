let run = 0;
export const moduleB = {
  namespaced: true,
  state: () => ({
      filters: {},
      facets: []
  }),
  mutations: {
    setFilters(state:any, filters: any) {
      const currentRun = `run-B-${run++}`;
      console.time(currentRun);
      for(let i = 0; i < 2000; i++){
          state.filters[i] = 
          {
              "facetId": "categoryPaths",
              "label": "mid-rise-B" + i,
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
      console.log('setFacetsB');
      state.facets = facets;
    }
  }
}