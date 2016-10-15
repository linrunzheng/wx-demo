const url = 'https://api.douban.com/v2/movie/top250'
var util = require("../../utils/utils.js")

Page({
    data: {
        moivelist: [],
        loading: false
    },
    onLoad: function() {
            util.getData(url, {}, (res) => {
                this.setData({
                    moivelist: res.data.subjects,
                    loading: true
                })
            })
        },
    onReady: function() {

    },
    onShow: function() {
        wx.setNavigationBarTitle({ title: '我是TOP20' });
    },
    onHide: function() {

    },
    onUnload: function() {

    }
})
