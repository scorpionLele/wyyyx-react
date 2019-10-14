import ajax from "./ajax";

export const reqHomeData = () => ajax('/mock/home')

export const reqCategoryData = () => ajax('/mock/category')

export const reqGoodsTab = () => ajax('/mock/goods_tab')

export const reqGoods = () => ajax('/mock/goods')

export const reqSearchData = () => ajax('/api/xhr/search/init.json')

// 搜索输入框输入时发的请求
export const reqSearchAutoComplete = (keywordPrefix) => ajax.get('/api/xhr/search/searchAutoComplete.json', {
  params: {
    keywordPrefix
  }
})

