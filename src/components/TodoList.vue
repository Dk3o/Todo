<script setup>
    import TodoItem from './TodoItem.vue'
    import { useTodoStore } from '@/stores/todo';

    const todoStore = useTodoStore()
    const { list } = todoStore

</script>

<template>
    <div class="todo-list">
        <TodoItem 
            v-for="(item, index) in list" 
            :key="index" 
            :item="item" 
        />
    </div>
</template>

<style scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>