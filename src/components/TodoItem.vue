<template lang="">
    <div :class="['w-full py-[5px] my-[10px] px-[10px] rounded-[10px] flex flex-row items-center space-x-[5px] transition-all', 
        todoProps.completed ? 'bg-[#43B782]' : 'bg-[#1A1A1A]'
    ]">
        <p class="flex-1 truncate">{{todoProps.title}}</p>
        <button
            @click="onComplete"
            :class="['w-[20px] h-[20px] rounded-full bg-[#43B782] cursor-pointer text-[#213547] items-center justify-center',
            todoProps.completed ? 'hidden' : 'flex' ]">
            <font-awesome-icon icon="fa-solid fa-check" class="w-[11px] h-[11px]" />
        </button> 
        <button 
            @click="onDelete"
            :class="['w-[20px] h-[20px] rounded-full border-[1px] border-[#F07178] cursor-pointer text-[#F07178] flex items-center justify-center',
            todoProps.completed ? 'hidden' : 'flex'
        ]">
            <font-awesome-icon icon="fa-solid fa-close" class="w-[11px] h-[11px]" />
        </button> 
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue'
interface ITodoItem {
    id: number,
    title: string,
    completed: Boolean,
}
export default defineComponent({
    name: "TodoItem",
    props: {
        todoProps: { type: Object as PropType<ITodoItem>, required: true },
    },
    setup(props, context) {
        const onComplete = () => {
            context.emit('handleComplete', props.todoProps.id)
        }

        const onDelete = () => {
            context.emit('handleDelete', props.todoProps.id)
        }
        return {
            onComplete,
            onDelete
        }
    }
})
</script>





