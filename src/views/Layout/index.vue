<template>
  <el-container :class="{'hideSidebar':isCollapse}" style="max-height: 100vh;">
    <LeftPanel class="sidebar-container"/>      
    <el-container class="main-container">
      <HeaderPanel />
      <el-main style="height: calc(100vh - 110px)">
        <router-view />
      </el-main>
      <el-footer><FooterPanel /></el-footer>
    </el-container>
    <!-- <RightPanel></RightPanel> -->
  </el-container>
</template>

<style lang="scss">
  .breadcrumb-container:hover {
    background: rgba(0,0,0,0.025);
  }
  .scrollbar-wrapper {
      overflow-x: hidden !important;
  }
  .el-header {
    padding: 0 0 !important;
    background-color: #B3C0D1;
    color: #333;
    line-height: 50px;
  }
  .el-footer {
    background-color: #1f2d3d;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }

  .hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }

  .hamburger.is-active {
    transform: rotate(180deg);
  }
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);

    .hamburger-container {
      line-height: 46px;
      height: 100%;
      float: left;
      cursor: pointer;
      transition: background .3s;
      -webkit-tap-highlight-color:transparent;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }

    .breadcrumb-container {
      float: left;
    }

    .errLog-container {
      display: inline-block;
      vertical-align: top;
    }

    .right-menu {
      float: right;
      height: 100%;
      line-height: 50px;

      &:focus {
        outline: none;
      }

      .right-menu-item {
        display: inline-block;
        padding: 0 8px;
        height: 100%;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025)
          }
        }
      }

      .avatar-container {
        margin-right: 30px;
        
        .avatar-wrapper {
          margin-top: 5px;
          position: relative;

          .user-avatar {
            cursor: pointer;
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }

          .el-icon-caret-bottom {
            cursor: pointer;
            position: absolute;
            right: -20px;
            top: 25px;
            font-size: 12px;
          }
        }
      }
    }
  }
</style>

<script>
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import HeaderPanel from './components/HeaderPanel'
import FooterPanel from './components/FooterPanel'

export default {
  components: {
    LeftPanel,
    RightPanel,
    HeaderPanel,
    FooterPanel
  },
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      isActive: false,
      tableData: Array(20).fill(item)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.getters.leftPanelCollapse;
    }
  },
  methods: {
    toggleClick() {
      this.isActive = !this.isActive
    }
  }
};
</script>