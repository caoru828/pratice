<template>
  <div class="movie">
    <Common-header></Common-header>
    <Nav></Nav>
    <div class="list">
      <List v-for="obj in movieList" :title="obj.title" :year="obj.year"
            :avg = "obj.avg" :desc = "obj.desc"></List>
    </div>
    <Common-footer></Common-footer>
  </div>
</template>
<script>
  import CommonHeader from "../common/CommonHeader.vue"
  import CommonFooter from "../common/CommonFooter.vue"
  import Nav from "./nav.vue"
  import List from "./list.vue"
  export default {
    name: 'HelloWorld',
    data () {
      return {
        movieList:[
          {
            title: "霸王别姬",
            year : 1994,
            avg  : 9.6,
            desc : [
              "同性",
              "爱情",
              "悬疑"
            ]
          },
          {
            title: "正义联盟",
            year : 2017,
            avg  : 0.0,
            desc : [
              "同性",
              "打片",
            ]
          },
          {
            title: "唯创网讯",
            year : 2012,
            avg  : 100,
            desc : [
              "教育",
              "IT",
              "惊悚"
            ]
          }
        ]
      }
    },
  mounted(){
      Axios.get()
  }
  ,
  components:{
    CommonHeader,
    Nav,
    CommonFooter,
    List
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .list{
    margin-top: 2rem;
  }
  /*.header btton*/
</style>
