import { combineReducers } from "redux";
import {
  RECIVE_HOMEDATA,
  RECIVE_PERSONALSHOP,
  RECIVE_FLASHSALEMODULE,
  RECIVE_TOPICLIST,
  RECIVE_ZHONGCHOULIST,
  RECIVE_CATEGORYS,
  ISSHOWMASK
} from "./action-types";


const isShowMask = false
function flag(state = isShowMask,action) {
  switch (action.type) {
    case ISSHOWMASK:
      return action.flag
    default:
      return state
  }
}

const homeData = {}
function home(state = homeData,action) {
  switch (action.type) {
    case RECIVE_HOMEDATA:
      return action.homeData
    default:
      return state
  }
}
const personalShopData = []
function personalShop(state = personalShopData, action) {
  switch (action.type) {
    case RECIVE_PERSONALSHOP:
      return action.personalShop
    default:
      return state
  }
}

const flashSaleModuleData = []
function flashSaleModule(state = flashSaleModuleData, action) {
  switch (action.type) {
    case RECIVE_FLASHSALEMODULE:
      return action.flashSaleModule
    default:
      return state
  }
}
const topicListData = []
function topicList(state = topicListData,action) {
  switch (action.type) {
    case RECIVE_TOPICLIST:
      return action.topicList
    default:
      return state
  }
}
const zhongchouListData = []
function zhongchouList(state = zhongchouListData,action) {
  switch (action.type) {
    case RECIVE_ZHONGCHOULIST:
      return action.zhongchouList
    default:
      return state
  }
}
const categorysData = []
function categorys(state = categorysData, active) {
  switch (active.type) {
    case RECIVE_CATEGORYS:
      return active.categorys
    default:
      return state
  }
}

export default combineReducers({
  flag,
  home,
  personalShop,
  flashSaleModule,
  topicList,
  zhongchouList,
  categorys
})