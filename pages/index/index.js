//index.js
//获取应用实例
const app = getApp()

import request from '../../utils/request';

Page({
  data: {
    motto: {text:'Hello World'},
    userInfo: {},
    num: 10,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  pageEvent: function(e){
    this.setData({
      num: e.detail
    })
    
  },
 
  // 页面加载时出发，一个页面只触发一次
  onLoad: function (query) {
    console.log('page on load')
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },

  // 页面每次显示时调用
  onShow: function(){console.log('page on show')},
  
  // 初次渲染完成时触发，一个页面只调用一次
  onReady: function(){console.log('page on ready')},

  // 页面隐藏的时候触发
  onHide: function(){console.log('page on hide')},
  
  // 页面卸载时触发。如redirectTo或navigateBack到其他页面时。
  onUnload: function(){console.log('page on unload')},

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
   onTap:  function() {
    const a = request('/login',{UserName: 'gq',PassWord: '123'}).then((res)=>{
      console.log(res)
    });
   
    this.setData({
      'motto.text': 'hi world'
    })
  }
})
