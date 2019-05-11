import api from '../api'

export default {
  namespaced: true,
  state: {
    title: '首页',
    menuList: [],
    bannerList: []
  },

  mutations: {
    // 操作菜单数据
    setMenu (state, param) {
      state.menuList = param;
    },

    // 操作轮播图数据
    setBanner (state, param) {
      state.bannerList = param;
    }
  },

  actions: {
    // 请求首页菜单数据
    getMenuAction (context) {
      wx.request({
        url: api.HOME_MENU_LIST,

        success: (result) => {
          let newData = result.data.data.map(({id, name}) => ({id, name}));
          console.log(newData);
          context.commit('setMenu', newData);
        },

        fail (err) {
          console.log(err);
        }
      })
    },

    // 请求轮播图数据
    getBannerAction (context) {
      wx.request({
        url: api.HOME_BANNER_LIST,

        success: result => {
          let newData = result.data.data.map(({id, picUrl}) => ({id, picUrl}));
          console.log(newData)
          context.commit('setBanner', newData);
        },

        fail (err) {
          console.log(err);
        }
      })
    }
  }
}
