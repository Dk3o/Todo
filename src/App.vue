<script setup>
    import Input from './components/Input.vue';
    import Button from './components/Button.vue';
  import { ref } from 'vue';
  import Topic from './components/Topic.vue'
  import TopicContainer from './components/TopicContainer.vue'
  import { useTodoStore } from '@/stores/todo';

  const todoStore = useTodoStore()

  const activeIndex = ref(null);
  const scroll = ref();

  const scrollToTop = () => {
      scroll.value.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
  };

  const setActive = (index) => {
    activeIndex.value = index
    todoStore.selectedtopic(index)
  }
</script>

<template>
  <main>
    <div class="container">
        <div class="topic-container">
          <div class="topic-header">
            <Input :placeholder="`Add topic...`"/>
            <Button />
          </div>
          <Topic
            v-for="(topic, index) in todoStore.list"
            :key="index"
            :topic="topic"
            :isActive="activeIndex === index"
            @click="setActive(index)"
          />
        </div>
        <template v-if="todoStore.isTopicClicked">
          <TopicContainer />
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

  .topic-container {
    width: 40%;
  }

  .topic-header {
    display: flex;
    padding: 50px 40px 50px 0;
  }

</style>
