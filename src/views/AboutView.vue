<template>

<div>
  <button @click="showPopup">Tampilkan Pop-up</button>
  <modal name="my-modal">
  <h2>Selamat Datang di Pop-up!</h2>
  <p>Ini adalah pesan di dalam Pop-up</p>
</modal>
</div>
</template>
<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}
.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>
<script>
  export default {
    name : 'about',
    data() {
    return {
    }
  },
  created() {
    this.$echo.channel('chat-8e8b743b-8c09-4d49-bb19-7cc5e4593823').listen('chat', (data) => {
      // handle event data here
      console.log(data)
    });
  },
  methods: {
    showPopup() {
      this.$modal.show('my-modal')
    },
  },
};
</script>

<style>
/* @import "fonts.scss"; */

:root {
  --app-background-color: #ffffff;
  --app-title-color: #333333;
  --app-subtitle-color: #555555;
}

[theme="dark"] {
  --app-background-color: #333333;
  --app-title-color: #ffffff;
  --app-subtitle-color: #dddddd;
}

[theme="sepia"] {
  --app-background-color: #d0bc91;
  --app-title-color: #8a6c44;
  --app-subtitle-color: #5f4938;
}

.app-background {
  background-color: var(--app-background-color);
}

.app-title {
  color: var(--app-title-color);
}

.app-subtitle {
  color: var(--app-subtitle-color);
  padding-top: 10px;
}

.change-theme-box {
  cursor: pointer;
  color: var(--app-subtitle-color);
  font-size: 1em;
  font-weight: normal;
}
</style>