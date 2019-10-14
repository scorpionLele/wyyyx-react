import React, { Component } from 'react'
import { connect } from "react-redux";
import BScroll from '@better-scroll/core';
import Swiper from "swiper"
import "swiper/css/swiper.min.css"

import './home.less'
import { showMask } from "../../redux/actions";
import FirstFloor from "./components/firstFloor";
import SecendFloor from "./components/secendFloor";
import ThirdFloor from "./components/thirdFloor";
import FourthFloor from "./components/fourthFloor";
import FifthFloor from "./components/fifthFloor";
import SixthFloor from "./components/sixthFloor";
import SeventhFloor from "./components/seventhFloor";
import EnghthFloor from "./components/ehghthFloor";
import NinthFloor from "./components/ninthFloor";
import TenthFloor from "./components/tenthFloor";
import EleventhFloor from "./components/eleventhFloor";
import TwelfthFloor from "./components/twelfthFloor";
import HomeFooter from "./components/homeFooter";

class Home extends Component {
  constructor (props){
    super(props)
    this.navRef = React.createRef()
  }
  state = {
    currentIndex:0
  }
  
  showMenu = (flag) => {
    this.props.showMask(flag)
  }
  handleActive = (index) => {
    this.setState({
      currentIndex:index
    })
    const x = 44 + 10 * index + 72 * (index - 1)
    this.navScroll.scrollTo(-x)
  }
  componentDidMount (){
    new Swiper('.home-swiper-container', {
      loop: true,
      autoplay: true,
      pagination: {
        el: '.home-swiper-pagination'
      }
    })
  }
  componentDidUpdate() {
    if (!this.navScroll){
      this.navScroll = new BScroll(this.navRef.current, {
        click: true,
        scrollX: true
      })
    }
  }
  render() {
    const kingKongModule = this.props.homeData.kingKongModule || {}
    const policyDescList = this.props.homeData.policyDescList || []
    const kingKongList = kingKongModule.kingKongList || []
    const { isShowMenu, currentIndex} = this.state
    const {flag} = this.props
    return (
      <div className="home-container">
        <header className="header">
          <div className="logo">
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="logo"/>
          </div>
          <div className="search">
            <i></i>
            <span>搜索商品,共23098款好物</span>
          </div>
          <div className="login">登录</div>
        </header>
        <div className="home-nav">
          <div className="nav-list-wrap" ref={this.navRef}>
            <ul className="nav-list">
              {
                kingKongList.map((item, index) => {
                  return (
                    <li key={index} className={currentIndex === index ? "nav-item active" : "nav-item"} onClick={() => this.handleActive(index)}>{item.text}>
                      <span>{item.text}</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          {
            flag ? 
            <>
              <div className="nav-menu">
                <div className="nav-menu-title">全部频道</div>
                <div className="nav-menu-content">
                  {
                    kingKongList.map((item, index) => {
                      return (
                        <div className={currentIndex === index ? "menu-item active" : "menu-item"} key={index} onClick={() => this.handleActive(index)}>{item.text}</div>
                      )
                    })
                  }
                </div>
              </div>
              {/* <div className="mask"></div> */}
            </>
              :
                null
          }
          <div className="nav-arrows" onClick={() => this.showMenu(!flag)}>
            <i className={isShowMenu ? "arrows scaleArrows" :"arrows"}></i>
          </div >
          <div className="liner"></div>
        </div>
        <div className="swiper-container home-swiper-container">
          <div className="swiper-wrapper home-swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/82adae4b6328461bd427a4305fe430a2.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper1"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/e90ae371955acde303f739d76f3e4423.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper2"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b30bdef77c2244d01e13201f55e72a90.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper3"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/cb5ee6a686edfb4ad4cfde1bf98c0f39.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper4"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/4ad22689fc5007229ec79966f4c539bd.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper5"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/8d2af3ab55bf51d5ac03e5d9c6fa1fc4.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper6"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/05b2d1a7015eca6d61c3c2fdb7ea66b8.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper7"/>
            </div>
            <div className="swiper-slide">
              <img src="https://yanxuan.nosdn.127.net/b3bf1a4bc7970dcd7d7088e8f14bcaa5.jpg?imageView&quality=75&thumbnail=750x0" alt="swiper8"/>
            </div>
          </div>
          <div className="swiper-pagination home-swiper-pagination"></div>
        </div>
        <div className="intro">
          <ul className="intro-list">
            {
              policyDescList.map((policyDesc,index)=>{
                return (
                  <li className="intro-item" key={index}>
                    <i className="intro-icon">
                      <img src={policyDesc.icon} alt=""/>
                    </i>
                    <span>{policyDesc.desc}</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="home-category">
          {
            kingKongList.map((kingKong,index)=>{
              return (
                <div className="home-category-item" key={index}>
                  <img src={kingKong.picUrl} alt=""/>
                  <p>{kingKong.text}</p>
                </div>
              )
            })
          }
        </div>
        <img src="https://yanxuan.nosdn.127.net/9486ff40d0c9379a8056aa87793e5cf4.gif" className="board" alt=""/>
        <FirstFloor></FirstFloor>
        <SecendFloor></SecendFloor>
        <ThirdFloor></ThirdFloor>
        <FourthFloor></FourthFloor>
        <FifthFloor></FifthFloor>
        <SixthFloor></SixthFloor>
        <SeventhFloor></SeventhFloor>
        <EnghthFloor></EnghthFloor>
        <NinthFloor></NinthFloor>
        <TenthFloor></TenthFloor>
        <EleventhFloor></EleventhFloor>
        <TwelfthFloor></TwelfthFloor>
        <HomeFooter></HomeFooter>
      </div>
    )
  }
}
export default connect(
  state=>({
    homeData : state.home,
    flag:state.flag
  }),
  {showMask}
)(Home)