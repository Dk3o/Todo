<script setup>
  import { onMounted, onUnmounted, ref, watch } from 'vue';
  import TodoInput from './components/TodoInput.vue'
  import TodoButton from './components/TodoButton.vue'
  import TodoList from './components/TodoList.vue'

  const scroll = ref()
 
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    const todoHeader = document.querySelector('.todo-header');
    if (window.scrollY > 0) {
      todoHeader.style.backgroundColor = '#2E4E7D'; // Change to your desired color
    } else {
      todoHeader.style.backgroundColor = ''; // Reset to default color
    }
  }

  const scrollToTop = () => {
    scroll.value.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
  }

</script>

<template>
  <main ref="scroll">
    <div class="wrapper">
      <div class="todo">
        <div class="todo-header">
          <TodoInput />
          <TodoButton />
        </div>
        <TodoList />
      </div>
      <a class="scroll-to-top" @click="scrollToTop">Top</a>
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
    position: sticky;
    padding: 50px 0;
    top: 0;
    z-index: 999;
    /* background: #2E4E7D; */
  }

  .scroll-to-top {
    background-color: #15A381;
    border-radius: 38px;
    height: 44px;
    width: 44px;
    color: #fff;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 110px;
    justify-content: center;
    cursor: pointer;
  }

</style>
