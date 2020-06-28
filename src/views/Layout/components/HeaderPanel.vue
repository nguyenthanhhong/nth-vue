<template>
  <el-header class="navbar" height="50px">
    <div @click="toggleClick" class="breadcrumb-container" style="padding: 0px 15px;font-size: 24px;">
      <i :class="isActive?'el-icon-s-fold':'el-icon-s-unfold'"/>
    </div>
    <div class="right-menu">
      <SearchMenuButton class="right-menu-item hover-effect"/>
      <FullScreenButton class="right-menu-item hover-effect"/>
      <FontSizeSelect class="right-menu-item hover-effect"/>
      <LangSelect class="right-menu-item hover-effect"/>
      <el-dropdown class="right-menu-item hover-effect avatar-container" trigger="click">
        <div>
          <i class="glyphicon glyphicon-user"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/profile/index">
            <el-dropdown-item>Profile</el-dropdown-item>
          </router-link>
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import FullScreenButton from '@/components/Button/FullScreenButton'
import FontSizeSelect from '@/components/Button/FontSizeSelect'
import SearchMenuButton from '@/components/Button/SearchMenuButton'
import LangSelect from '@/components/Button/LangSelect'

export default {
  name: 'HeaderPanel',
  components:{
    FullScreenButton,
    FontSizeSelect,
    SearchMenuButton,
    LangSelect
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleClick() {
      this.$store.dispatch('toggleLeftPanel')
      this.isActive = !this.isActive
    }
  }
}
</script>
