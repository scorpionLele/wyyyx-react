import React, { Component } from 'react'

import './fifthFloor.less'
export default class FifthFloor extends Component {
  render() {
    return (
      <div className="fifth-floor">
    <header className="fifth-floor-header">
      <div className="header-left">人气推荐</div>
      <div className="header-right">
        <span>更多</span>
        <i className="more"></i>
      </div>
    </header>
    <div className="fifth-floor-content">
      <div className="contetn-left">
        <img src="https://yanxuan-item.nosdn.127.net/a29e50a8f4286ca54d696e7d6bc10afd.png?imageView&quality=65&thumbnail=280x280" alt=""/>
      </div>
      <div className="content-right">
        <p className="name">95%白鹅绒保暖羽绒被 升dshkjhdhf</p>
        <p className="sales">热销5万+条，洁净舒软好睡眠</p>
        <p className="price">￥1149</p>
      </div>
    </div>
    <div className="fifth-floor-list">
      <div className="fifth-floor-item">
        <img src="https://yanxuan-item.nosdn.127.net/953c5a0ab6660507ee3bf3ce3e46936c.png?imageView&quality=65&thumbnail=330x330" alt="" />
        <div className="intro">
          <span className="describe">3D透气高端弹簧床垫</span>
          <span className="product-price">￥3899</span>
          
        </div>
      </div>
      <div className="fifth-floor-item">
        <img src="https://yanxuan-item.nosdn.127.net/5da3f661a64783610bcce622be6d1b5c.png?imageView&quality=65&thumbnail=330x330" alt="" />
        <div className="intro">
          <span className="describe">保温电水壶 无缝内丹</span>
          <span className="product-price">￥109</span>
          <div className="special">
            <p>明星产品日</p>
          </div>
        </div>
      </div>
      <div className="fifth-floor-item">
        <img src="https://yanxuan-item.nosdn.127.net/a4be1322e134973cbe5154db1f3a78c1.png?imageView&quality=65&thumbnail=330x330" alt="" />
        <div className="intro">
          <span className="describe">网易游戏热爱者胸包/斜挎包</span>
          <span className="product-price">￥59</span>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
