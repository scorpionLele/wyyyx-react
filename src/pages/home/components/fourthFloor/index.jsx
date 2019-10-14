import React, { Component } from 'react'


import './fourthFloor.less'
export default class FourthFloor extends Component {
  render() {
    return (
      <div className="fourth-floor">
        <header className="fourth-floor-header">
          <div className="header-left">新品首发</div>
          <div className="header-right">
            <span>更多</span>
            <i className="more"></i>
          </div>
        </header>
        <div className="content-list">
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/7445b82d93f84828e41f45559f2d31b1.png?imageView&quality=65&thumbnail=330x330" alt=""/>
            <div className="product-intro">
              <span className="product-name">女士弹力显瘦过膝长靴</span>
              <span className="product-price">￥499</span>
              <div className="new">
                <p>新品尝鲜价</p>
              </div>
            </div>
          </div>
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/a8eea196aa7c107b2814cfa2976caec6.png?imageView&quality=65&thumbnail=330x330" alt="" />
            <div className="product-intro">
              <span className="product-name">女士荔纹牛皮英伦马丁靴</span>
              <span className="product-price">￥399</span>
            </div>
          </div>
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/273daf6a11ebf11a6c4ebe5b449deb2f.png?imageView&quality=65&thumbnail=330x330" alt="" />
            <div className="product-intro">
              <span className="product-name">地表强温 男士毛领鹅绒羽绒</span>
              <span className="product-price">￥1299</span>
            </div>
          </div>
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/0d7f0028d1cb07ef67f2a865cbe9dbe6.png?imageView&quality=65&thumbnail=330x330" alt="" />
            <div className="product-intro">
              <span className="product-name">女士加绒皮毛一体乐福鞋</span>
              <span className="product-price">￥299</span>
            </div>
          </div>
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/ff2b35fc5025fc737e8a5f79206604bf.png?imageView&quality=65&thumbnail=330x330" alt="" />
            <div className="product-intro">
              <span className="product-name">衣物除螨除菌液1L/3L</span>
              <span className="product-price">￥59.9</span>
            </div>
          </div>
          <div className="content-item">
            <img src="https://yanxuan-item.nosdn.127.net/54e9c325ef69dfead72bdb6859feb2f3.png?imageView&quality=65&thumbnail=330x330" alt="" />
            <div className="product-intro">
              <span className="product-name">地表强温 女士收腰派克大毛</span>
              <span className="product-price">￥1099</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
