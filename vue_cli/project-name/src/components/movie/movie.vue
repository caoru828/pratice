<template>
  <div class="movie">
    <Common-header></Common-header>
    <Nav></Nav>
    <Common-footer></Common-footer>
  </div>
</template>

<script>
  import CommonHeader from "../common/CommonHeader.vue"
  import CommonFooter from "../common/CommonFooter.vue"
  import Nav from "./nav.vue"
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
  components:{
    CommonHeader,
    Nav,
    CommonFooter,

  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*.header btton*/
</style>
