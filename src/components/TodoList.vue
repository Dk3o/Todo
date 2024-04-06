<script setup>
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todo';
import { ref, watch } from 'vue'

const todoStore = useTodoStore()
const { list, isScrolling } = todoStore

const scroll = ref()
const todolist = ref([...list])

watch(list, () => {
    if(list.length > todolist.value.length) {
        console.log(todolist.value.length)
        console.log(list.length)
        scroll.value = document.querySelector('.todo-list')
        scrollToBottom()
    }
})

const scrollToBottom = () => {
    scroll.value.scrollIntoView({
        block: 'end',
        behavior: 'smooth',
    })
}

</script>


<template>
    <div class="todo-list">
        <TodoItem v-for="(item, index) in list" :key="index" :item="item" />
    </div>
</template>

<style scoped>
    .todo-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-bottom: 50px;
    }
</style>