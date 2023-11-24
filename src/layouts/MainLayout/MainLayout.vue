import PageHeader from '@/components/PageHeader/PageHeader.vue';
<template>
  <div class="wrapper">
    <PageHeader />
    <PageNavigate />
    <PageContent>
      <slot></slot>
    </PageContent>
    <PageFooter :is-dark="true" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/PageContent/PageContent.vue';
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import PageHeader from '@/components/PageHeader/PageHeader.vue';
import PageNavigate from '@/components/PageNavigate/PageNavigate.vue';
</script>

<style src="./MainLayout.style.scss" lang="scss" scoped></style>
