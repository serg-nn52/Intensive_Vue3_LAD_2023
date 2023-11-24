<template>
  <h2 v-if="isLoading">Loading...</h2>
  <ul class="posts">
    <li
      @click="
        $router.push({
          name: PathNames.POST,
          params: {
            id: post.id
          },
          query: $route.query
        })
      "
      :key="post?.id"
      v-for="post of renderedPosts"
    >
      {{ post?.id + ' ' + post?.title }}
    </li>
  </ul>
  <button @click="isShowAllPosts = !isShowAllPosts" v-if="posts.length > 10">
    {{ isShowAllPosts ? 'Hide all' : 'Show all' }}
  </button>
  <h2 v-if="isError">Error fetching!</h2>
</template>

<script setup lang="ts">
import { $api } from '@/api';
import type { IPost } from '@/api/postsApi/postsApi.type';
import { PathNames } from '@/constants/route.constants';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue';

const posts = ref<IPost[]>([]);
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);

const isShowAllPosts = ref<boolean>(false);

const renderedPosts = computed(() => {
  return isShowAllPosts.value ? posts.value : posts.value.slice(0, 10);
});

onMounted(async () => {
  isLoading.value = true;
  try {
    posts.value = await $api.getPosts();
    isError.value = false;
  } catch (error) {
    isError.value = true;
    console.error(error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<style src="./PostsView,style.scss" lang="scss" scoped></style>
