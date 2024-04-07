<script setup>
    import TodoItemButon from './TodoItemButton.vue'
    import IconEdit from '../components/icons/IconEdit.vue'
    import IconDelete from '../components/icons/IconDelete.vue'

    const props = defineProps({
        item: Object,
        position: Number
    })

    const toggleStatus = () => {
        props.item.status = !props.item.status
    }

</script>
<template>
    <div class="todo-item todo-item-status-unchecked" v-if="!props.item.status">
        <div class="btn-item" @click="toggleStatus">
            <span class="btn-item-name">{{ item.name }}</span>
        </div>
        <TodoItemButon :status="item.status">
            <template #iconEdit>
                <IconEdit :color="props.item.status ? '#8d8d8d' : '#fff'" />
            </template>
            <template #iconDelete>
                <IconDelete :color="props.item.status ? '#8d8d8d' : '#fff'" />
            </template>
        </TodoItemButon>
    </div>
    <div class="todo-item todo-item-status-checked" @click="toggleStatus" v-else>
        <div class="btn-item">
            <span class="btn-item-name">{{ props.item.name }}</span>
        </div>
        <TodoItemButon :status="props.item.status">
            <template #iconEdit>
                <IconEdit :color="props.item.status ? '#8d8d8d' : '#fff'" />
            </template>
            <template #iconDelete>
                <IconDelete :color="props.item.status ? '#8d8d8d' : '#fff'" />
            </template>
        </TodoItemButon>
    </div>
</template>

<style scoped>
    .todo-item {
        border-radius: 12px;
        border-width: 4px;
        border-style: solid;
        font-size: 18px;
        display: flex;
        min-width: 580px;
    }

    .todo-item-status-unchecked {
        background: #fff;
        border-color: #fff;
    }

    .todo-item-status-checked {
        background: #676767;
        border-color: #676767;
    }

    .todo-item-status-checked > .btn-item > .btn-item-name {
        color: #8d8d8d;
    }
    
    .btn-item {
        padding-left: 8px;
        display: flex;
        height: auto;
        align-items: center;
        width: 100%;
    }
    
    .todo-item-status-checked:hover,
    .todo-item-status-unchecked:hover {
        cursor: pointer;
    }
    .todo-item-status-checked:before {
        content: '\2713';
        position: absolute;
        left: 0;
        transform:translateY(50%);
        color: #fff;
        justify-content: center;
        width: 28px;
        height: 28px;
        display: flex;
        align-items: center;
        background-color: #3abe32;
        border-radius: 50%;
        font-size: 18px;
    }

    .btn-item-name {
        font-weight: 500;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #4E4E4E;
    }
</style>