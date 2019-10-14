import React, { Component } from 'react'

import './enghthFloor.less'
export default class EnghthFloor extends Component {
  render() {
    return (
      <div className="enghth-floor">
        <header className="enghth-floor-header">
          <div className="header-left">品牌制造商直供</div>
          <div className="header-right">
            <span>更多</span>
            <i className="more"></i>
          </div>
        </header>
        <div className="enghth-floor-content">
          <span className="content-item">
            <h2>海外制造商</h2>
            <p>9.9元起<span>上新</span></p>
          </span>
          <span className="content-item">
            <h2>CK造商</h2>
            <p>29.9元起</p>
          </span>
          <span className="content-item">
            <h2>新秀丽制造商</h2>
            <p>159元起</p>
          </span>
          <span className="content-item">
            <h2>Armani制造商</h2>
            <p>199元起</p>
          </span>
        </div>
      </div>
    )
  }
}
