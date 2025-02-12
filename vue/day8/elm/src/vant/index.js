import Vue from 'vue';

//选择器
import { Picker } from 'vant';

import { Field } from 'vant';
//弹出层
import { Popup } from 'vant';

//第三方
//搜索
import {
    Search
} from 'vant';

//宫格
import {
    Grid,
    GridItem
} from 'vant';

//分隔线
import {
    Divider
} from 'vant';

// 下拉菜单
import {
    DropdownMenu,
    DropdownItem
} from 'vant';

//索引栏
import {
    Tabbar,
    TabbarItem
} from 'vant';

export default () => {
    Vue.use(Picker);
    Vue.use(Popup);
    Vue.use(Field);
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
}