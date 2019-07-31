<template>
  <div id="app">
    <Header/>
    <Search />
    <Panel/>
    <Tabbar />
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Search from './components/Search.vue'
  import Panel from './components/Panel.vue'
  import Tabbar from './components/Tabbar.vue'


  export default {
    name: 'app',
    components: {
      Header,
      Search,
      Panel,
      Tabbar
    }
  }
</script>

<style>

</style>