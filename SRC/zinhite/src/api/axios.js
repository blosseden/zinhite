import axios from 'axios'

const config = {
  baseURL: process.env.VUE_APP_SERVER_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  timeout: (parseInt(process.env.VUE_APP_TIME_OUT_SEC) || 10) * 1000
}

const genDefaultOptions = () => Object.assign({}, config)

const networkError = false

export const get = async (url, params = {}, isDelete) => {
  
    if (Object.keys(params).length > 0) {
      url += '?'
      for (const key in params) {
        if (params[key] !== undefined) url += `${key}=${params[key]}&`
      }
    }
  
    const options = genDefaultOptions()
    options.method = !isDelete ? 'get' : 'delete'
    options.url = url
    console.log('url', url)

    try {
      return await axios(options)
      
    } catch (error) {
      return networkError
    }
  }
  
  /**
   * @async
   * @function post
   * @description axios post
   * @param {String} url 
   * @param {Object} params
   * @example post('users', { userId: 'userId' })
   * @return {Object} response data
   */
  
  export const post = async (url, params = {}, isFileUpload) => {
    const options = genDefaultOptions()
    options.headers = !isFileUpload ? 
      {'Content-Type': 'application/json; charset=utf-8'} :
      {'Content-Type' : 'multipart/form-data'}
    options.method = 'post'
    options.url = url
    options.data = params
  
    console.log("post:", options)
  
    try {
      return await axios(options)
    } catch (error) {
      console.error(error)
      return networkError
    }
  }
  
  /**
   * @async
   * @function put
   * @description axios put
   * @param {String} url 
   * @param {Object} params
   * @example put('users', { userId: 'userId' })
   * @return {Object} response data
   */
  
  export const put = async (url, params = {}) => {
    
    const options = genDefaultOptions()
    options.method = 'put'
    options.url = url
    options.data = params
  
    console.log("put:", options)
  
    try {
      return await axios(options)
  
    } catch (error) {
      console.error(error)
      return networkError
    }
  }
