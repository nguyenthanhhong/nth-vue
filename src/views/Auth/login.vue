<template>
    <div class="login-container">
        <el-card class="box-card" style="height: 300px">
            <div slot="header" class="clearfix">
                <span class="title">Login Form</span>
            </div>
            <el-form label-width="100px" class="demo-ruleForm">
                <el-form-item
                    label="User Name"
                    prop="name"
                    :rules="[ { required: true, message: 'User Name is required'} ]"
                >
                    <el-input v-model="username"></el-input>
                </el-form-item>
                <el-form-item
                    label="Password"
                    prop="password"
                    show-password
                    :rules="[ { required: true, message: 'Password is required'} ]"
                >
                    <el-input v-model="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>

export default {
  name: 'page400',
  data() {
    return {
        username:'',
        password:''
    }
  },
  methods: {
    handleLogin() {
      
    },
    register() {}
  }
}
</script>

<style lang="scss" scoped>
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
  padding-top: 200px;
  .box-card {
    position: relative;
    width: 520px;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  .title {
      font-size: 26px;
      //color: $light_gray;
      text-align: center;
      font-weight: bold;
    }
}
</style>