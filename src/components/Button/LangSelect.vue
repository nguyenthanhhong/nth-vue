<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div>
      <img v-if="langImg ? false : true" src="../../assets/img/vietnam-flag.png" class="user-avatar">
      <img v-else :src="require('@/assets/img/' + langImg)" class="user-avatar">
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="item of langOptions" :key="item.id" :disabled="language===item.value" :command="item">
        <img :src="require('@/assets/img/' + item.img)">
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'LangSelect',
  data() {
    return {
      langOptions: [
        { id: 1, label: 'Việt Nam', value: 'vi', img: 'vietnam-flag.png' },
        { id: 2, label: 'English', value: 'en', img: 'united-kingdom-flag.png' },
        { id: 3, label: 'Español', value: 'es', img: 'spain-flag.png' },
        { id: 4, label: '日本語', value: 'ja', img: 'japan-flag.png' }
      ],
      langImg: null
    }
  },
  computed: {
    language() {
      return this.$store.getters.language
    }
  },
  mounted: function() {
    this.langImg = this.langOptions.filter(el => el.value == this.language)[0].img
  },
  methods: {
    handleSetLanguage(lang) {
      this.langImg = lang.img
      this.$i18n.locale = lang.value
      this.$store.dispatch('setLanguage', lang.value)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
