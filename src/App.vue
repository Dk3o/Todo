<script setup>
  import { ref } from 'vue';
  import Card from './components/Card.vue'
  import CardContainer from './components/CardContainer.vue'
  import { useTodoStore } from '@/stores/todo';

  const todoStore = useTodoStore()
    const { list } = todoStore

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
      <div class="wrapper">
        <div class="test">
          <Card  v-for="(card, index) in list" :key="index" :card="card" :position="index" />
        </div>
      </div>
      <div class="wrapper">
        <CardContainer />
      </div>
    </div>
  </main>
</template>

<style scoped>
  .container {
    display: flex;
  }

  .wrapper {
    width: 660px;

  }


</style>
