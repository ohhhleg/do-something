<template>
  <div>
    <header class="index-JMUSj_0">
      <div class="index-1DPx9_0">
        <div aria-label="当前地址：广州市人民政府，轻点两下重新选择" role="button" class="index-2S5Ah_0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31" class="index-okfdP_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            />
          </svg>
          <span class="index-2uW_v_0">广州市人民政府</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" class="index-2iXz3_0">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
            />
          </svg>
        </div>
      </div>
    </header>
    <!-- 搜索框 -->
    <van-search
      class="search"
      input-align="center"
      placeholder="搜索饿了么商家、商品名称"
      v-model="value1"
      background="#0af"
    />
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(e,index) in entriesComputed"
        :key="index"
        :icon="e.icon"
        :text="e.name"
      />
    </van-grid>
    <!-- 分隔线 -->
    <van-divider :style="{padding: '0 33px' }">推荐商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value" :options="menu|handleMenu" />
    </van-dropdown-menu>

    <!-- 商家 -->
    <div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <a
              v-for="(n,index) in news"
              :key="index" 
              href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg"
            >
                <div class="weui-media-box__hd">
                    <img class="weui-media-box__thumb"
                    :src="n.picUrl" alt />
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title" v-text="n.shopName"></h4>
                    <p class="weui-media-box__desc" v-text="`${n.shipping_time}`"></p>
                </div>
            </a>
        </div>
        <div @click="getNews" class="weui-panel__ft">
            <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                <div class="weui-cell__bd">查看更多</div>
                <span class="weui-cell__ft"></span>
            </a>
        </div>
    </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      value1:'',
      //宫格
      entries: [],
      //下拉菜单
      value:0,
      menu:[],

      // 商家
      news:[]
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
  
    this.getNews();
  },
    // 过滤器
  filters:{
      handleMenu(menu){
        //   console.log(menu);
          let newMenu=[];
          menu.forEach((element,index) => {
            //  往对象里面新增一个text属性值
              element.text=element.name;
            //   element.value;
              //新生成一个数组
              newMenu.push(element);
            //   console.log(element);              
          });
          return newMenu;
      }
  },


  methods:{
        // 触发Ajax请求去后端获取数据
        async getNews(){
            let data = await this.$axios(
                "https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/list"
            );
            // console.log(data.data.data.shopList);
            this.news = [...this.news, ...data.data.data.shopList];
        }
    },

    mounted(){
        window.onscroll=()=>{
            // console.log(window.scrollY);
        };
    },
    destoryed(){
        window.onscroll=null;
    }
};
</script>



<style>
.search {
  background: linear-gradient(90deg, #0af, #0085ff);
}
</style>