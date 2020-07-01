<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="Basic usage" name="1">
      <el-tabs v-model="activeTab" @tab-click="handleClick">
        <el-tab-pane label="User" name="first">Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.</el-tab-pane>
        <el-tab-pane label="Config" name="second">Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
        <el-tab-pane label="Role" name="third">Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.</el-tab-pane>
        <el-tab-pane label="Task" name="fourth">Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
      </el-tabs>
    </el-collapse-item>
    <el-collapse-item title="Border card" name="2">
      <el-tabs type="border-card">
        <el-tab-pane label="User">Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.</el-tab-pane>
        <el-tab-pane label="Config">Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
        <el-tab-pane label="Role">Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.</el-tab-pane>
        <el-tab-pane label="Task">Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
      </el-tabs>
    </el-collapse-item>
    <el-collapse-item title="Tab position" name="3">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="User">Gummi bears liquorice brownie donut pastry bonbon biscuit. Jelly-o pudding fruitcake toffee apple pie sugar plum biscuit. Sweet roll brownie marshmallow dragée. Carrot cake carrot cake muffin donut gingerbread sweet. pudding chocolate. Halvah powder sugar plum marshmallow powder biscuit. Biscuit pudding fruitcake. Donut gummies dessert lollipop pie carrot cake bear claw lollipop danish.</el-tab-pane>
        <el-tab-pane label="Config">Biscuit powder jelly beans. Lollipop candy canes croissant icing chocolate cake. Cake fruitcake powder pudding pastry. Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
        <el-tab-pane label="Role">Chocolate cake icing tiramisu liquorice toffee donut sweet roll cake. Cupcake dessert icing dragée dessert. Liquorice jujubes cake tart pie donut. Cotton candy candy canes lollipop liquorice chocolate marzipan muffin pie liquorice.</el-tab-pane>
        <el-tab-pane label="Task">Tootsie roll oat cake I love bear claw I love caramels caramels halvah chocolate bar. Cotton candy gummi bears pudding pie apple pie cookie. Cheesecake jujubes lemon drops danish dessert I love caramels powder.</el-tab-pane>
      </el-tabs>
    </el-collapse-item>
    <el-collapse-item title="Customized trigger button of new tab" name="4">
      <div style="margin-bottom: 20px;">
        <el-button @click="addTab(editableTabsValue)">add tab</el-button>
      </div>
      <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
        <el-tab-pane
            v-for="(item, index) in editableTabs"
            :key="item.name"
            :label="item.title"
            :name="item.name"
        >
            {{item.content}}
        </el-tab-pane>
      </el-tabs>
    </el-collapse-item>
  </el-collapse>
</template>
<script>
  export default {
    data() {
      return {
        activeName: '1',
        activeTab: 'second',
        tabPosition: 'left',
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleClick(tab, event) {
          console.log(tab)
        this.$message({
            message: 'Select tab ' + tab.name,
            type: 'success'
        })
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content ' + newTabName
        });
        this.editableTabsValue = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>