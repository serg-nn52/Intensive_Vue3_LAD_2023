<template>
  <div class="post-wrapper">
    <PageContainer class="post-container" :width="1200" :is-full-width="false">
      <h2 v-if="isLoading">Loading...</h2>
      <div v-else-if="post">
        <h2>{{ post?.id + ' ' + post?.title }}</h2>
        <p>{{ post?.body }}</p>
      </div>
      <div v-else>Пост не найден!</div>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import type { IPost } from '@/api/postsApi/postsApi.type';
import PageContainer from '@/components/PageContainer/PageContainer.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const post = ref<IPost>();
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);

onMounted(async () => {
  isLoading.value = true;
  try {
    post.value = await $api.getPost(+route.params.id);
    isError.value = false;
  } catch (error) {
    isError.value = true;
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style src="./PostView.style.scss" lang="scss" scoped></style>
