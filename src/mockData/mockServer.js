import Mock from "mockjs";
import homeData from "./homeData.json";
import categoryData from "./category.json";
import goodsTab from "./goodsTab.json";
import goods from "./goods.json";

Mock.mock('/mock/home',{
  code:0,
  data: homeData
})

Mock.mock('/mock/category', {
  code: 0,
  data: categoryData
})

Mock.mock('/mock/goods_tab', {
  code: 0,
  data: goodsTab
})

Mock.mock('/mock/goods', {
  code: 0,
  data: goods
})