<template>
  <div>
    <h1>vue2-google-maps Example</h1>
    <p>This example loads the Google Map through vue2-google-maps.</p>
    <p>It won't fully work because now API key is included an should help setting up the package</p>
    <p>Source code at <a href="https://codesandbox.io/s/31j9l75xjm">https://codesandbox.io/s/31j9l75xjm</a></p>
    <p style="margin-bottom:2rem">Questions? Doesn't render the map anymore? Hit me up on Twitter: <a href="http://twitter.com/TheAlexLichter">@TheAlexLichter</a></p>
        <GmapMap
            :center="{lat:10, lng:10}"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px"
        />
    </div>
</template>

<script>

export default {
  methods: {
    goHome() {
      this.$router.push('/index');
    }
  }
}
</script>
