import React, { Component } from 'react'

import './homeFooter.less'
export default class HomeFooter extends Component {
  render() {
    return (
      <div className="home-footer">
        <div className="content">
          <div className="download-type">
            <span className="App">下载APP</span>
            <span className="pc">电脑版</span>
          </div>
          <p className="copyright">网易公司版权所有 @ 1997-2019</p>
          <p className="licence">食品经营许可证：JY1330465465121</p>
        </div>
      </div>
    )
  }
}
