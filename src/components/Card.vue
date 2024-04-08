<script setup>
    var props = defineProps({
        card: Object,
        position: Number
    })

    const loadContent = () => {
        console.log(props.position)
    }
</script>
<template>
    <div class="card" @click="loadContent">
        <span class="card-name">{{ card.category }}</span>
    </div>
</template>

<style scoped>
    .card {
        width: auto;
        height: auto;
        background-color: #15A381;
        padding: 10px;
        float: left;
        margin-left: 10px;
        border-radius: 12px;
    }

    .card:hover {
        background-color: #208f74;
    }
</style>