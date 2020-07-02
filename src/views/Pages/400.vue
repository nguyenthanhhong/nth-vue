<template>
  <div>
    <img src="@/assets/error-page.jpg">
    <div class="title">400 - BAD REQUEST</div>
    <div class="description">Your request resulted in an error</div>
    <el-button type="success" round @click="goHome">Go To HomePage</el-button>
  </div>
</template>

<script>

export default {
  name: '400',
  methods: {
    goHome() {
      this.$router.push('/index');
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 32px;
  line-height: 40px;
  color: #1482f0;
  margin-bottom: 20px;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.description {
  font-size: 20px;
  line-height: 24px;
  color: #222;
  margin-bottom: 10px;
  -webkit-animation-delay: .1s;
  animation-delay: .1s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
</style>
