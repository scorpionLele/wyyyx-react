import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { getHomeData } from "./redux/actions";

import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Goods from "./pages/goods/goods";
import ShopCart from "./pages/shopCart/shopCart";
import Personal from "./pages/personal/personal";

import './App.less'
class App extends Component {
  componentDidMount (){
    this.props.getHomeData()
  }
  render() {
    const {flag} = this.props
    return (
      <div id="app">
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/category" component={Category}></Route>
            <Route path="/goods" component={Goods}></Route>
            <Route path="/shopCart" component={ShopCart}></Route>
            <Route path="/personal" component={Personal}></Route>
            <Redirect from="/" to="/home" exact></Redirect>
          </Switch>
          {
            flag ? <div className="mask"></div> : null
          }
          <Footer></Footer>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(
  state => ({
    flag:state.flag
  }),
  { getHomeData }
)(App)