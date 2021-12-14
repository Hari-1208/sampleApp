import axios from 'axios';

  const getClinet = (obj) => {

    let {url,data,method} = obj ;

    let config ={
      baseURL:'https://jsonplaceholder.typicode.com',
      url:url,
      method:method,
      data:data
    }
if (data==null){
  delete config.data
}
    const axios2 = axios.create({
      
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json' },
      
    })
      return new Promise((resolve,reject) => {
        axios2(config)
        .then(res=> resolve(res))
        .catch(err=> reject(err));
        });
    }
   

  export default getClinet;