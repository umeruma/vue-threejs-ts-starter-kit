<template>
  <span class="home">
  </span>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  mounted() {
    console.log('Home mounted')
  }
}
</script>

<style lang="home">
/* .component {
} */
</style>
