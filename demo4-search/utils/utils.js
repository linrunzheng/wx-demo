function getData(address,datas,cb){
    wx.request({
        url: address,
        data:datas,
        header: { 'Content-Type': 'application/json' },
        success: cb
    })
}

module.exports = {
    getData: getData
}
