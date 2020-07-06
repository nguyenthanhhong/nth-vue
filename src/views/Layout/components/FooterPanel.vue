<template>
  <el-row :gutter="20" class="cfooter">
    <el-col :span="4" class="left-footer">      
      Nguyễn Thanh Hồng
    </el-col>
    <el-col :span="4" class="left-footer">
      <i class="el-icon-phone" /> <a href="tel:+84383034006">038 30 34 006</a>
    </el-col>
    <el-col :span="6" class="left-footer">
      <i class="el-icon-message" /> <a href="mailto:nguyenthanhhong26@gmail.com">nguyenthanhhong26@gmail.com</a>
    </el-col>
    <el-col :span="4" class="right-footer">
      Follow me
    </el-col>
    <el-col :span="6" class="left-footer social-icon">
      <a href="https://www.facebook.com/hongnguyen26" title="Me on Facebook" style="color: #3578E5;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.3 15.4" class="d-block" height="18"><path d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z" fill="currentColor"></path></svg>
      </a>
      <a href="https://www.youtube.com/user/toiyeuchibi" title="Me on YouTube" style="color: #ff0000;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.17 13.6" class="d-block" height="16"><path d="M18.77 2.13A2.4 2.4 0 0 0 17.09.42C15.59 0 9.58 0 9.58 0a57.55 57.55 0 0 0-7.5.4A2.49 2.49 0 0 0 .39 2.13 26.27 26.27 0 0 0 0 6.8a26.15 26.15 0 0 0 .39 4.67 2.43 2.43 0 0 0 1.69 1.71c1.52.42 7.5.42 7.5.42a57.69 57.69 0 0 0 7.51-.4 2.4 2.4 0 0 0 1.68-1.71 25.63 25.63 0 0 0 .4-4.67 24 24 0 0 0-.4-4.69zM7.67 9.71V3.89l5 2.91z" fill="currentColor"></path></svg>
      </a>
      <a href="https://www.linkedin.com/in/thanh-hồng-nguyễn-2b90731a0" title="Me on Linkedin" style="color: #0073b1;">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" class="d-block" height="18"><path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z" fill="currentColor"></path></svg>
      </a>
      <a href="https://github.com/nguyenthanhhong" title="Me on Github" style="color: #959da5;">
        <svg height="20" class="octicon octicon-mark-Me d-block" alt="Me" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
      </a>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: 'FooterPanel'
}
</script>
<style scoped>
.cfooter > div {
  font-weight: bold;
  vertical-align: middle;
}
.left-footer {
  text-align:left;
  display: inline-block;
}
.right-footer {
  text-align:right;
  display: inline-block;
}
.social-icon a {
  margin-right: .75em;
}

</style>
