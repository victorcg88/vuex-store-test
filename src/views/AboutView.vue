<template>
  <div class="about">
    <button @click="setFilters('a')">Filters A</button>
    <button @click="setFilters('b')">Filters B</button>
    <div class="panel">
      <div class="container">
        Module A: 
        <br>
        <div v-for="key of Object.keys(extractedFiltersA)" :key="key" class="item">
          {{ extractedFiltersA[key].label }}
        </div>
      </div>
      <div class="container">
        Module B: 
        <br>
        <div v-for="key of Object.keys(extractedFiltersB)" :key="key" class="item">
          {{ extractedFiltersB[key].label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import facets from '../store/facets.json';
 
const store = useStore();

const extractedFiltersA = computed(() => store.state.a.filters);
const extractedFiltersB = computed(() => store.state.b.filters);

store.commit('a/setFacets', facets);
store.commit('b/setFacets', facets);

function setFilters(storeModule) {
  const newFilters = store.state[storeModule].facets.flatMap(facet => facet.filters);
  store.commit(`${storeModule}/setFilters`, newFilters);
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.panel {
  display: flex;
}

.container{
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
}

.item {
  padding: 1rem;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
}
</style>
