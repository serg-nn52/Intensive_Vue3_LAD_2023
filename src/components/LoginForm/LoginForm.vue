<template>
  <form class="login-form" @submit.prevent="login(userForm)">
    <label>
      Login:
      <input v-model="userLogin" autocomplete="username" type="text" />
    </label>
    <label>
      Password:
      <input
        v-model="userPassword"
        autocomplete="new-password"
        :type="isPassword ? 'password' : 'text'"
      />
      <ShowIcon @click="isPassword = !isPassword" class="show" />
    </label>
    <button class="login-submit" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import type { ILogin } from '@/api/authApi/authApi.type';
import ShowIcon from '@/assets/icons/ShowIcon.vue';
import { useAuthStore } from '@/stores/auth';
import { computed } from 'vue';
import { ref } from 'vue';

const isPassword = ref<boolean>(true);

const userLogin = ref('');
const userPassword = ref('');

const userForm = computed<ILogin>(() => {
  return {
    login: userLogin.value,
    password: userPassword.value
  };
});

const authStore = useAuthStore();

const { login } = authStore;
</script>

<style src="./LoginForm.scss" lang="scss" scoped></style>
