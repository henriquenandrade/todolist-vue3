import axios from 'axios';
import { ref } from 'vue';

export default function useTodos() {
    const todos = ref([])
    const todo = ref('')

    const getAllTodos = async () => {
        axios.get('todos')
            .then((response) => {
                todos.value = response.data
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function updateTodo(todo) {
        const data = {
            name: todo.name,
            done: !(todo.done == 1)
        }

        axios.put(`todos/${todo.id}`, data)
            .then((response) => {
                todo.done = response.data.done
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function deleteTodo(id) {
        axios.delete(`todos/${id}`)
            .then(() => {
                todos.value = todos.value.filter((item) => {
                    return item.id != id
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function createTodo() {
        const data = {
            name: todo.value
        }
        axios.post('todos', data)
            .then((response) => {
                todo.value = ""
                todos.value.push(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return {
        todos,
        todo,
        getAllTodos,
        createTodo,
        updateTodo,
        deleteTodo
    }
}
