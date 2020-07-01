<template>
  <el-row>
    <el-col :span="4">
      <div class="block">
        <div>With default value</div>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </el-col>
    <el-col :span="4">
      <div class="block">
        <div>With no default value</div>
        <el-color-picker v-model="color2"></el-color-picker>
      </div>
    </el-col> 
    <el-col :span="4">
      <div class="block">
        <div>Alpha channel selecting</div>
        <el-color-picker v-model="coloralpha" show-alpha></el-color-picker>
      </div>
      
    </el-col> 
    <el-col :span="4">
      <div class="block">
        <div>Predefined colors</div>
        <el-color-picker
          v-model="color"
          show-alpha
          :predefine="predefineColors">
        </el-color-picker>
      </div>
      
    </el-col> 
    <el-col :span="8">
      <div class="picker-block">
        <div>Sizes</div>
        <el-color-picker v-model="color3"></el-color-picker>
        <el-color-picker v-model="color3" size="medium"></el-color-picker>
        <el-color-picker v-model="color3" size="small"></el-color-picker>
        <el-color-picker v-model="color3" size="mini"></el-color-picker>
      </div>
      
    </el-col> 
  </el-row>
</template>
<script>
  export default {
    data () {
      return {
        color1: '#509E0F',
        color2: null,
        color3: '#409EFF',
        coloralpha: 'rgba(19, 206, 102, 0.8)',
        color: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-col{
    border-right: 1px solid #e6e6e6;
    border-radius: 0;
    &:last-child {
      border-right: 0;
    }
}
.picker-block .el-color-picker {
    padding-right: 10px;
}
</style>