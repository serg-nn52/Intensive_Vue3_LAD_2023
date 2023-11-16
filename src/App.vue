<template>
  <div class="wrapper">
    <PageHeader @changeDarkTheme="changeDarkTheme" />
    <PageContent :isDark="isDark" />
    <PageFooter :isDark="isDark" />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import PageContent from '@/components/PageContent/PageContent.vue';
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import { ref } from 'vue';
import { getBooleanValueFromLs } from './utils/ls.utils';
import { LocalStorageConstants } from './constants/ls.constants';

const isDark = ref<boolean>(getBooleanValueFromLs(LocalStorageConstants.THEME));

const changeDarkTheme = (value: boolean) => {
  isDark.value = value;
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.content {
  flex-grow: 1;
}
</style>
