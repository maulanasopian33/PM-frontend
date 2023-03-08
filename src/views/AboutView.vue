<template>
  <div class="app-background">
      <vue-multiple-themes
      :defaultTheme="'Pallet12'"
      :themeColorList="[
      'light',
      'dark',
      'psychology',
      'sepia',
      ]"
      :changeThemeOff="false"
      >

    </vue-multiple-themes>
    <h1 class="app-title">sdasdasda</h1>
    <h1 class="app-highlight">sdasdasda</h1>
</div>
</template>

<script>
  import VueMultipleThemes from "vue-multiple-themes";
  export default {
    name : 'about',
  components: {VueMultipleThemes}
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