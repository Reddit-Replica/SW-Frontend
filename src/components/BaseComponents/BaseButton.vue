<template>
  <button>{{ buttonText }}</button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  box-sizing: border-box;
  cursor: pointer;
  transition: background-color 0.2s;
}
button:disabled {
  cursor: not-allowed;
}
</style>
