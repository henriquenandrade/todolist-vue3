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

        <button>criar tarefa</button>
      </form>
    </div>

    <div v-for="item in todos" :key="item.id">
      <span>{{ item.name }}</span>

      <input type="checkbox" :checked="(item.done == 1)" @change="updateTodo(item)">

      <button @click="deleteTodo(item.id)">
        remover
      </button>
    </div>
  </div>
</template>
