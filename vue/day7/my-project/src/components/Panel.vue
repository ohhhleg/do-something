<template>
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
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            // M,来自数据库
            news:[]
        };
    },
    methods:{
        // 触发Ajax请求去后端获取数据
        async getNews(){
            // 本地服务器
            // let data = await axios.get("http://localhost:3000/list/news");
            
            // 测试服务器
            let data = await axios.get(
                "https://www.easy-mock.com/mock/5a253821420a172ca90d034a/example/list"
            );
            console.log(data.data.data.shopList);
            //把请求后端来的数据装载到M的news属性
            // this.news = this.news.concat(data.data.data.shopList);
            this.news = [...this.news, ...data.data.data.shopList];
        }
    },
    created(){
        //组件在初始化数据后，执行一个Ajax请求去后端获取数据
        this.getNews();
    },
    mounted(){
        window.onscroll=()=>{
            console.log(window.scrollY);
        };
    },
    destoryed(){
        window.onscroll=null;
    }
};
</script>
