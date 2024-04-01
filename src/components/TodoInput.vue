<script setup>
    import { ref } from 'vue'
    import { useTodoStore } from '../stores/todo'
    const todoStore = useTodoStore()
    const { handleInput } = todoStore
    const inputValue = ref('');
</script>

<template>
    <input type="text" 
        class="input-field" 
        placeholder="Add item..."
        v-model="inputValue"
        @keydown.enter.prevent="handleInput"
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
        padding-top: 14px;
    }

    .input-field:focus {
        outline: none;
    }

    .input-field::placeholder {
        color: #ffffffa8;
    }
</style>