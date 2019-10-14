import {
  RECIVE_HOMEDATA,
  RECIVE_PERSONALSHOP,
  RECIVE_FLASHSALEMODULE,
  RECIVE_TOPICLIST,
  RECIVE_ZHONGCHOULIST,
  RECIVE_CATEGORYS,
  ISSHOWMASK
} from "./action-types";
import { reqHomeData,reqCategoryData } from "../api";

export const showMask = (flag) => ({type:ISSHOWMASK,flag})
//首页
const reciveHomeData = (homeData) => ({type:RECIVE_HOMEDATA,homeData})
//私人定制
const recivePersonalShop = (personalShop) => ({type:RECIVE_PERSONALSHOP,personalShop})
//限时购
const reciveFlashSaleModule = (flashSaleModule) => ({type:RECIVE_FLASHSALEMODULE,flashSaleModule})
//专题精选
const reciveTopicList = (topicList) => ({type:RECIVE_TOPICLIST,topicList})
//众筹
const reciveZhongchouList = (zhongchouList) => ({type:RECIVE_ZHONGCHOULIST,zhongchouList})
//分类
const reciveCategorys = (categorys) => ({type:RECIVE_CATEGORYS,categorys})

export function getHomeData() {
  return async dispatch => {
    const result = await reqHomeData()
    if(result.code === 0){
      const homeData = result.data
      dispatch(reciveHomeData(homeData))
      dispatch(recivePersonalShop(homeData.personalShop))
      dispatch(reciveFlashSaleModule(homeData.flashSaleModule.itemList))
      dispatch(reciveTopicList(homeData.topicList))
      dispatch(reciveZhongchouList(homeData.zhongChouList))
    }
  }
}

export function getCategoryData() {
  return async dispatch => {
    const result = await reqCategoryData()
    if(result.code === 0){
      const categorys = result.data.categoryL1List
      dispatch(reciveCategorys(categorys))
    }
  }
}