Page({
	data:{
		title:"加载中",
		item:{},
		loading:false
	},

	//只有在onload的时候能接受传过来的参数
	onLoad:function(options){
			wx.setNavigationBarTitle({ title:'« 电影 « 豆瓣' });	
		this.setData({
			item:options
		})
	},
	//如果下面的也需要参数，需onload时将参数保存起来；
	//使用时需要用this.data.xxx ，不能直接xxx
	onReady:function(){
			
		wx.setNavigationBarTitle({ title:'« 电影 « 豆瓣' });	
		setTimeout(function(){console.log(this+"oooooooshnia")},500)



		setTimeout(()=>{
			console.log(this+"wofaianshinile");
			this.setData({
			loading:true
		})
		},1500)
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	}
})		