import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header/Header.js'
// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(
//     <h1>ding.ohhhleg</h1>,
//     document.getElementById('root'),
// );


// const name ='ohhhleg';
// const zz =<p>hello,{name}</p>;
// ReactDOM.render(
//     zz,
//     document.getElementById('root') 
// );


// 1.1 hello world
// ReactDOM.render(
//     React.createElement('div',null,"hello ohhhleg"),
//     document.getElementById('root')
// );

// 1.2
// const hello =<div>hello ohhhleg</div>
// ReactDOM.render(
//     hello,
//     document.getElementById('root')
// )

// 1.3 绑定M层数据
// const data={
//     name:'ohhhleg',
//     num:20
// }
// const hello =<div>try me,{data.name}</div>
// ReactDOM.render(
//     hello,
//     document.getElementById('root'),
// );


// JSX语法
// <JSX></JSX>等价于{JSX()}，组件的本质函数 
// const methods={
//     //过滤器 
//     currency(num){
//         return `$${num}`
//     }
// }
// const data={
//     name:'ohhhleg',
//     num:20,
//     bool:!0
// }

/*支持三元表达式*/
// const hello=<div>
//     <p>try me,{data.name}</p>
//     <p>{methods.currency(data.num)}</p>
//     <p>{methods.currency(233)}</p>
//     <p>{data.bool?'真真':'假假'}</p>
// </div>
// ReactDOM.render(hello,document.getElementById('root'))

/*支持函数式编程*/
// const Hello = () => {
//     const methods = {
//         //过滤器
//         currency(num) {
//             return `￥${num}`
//         },
//         rif(bool) {
//             return bool ? <p>真正的</p> : <p>虚假的</p>
//         },
//         rfor(arr) {
//             return arr.map((item, index) => {
//                 return <li key={index}>{item}</li>
//             })
//         }
//     }

// const data={
//     name:'ohhhleg',
//     num:20,
//     bool:!0,
//     arr:[1,2,3]
// }
// return(
//     <div>
//         <p name={data.name}>{data.name}</p>
//         <p className={data.num}>{methods.currency(data.num)}</p>
//         <p>{methods.currency(233)}</p>
//         <p>{data.bool ? '真真':'假假'}</p>
//         <div>{methods.rif(data.bool)}</div>
//         <div>{(()=>{
//             let name= 'cheung';
//             return `${name}zz`
//         })()}</div>
//         <ul>
//             {methods.rfor(data.arr)}
//         </ul>
//     </div>
// )
// }
// ReactDOM.render(
//     <Hello></Hello>,
//     document.getElementById('root'),
// );


//组件

ReactDOM.render(
    <div>
        {/* {Header()} */}
        <Header />
    </div>,
    document.getElementById('root'),
);
