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
    // 店铺分类
    categoryArray: ['测试类别1', '测试类别2', '测试类别3', '测试类别4'],
    // 分类序号
    categoryIndex: 0,
    // 所在地区
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    // 排序方式
    sortArray: ['综合','销量','价格'],
    // 排序序号
    sortIndex: 0,
    // 商铺列表
    shopsList: [
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        category: '0',
        vip: '',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业2',
        category: '1',
        vip: '4',
        area: '测试城市2',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        category: '3',
        vip: '6',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        category: '2',
        vip: '2',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        category: '0',
        vip: '',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        category: '2',
        vip: '1',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业2',
        category: '3',
        vip: '10',
        area: '测试城市2',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介，测试企业2简介，测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        category: '0',
        vip: '1',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业1',
        category: '2',
        vip: '1',
        area: '测试城市1',
        tags: ['标签1-1', '标签1-2', '标签1-3', '标签1-4', '标签1-5'],
        des: '测试企业1简介，测试企业1简介测试企业1简介测试企业1简介，测试企业1简介测试企业1简介测试企业1简介测试企业1简介测试企业1简介，测试企业1简介，测试企业1简介测试企业1简介'
      },
      {
        img: '/lib/images/userimg.png',
        name: '测试企业3',
        category: '1',
        vip: '1',
        area: '测试城市3',
        tags: ['标签2-1', '标签2-2', '标签2-3', '标签2-4', '标签2-5'],
        des: '测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介，测试企业2简介测试企业2简介测试企业2简介测试企业2简介'
      }
    ],
    // vip等级
    vipClass: [],
    // 是否显示下拉提示
    isPullDownShow: false,
    // 下拉刷新提示文字
    pullDownText: true,
    // 搜索内容
    search_val: ""
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
    wx.showLoading({
      title: '内容刷新中...',
      mask: true
    })
    wx.request({
      url: app.globalData.HOST + '',
      method:"post",
      data: {
        code: 123
      },
      success: function () { }
    })
    // wx.request({
    //   url: 'http://www.baidu00.com',
    //   success:function(){
    //     wx.hideLoading()
    //     console.log('success')
    //   },
    //   fail: function () {
    //     wx.hideLoading()
    //     wx.showToast({
    //       title: '网络异常',
    //       icon: 'loading',
    //       duration: 2000
    //     })
    //     setTimeout(function () { wx.hideToast()},2000)
    //   }
    // })
  },
  // 上拉触底加载
  onReachBottom: function () {
    this.getShopDes();
  },
  // 获取用户信息
  getUserInfo: function () {
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
  },
  // 获取搜索内容
  getSearchVal: function(e) {
    this.setData({
      search_val: e.detail.value
    });
    wx.request({
      url: '',
    })
  },
  // 按店铺分类查询
  categoryChange: function (e) {
    this.setData({
      categoryIndex: e.detail.value
    });
    wx.request({
      url: '',
    })
  },
  // 按所在地区查询
  regionChange: function (e) {
    this.setData({
      region: e.detail.value
    });
    wx.request({
      url: '',
    })
  },
  // 排序方式修改
  sortChange: function (e) {
    this.setData({
      sortIndex: e.detail.value
    });
    wx.request({
      url: '',
    })
  },
  // 加载商铺信息
  getShopDes: function () {
    console.log(1)
    wx.request({
      url: '',
    })
  }
})
