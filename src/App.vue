<script setup>
  import { ref } from 'vue';
  import TodoInput from './components/TodoInput.vue'
  import TodoButton from './components/TodoButton.vue'
  import TodoList from './components/TodoList.vue'
  import IconArrowUp from './components/icons/IconArrowUp.vue'

  const scroll = ref();

const scrollToTop = () => {
    scroll.value.scrollIntoView({
      block: 'start',
      behavior: 'smooth'
    });
};
</script>

<template>
  <main>
    <div class="wrapper">
      <div class="todo">
        <div class="todo-header">
          <TodoInput />
          <TodoButton />
        </div>
        <TodoList/>
        <div class="scroll-to-top">
          <a @click="scrollToTop">
            <IconArrowUp/>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .wrapper {
    width: 620px;

  }

  .todo {
    font-size: 18px;
  }

  .todo-header {
    display: flex;
    padding: 50px 20px 50px 0;

  }

  .scroll-to-top {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .scroll-to-top a {
    background-color: #15A381;
    border-radius: 50%;
    height: 44px;
    width: 44px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .scroll-to-top a:hover {
        cursor: pointer;
        background-color: #208f74;
    }

</style>
