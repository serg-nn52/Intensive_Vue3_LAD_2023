<template>
  <div :class="contentClasses">
    <UBreadcrumb />
    <PageContainer :is-full-width="device === 'mobile' ? true : false" :width="deviceWidth">
      {{ $route.meta.title }}
      <v-divider v-if="$route.meta.title"></v-divider>
      <slot></slot>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { IPropsContent } from './PageContent.types';
import { toRefs } from 'vue';
import PageContainer from '../PageContainer/PageContainer.vue';
import { useMedia } from '@/composables/useMedia';
import UBreadcrumb from '../UBreadcrumb/UBreadcrumb.vue';

const props = withDefaults(defineProps<IPropsContent>(), {
  isDark: false
});

const { isDark } = toRefs(props);

const contentClasses = computed(() => {
  return { content: true, ['dark-content']: isDark.value };
});

const { device } = useMedia();

const deviceWidth = computed(() => {
  if (device.value === 'desktop') return 1200;
  if (device.value === 'tablet') return 700;
  return 700;
});
</script>

<style src="./PageContent.style.scss" lang="scss" scoped />
