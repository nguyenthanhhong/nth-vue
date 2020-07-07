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
        <el-button @click="openAnotherDialog">Get data from Dialog</el-button>
        <div>Result</div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card class="box-card">
        
        <el-input  v-model="dialogResult.date"></el-input>
        <el-input  v-model="dialogResult.name"></el-input>
        <el-input  v-model="dialogResult.state"></el-input>
        <el-input  v-model="dialogResult.city"></el-input>
        <el-input  v-model="dialogResult.address"></el-input>
        <el-input  v-model="dialogResult.zip"></el-input>
      </el-card>
    </el-col>
  </div>
</template>
<script>
import anotherDialog from './dialog_another'
import { dialog } from '@/utils'

export default {
    data() {
      return {
        dialogVisible: false,
        outerVisible: false,
        innerVisible: false,
        dialogResult: {}
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('Are you sure to close this dialog?')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      openAnotherDialog() {
        dialog(this, anotherDialog).then((result) => {
          if(!result){
            return
          }
          this.dialogResult = result
        });
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