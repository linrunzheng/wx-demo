const url = 'https://api.douban.com/v2/movie/in_theaters'
var util = require("../../utils/utils.js")
Page({
    data: {
        moivelist: [],
        loading: false
    },

    onLoad: function() {
        util.getData(url,{},(res)=>{
          this.setData({
              moivelist: res.data.subjects,
              loading: true
          })
        })
    },
    onReady: function() {

    },
    onShow: function() {
        wx.setNavigationBarTitle({ title: '我是首页' });
    },
    onHide: function() {

    },
    onUnload: function() {

    },
    onPullDownRefresh: function() {

    },
})

