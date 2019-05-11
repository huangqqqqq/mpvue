const HOST = 'http://129.204.72.71:8000';

// 首页菜单
const HOME_MENU_LIST = HOST + '/api/catelist';

// 首页轮播图
const HOME_BANNER_LIST = HOST + '/api/home/bannerlist';

// 首页的菜单列表数据
// 参数：id
const HOME_CATE_LIST = HOST + '/api/home/catelist/itemlist';

// 首页品牌制造商直供
const HOME_TAG_LIST = HOST + '/api/home/tagList';

// 商品详情接口
// 参数：商品id
const GOODS_DETAIL_URL = HOST + '/api/item/detail';

export default {
  HOME_MENU_LIST,
  HOME_BANNER_LIST,
  HOME_CATE_LIST,
  HOME_TAG_LIST,
  GOODS_DETAIL_URL
}
