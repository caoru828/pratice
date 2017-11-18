<template>
  <div class="footer">
    <ul>
      <li>电影</li>
      <li>音乐</li>
      <li>图书</li>
      <li>头条</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer{
    height:1rem;
    background: rgb(33,150,243);
    color:#fff;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
  .footer ul{
    display:flex;
  }
  .footer li{
    text-align: center;
    line-height: 1rem;
    flex: 1;
  }
  /*.header btton*/
</style>
