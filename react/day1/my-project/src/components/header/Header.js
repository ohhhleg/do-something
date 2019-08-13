//头部组件
import React from 'react'
import Left from './Left.js'
import Right from './Right.js'


const Header =()=>{
    const methods = {
        // 过滤器
        rIf(ZZ) {
            return ZZ ? <Left/> : <Right/>
        }
    }
    const data = {
            ham: true,
            back:false,
            header:false
        }
    return(
        // <header className="header">{methods.rIf(data.ham)}</header>
        <header className="header">
            {data.header?"头头头":"今日头条"}
            {methods.rIf(data.ham)}
            {methods.rIf(data.back)}
         
        </header>

    );
}

export default Header
