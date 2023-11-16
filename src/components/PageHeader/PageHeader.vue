<template>
  <header :class="headerClasses">
    Учебный проект 2023
    <v-switch
      :class="switchClasses"
      v-model="isDark"
      label="Teмная тема"
      hide-details
      color="white"
      :base-color="'green'"
      @update:model-value="$emit(Emits.CHANGE_DARK_THEME, isDark)"
    ></v-switch>
  </header>
</template>

<script setup lang="ts">
import { Emits } from '@/constants/emits.constants';
import { LocalStorageConstants } from '@/constants/ls.constants';
import { getBooleanValueFromLs } from '@/utils/ls.utils';
import { watch } from 'vue';
import { computed } from 'vue';
import { ref } from 'vue';

const isDark = ref<boolean>(getBooleanValueFromLs(LocalStorageConstants.THEME));

watch(isDark, (newIsDark) => {
  localStorage.setItem(LocalStorageConstants.THEME, newIsDark.toString());
});

const headerClasses = computed(() => {
  return { header: true, ['dark-header']: isDark.value };
});

const switchClasses = computed(() => {
  return { switch: true, ['dark-switch']: isDark.value };
});
</script>

<style src="./PageHeader.style.scss" lang="scss" scoped />
