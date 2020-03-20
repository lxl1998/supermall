import axios from 'axios';
export function request(config){
    const instance = axios.create({
      baseURL:'http://123.207.32.32:8000/api/wh',
      timeout:5000
    })
    instance.interceptors.request.use(config=>{
      return config
    },err=>{
      
    })
    instance.interceptors.response.use(res=>{
      return res.data
      // console.log(res);
      
    },err=>{
      console.log(err);
      
    })
    return instance(config)
}