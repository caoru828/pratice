<template>
  <div class="nav">
    <ul>
      <li>top250</li>
      <li>正在热映</li>
      <li>即将上映</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
//        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    height:1rem;
    background: rgb(33,150,243);
    color:#fff;
    width: 100%;
    position: fixed;
    top: 1rem;
  }
  .nav ul{
    display:flex;
  }
  .nav li{
    text-align: center;
    line-height: 1rem;
    flex: 1;
  }

  /*.header btton*/
</style>
