import React, { Component } from 'react'
import { connect } from "react-redux";
import BScroll from '@better-scroll/core';

import './ninthFloor.less'
class NinthFloor extends Component {
  componentDidUpdate (){
    new BScroll('.scrollWrapper',{
      click:true,
      scrollX:true
    })
  }
  render() {
    const topicList = this.props.topicList || []
    return (
      <div className="ninth-floor">
        <header className="ninth-floor-header">
          <div className="header-left">专题精选</div>
          <div className="header-right">
            <span>更多</span>
            <i className="more"></i>
          </div>
        </header>
        <div className="ninth-floor-content">
          <div className="scrollWrapper">
            <ul className="content-list">
              {
                topicList.map((item,index)=>{
                  return (
                    <li className="content-item" key={index}>
                      <img src={item.itemPicUrl} alt="" />
                      <p>{item.title}</p>
                      <span>{item.subtitle}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    topicList: state.topicList
  })
)(NinthFloor)