const url='https://api.douban.com/v2/movie/in_theaters'



Page({
  data:{
    moivelist:[],
    loading:false
  }  

,
//事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../rank/rank'
    })
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
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
   wx.setNavigationBarTitle({ title:'« 电影 « 豆瓣' }); 
  },
  onUnload: function() {
    // Do something when page close.
  },
  onPullDownRefresh: function() {
    // Do something when pull down
  },
  // Event handler.
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    })
  }
})
