<template>
  <footer :class="footerClasses">LAD-Academy</footer>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { computed } from 'vue';

const { isDarkTheme } = useTheme();

const footerClasses = computed(() => {
  return { footer: true, ['dark-footer']: isDarkTheme.value };
});
</script>

<style src="./PageFooter.style.scss" lang="scss" scoped></style>
