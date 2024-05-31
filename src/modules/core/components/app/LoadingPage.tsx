import React from 'react'
import { Spin } from 'antd'

function LoadingPage() {
  return (
<div style={{height:"80vh", width:"100%" , display:"flex" , justifyContent:"center" , alignItems:"center"}}>
        <Spin/>
    </div>
  )
}

export default LoadingPage