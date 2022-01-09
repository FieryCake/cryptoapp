<template>
  <div class="container-fluid" style="padding-left:50px; padding-right:50px;">
      <h1>This is the Swap Page</h1>
      {{loginStatus}}
      <div class="row ps-5 pe-5 pb-4">
        <div class="border border-dark pb-4 w-75 " style="margin:auto; border-radius:10px; background-image:url('https://usa.visa.com/content/dam/VCOM/regional/na/us/Solutions/visa-crypto-opportunities-800x450.jpg'); background-size:cover;" >
            <h2 class="text-center ps-5 pe-5 pt-4 text-white">CryptoCap Swap</h2>
            <div class="text-center text-white">Swap tokens in an instant</div>

            
        </div>
      </div>

      <div class="row ps-5 pe-5 pb-5">
        <div id = "wholeThing" class="border border-secondary w-75 g-0 d-flex" style="margin:auto; border-radius:10px 10px 10px 10px;">
            <!--left of swap-->
            <div id ="leftSideWLine"  class="w-75 h-100 border-end border-secondary d-inline-block" style="border-radius:10px 0 0 10px;">
                <div class="ps-3 mt-3 pb-2 border-bottom border-secondary"><h4><b>Swap</b></h4></div>

                <!--left side swap content-->
                <div class="p-3" style="word-wrap:break-word;">
                    From
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-label="Text input with dropdown button">
                    <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{(swap1!='' && swap1)|| 'Select coin'}}</button>
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li v-on:click="handleClick"><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                        <li><a class="dropdown-item" href="">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Separated link</a></li>
                    </ul>
                    </div>

                </div>
                

            </div>
             <!--right of swap-->
             <div class="w-50 h-100  border-secondary d-inline-block" style="border-radius:0 10px 0 0;">
                 <div class="ps-3 mt-3 pb-2 border-bottom border-secondary"><h4><b>Summary</b></h4></div>

            </div>
        </div>
      </div>



 
      {{data}}
    
    
    


  </div>
</template>

<script>


export default {
  data(){
    return{
        swap1:'',
        

    }

  },

  name: "Home",
  
 
  components: {

    
  },
  beforeMount(){
    
  },
  computed:{
    data(){
      return this.$store.getters.getData
    },

    loginStatus(){
      return this.$store.getters.getLoginData
    }
  },

  mounted(){
   
  },

  methods:{
    handleClick(){
        console.log("working")
        this.swap1 = "Action"
    }
    }

}
</script>
