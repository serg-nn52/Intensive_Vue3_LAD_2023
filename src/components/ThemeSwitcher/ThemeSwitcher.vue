<template>
  <v-switch
    :class="switchClasses"
    v-model="isDarkTheme"
    label="Teмная тема"
    hide-details
    :color="'white'"
    :base-color="'green'"
    @update:model-value="(value) => toggleTheme(!!value)"
  ></v-switch>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const themeStore = useThemeStore();

const { isDarkTheme } = storeToRefs(themeStore);
const { toggleTheme } = themeStore;

const switchClasses = computed(() => {
  return { switch: true, ['dark-switch']: isDarkTheme.value };
});
</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped></style>
