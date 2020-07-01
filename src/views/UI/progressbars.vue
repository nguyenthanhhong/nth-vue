<template>
  <el-row>
    <el-col :span="12">
      <div class="block">
        <div>Linear progress bar</div>
        <el-progress :percentage="50"></el-progress>
        <el-progress :percentage="100" :format="format"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="100" status="warning"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="block">
        <div>Internal percentage</div>
        <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
        <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="block">
        <div>Circular progress bar</div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="circle" :percentage="70" status="warning"></el-progress>
        <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      </div>
    </el-col> 
    <el-col :span="12">
      <div class="block">
        <div>Dashboard progress bar</div>
        <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
        <div>
          <el-button-group>
            <el-button icon="el-icon-minus" @click="decrease"></el-button>
            <el-button icon="el-icon-plus" @click="increase"></el-button>
          </el-button-group>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    },
    methods: {
      format(percentage) {
        return percentage === 100 ? 'Full' : `${percentage}%`;
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-col{
    border-right: 1px solid #e6e6e6;
    border-radius: 0;
    padding-bottom: 20px;
    &:last-child {
      border-right: 0;
    }
}
.block .el-progress--line {
    margin-bottom: 15px;
    width: 450px;
    text-align: left;
    padding-left: 10px;
}
.block .el-progress--circle {
    padding-left: 10px;
}
</style>