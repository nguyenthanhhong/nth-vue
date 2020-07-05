<template>
  <div>
    <el-menu-item v-if="!hasChild" :index="item.Code">
      <router-link :to="item.Path">
        <i v-if="item.Icon" :class="item.Icon"/>{{ item.Title}}
      </router-link>
    </el-menu-item>
    <template v-else>
        <el-submenu :index="item.Code">
            <template slot="title">
              <i v-if="item.Icon" :class="item.Icon"/>
              <span slot="title">{{ item.Title}}</span>
            </template>
            <MenuItem v-for="menu of item.child" :key="menu.Code" :index="menu.Code" :item="menu"/>
        </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    // route object
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChild() {
      return this.item.child ? true : false
    }
  }
}
</script>

<style scoped>
.el-menu-item [class^=el-icon-], .el-submenu [class^=el-icon-] {
    width: 18px;
}
</style>