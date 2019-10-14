import React, { Component } from 'react'
import { withRouter,NavLink } from "react-router-dom";

import './footer.less'

class Footer extends Component {
  handleActive (event){
    console.log(event.target)
  }
  render() {
    return (
      <div id="footer">
        <div className="footer-list">
          <NavLink to='/home' className="footer-item">
            <i className="icon"></i>
            <span>首页</span>
          </NavLink>
          <NavLink to='/category' className="footer-item">
            <i className="icon"></i>
            <span>分类</span>
          </NavLink>
          <NavLink to='/goods' className="footer-item">
            <i className="icon"></i>
            <span>识物</span>
          </NavLink>
          <NavLink to='/shopCart' className="footer-item">
            <i className="icon"></i>
            <span>购物车</span>
          </NavLink>
          <NavLink to='/personal' className="footer-item">
            <i className="icon"></i>
            <span>个人</span>
          </NavLink>
        </div>
      </div>
    )
  }
}
export default withRouter(Footer)