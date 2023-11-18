<template>
  <header :class="headerClasses">
    Учебный проект 2023
    <ThemeSwitcher v-if="device === 'desktop'" />
  </header>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';

import { computed } from 'vue';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
import { useMedia } from '@/composables/useMedia';

const { isDarkTheme } = useTheme();
const { device } = useMedia();

const headerClasses = computed(() => {
  return { header: true, ['dark-header']: isDarkTheme.value };
});
</script>

<style src="./PageHeader.style.scss" lang="scss" scoped />
