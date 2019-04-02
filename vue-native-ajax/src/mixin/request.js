export default {
    beforeCreate () {
      this.$http = (() => {
        let createFetch = (type, url, params) => {
          return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4){
                if(xhr.status === 200){
                  var res = xhr.responseText;
                  try {
                      res = JSON.parse(xhr.responseText)
                  } catch (e) {}
                  resolve(res)
                } else {
                  reject(xhr.responseText)
                }
              }
            }
            url += url.includes('?') ? '&' : '?'
  
            if (type === 'GET') {
              let serialArr = []
              Object.keys(params).forEach(v => {
               serialArr.push(`${v}=${params[v]}`)
              })
              url += serialArr.join('&')
            }
            xhr.withCredentials = true; //支持跨域发送cookies
            xhr.open(type, url, true);
            xhr.send(type === 'GET' ? null : params);
          })
        }
        return {
          get: (...args) => createFetch("GET", args[0], args[1]),
          post: (...args) => createFetch("POST", args[0], args[1])
        }
      })()
    }
  }