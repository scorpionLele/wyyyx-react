import axios from "axios";
import qs from "qs";

const instance = axios.create({
  timeout:10000
})

instance.interceptors.request.use(config=>{
  let {method,data} = config
  if (method.toUpperCase() === 'POST' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return new Promise(()=>{})
  }
)



export default instance