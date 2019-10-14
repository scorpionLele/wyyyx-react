import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

import './twelfthFloor.less'
export default class TwelfthFloor extends Component {
  componentDidMount (){
    new BScroll('.scroll-wrapper', {
      click: true,
      scrollX: true
    })
  }
  render() {
    return (
      <div className="twelfth-floor">
        <div className="twelfth-floor-content">
          <div className="scroll-wrapper">
            <div className="content-list">
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/d852148f64c98b810ffa9ece9b5506a4.png?imageView&quality=65&thumbnail=330x330" alt=""/>
                <div className="product-intro">
                  <p className="product-name">女士极简牛皮托特包</p>
                  <span className="product-price">￥287<i>￥399</i></span>
                  <div className="special">
                    <p>限时购</p>
                  </div>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/ab5d901ca96b82797a5ca9d6809e88ee.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">轻保暖</p>
                  <span className="product-price">￥263<i>￥299</i></span>
                  <div className="special">
                    <p>限时购</p>
                  </div>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/d3d966a23f335df1bb02cdd17c63d97e.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">男士基础修身牛仔裤</p>
                  <span className="product-price">￥99.9</span>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/f21ed997c7b8eab8119045545b082eef.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">男士法兰绒经典居家套装</p>
                  <span className="product-price">￥229</span>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/58e7ef289596f73c597459fd69f26b5f.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">男士基础合体直筒休闲裤</p>
                  <span className="product-price">￥99.9</span>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/da516fbd9c0091be5a89c62159cbcb58.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">可机洗系列 女士半高领100%羊毛衫</p>
                  <span className="product-price">￥249</span>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/f05f259cbe425b93fb924bf60fca5bbf.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">女士舒软马蹄扣乐福鞋</p>
                  <span className="product-price">￥269</span>
                </div>
              </div>
              <div className="content-item">
                <img src="https://yanxuan-item.nosdn.127.net/c9a1ba4ab3875b78d1ef0ef1b3a4550c.png?imageView&quality=65&thumbnail=330x330" alt="" />
                <div className="product-intro">
                  <p className="product-name">男士HEATEASE轻保暖 (上衣/裤...</p>
                  <span className="product-price">￥99</span>
                </div>
              </div>
              <div className="see-more">查看更多></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
