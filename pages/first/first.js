// pages/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personNum: 1,
    showMore: false,
    hasScroll: false,
    // 绑定左侧菜单的data-id
    sideBarActive: '',
    // 绑定左侧菜单的data-index
    contentActive: '',
    // 右侧内容项 高度分层
    heightArr: [],
    contentHeight: 0,
    sideBarList: [
      {
        id: 1,
        category: '新品菜'
      }, {
        id: 2,
        category: '新品菜'
      }, {
        id: 3,
        category: '新品菜'
      }, {
        id: 4,
        category: '新品菜'
      }, {
        id: 5,
        category: '新品菜'
      }
    ],
    contentList: [
      {
        id: 1,
        name: '新品才'
      }, {
        id: 2,
        name: '热销菜'
      }, {
        id: 3,
        name: '新品菜1'
      }, {
        id: 4,
        name: '新品菜3'
      }, {
        id: 5,
        name: '新品菜5'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let query = wx.createSelectorQuery().in(this);
    let heightArr = [];
    let s = 0;
    console.log('a')
    // 1.注意这个是异步的 2.exec 必须在最后一个select 不然会多次渲染 heightArr出啊新问题
    query.selectAll('.contentItem').boundingClientRect((res)=> {
        console.log(res)
        res.forEach((el) => {
          s += el.height;
          heightArr.push(s)
        })
        this.setData({heightArr: heightArr})
        console.log(this.data.heightArr)
        
      });

    query.select('.content').boundingClientRect((res)=>{
      this.setData({contentHeight: res.height});
    console.log(this.data.contentHeight)
      
    }).exec();
  },

  showMore() {
    this.setData({
      showMore: !this.data.showMore
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  // 监听页面滚动
  onPageScroll: function (e) {
    if (e.scrollTop > 0) {
      this.setData({hasScroll: true})
    } else {
      this.setData({hasScroll: false})
    }
  },

  // 右侧内容滚动时候出发
  onScroll: function (e) {
    // console.log(e)
    let scrollTop = e.detail.scrollTop;
    const arr = this.data.heightArr;

    // if(!arr.filter((item,index)=>item>scrollTop)[0]){
    //   console.log('haha')
    //   this.setData({sideBarActive: arr.length-1})
    // }else {
    //   var newArr = arr.filter((item,index)=>item>scrollTop)[0]
    //   console.log(newArr)
    //   this.setData({sideBarActive: arr.indexOf(newArr)})
    // }

    if(scrollTop>=arr[arr.length-1]-this.contentHeight) {
      return ;
    } else {
      for (let i= 0;i<arr.length;i++) {
        if(scrollTop>=0 && scrollTop<arr[0]) {
          this.setData({sideBarActive: 0})
        }else if(scrollTop>arr[i-1] && scrollTop<arr[i]) {
          console.log(i)
          this.setData({sideBarActive:i});
        }
      }
    }
    
  },

  // 点击左侧sidebar
  chooseType: function (e) {
    let id = e.currentTarget.dataset.id;
    let index = e.currentTarget.dataset.index;
    this.setData({contentActive: id, sideBarActive: index})

  }
})