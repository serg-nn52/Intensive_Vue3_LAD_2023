<template>
  <footer @click="emits('footerEmit', 'my-footer')" class="footer">
    {{ user }}
    <button @click="incrAge">incrAgeFooter</button>
  </footer>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import type { IFooterEmits, IPropsFooter } from './PageFooter.types';

const props = withDefaults(defineProps<IPropsFooter>(), {
  user: () => {
    return { userName: 'DefaultUserName', age: 10 };
  }
});

const { user } = toRefs(props);

const emits = defineEmits<IFooterEmits>();

console.log(props.user);
</script>

<style src="./PageFooter.style.scss" lang="scss" scoped></style>
<style lang="scss" scoped>
.footer {
  color: green;
}
</style>
