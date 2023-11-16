
const axios = require('axios');
const api = process.env.API_KEY;
require('dotenv').config();
// export function getData() {
//       var url = 'http://localhost:8080/v1/cryptocurrency/listings/latest'
//        axios.get(url, {
//               qs: {
//                   'start': '1',
//                   'limit': '5000',
//                   'convert': 'USD'
//               },
//                   headers:{
//                       'X-CMC_PRO_API_KEY': '8840b0c8-0d0d-4ab0-8210-6910ce02ca88'
//                 
//                   }
//               })
//               .then(response => {
//                   return (response.data)
//               })
//               .catch(error => {
//                   // process error object
//                   return(error)
//               })
// }
// export async function getData(){
//     try {
//     const resp = await axios.get('http://localhost:8080/v1/cryptocurrency/listings/latest',{
//         qs: {
//                 'start': '1',
//                 'limit': '5000',
//                 'convert': 'USD'
//             },
//                 headers:{
//                     'X-CMC_PRO_API_KEY': ''
//                   
//                 }
//     });
//         return resp.data;
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// }
export async function getData() {
    const response = await axios.get(`http://localhost:8080/v1/cryptocurrency/listings/latest`, {qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
    },
        headers:{
            'X-CMC_PRO_API_KEY': api

        }
    });
    return response.data;
}
// export async function getData() {
//     const response = await fetch(`'http://localhost:8080/v1/cryptocurrency/listings/latest`, {
//         method: 'GET',
//         headers: {'X-CMC_PRO_API_KEY': ''},
//         qs: {
//             'start': '1',
//             'limit': '5000',
//             'convert': 'USD'
//         },
        
//       })
//     return await response.json();
// }

  // lel = JSON.stringify(lel)
  
  // console.log(lel)
  // lel = JSON.parse(lel)
  // console.log(lel)













