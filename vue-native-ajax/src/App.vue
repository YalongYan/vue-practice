<template>
  <div id="app">
      <span class="link-item">
        <router-link to="/demo1">beforeCreate</router-link>
      </span>    
      <span class="link-item">
        <router-link to="/demo2">挂载</router-link>
      </span>
      <div class="router-ctn">
        <router-view></router-view>
      </div>
  </div>
</template> 

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app{
  text-align: center;
  padding-top: 30px;

  .link-item{
    margin-left: 20px;
  }
  .router-ctn{
    margin: 30px auto;
  }
}
</style>