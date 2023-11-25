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
      v-for="post of renderedPosts(isShowAllPosts)"
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
import { PathNames } from '@/constants/route.constants';
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue';

const isShowAllPosts = ref<boolean>(false);
const postsStore = usePostsStore();

const { isError, isLoading, posts, renderedPosts } = storeToRefs(postsStore);
const { getPosts } = postsStore;

onMounted(() => {
  getPosts();
});
</script>

<style src="./PostsView,style.scss" lang="scss" scoped></style>
