<template>
  <div :class="{'has-logo':isCollapse}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        default-active="2"
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b">
        <MenuItem v-for="menu in leftMenuList" :key="menu.Code" :item="menu" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
//import variables from '@/assets/styles/variables.scss'
import MenuItem from '@/components/Button/MenuItem'

export default {
  name: 'LeftPanel',
  components: {
    MenuItem
  },
  computed: {
    isCollapse() {
      return this.$store.getters.leftPanelCollapse;
    },
    leftMenuList() {
      return this.$store.getters.leftMenuList
    }
  }
}
</script>
<style scoped>
.el-scrollbar__wrap {
  overflow: visible;
  overflow-x: hidden;
}
.menubar{
  background-color: rgb(48, 65, 86) !important;
}
.el-submenu {
  color: rgb(191, 203, 217);
  background-color: rgb(48, 65, 86);
}
</style>
