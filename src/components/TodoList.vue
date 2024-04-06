<script setup>
    import TodoItem from './TodoItem.vue'
    import { useTodoStore } from '@/stores/todo';
    import { ref, watch } from 'vue'

    const todoStore = useTodoStore()
    const { list } = todoStore

    const scroll = ref()
    // const todolist = ref([...list])

    watch(list, () => {
        setTimeout(scrollToBottom, 500)
    })

    const scrollToBottom = () => {
        scroll.value = document.querySelector('.todo-list')
        scroll.value.scrollTop = scroll.value.scrollHeight
    }
</script>

<template>
    <div class="todo-list" ref="scroll">
        <TodoItem v-for="(item, index) in list" :key="index" :item="item" />
    </div>
</template>

<style scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        padding-right: 12px;
        gap: 10px;
        height: calc(100vh - 240px);
        overflow-y: auto;
    }

    
    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #2E4E7D;
        height: 50px;
        border-radius: 4px;
    }
</style>