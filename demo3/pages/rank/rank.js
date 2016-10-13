
	const url='https://api.douban.com/v2/movie/top250'

Page({
    data: {
        moivelist:[],
         loading:false
    },
    onLoad: function(options) {
    	var that=this;
       wx.request({
          url,
         data:{},
          header: { 'Content-Type': 'application/json' },     
          success:function(res){
            that.setData({
              moivelist:res.data.subjects,
              loading:true
            })
          }
       })

    },
    onReady: function() {

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    }
})
