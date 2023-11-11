<template>
  <header
    :class="{ header: true, greenColor: isRed }"
    :style="styles"
    @click="console.log('clickHeader')"
  >
    {{ nameComponent + count }}

    <button class="button" @click.stop="increment">increment</button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    nameComponent: {
      type: String,
      required: false,
      default: 'Header'
    }
  },
  emits: ['incrCountEmit'],
  data() {
    return {
      count: 0,
      isRed: false
    };
  },
  methods: {
    increment() {
      this.count++;
      this.$emit('incrCountEmit', this.count);
    }
  },
  computed: {
    doubleCount() {
      return this.count * 2;
    },
    styles() {
      return {
        backgroundColor: this.isRed ? 'red' : 'grey',
        ['--button-color']: this.isRed ? 'yellow' : 'green'
      };
    }
  },
  watch: {
    count(newCount, oldCount) {
      console.log('new ', newCount), console.log('old ', oldCount);
      this.isRed = !this.isRed;
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  color: black;
  font-size: 32px;
  font-weight: 700;
}
.button {
  padding: 5px;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  background-color: var(--button-color);
}
.greenColor {
  color: green;
}
</style>
