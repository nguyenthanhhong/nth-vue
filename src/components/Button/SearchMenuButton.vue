<template>
  <div class="header-search " :class="show ? 'show':''">
    <i class="glyphicon glyphicon-search" @click.stop="click"/>
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      placeholder="Search"
      class="header-search-select"
      filterable
      remote
      :remote-method="querySearch"
    >
      <el-option v-for="item in options" :key="item.path" :value="item" :label="item.title" />
    </el-select>
  </div>
</template>

<script>

export default {
  name: 'SearchMenuButton',
  data() {
    return {
      show: false,
      loading: false,
      search: '',
      options: [],
      list: [
        {path: "menu 1", title:"menu 1"},
        {path: "menu 2", title:"menu 2"},
        {path: "menu 3", title:"menu 3"},
        {path: "menu 4", title:"menu 4"},
      ]
    }
  },
  methods: {
    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },
    querySearch(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(item => {
            return item.title.toLowerCase()
              .indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    /deep/ .el-input__inner {
      height: 34px;
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
