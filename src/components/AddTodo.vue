<template>
    <div>
        <form @submit="addItem"
            class=" flex flex-row items-center space-x-2 border-[0.5px] border-[#43B782] rounded-[10px] my-[20px] overflow-hidden">
            <input type="text" class=" bg-inherit outline-none flex-1 px-4 " placeholder="add something..."
                v-model="title">
            <button class="bg-[#43B782] px-[20px] py-[4px]" type="submit">Add</button>
        </form>
        <div class="w-2/3 h-[1px] bg-[#1A1A1A] mx-auto mb-[20px]"></div>
    </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { uuid } from 'vue-uuid'

interface ITodoItem {
    id: number | string,
    title: string,
    completed: Boolean,
}

export default {
    name: "AddTodo",
    setup(props, context) {
        const title = ref('')

        const addItem = (e: Event): void => {
            e.preventDefault()
            if (title.value.length == 0) return
            const newItem: ITodoItem = {
                id: uuid.v4(),
                title: title.value,
                completed: false
            }
            context.emit('handleAddTodo', newItem)
            title.value = ''

        }
        return {
            title,
            addItem
        }
    }
}
</script>
