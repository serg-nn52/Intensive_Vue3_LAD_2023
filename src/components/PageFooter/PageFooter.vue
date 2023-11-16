<template>
  <footer :class="footerClasses">LAD-Academy</footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IPropsFooter } from './PageFooter.types';
import { toRefs } from 'vue';

const props = defineProps<IPropsFooter>();

const { isDark } = toRefs(props);

const footerClasses = computed(() => {
  return { footer: true, ['dark-footer']: isDark.value };
});
</script>

<style src="./PageFooter.style.scss" lang="scss" scoped></style>
