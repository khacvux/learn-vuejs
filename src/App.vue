<template>
  <div id="app" class=" w-screen h-screen flex items-center justify-center">
    <div class="bg-[#242424] w-full lg:w-2/5 h-full lg:h-4/5 lg:rounded-[20px] overflow-hidden py-4 px-6 my-3">
      <HeaderVue />
      <TodosVue />
    </div>
  </div>
</template>

<script lang="ts">
import HeaderVue from './components/Header.vue';
import TodosVue from './components/Todos.vue';

export default {
  name: 'App',
  components: { HeaderVue, TodosVue }
}
</script>