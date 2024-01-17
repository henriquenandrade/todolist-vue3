<script setup>
import useTodos from './composables/Todos'
import { onMounted } from 'vue';

const { todos, todo, getAllTodos, createTodo, updateTodo, deleteTodo } = useTodos()

onMounted(() => {
  getAllTodos()
})

</script>

<template>
  <div class="sm:container mx-auto p-5">

    <div class="bg-gray-900 py-2 md:py-12 lg:py-24 text-center">
      <div class="mx-auto max-w-2xl px-12 lg:px-12">
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">
          <div class="max-w-xl lg:max-w-lg">
            <h2 class="text-3xl font-bold tracking-tight text-white lg:text-5xl">Lista de Tarefas</h2>
            <form class="mt-6 flex max-w-lg gap-x-3" @submit.prevent="createTodo">
              <input v-model="todo" id="todo" name="todo" type="text" required
                class="min-w-0 flex-auto rounded-sm border-0 px-5 py-2 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 md:text-md sm:leading-6"
                placeholder="Escreva a tarefa...">
              <button type="submit"
                class="flex-none rounded-sm bg-green-600 px-5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">criar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-for="item in todos" :key="item.id" class="bg-slate-200 shadow-sm px-5 py-2.5 my-2 flex justify-between">
      <input type="checkbox" :checked="(item.done == 1)" @change="updateTodo(item)" class="w-6 h-6 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      
      <span class="text-slate-900 font-bold">{{ item.name }}</span>

      <button class="" @click="deleteTodo(item.id)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

      </button>
    </div>
  </div>
</template>
