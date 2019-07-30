<template>
  <div id="app">
    <!-- <Header/>
    <Search/>
    <Panel/>
    <Tabbar/> -->
    <JRheader/>
    <JRnav/>
    <JRmain/>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Search from './components/Search'
// import Panel from './components/Panel'
// import Tabbar from './components/Tabbar'
import JRheader from './components/JRheader'
import JRnav from './components/JRnav'
import JRmain from './components/JRmain'
import './components/JRTT.css'
export default {
  name: 'app',
  components: {
    JRheader,
    JRnav,
    JRmain
    // Header,
    // Search,
    // Panel,
    // Tabbar
  }
}
</script>

<style>

</style>


