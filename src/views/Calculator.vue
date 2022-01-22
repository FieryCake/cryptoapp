<template>
  <div class="container-fluid" style="">
      <h1>This is the Swap Page</h1>
      {{loginStatus}}
      <div class="row ps-3 pe-3 pb-4">
        <div class="border border-dark pb-4 " style="width:90%; margin:auto; border-radius:10px; background-image:url('https://usa.visa.com/content/dam/VCOM/regional/na/us/Solutions/visa-crypto-opportunities-800x450.jpg'); background-size:cover;" >
            <h2 class="text-center ps-5 pe-5 pt-4 text-white">CryptoCap Swap</h2>
            <div class="text-center text-white">Swap tokens in an instant</div>

            
        </div>
      </div>

      <div class="row ps-3 pe-3 pb-5" v-if="coinData">
        <div id = "wholeThing" class="row border border-secondary g-0" style="width:90%; margin:auto; border-radius:10px 10px 10px 10px;">
            <!--left of swap-->
            <div id ="leftSideWLine"  class="col-sm-12 col-md-7 h-100 border-end border-secondary " style="border-radius:10px 0 0 10px;">
                <div class="ps-3 mt-3 pb-2 border-bottom border-secondary"><h4><b>Swap</b></h4></div>

                <!--left side swap content-->
                <div class="p-3 mb" style="word-wrap:break-word;">
                    From
                    <div class="input-group mb-5">
                    <input v-model = "swap1.amount" type="text" class="form-control" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{(swap1.symbol!='' && swap1.symbol)|| 'Select coin'}}</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li v-for="(n,i) in 10" :key = i v-on:click="handleClick(coinData.data[i].symbol,coinData.data[i].quote.USD.price)"><a class="dropdown-item" href="javascript:void(0);">{{coinData.data[i].symbol}}</a></li>
                        <!-- <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li> -->
                    </ul>
                    </div>
                    {{swap1.price!='' && priceXcoin}}

                    <div class="text-center mb-5">Swap icon in the middle</div>
                    To
                    <div class="input-group mb-5">
                    <input v-model = "priceXcoin2" type="text" class="form-control" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary dropdown-toggle w-25" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{(swap2.symbol!='' && swap2.symbol)|| 'USDC'}}</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li v-for="(n,i) in 10" :key = i v-on:click="handleClick2(coinData.data[i].symbol,coinData.data[i].quote.USD.price)"><a class="dropdown-item" href="javascript:void(0);">{{coinData.data[i].symbol}}</a></li>
                        <!-- <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li> -->
                    </ul>
                    </div>
                    {{swap2.price!='' && priceXcoin2}}
                    

                </div>

                
                

            </div>
             <!--right of swap-->
             <div class="col-sm-12 col-md-5 border-secondary" style="border-radius:0 10px 0 0;">
                 <div class="ps-3 mt-3 pb-2 border-bottom border-secondary w-100"><h4 class="w-100"><b>Summary</b></h4></div>
                 <div class="p-3" style="word-wrap:break-word;">
                    <p class="mb-2">Price:</p>
                    <p class="mb-2">Slippage:</p>
                    <p class="mb-2">Estimated Fee:</p>


             
                    

                </div>

            </div>
        </div>
      </div>

    
    {{swap2.price}}


 
    {{coinData.data}}
    
    
    


  </div>
</template>

<script>


export default {
  data(){
    return{
        swap1:{amount:0,price:0,symbol:""},
        swap2:{amount:0, price:1,symbol:""}
        

    }

  },

  name: "Home",
  
 
  components: {

    
  },
  beforeMount(){
    
  },
  computed:{
    coinData(){
      return this.$store.getters.getData
    },

    loginStatus(){
      return this.$store.getters.getLoginData
    },

    priceXcoin(){
      return this.swap1.price * this.swap1.amount
    },
     priceXcoin2(){
      return this.swap1.price * this.swap1.amount / this.swap2.price 
    },
  },

  

  mounted(){
   
  },

  methods:{
    handleClick(coinSymbol,price){
        console.log("working")
        this.swap1.symbol = coinSymbol
        this.swap1.price = price
    },
    handleClick2(coinSymbol,price){
        console.log("working")
        this.swap2.symbol = coinSymbol
        this.swap2.price = price
    }
    }

}
</script>
