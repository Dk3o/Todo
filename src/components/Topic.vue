<script setup>
    var props = defineProps({
        topic: Object,
        isActive: Boolean
    })

</script>
<template>
    <div class="topic" :class="{'topic-active' : props.isActive}" >
        <span class="topic-name ">{{ topic.topic }}</span>
    </div>
</template>

<style scoped>
    .topic {
        width: auto;
        height: auto;
        background-color: #912fdf;
        color: #fff;
        padding: 10px;
        float: left;
        margin: 0 5px 10px 5px;
        border-radius: 12px;
    }

    .topic:hover {
        background-color: #a30ea7;
        cursor: pointer;
    }

    .topic-active {
        background-color: #a30ea7;
    }
</style>