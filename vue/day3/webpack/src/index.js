const Vue = require('./vue');
const vm = new Vue({
  //视图层
  el:'#demo',
  // 数据层
  data:{
    name:'ohhhleg',
    html:`<p>blblblb<b style="color:blue;">233</b></p>`,
    bool:8,
    arr:[{
      name:'zhang',
      id:1,
      skill:['sing']
    },{
      name:'zhuang',
      id:2,
      skill:['rap']
    },{
      name:'zhan',
      id:3,
      skill:['ball']
    }],
    url:'https://avatars2.githubusercontent.com/u/48085105?s=460&v=4',
    isB:true,
    isC:false,
    classA:'classA',
    size:88
  },
  //模板
  template:`
  <div>
    <p>{{name}}</P>
    <p v-text="name"></p>
    <div v-html="html"></div>
    <div v-show="0">显示或隐藏</div>
    <hr/>
    <div v-if="bool>10">A</div>
    <div v-else-if="bool<9">B</div>
    <div v-else>C</div>
    <hr/>
    <ul>
      <li v-for="item in arr" v-if="item.name==='zhang'">
        <p v-text="item.name"></p>
        <p v-for="s in item.skill" v-text="s"></p>
      </li>
    </ul>
    <hr/>
    <button v-on:click="test2()">test</button>
    <button v-on:click="test(1)">test(带参数)</button>
    <input @keyup.13="onEnter">
    <hr/>
    <img v-bind:src="url" v-bind:name="name"/>
    <p :class="[classA,{classB:isB,classC:isC}]">class指令</p>
    <p :style="{
      fontSize:size+'px'
    }">abc</p>
    <hr/>
    <input v-model="name"/>
  </div>
  `,
  methods:{
    test(num){
      // 把M层里面name改为zhan,由于M变，V会跟着变
      vm.name='zhan'
      console.log(num);
    },
    test2(){
      vm.name='zhang'
      console.log(2);
    },
    //回车键触发
    onEnter(){
      console.log('input');
    }
  }
})
console.log(vm);