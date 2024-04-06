<script setup>
import TodoItem from './TodoItem.vue'
import { useTodoStore } from '@/stores/todo';
import { ref, onMounted, watch } from 'vue'

const todoStore = useTodoStore()
const { list, isScrolling } = todoStore

// const listRef = ref()
// console.log(listRef.value)
// todoStore.listElement = listRef.value
// const element = document.querySelector('.todo-list')

// const scroll = ref()
// const scrollTo = (view) => { 
//     view.scrollIntoView({ behavior: 'smooth', block: "end" }) 
// }

// if(isScrolling) {
//     scrollTo(scroll.value)
// }

const scroll = ref()

watch(list, () => {
    
    scroll.value = document.querySelector('.todo-list')
    scrollToBottom()


})
const scrollToBottom = () => {
    scroll.value.scrollIntoView({
        block: 'end',
        behavior: 'smooth'
    })
}

// watch(() => list, () => {
//     nextTick(() => {
//         list.value.scrollTop = list.value.scrollHeight
//     })
// })

</script>


<template>
    <!-- <button @click="scrollTo(scroll)">Scroll to</button> -->

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