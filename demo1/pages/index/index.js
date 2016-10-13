Page({
  data:{
    moivelist:[{
      imgsrc: "../../images/AN2.jpg",
      title: "肖申克的救赎",
      introduce: "The shrakwos RedenpeTion(1994)",
      author: "弗兰克*德拉立邦",
      rank: "9.6"
    },
    {
      imgsrc: "../../images/AN3.jpg",
      title: "这个杀手不太冷",
      introduce: "The  RedenpeTion(1991)",
      author: "弗兰克*德拉立邦",
      rank: "9.5"
    },
    {
      imgsrc: "../../images/AN4.jpg",
      title: "霸王别姬",
      introduce: "shrakwos RedenpeTion-(1990)",
      author: "弗兰克*德拉立邦",
      rank: "9.4"
    },
    {
      imgsrc: "../../images/a1.jpg",
      title: "阿甘正传",
      introduce: "The -shrakwos- denpeion(1999)",
      author: "弗兰克*德拉立邦",
      rank: "9.3"
    },
    {
      imgsrc: "../../images/a1.jpg",
      title: "千与千寻",
      introduce: "Lisnn(2001)",
      author: "宫崎骏",
      rank: "9.1"
    },
    {
      imgsrc: "../../images/AN3.jpg",
      title: "这个杀手不太冷",
      introduce: "The  RedenpeTion(1991)",
      author: "弗兰克*德拉立邦",
      rank: "9.5"
    },
    {
      imgsrc: "../../images/AN4.jpg",
      title: "霸王别姬",
      introduce: "shrakwos RedenpeTion-(1990)",
      author: "弗兰克*德拉立邦",
      rank: "9.4"
    },
    {
      imgsrc: "../../images/a1.jpg",
      title: "阿甘正传",
      introduce: "The -shrakwos- denpeion(1999)",
      author: "弗兰克*德拉立邦",
      rank: "9.3"
    }
  ]
   
  }
    
,

  onLoad: function(options) {
   console.log(1);
  },
  onReady: function() {
    // Do something when page ready.
  },
  onShow: function() {
    // Do something when page show.
  },
  onHide: function() {
    // Do something when page hide.
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