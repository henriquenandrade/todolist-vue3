<script setup>
import useTodos from './composables/Todos'
import { onMounted } from 'vue';

const { todos, todo, getAllTodos, createTodo, updateTodo, deleteTodo } = useTodos()

onMounted(() => {
  getAllTodos()
})

</script>

<template>
  <div>
    <div>
      <form @submit.prevent="createTodo">
        <input type="text" placeholder="Escreva a tarefa..." v-model="todo">

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">criar tarefa</button>
      </form>
    </div>

    <div v-for="item in todos" :key="item.id">
      <span>{{ item.name }}</span>

      <input type="checkbox" :checked="(item.done == 1)" @change="updateTodo(item)">

      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" @click="deleteTodo(item.id)">
        remover
      </button>
    </div>
  </div>
</template>
