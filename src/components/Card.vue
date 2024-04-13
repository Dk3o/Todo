<script setup>
    import { ref } from 'vue'
    import { useTodoStore } from '@/stores/todo';
    const todoStore = useTodoStore();

    const isActive = ref(false)

    var props = defineProps({
        card: Object,
        categoryIndex: Number
    })

    const loadContent = (e) => {
        todoStore.selectedCategory(props.categoryIndex)
        isActive.value = !isActive.value
        console.log(e)
    }
</script>
<template>
    <div class="card" :class="{'card-active' : isActive}" @click="loadContent">
        <span class="card-name ">{{ card.category }}</span>
    </div>
</template>

<style scoped>
    .card {
        width: auto;
        height: auto;
        background-color: #912fdf;
        color: #fff;
        padding: 10px;
        float: left;
        margin: 5px;
        border-radius: 12px;
    }

    .card:hover {
        background-color: #a30ea7;
        cursor: pointer;
    }

    .card-active {
        background-color: #912fdf;
    }
</style>