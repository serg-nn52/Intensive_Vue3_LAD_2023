<template>
  <v-switch
    :class="switchClasses"
    v-model="isDark"
    label="Teмная тема"
    hide-details
    :color="'white'"
    :base-color="'green'"
    @update:model-value="$emit(Emits.CHANGE_DARK_THEME, isDark)"
  ></v-switch>
</template>

<script setup lang="ts">
import { Emits } from '@/constants/emits.constants';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const isDark = ref(!!route.query.theme || false);

watch(isDark, (newIsDark) => {
  router.push({
    query: newIsDark
      ? {
          theme: 'dark'
        }
      : {}
  });
});

const switchClasses = computed(() => {
  return { switch: true, ['dark-switch']: isDark.value };
});
</script>

<style src="./ThemeSwitcher.style.scss" lang="scss" scoped></style>
