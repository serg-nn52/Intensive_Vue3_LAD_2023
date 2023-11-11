<template>
  <div class="content">
    Content
    <slot></slot>
    <hr />
    <slot name="bottomSlot"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content {
  background-color: darkgray;
  color: black;
  font-size: 32px;
  font-weight: 900;
  padding: 2rem;
}
</style>
