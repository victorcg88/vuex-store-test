<template>
  <div class="about">
    <button @click="registerModuleA()">Register Module A</button>
    <button @click="registerModuleB()">Register Module B</button>

    <button @click="setFilters('a')">Filters A</button>
    <button @click="setFilters('b')">Filters B</button>
    <div class="panel">
      <div class="container" v-if="extractedFiltersA">
        Module A: 
        <br>
        <div v-for="key of Object.keys(extractedFiltersA)" :key="key" class="item">
          {{ extractedFiltersA[key].label }}
        </div>
      </div>
      <div class="container" v-if="extractedFiltersB">
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
import { moduleA } from '../store/module-a'
import { moduleB } from '../store/module-b'

import facets from '../store/facets.json';
 
const store = useStore();

const extractedFiltersA = computed(() => store.state.x?.a?.filters);
const extractedFiltersB = computed(() => store.state.x?.b?.filters);

function setFilters(storeModule) {
  const newFilters = store.state.x[storeModule]?.facets?.flatMap(facet => facet.filters);
  store.commit(`x/${storeModule}/setFilters`, newFilters);
}

function registerModuleA() {
  store.registerModule(['x', 'a'], moduleA);
  store.commit('x/a/setFacets', facets);
}

function registerModuleB() {
  store.registerModule(['x', 'b'], moduleB);
  store.commit('x/b/setFacets', facets);
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
