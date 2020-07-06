<template>
  <div>
    <h1>vue2-google-maps Example</h1>
    <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 100%; height: 350px"
    />
    </div>
</template>
