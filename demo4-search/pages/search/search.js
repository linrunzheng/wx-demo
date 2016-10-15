const url = 'https://api.douban.com/v2/movie/search?q=';
var util = require("../../utils/utils.js");

Page({
    data: {
        moivelist: [],
        loading: true,
        cancel: "取消",
        search: ""
    }
   ,
    //事件处理函数测试
    inputing: function(event) {
        if (event.detail.value) {
            this.setData({
                cancel: "搜索"
            })
        } else {
            this.setData({
                cancel: "取消"
            })
        }
    },
    //失去焦点事件
    quick: function(event) {
        if (!event.detail.value) {
            this.setData({
                cancel: "取消"
            })
        } else {
            this.setData({
                search: event.detail.value
            })
        }
    },
    //点击搜索事件
    searching: function() {
        if (this.data.cancel === "取消") {
            wx.hideKeyboard()
        } else {          
            this.setData({
                loading: false
            })

            wx.request({
                url: url + this.data.search,
                data: {},
                header: { 'Content-Type': 'application/json' },
                success: function(res) {
                    that.setData({
                        moivelist: res.data.subjects,
                        loading: true
                    })
                }
            })
        }
    },
    onLoad: function(options) {
      
    },
    onReady: function() {

    },
    onShow: function() {
        wx.setNavigationBarTitle({ title: '我是搜索' });
    },
    onHide: function() {

    },
    onUnload: function() {
        // Do something when page close.
    },
    onPullDownRefresh: function() {
        // Do something when pull down
    },
    
})
