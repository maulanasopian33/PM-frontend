<template>
  <div>
    <GlobalChat></GlobalChat>
  </div>
</template>

<script>
import '@/assets/tailwind.css';
import GlobalChat from './components/GlobalChat.vue';
export default {
  name: 'App',
  components: {
    GlobalChat,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
