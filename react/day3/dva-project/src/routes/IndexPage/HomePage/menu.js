import {Icon} from 'antd';
export default [
    {
        key: 'sub1',
        title: <span><Icon type="user" />subnav 1</span>,
        options: [{
            key: 1,
            title: '匿名投诉',
            url: '/home/complaint'
        },
        {
            key: 2,
            title: '技术问题',
            url: '/home/problem'
        },
        {
            key: 3,
            title: '项目上传',
            url: 'itemupload'
        },
        {
            key: 4,
            title: 'VIP',
            url: 'vip'
        }]
    },
    {
        key: 'sub2',
        title: <span><Icon type="laptop" />subnav 2</span>,
        options: [{
            key: 5,
            title: '匿名投诉',
            url: '/home/complaint'
        },
        {
            key: 6,
            title: '技术问题',
            url: '/home/problem'
        },
        {
            key: 7,
            title: '项目上传',
            url: 'itemupload'
        },
        {
            key: 8,
            title: 'VIP',
            url: 'vip'
        }]
    },
    {
        key: 'sub3',
        title: <span><Icon type="notification" />subnav 3</span>,
        options: [{
            key: 9,
            title: '匿名投诉',
            url: '/home/complaint'
        },
        {
            key: 10,
            title: '技术问题',
            url: '/home/problem'
        },
        {
            key: 11,
            title: '项目上传',
            url: 'itemupload'
        },
        {
            key: 12,
            title: 'VIP',
            url: 'vip'
        }]
    },
]