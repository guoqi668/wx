let request = (url,params) => {
    // console.log(new URLSearchParams(params).toString())
    return new Promise((resolve,reject)=>{
        wx.request({
            url: `http://localhost:3000${url}?UserName="gq"&Password="123"`,
            // header: {
            //   'content-type': 'application/json'
            // },
            method: 'POST',
            // data:params,
            success: function(res) {
                return resolve(res);
            }
        })
    })
}
export default request;   