<template>
  <form class="login-form" @submit.prevent>
    <label>
      Login:
      <input autocomplete="username" type="text" />
    </label>
    <label>
      Password:
      <input autocomplete="new-password" :type="isPassword ? 'password' : 'text'" />
      <ShowIcon @click="isPassword = !isPassword" class="show" />
    </label>
    <button class="login-submit" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import ShowIcon from '@/assets/icons/ShowIcon.vue';
import { ref } from 'vue';

const isPassword = ref<boolean>(true);
</script>

<style src="./LoginForm.scss" lang="scss" scoped></style>
