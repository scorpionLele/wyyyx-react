import React, { Component } from 'react'

import "./sixthFloor.less";
export default class SixthFloor extends Component {
  render() {
    return (
      <div className="sixth-flooor">
        <header className="sixth-floor-header">类目热销榜</header>
        <div className="sixth-floor-content">
          <div className="content-top">
            <div className="hot-sale">
              <div className="text">
                <span>热销榜</span>
              </div>
              <div className="img">
                <img src="//yanxuan-item.nosdn.127.net/5e2f6eff4922907b455a61b11f3552b6.png?imageView&quality=65&thumbnail=200x200" alt=""/>
              </div>
            </div>
            <div className="good-reputation">
              <div className="text">
                <span>好评榜</span>
              </div>
              <div className="img">
                <img src="//yanxuan-item.nosdn.127.net/c77c0c4492ee96c2ea602026c23e44c0.png?imageView&quality=65&thumbnail=200x200" alt="" />
              </div>
            </div>
          </div>
          <div className="content-list">
            <div className="content-item">
              <h2 className="item-title">居家生活榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/c0b3d87a8066b33c68294ce60f8e1920.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">美食酒水榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/ab5d901ca96b82797a5ca9d6809e88ee.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">服饰鞋包榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/e37656ecad9a2494f456e222fe7800a2.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">个护清洁榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/1547946fa7c422e88dcc6950ffa7586a.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">数码家电榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">母婴亲子榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/74662d24f6d217b520178c5a6d031457.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">运动旅行榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/a9d6de39ab17ab82d5424205dafc4136.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
            <div className="content-item">
              <h2 className="item-title">全球特色榜</h2>
              <img src="//yanxuan-item.nosdn.127.net/72eb76506fb94adce584c74b930a6a92.png?imageView&quality=65&thumbnail=200x200" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
