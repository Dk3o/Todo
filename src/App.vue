<script setup>
    import TodoInput from './components/TodoInput.vue';
    import TodoButton from './components/TodoButton.vue';
  import { ref } from 'vue';
  import Card from './components/Card.vue'
  import CardContainer from './components/CardContainer.vue'
  import { useTodoStore } from '@/stores/todo';

  const todoStore = useTodoStore()

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
    <div class="container">
        <div class="card-container">
          <div class="card-header">
            <TodoInput :placeholder="`Add topic...`"/>
            <TodoButton />
          </div>
          <Card  v-for="(card, index) in todoStore.list" :key="index" :card="card" :topicIndex="index" />
        </div>
        <template v-if="todoStore.istopicClicked">
          <CardContainer />
        </template>
    </div>
  </main>
</template>

<style scoped>
  .container {
    display: flex;
    gap: 5%;
  }

  .wrapper {
    width: 100%;
  }

  .card-container {
    width: 40%;
  }

  .card-header {
    display: flex;
    padding: 50px 40px 50px 40px;
  }

</style>
