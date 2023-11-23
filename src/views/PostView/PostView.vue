<template>
  <div class="post-wrapper">
    <PageContainer class="post-container" :width="1200" :is-full-width="false">
      <div v-if="post">{{ post?.post }}</div>
      <div v-else>Пост не найден!</div>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue';
import { useRoute } from 'vue-router';
import { posts } from '@/mock/posts';

const route = useRoute();

const post = posts.find((el) => el.id === +route.params.id);
</script>

<style src="./PostView.style.scss" lang="scss" scoped></style>
