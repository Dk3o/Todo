<script setup>
    import TodoItemButon from './TodoItemButton.vue'
    defineProps({
        item: Object,
        position: Number
    })

</script>
<template>
    <div class="btn-item">
        <span class="btn-item-name">{{ item.name }}</span>
        <TodoItemButon :position="position" />
    </div>
</template>

<style scoped>
 .btn-item {
    background: #fff;
    color: #4E4E4E;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 16px;
    border-radius: 12px;
    border: 4px solid #fff;
    font-size: 18px;
 }

 .btn-item-name {
    display: flex;
    flex-grow: 1;
    font-weight: 700;
 }
</style>