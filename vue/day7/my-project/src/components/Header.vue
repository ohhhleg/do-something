<template>
  <!-- V -->
  <header :style="{
    backgroundColor:this.color
    }">
      <div class="leftIcon">
      <img :src="Ham" />
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="rightIcon">
      <img :src="Search" />
    </div>
  </header>
</template>

<script>
import Ham from "../assets/ham.png";
import Search from "../assets/search.png";
export default {
  // 来自父组件，配合props，右父组件决定子组件呈现不同的状态
  props:["title","color","status"],
  // 选项 M
  data() {
    return {
      // title: "头部组件",
      // 头部图标
      Ham,
      Search
    };
  }
};
</script>

<style lang="scss">
$height:50px;
header {
  text-align: center;
  line-height: $height;
  width: 100%;
  height: $height;
  color: white;
  background-color: red;
  display: flex;
  .leftIcon{
    flex: 1;
    img{
      width: 18px;
    }
  }
  .title{
    flex:1;
  }
  .rightIcon{
    flex: 1;
    img{
      width: 18px;
    }
  }
}
</style>
