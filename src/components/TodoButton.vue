<script setup>
    import { useTodoStore } from '../stores/todo'
    const todoStore = useTodoStore()
    const { handleAddButton } = todoStore

</script>

<template>
    <a class="btn-add" @click="handleAddButton">
        Add
    </a>
</template>

<style scoped>
    .btn-add {
        background-color: #15A381;
        border-radius: 12px;
        padding: 0 32px;
        height: 44px !important;
        color: #fff;
        display: flex;
        align-items: center;
    }

    .btn-add:hover {
        cursor: pointer;
        background-color: #208f74;
    }
</style>