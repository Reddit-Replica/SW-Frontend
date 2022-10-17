<template>
  <div>
    <h1>{{ text }}</h1>
    <button @click="clicked">
      Click me!
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "test the code",
    };
  },
  methods: {
    async clicked() {
      const response = await fetch(`/api/`);
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(responseData.message || "Failed to fetch!");
        throw error;
      }
      this.text = responseData.text;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 8rem 0 5rem 0;
}
button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #038084;
  border: 1px solid #004f52;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

button:hover,
button:active {
  background-color: #028e93;
  border-color: #028e93;
}
</style>
