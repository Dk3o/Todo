<script setup>
    defineProps({
      status: Boolean,
      position: Number
    })
</script>
<template>
   <div class="todo-item-btn-container">
      <template v-if="!status">
            <button class="todo-item-btn todo-item-btn-left todo-item-btn-edit">
               <slot name="iconEdit"></slot>
            </button>
            <button class="todo-item-btn todo-item-btn-right todo-item-btn-delete" @click="$emit('deleteItem', position)">
               <slot name="iconDelete"></slot>
            </button>
      </template>
      <template v-else>
         <div class="todo-item-btn todo-item-btn-left">
            <slot name="iconEdit"></slot>
         </div>
         <div class="todo-item-btn todo-item-btn-right">
            <slot name="iconDelete"></slot>
         </div>
      </template>
   </div>
</template>

<style scoped>
   .todo-item-btn-container {
      display: flex;
      gap: 4px;
   }

   .todo-item-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 56px;
      width: 56px;
      color: #fff;
      border: 0;
   }

   .todo-item-btn-right {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
   }

   .todo-item-btn-edit {
      background-color: #D79E48;
   }

   .todo-item-btn-edit:hover,
   .todo-item-btn-delete:hover {
      cursor: pointer;
   }

   .todo-item-btn-edit:hover {
      background-color: #b3843d;
   }

   .todo-item-btn-delete {
      background-color: #D74848;
 
   }
   .todo-item-btn-delete:hover {
      background-color: #b54040;
   }
</style>