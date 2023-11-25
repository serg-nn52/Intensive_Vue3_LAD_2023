import { $api } from '@/api';
import type { IPost } from '@/api/postsApi/postsApi.type';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export const usePostsStore = defineStore('posts', () => {
  const isLoading = ref<boolean>(false);
  const isError = ref<boolean>(false);

  const posts = ref<IPost[]>([]);
  const post = ref<IPost>();

  const route = useRoute();

  //methods
  const getPosts = async () => {
    isLoading.value = true;
    try {
      posts.value = await $api.getPosts;
      isError.value = false;
    } catch (error) {
      isError.value = true;
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  };

  const getPost = async () => {
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
  };

  //getters (computed)
  const renderedPosts = computed(() => {
    return (isShowAllPosts: boolean) => (isShowAllPosts ? posts.value : posts.value.slice(0, 10));
  });

  return { getPosts, isError, isLoading, posts, renderedPosts, getPost, post };
});
