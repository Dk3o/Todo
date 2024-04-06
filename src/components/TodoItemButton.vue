<script setup>
    defineProps({
      position: Number
    })
</script>
<template>
    <button class="todo-item-btn todo-item-btn-edit">
      <slot name="iconEdit"></slot>
    </button>
    <button class="todo-item-btn todo-item-btn-delete" @click="$emit('deleteItem', position)">
      <slot name="iconDelete"></slot>
    </button>
</template>

<style scoped>
   .todo-item-btn {
      height: 56px;
      width: 56px;
      color: #fff;
      border: 0;
   }

   .todo-item-btn:hover {
      cursor: pointer;
   }

   .todo-item-btn-edit {
      background-color: #D79E48;
   }

   .todo-item-btn-edit:hover {
      background-color: #b3843d;
   }

   .todo-item-btn-delete {
      background-color: #D74848;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      margin-left: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .todo-item-btn-delete:hover {
      background-color: #b54040;
   }
</style>