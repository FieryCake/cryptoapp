import { createStore } from "vuex";
const axios = require('axios');

export default createStore({
  state: {
    loginInfo:false,
    currentData:''
  },
  mutations: {
    setCurrentData(state,payload){
      state.currentData = payload
    },
    
  },
  actions: {
    async setCurrentData(state){
      const response = await axios.get(`http://localhost:8080/v1/cryptocurrency/listings/latest`, {qs: {
        'start': '1',
        'limit': '5000',
        'convert': 'USD'
    },
        headers:{
            'X-CMC_PRO_API_KEY': '8840b0c8-0d0d-4ab0-8210-6910ce02ca88'
            //8840b0c8-0d0d-4ab0-8210-6910ce02ca88
        }
    });
    state.commit("setCurrentData",response.data)
    }
  },
  modules: {},
  getters:{
    getData:state=>state.currentData
  }
});
