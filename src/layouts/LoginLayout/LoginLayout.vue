import PageHeader from '@/components/PageHeader/PageHeader.vue';
<template>
  <div class="wrapper">
    <PageHeader />
    <PageNavigate />
    <slot></slot>
    <PageFooter :is-dark="true" />
  </div>
</template>

<script setup lang="ts">
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import PageNavigate from '@/components/PageNavigate/PageNavigate.vue';
</script>

<style src="./LoginLayout.style.scss" lang="scss" scoped></style>
