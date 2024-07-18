<template>
  <div class="about">
    <button @click="setFilters">Filters</button>
    <div v-for="key of Object.keys(extractedFilters)" :key="key">
      {{ extractedFilters[key].label }}
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import facets from '../store/facets.json';
 
const store = useStore();

const extractedFilters = computed(() => store.state.filters);

store.commit('setFacets', facets);

function setFilters() {
  const newFilters = store.state.facets.flatMap(facet => facet.filters);
  store.commit('setFilters', newFilters);
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
</style>
