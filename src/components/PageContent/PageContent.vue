<template>
  <div :class="contentClasses">
    Content
    <v-divider></v-divider>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IPropsContent } from './PageContent.types';
import { toRefs } from 'vue';

const props = defineProps<IPropsContent>();

const { isDark } = toRefs(props);

const contentClasses = computed(() => {
  return { content: true, ['dark-content']: isDark.value };
});
</script>

<style src="./PageContent.style.scss" lang="scss" scoped />
