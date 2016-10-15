
var util = require("../../utils/utils.js")
Page({
    data: {
        title: "加载中",
        item: {},
        loading: false
    },

    onLoad: function(options) {
        var address = 'https://api.douban.com/v2/movie/subject/'
        address+=options.id;

         util.getData(address,{},(res)=>{
          this.setData({
              item: res.data,
              loading: true
          })
        })
       
    },
    
    onReady: function() {

    },
    onShow: function() {
        wx.setNavigationBarTitle({ title: '我是细节啊' });
    },
    onHide: function() {

    },
    onUnload: function() {

    }
})
