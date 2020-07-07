<template>
  <div>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span style="font-weight: 900;">Basic usage</span>
            </div>
            <el-button type="text" @click="dialogVisible = true">click to open the Dialog</el-button>
            <el-dialog
                title="Tips"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>This is a message</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
            </span>
            </el-dialog>
        </el-card>
      </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Nested Dialog</span>
        </div>
        <el-button type="text" @click="outerVisible = true">open the outer Dialog</el-button>
        <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
            <el-dialog
                width="30%"
                title="Inner Dialog"
                :visible.sync="innerVisible"
                append-to-body>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
            <el-button @click="outerVisible = false">Cancel</el-button>
            <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
            </div>
        </el-dialog>
      </el-card>
    </el-col>
    </el-row>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Text Button</span>
        </div>
        <el-button type="text">Text Button</el-button>
        <el-button type="text" disabled>Text Button</el-button>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Icon Button</span>
        </div>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search">Search</el-button>
        <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
        <el-button type="primary" :loading="true">Loading</el-button>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Button Group</span>
        </div>
        <el-button-group>
            <el-button type="primary" icon="el-icon-arrow-left">Previous Page</el-button>
            <el-button type="primary">Next Page<i class="el-icon-arrow-right el-icon-right"></i></el-button>
        </el-button-group>
        <el-button-group style="margin-left: 10px;">
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="primary" icon="el-icon-share"></el-button>
            <el-button type="primary" icon="el-icon-delete"></el-button>
        </el-button-group>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span style="font-weight: 900;">Icon Button</span>
        </div>
        <el-row>
            <el-button>Default</el-button>
            <el-button size="medium">Medium</el-button>
            <el-button size="small">Small</el-button>
            <el-button size="mini">Mini</el-button>
        </el-row>
        <el-row>
            <el-button round>Default</el-button>
            <el-button size="medium" round>Medium</el-button>
            <el-button size="small" round>Small</el-button>
            <el-button size="mini" round>Mini</el-button>
        </el-row>
      </el-card>
    </el-col>
  </div>
</template>
<script>
export default {
    data() {
      return {
        dialogVisible: false,
        outerVisible: false,
        innerVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
}
</script>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    padding-right: 10px;
    padding-bottom: 10px;
    &:last-child {
      padding-right: 0;
    padding-bottom: 0;
    }
  }
</style>