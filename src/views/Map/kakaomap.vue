<template>
  <div>
    <h1>Kakao maps Example</h1>
    <vue-daum-map
      :appKey="appKey"
      :center.sync="center"
      :level.sync="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      style="width:100%;height:400px;"/>
    </div>
</template>
<script>
import VueDaumMap from 'vue-daum-map'
export default {
    components: {
        VueDaumMap
    },
    data: () => ({
        appKey: '6cc0a86b454d41bb44da681aaa628363', // 테스트용 appkey
        center: {lat:33.450701, lng:126.570667}, // 지도의 중심 좌표
        level: 3, // 지도의 레벨(확대, 축소 정도),
        mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
        libraries: [], // 추가로 불러올 라이브러리
        map: null // 지도 객체. 지도가 로드되면 할당됨.
    }),
    methods: {
        // 지도가 로드 완료되면 load 이벤트 발생
        onLoad (map) {
            this.map = map
        }
    }
}
</script>