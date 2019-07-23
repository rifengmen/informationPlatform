//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // 是否注册商铺
    isSetShop: false,
    // 商铺列表
    shopsList: [
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        vip: '1',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业2',
        vip: '4',
        area: '测试城市2',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        vip: '6',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        vip: '2',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        vip: '1',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        vip: '1',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业2',
        vip: '1',
        area: '测试城市2',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        vip: '1',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        vip: '1',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        vip: '1',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      }
    ],
    // vip等级
    vipClass: []
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.getVIP()
  },
  // 下拉刷新
  onPullDownRefresh: function () {
    wx.startPullDownRefresh({
      // 成功执行
      success: function () {

      },
      // 失败执行
      fail: function () {

      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 获取vip等级图片
  getVIP: function () {
    this.setData({
      vipClass: app.globalData.VIP
    })
  }
})
