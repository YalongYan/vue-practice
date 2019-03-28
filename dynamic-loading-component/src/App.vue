<template>
  <div id="app">
    <component
      v-for="comp in comps"
      :key="comp.id"
      :is="allComps[comp]">
    </component>
  </div>
</template>

<script>
import allComps from './components/vehicle'
export default {
  name: 'app',
  data () {
    return {
      comps: ['Bus', 'Car', 'Train'],
      allComps: allComps
    }
  }
}
</script>

<style lang="scss">

</style>
