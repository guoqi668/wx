// test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  //  num:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.setData({
        num: this.data.num+1
      })
      
      this.triggerEvent('componentEvent',this.data.num)
    }
  }
})
