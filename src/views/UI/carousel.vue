<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="block">
            <div>Switch when indicator is hovered (default)</div>
            <el-carousel>
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
            </el-carousel-item>
            </el-carousel>
        </div>
        </el-col>
        <el-col :span="12">
        <div class="block">
            <div>Indicators are displayed outside the carouse</div>
            <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
            </el-carousel-item>
            </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="block">
            <div>Card mode</div>
            <el-carousel :interval="4000" type="card">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
            </el-carousel-item>
            </el-carousel>
        </div>
      </el-col> 
      <el-col :span="12">
        <div class="block">
            <div>Displayed in the vertical direction</div>
            <el-carousel direction="vertical" :autoplay="false">
            <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image style="width: 100%; height: 100%" :src="item.url" fit="fill"></el-image>
            </el-carousel-item>
            </el-carousel>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        imgList: [
            {id: "1", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg"},
            {id: "2", url: "https://upload.wikimedia.org/wikipedia/commons/0/03/Mountain_Bluebird.jpg"},
            {id: "3", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Bullfinch_male.jpg/420px-Bullfinch_male.jpg"},
            {id: "4", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Rose_Robin_1_-_Woodford.jpg/450px-Rose_Robin_1_-_Woodford.jpg"},
        ]
      }
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
.el-col{
    border-right: 1px solid #e6e6e6;
    border-radius: 0;
    padding: 20px;
    &:last-child {
      border-right: 0;
    }
}
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>