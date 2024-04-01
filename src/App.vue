<script setup>
  import TodoInput from './components/TodoInput.vue'
  import TodoButton from './components/TodoButton.vue'
  import TodoList from './components/TodoList.vue'

</script>

<template>
  <main>
    <div class="wrapper">
      <div class="todo">
        <div class="todo-header">
          <TodoInput @inputText="inputText" />
          <TodoButton @handleButtonClick="addItem"  />
        </div>
        <TodoList />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .wrapper {
    width: 620px;
    margin: 0 auto;
  }

  .todo {
    font-size: 18px;
  }

  .todo-header {
    display: flex;
    margin-bottom: 48px;
  }
</style>
