<template>
  <header :class="headerClasses">
    Учебный проект 2023
    <ThemeSwitcher v-if="device === 'desktop'" />
    <button :disabled="!isAuth" @click="logout" class="logout">Logout</button>
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

import { computed } from 'vue';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
import { useMedia } from '@/composables/useMedia';
import { useAuthStore } from '@/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();

const { isAuth } = storeToRefs(authStore);
const { logout } = authStore;

const { isDarkTheme } = useTheme();
const { device } = useMedia();

const headerClasses = computed(() => {
  return { header: true, ['dark-header']: isDarkTheme.value };
});
</script>

<style src="./PageHeader.style.scss" lang="scss" scoped />
