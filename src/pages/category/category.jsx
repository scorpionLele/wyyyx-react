import React, { Component } from 'react'
import { connect } from "react-redux";
import BScroll from '@better-scroll/core'

import './category.less'
import CategoryDetail from "./categoryDetail";
import { getCategoryData } from "../../redux/actions";

class Category extends Component {
  state = {
    currentIndex:0
  }
  changeCategory = (index) => {
    this.setState({
      currentIndex:index
    })
  }
  componentDidMount (){
    this.props.getCategoryData()
  }
  componentDidUpdate (){
    if (!this.categoryListScroll){
      this.categoryListScroll = new BScroll('.list-wrapper', {
        click: true
      })
    }
  }
  render() {
    const categorys = this.props.categorys || []
    const {currentIndex} = this.state
    const category = categorys[currentIndex] || {}
    return (
      <div className="category">
        <div className="category-container">
          <header className="header">
            <div className="search">
              <i></i>
              <span>搜索商品,共23098款好物</span>
            </div>
          </header>
          <div className="content">
            <div className="list-wrapper">
              <ul className="category-list">
                {
                  categorys.map((category,index)=>{
                    return (
                      <li className={currentIndex === index ? "category-item active" : "category-item"} key={index} onClick={() => this.changeCategory(index)}>{category.name}</li>
                    )
                  })
                }
              </ul>
            </div>
            <CategoryDetail category={category}></CategoryDetail>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    categorys : state.categorys
  }),
  { getCategoryData}
)(Category)