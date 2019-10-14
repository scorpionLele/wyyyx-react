import React, { Component } from 'react'
import _ from "lodash";
import { connect } from "react-redux";
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

import './secendFloor.less'
class SecendFloor extends Component {

  componentDidUpdate (){
    new Swiper('.secend-floor-swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.secend-floor-swiper-pagination'
      }
    })
  }
  render() {
    const personalShop = _.chunk(this.props.personalShop,3) || []
    const firstPage = personalShop[0] || []
    const secendPage = personalShop[1] || []
    const thirdPage = personalShop[2] || []
    const fourthPage = personalShop[3] || []
    return (
      <div className="secend-floor">
        <h2 className="title">私人定制</h2>
        <div className="content">
          <div className="swiper-container secend-floor-swiper-container">
            <div className="swiper-wrapper secend-floor-swiper-wrapper">
              <div className="swiper-slide secend-floor-swiper-slide">
                <ul className="slide-list">
                  {
                    firstPage.map((item,index)=>{
                      return (
                        <li className="slide-item" key={index}>
                          <img src={item.scenePicUrl} alt="" />
                          <p>{item.name}<span>￥{item.retailPrice}</span></p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="swiper-slide secend-floor-swiper-slide">
                <ul className="slide-list">
                  {
                    secendPage.map((item, index) => {
                      return (
                        <li className="slide-item" key={index}>
                          <img src={item.scenePicUrl} alt="" />
                          <p>{item.name}<span>￥{item.retailPrice}</span></p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="swiper-slide secend-floor-swiper-slide">
                <ul className="slide-list">
                  {
                    thirdPage.map((item, index) => {
                      return (
                        <li className="slide-item" key={index}>
                          <img src={item.scenePicUrl} alt="" />
                          <p>{item.name}<span>￥{item.retailPrice}</span></p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="swiper-slide secend-floor-swiper-slide">
                <ul className="slide-list">
                  {
                    fourthPage.map((item, index) => {
                      return (
                        <li className="slide-item" key={index}>
                          <img src={item.scenePicUrl} alt="" />
                          <p>{item.name}<span>￥{item.retailPrice}</span></p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="swiper-pagination secend-floor-swiper-pagination"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    personalShop: state.personalShop
  })
)(SecendFloor)