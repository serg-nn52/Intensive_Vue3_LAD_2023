<template>
  <div class="post-wrapper">
    <PageContainer class="post-container" :width="1200" :is-full-width="false">
      <h2 v-if="isLoading">Loading...</h2>
      <div v-else-if="post">
        <h2>{{ post?.id + ' ' + post?.title }}</h2>
        <p>{{ post?.body }}</p>
      </div>
      <div v-else>Пост не найден!</div>
      <div v-if="isError">Error!</div>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import PageContainer from '@/components/PageContainer/PageContainer.vue';
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const postsStore = usePostsStore();

const { post, isError, isLoading } = storeToRefs(postsStore);
const { getPost } = postsStore;

onMounted(() => {
  getPost();
});
</script>

<style src="./PostView.style.scss" lang="scss" scoped></style>
