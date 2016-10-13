const url='https://api.douban.com/v2/movie/'

Page({
    data: {
        title: "加载中",
        item: {},
        loading: false
    },

    //只有在onload的时候能接受传过来的参数
    onLoad: function(options) {
    	var that=this;
        wx.setNavigationBarTitle({ title: '« 电影 « 豆瓣' });
        wx.request({
            url:url+"subject/"+options.id,
            data: {},
            header: { 'Content-Type': 'application/json' },
            success: function(res) {
            	that.setData({
                    item: res.data,
                   	 loading: true
                })

                
                  
                   
             
            },
            fail:function(){
            	console.log("我曹居然失败我不洗我心不信我不信")
            }
        })
    },
    //如果下面的也需要参数，需onload时将参数保存起来；
    //使用时需要用this.data.xxx ，不能直接xxx
    onReady: function() {

        wx.setNavigationBarTitle({ title: '« 电影 « 豆瓣' });

    },
    onShow: function() {

    },
    onHide: function() {

    },
    onUnload: function() {

    }
})
