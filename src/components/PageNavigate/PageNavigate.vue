<template>
  <div :style="styles" class="links">
    <PageContainer class="links-container" :width="deviceWidth" :is-full-width="false">
      <nav class="menu-links">
        <router-link
          active-class="active-link"
          class="link"
          :to="{ name: PathNames.HOME, query: $route.query }"
          >Main</router-link
        >
        <router-link
          active-class="active-link"
          class="link"
          :to="{ name: PathNames.POSTS, query: $route.query }"
          >Posts</router-link
        >
      </nav>
      <div>
        <ThemeSwitcher v-if="device !== 'desktop'" />
      </div>
    </PageContainer>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import PageContainer from '../PageContainer/PageContainer.vue';
import { computed } from 'vue';
import { useMedia } from '@/composables/useMedia';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher.vue';
import { PathNames } from '@/constants/route.constants';

const { isDarkTheme } = useTheme();

const styles = computed(() => {
  return { ['--dark-opacity']: isDarkTheme.value ? 1 : 0.8 };
});

const { device } = useMedia();

const deviceWidth = computed(() => {
  if (device.value === 'desktop') return 1200;
  if (device.value === 'tablet') return 700;
  return 700;
});
</script>

<style src="./PageNavigate.style.scss" lang="scss" scoped></style>
