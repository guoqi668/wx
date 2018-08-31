let request =  {
    // let parmas = new FormData();
    // for(let key in data) {
    //     parmas.appdend(key,data[key]);
    // }

    // console.log(new URLSearchParams(params).toString())
    post: function(url,data){ 
        return new Promise((resolve,reject)=>{
            wx.request({
                url: `http://localhost:3000${url}`,
                header: {
                // 'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
                'content-type': "application/json"
                },
                method: 'POST',
                data:data,
                success: function(res) {
                    return resolve(res);
                }
            })
        })
    },
    get: function(url,data) {
        return new Promise((resolve,reject)=>{
            wx.request({
                url: `http://localhost:3000${url}`,
                header: {
                    'content-type': "application/json"
                },
                method: 'GET',
                data:data,
                success: function(res) {
                    return resolve(res);
                }
            })
        })
    }

}
export default request;   