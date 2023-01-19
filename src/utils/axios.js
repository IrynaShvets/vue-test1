// import axios from 'axios'

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3/',
//   timeout: 1000,
//   headers: { "Content-Type": "application/json" },
// });

// export default instance

// import axios from 'axios'

// const apiClient = axios.create({
//     baseURL: 'https://api.themoviedb.org/3/',
//     api_key: 'd3c00761eff125b45afbcd52d8235bc7',
//     withCredentials: false,
//     timeout: 1000,
   
//     headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       //  'Authorization': 'Basic ' + btoa('api_username_here' + ':' + 'api_password_here')     
//     }
// })

// export default {
//     getOrders(){
//         return apiClient.get('movie/popular?api_key=${API_KEY}')
//     },
//     // getProducts(id){
//     //     return apiClient.get('/products/' + id)
//     // },
// }

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 2000,
  headers: { "Content-Type": "application/json" }
});

export default axiosInstance;