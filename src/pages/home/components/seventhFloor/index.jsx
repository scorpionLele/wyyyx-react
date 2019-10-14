import React, { Component } from 'react'

import './seventhFloor.less'
export default class SeventhFloor extends Component {
  render() {
    return (
      <div className="seventh-floor">
        <ul className="seventh-floor-list">
          <li className="seventh-floor-item">
            <p>福利社</p>
            <p>抢超值神券</p>
            <span>享今日特价</span>
          </li>
          <li className="seventh-floor-item">
            <p>严选一起拼</p>
            <p>超值1元团</p>
            <span>全场包邮</span>
          </li>
          <li className="seventh-floor-item">
            <p>会员俱乐部</p>
            <p>领取每月礼券</p>
          </li>
          <li className="seventh-floor-item">
            <p>积分兑换</p>
            <p>限时限量0元兑</p>
          </li>
        </ul>
      </div>
    )
  }
}
