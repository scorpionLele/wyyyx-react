import React, { Component } from 'react'
import PropTypes from "prop-types";
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

import "./categoryDetail.less";
export default class CategoryDetail extends Component {
  static propTypes = {
    category: PropTypes.object
  }
  componentDidUpdate (){
    new Swiper('.detail-swiper-container',{
      loop: true,
      autoplay: true,
      pagination: {
        el: '.detail-swiper-pagination'
      }
    })
  }
  render() {
    const category = this.props.category || {}
    const subCateList = category.subCateList || []
    return (
      <div className="detail-wrapper">
        <div className="category-detail">
          <div className="detail-swiper">
            <div className="swiper-container detail-swiper-container">
              <div className="swiper-wrapper detail-swiper-wrapper">
                <div className="swiper-slide detail-swiper-slide">
                  <img src={category.bannerUrl} alt=""/>
                </div>
                <div className="swiper-slide detail-swiper-slide">
                  <img src={category.wapBannerUrl} alt=""/>
                </div>
              </div>
              <div className="swiper-pagination detail-swiper-pagination"></div>
            </div>
          </div>
          <div className="detail-list">
            <ul>
              {
                subCateList.map((subCate,index)=>{
                  return (
                    <li className="detail--item" key={index}>
                      <img src={subCate.bannerUrl} alt="" />
                      <p>{subCate.name}</p>
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
