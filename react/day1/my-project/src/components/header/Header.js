//头部组件
import React from 'react'
const Header =(props)=>{
    // const methods = {
    //     // 过滤器
    //     rIf(ham) {
    //         return ham ? <p>这是props.title</p> : <p>这是假的</p>
    //     }
    // }
    // const data = {
    //         ham: true,
    //         back:false
    //     }
    return(
        // <header className="header">{methods.rIf(data.ham)}</header>
        <header className="header">{props?props.title:"今日头条"}</header>

    );
}

export default Header
