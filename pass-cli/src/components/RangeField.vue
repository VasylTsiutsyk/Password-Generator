<template>
  <div class="range-field">
    <label>Length</label>
    <div class="input">
      <input type="range" min="1" max="50" :value="length" @input="onInput">
      <span>
        {{length}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RangeField',
  props: ['length'],
  methods: {
    onInput(event) {
      this.$emit('updateLength', event.target.value);
    },
  },
};
</script>

<style scoped>
</style>
