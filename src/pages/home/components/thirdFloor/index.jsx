import React, { Component } from 'react'
import { connect } from "react-redux";

import './thirdFloor.less'
class ThirdFloor extends Component {
  state = {
    hours:0,
    minutes:0,
    seconds:0
  }
  countDown (){
    if (this.maxtime >= 0) {
      let hours = Math.floor(this.maxtime / 60 / 60)
      let minutes = Math.floor((this.maxtime - hours * 3600) / 60);
      let seconds = Math.floor((this.maxtime - hours * 3600 - minutes * 60) % 60);
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      this.setState({
        hours,
        minutes,
        seconds
      })
      --this.maxtime
    } else {
      clearInterval(this.timer)
    }
    
  }
  componentDidMount (){
    //启动倒计时
    this.maxtime = 60 * 60 * 24;
    this.timer = setInterval(()=>{
      this.countDown()
    },1000)
  }
  componentWillUnmount (){
    clearInterval(this.timer)
  }
  render() {
    const { hours, minutes, seconds} = this.state
    const flashSaleModule = this.props.flashSaleModule || []
    return (
      <div className="third-floor">
        <header className="third-floor-header">
          <div className="header-left">
            <span>限时购</span>
            <div className="count-down">
              <span className="date hours">{hours}</span>
              <span className="maohao">:</span>
              <span className="date minutes">{minutes}</span>
              <span className="maohao">:</span>
              <span className="date secends">{seconds}</span>
            </div>
          </div>
          <div className="header-right">
            <span>更多</span>
            <i className="more"></i>
          </div>
        </header>
        <div className="content-list">
          {
            flashSaleModule.map((item,index)=>{
              return (
                <div className="content-item" key={index}>
                  <img src={item.picUrl} alt="" />
                  <div className="price">
                    <span className="discount-price">￥{item.activityPrice}</span>
                    <span className="original-price">￥{item.originPrice}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
export default connect(
  state => ({
    flashSaleModule: state.flashSaleModule
  })
)(ThirdFloor)