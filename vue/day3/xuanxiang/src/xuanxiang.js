const Vue = require('./vue');
const vm = new Vue({
  //视图层
  el:'#demo',
  // 数据层
  data:{
    arr:['b1','b2','b3','b4'],
    arr2:['xx1','xx2','xx3','xx4'],
    num:0
  },
   //模板
   template:`
   <div>
    <button v-for="(item,index) in arr" v-text="item" v-on:click="dd(index)" :class></button>
    <div v-for="(item,index) in arr2" v-text="item" v-show="num==index"></div>
   </div>`,
   methods:{
     dd(index){
       this.num=index;
     }
   }
})
console.log(vm);