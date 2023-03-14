<template>
  <!-- <div class="app-background">
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
    <div @drop="onDrop($event, 1)"
    @dragover.prevent @dragenter.prevent>
      <h1 class="app-title" draggable @dragstart="getdata($event)">sdasdasda</h1>
    </div>
    <h1 class="app-highlight">sdasdasda</h1>
</div> -->
<div>
  <div class="drop-zone"  @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
      <div v-for="item in listOne" draggable @dragstart="startDrag($event, item)" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
    <div class="drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
      <div v-for="item in listTwo" draggable @dragstart="startDrag($event, item)" :key="item.title" class="drag-el">
        {{ item.title }}
      </div>
    </div>
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
  import VueMultipleThemes from "vue-multiple-themes";
  export default {
    name : 'about',
    data() {
    return {
      items: [
        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
      ],
    }
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1)
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2)
    },
  },
  components: {VueMultipleThemes}
  ,methods: {
    
    startDrag(evt, item) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('itemID', item.id)
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find((item) => item.id == itemID)
      item.list = list
      console.log(this.items)
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