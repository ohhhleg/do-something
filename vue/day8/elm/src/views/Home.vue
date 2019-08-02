<template>
  <div>
    <!-- 搭配弹出层的地址选择器 -->
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- 搜索框 -->
    <van-search
      v-model="value1"
      placeholder="搜索饿了么商家、商品名称"
      show-action
      shape="round"
      @search="onSearch"
    >
      <div slot="label"
        v-text="value2"
        @click="showPicker = true"></div>
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <!-- 宫格 -->
    <van-grid :column-num="5">
        <van-grid-item 
        v-for="(e,index) in entriesComputed" 
        :to="`/detail/${index}/ohhhleg`"
        :key="index" 
        :icon="e.icon" 
        :text="e.name" />
    </van-grid>
    <!-- 分隔线 -->
    <van-divider :style="{padding: '0 33px' }">推荐商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value" :options="menu|handleMenu" />
    </van-dropdown-menu>

    <!-- 索引栏 -->
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <!-- <van-tabbar-item icon="setting-o">标签</van-tabbar-item> -->
  </van-tabbar>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        value1: '',
        active: 0,
        //宫格
        entries: [],
        //下拉菜单
        value: 0,
        menu: [],
        //弹出层和选择器
        value2: '广州',
        showPicker: false,
        columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
      };
    },
    computed: {
      entriesComputed() {
        return this.entries.slice(0, 10);
      }
    },
    async created() {
      //获取宫格数据
      let entries = await this.$axios(
        "https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/gongge"
      );

      this.entries = entries.data[0].entries;
      // console.log(entries.data[0].entries);

      //获取下拉菜单数据
      let menu = await this.$axios(
        "https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/nav"
      );

      this.menu = menu.data.outside.inside_sort_filter;
      // console.log(menu.data.outside.inside_sort_filter);

    },
    // 过滤器
    filters: {
      handleMenu(menu) {
        //   console.log(menu);
        let newMenu = [];
        menu.forEach(element => {
          //  往对象里面新增一个text属性值
          element.text = element.name;
          //   element.value;
          //新生成一个数组
          newMenu.push(element);
          //   console.log(element);              
        });
        return newMenu;
      }
    },
    methods: {
       onSearch() {},
      onConfirm(value2) {
        this.value2 = value2;
        this.showPicker = false;
      }
    }
  }
</script>
