export const moduleB = {
  namespaced: true,
  state: () => ({
      filters: {},
      facets: []
  }),
  mutations: {
    setFilters(state:any, filters: any) {
      console.time('setFiltersB');
      for(let i = 0; i < 5000; i++){
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
      console.timeEnd('setFiltersB');
    },
    setFacets(state:any, facets: any) {
      console.log('setFacetsB');
      state.facets = facets;
    }
  }
}