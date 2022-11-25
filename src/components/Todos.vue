<script lang="ts">
import { ref } from 'vue';
import TodoItem from './TodoItem.vue'
import AddTodoVue from './AddTodo.vue';



interface ITodoItem {
    id: number,
    title: string,
    completed: Boolean

}

export default {
    name: "Todos",
    components: { TodoItem, AddTodoVue },
    setup() {
        const todos = ref<ITodoItem[]>([
            {
                id: 1,
                title: "Eat",
                completed: false
            },
            {
                id: 2,
                title: "Code",
                completed: false
            },
            {
                id: 3,
                title: "Sleep",
                completed: false
            },
        ])

        const handleComplete = (id: number) => {
            todos.value = todos.value.map((todo) => {
                if (todo.id == id) todo.completed = true
                return todo
            })
        }

        const handleDelete = (id: number) => {
            todos.value = todos.value.filter((todo) => {
                return todo.id != id
            })
        }

        const handleAddTodo = (newItem: ITodoItem) => {
            todos.value = [newItem, ...todos.value]
        }

        return {
            todos,
            handleComplete,
            handleDelete,
            handleAddTodo
        }
    }
}
</script>

<template>
    <AddTodoVue @handleAddTodo="handleAddTodo" />
    <div class="h-4/5 overflow-y-scroll">
        <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" @handleComplete="handleComplete"
            @handleDelete="handleDelete" />
    </div>

</template>
