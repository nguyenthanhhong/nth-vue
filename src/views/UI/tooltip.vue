<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-weight: 900;">Tooltip</span>
      </div>
      <div class="box">
        <div class="top">
          <el-tooltip class="item" effect="light" content="Top Left prompts info" placement="top-start">
            <el-button>top-start</el-button>
            </el-tooltip>
          <el-tooltip class="item" effect="dark" placement="top">
            <div slot="content">Top Center prompts info<br/>second line</div>
            <el-button>top</el-button>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="Top Right prompts info" placement="top-end">
            <el-button>top-end</el-button>
          </el-tooltip>
        </div>
        <div class="left">
            <el-tooltip class="item" effect="dark" content="Left Top prompts info" placement="left-start">
            <el-button>left-start</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Center prompts info" placement="left">
            <el-button>left</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Left Bottom prompts info" placement="left-end">
            <el-button>left-end</el-button>
            </el-tooltip>
        </div>

        <div class="right">
            <el-tooltip class="item" effect="dark" content="Right Top prompts info" placement="right-start">
            <el-button>right-start</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Center prompts info" placement="right">
            <el-button>right</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Right Bottom prompts info" placement="right-end">
            <el-button>right-end</el-button>
            </el-tooltip>
        </div>
        <div class="bottom">
            <el-tooltip class="item" effect="dark" content="Bottom Left prompts info" placement="bottom-start">
            <el-button>bottom-start</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Center prompts info" placement="bottom">
            <el-button>bottom</el-button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Bottom Right prompts info" placement="bottom-end">
            <el-button>bottom-end</el-button>
            </el-tooltip>
        </div>
      </div>
    </el-card>
    <el-card class="box-card" style="margin-top: 10px;">
      <div slot="header" class="clearfix">
        <span style="font-weight: 900;">Popover</span>
      </div>
      <el-popover
        placement="top-start"
        title="Title"
        width="200"
        trigger="hover"
        content="this is content, this is content, this is content">
        <el-button slot="reference">Hover to activate</el-button>
      </el-popover>

      <el-popover
        placement="bottom"
        title="Title"
        width="200"
        trigger="click"
        content="this is content, this is content, this is content">
        <el-button slot="reference">Click to activate</el-button>
      </el-popover>

      <el-popover
        ref="popover"
        placement="right"
        title="Title"
        width="200"
        trigger="focus"
        content="this is content, this is content, this is content">
      </el-popover>
      <el-button v-popover:popover>Focus to activate</el-button>

      <el-popover
        placement="bottom"
        title="Title"
        width="200"
        trigger="manual"
        content="this is content, this is content, this is content"
        v-model="visible">
        <el-button slot="reference" @click="visible = !visible">Manual to activate</el-button>
      </el-popover>
      <el-popover
        placement="right"
        width="400"
        trigger="click">
        <el-table :data="gridData">
            <el-table-column width="150" property="date" label="date"></el-table-column>
            <el-table-column width="100" property="name" label="name"></el-table-column>
            <el-table-column width="300" property="address" label="address"></el-table-column>
        </el-table>
        <el-button slot="reference">Nested information</el-button>
      </el-popover>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'tooltip',
  data() {
    return {
        visible: false,
        gridData: [{
          date: '2016-05-02',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-04',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-01',
          name: 'Jack',
          address: 'New York City'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'New York City'
        }]
    };
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 110px;
    }

    .right {
      float: right;
      width: 110px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }

    .el-button {
      width: 110px;
    }
  }
  .box-card button {
    margin: 4px;
  }
</style>
