<template>
  <ul class="posts">
    <li
      @click="
        $router.push({
          name: 'post',
          params: {
            id: post.id
          },
          query: $route.query
        })
      "
      :key="post.id"
      v-for="post of posts"
    >
      {{ post.post }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { posts } from '@/mock/posts';
</script>

<style src="./PostsView,style.scss" lang="scss" scoped></style>
