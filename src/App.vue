<template>
  <div class="wrapper">
    <PageHeader @incrCountEmit="(value) => console.log('emit', value)" :nameComponent="testVar" />
    <PageContent>
      <p>{{ 'name' + user.userName }}</p>
      <p @click="incrAge">{{ 'age' + user.age }}</p>
      <p>{{ 'doubleAge' + doubleAge }}</p>
      <p>{{ emitData }}</p>
      <template #bottomSlot>
        <p>Bottom Slot Content</p>
      </template>
    </PageContent>
    <PageFooter
      :user="user"
      :incrAge="incrAge"
      @footer-emit="
        (value) => {
          console.log('footerEmit');
          emitData = value;
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import PageContent from '@/components/PageContent.vue';
import PageFooter from '@/components/PageFooter/PageFooter.vue';
import { computed, ref, watch } from 'vue';
import type { IUser } from './App.types';

//переменные реактивные
const testVar = ref('HeaderTest');

const user = ref<IUser>({
  userName: 'Serg',
  age: 38
});

const emitData = ref<string>('');

//методы
const incrAge = () => {
  user.value.age++;
};

//computed

const doubleAge = computed(() => {
  return user.value.age * 2;
});

//вотчеры

watch(
  user,
  (newUser, oldUser) => {
    // из официальной документации
    // Note: `newValue` will be equal to `oldValue` here
    // *unless* state.someObject has been replaced
    console.log('newUser ', newUser.age);
    console.log('oldUser ', oldUser.age);
  },
  { deep: true }
);
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
