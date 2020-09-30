<template>
  <div class="app">
    <div class="middle-of-the-screen">Coming soon...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openBlog() {
      window.open('https://blog.repl.it/langjam', '_blank');
    }
  }
}
</script>

<style scoped>
.middle-of-the-screen {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4rem;
    font-family: 'Comfortaa', cursive;
    text-transform: uppercase;
}
</style>
