import { createStore } from "vuex";
const axios = require('axios');
const apiKey = process.env.VUE_APP_API_KEY;


export default createStore({
  state: {
    loginInfo:false,
    currentData:'',
    test:''
  },
  mutations: {
    setCurrentData(state,payload){
      state.currentData = payload
    },

    setLogin(state,payload){
      state.loginInfo = payload
    },

    setLogout(state,payload){
      state.loginInfo = payload
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
            'X-CMC_PRO_API_KEY': apiKey
        }
    });
    state.commit("setCurrentData",response.data)
    },
    

    setLogin(state){
        state.commit('setLogin', "Glenn")
    },

    setLogout(state){
      state.commit('setLogout', false)
  },

    // setTest(state,userInt){
    //   state.commit('setTest', userInt)
    // }

  },



  modules: {},
  getters:{
    getData:state=>state.currentData,
    getLoginData:state=>state.loginInfo,
    // getTest:state=>state.test
  }
});
