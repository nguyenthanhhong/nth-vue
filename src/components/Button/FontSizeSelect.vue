<template>
  <el-dropdown class="right-menu-item hover-effect" trigger="click" @command="handleSetSize">
    <div>
      <i class="glyphicon glyphicon-text-height"/>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item of sizeOptions" :key="item.value" :disabled="size===item.value" :command="item.value">
        {{
        item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'FontSizeSelect',
  data() {
    return {
      sizeOptions: [
        { label: 'Default', value: 'default' },
        { label: 'Medium', value: 'medium' },
        { label: 'Small', value: 'small' },
        { label: 'Mini', value: 'mini' }
      ]
    }
  },
  computed: {
    size() {
      return this.$store.getters.fontSize
    }
  },
  methods: {
    handleSetSize(size) {
        this.$ELEMENT.size = size
        this.$store.dispatch('setFontSize', size)
        this.refreshView()
        this.$message({
        message: 'Switch Size Success',
        type: 'success'
        })
    },
    refreshView() {
        // In order to make the cached page re-rendered
        // this.$store.dispatch('tagsView/delAllCachedViews', this.$route)

        const { fullPath } = this.$route

        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
          })
        })
    }
  }
}
</script>