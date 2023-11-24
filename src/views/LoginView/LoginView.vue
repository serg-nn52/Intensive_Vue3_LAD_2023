<template>
  <div class="login">
    <UBreadcrumb class="login-breadcrumb" />
    <h2 class="login-title">Login</h2>
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm/LoginForm.vue';
import UBreadcrumb from '@/components/UBreadcrumb/UBreadcrumb.vue';
</script>

<style src="./LoginView.style.scss" lang="scss" scoped></style>
