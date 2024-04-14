<script setup>
    // import { ref } from 'vue'
    import { useTodoStore } from '../stores/todo'
    const todoStore = useTodoStore()
    const { handleInput, selectedtopic } = todoStore

    defineProps( {
        placeholder: Text
    })

    const input = () => {
        todoStore.handleInput(todoStore.selectedtopic)
    }
 
</script>

<template>
    <input type="text" 
        class="input-field" 
        :placeholder="placeholder"
        v-model="todoStore.inputText"
        @keydown.enter.prevent="input"
    />
</template>

<style scoped>
    .input-field {
        background: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        flex-grow: 1;
        margin-right: 20px;
        font-size: 24px;
        color:#fff;
        font-style: italic;
        padding: 0 12px;
    }

    .input-field:focus {
        outline: none;
    }

    .input-field::placeholder {
        color: #ffffffa8;
    }
</style>