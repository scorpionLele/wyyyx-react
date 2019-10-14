import React, { Component } from 'react'
import { connect } from "react-redux";

import "./tenthFloor.less";
class TenthFloor extends Component {
  render() {
    const zhongchouList = this.props.zhongchouList || []
    return (
      <div className="tenth-floor">
        <header className="tenth-floor-header">
          <div className="header-left">众筹</div>
          <div className="header-right">
            <span>更多</span>
            <i className="more"></i>
          </div>
        </header>
        <div className="tenth-floor-content">
          {
            zhongchouList.map((item,index)=>{
              return (
                <div className="content-item" key={index}>
                  <div className="item-left">
                    <img src={item.picUrl} alt="" />
                  </div>
                  <div className="item-right">
                    <p>{item.name}</p>
                    <p>￥{item.retailPrice}<span>起</span></p>
                    <p>{item.progress}%</p>
                    <p>{item.supportNum}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    zhongchouList: state.zhongchouList
  })
)(TenthFloor)