<script setup>
    import TodoItem from './TodoItem.vue'
    import { useTodoStore } from '@/stores/todo';
    import { ref, watch, watchEffect } from 'vue'

    const todoStore = useTodoStore()

    const scroll = ref()
    const todolist = ref(0)
    const scrollToBottom = () => {
        scroll.value = document.querySelector('.todo-list')
        scroll.value.scrollTop = scroll.value.scrollHeight
    }

    watchEffect(() => {
        if (todoStore.selectedCategoryList.length > todolist.value) {
            setTimeout(scrollToBottom, 500);
            todolist.value = todoStore.selectedCategoryList.length;
            console.log(todolist.value)
        }
    });

</script>

<template>
    <div class="todo-list" ref="scroll">
        <TodoItem v-for="(item, index) in todoStore.selectedCategoryList" :key="index" :item="item"/>
    </div>
</template>

<style scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        padding: 0 40px;
        gap: 10px;
        height: calc(100vh - 240px);
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
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
        border-radius: 4px;
    }
</style>