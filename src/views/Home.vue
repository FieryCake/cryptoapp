<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div class="container-fluid">
  
    
    
  
    
    <!-- <div class="row g-0" id="myNavbar">
      <div class="col-12 border border-light">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"
              ><img
                src="../assets/logo.jpg"
                alt="Logo image"
                style="height: 50px; width: 100px"
              />
              <b>Coin crypto cap</b></a
            >
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link p-0" href="#"
                    ><button type="button" class="btn btn-primary">
                      Login
                    </button></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div> -->
    <!--Carousel-->
    <div class="row g-0 mt-3" style="padding-left: 50px; padding-right: 50px">
      <div class="col-12">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/blockchain1.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/blockchain2.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/blockchain3.jpg"
                class="d-block w-100 h-100"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <!-- <form action = '/user' method = 'post'>
                <label>First name
                </label>
                <input name = 'firstName'></input>
                <button type="submit">Submit</button>
            </form> -->
    </div>
    <!--End of carousel-->

    <!--Below carousell (how it works)-->

    <div class="row g-0 mt-5" style="padding-left: 50px; padding-right: 50px">
      <div class="col-12 mb-2"><h3 class="text-center">How it works</h3></div>

      <div class="col-sm-4 col-xs-6">
        <div class="card h-100 mx-auto" style="width: 92%">
          <img src="../assets/track.png" class="card-img-top h-100" alt="..." />
          <div class="card-body">
            <p class="card-text text-justify">
              1. Track the prices of coins with our application
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm-4 col-xs-6">
        <div class="card h-100 mx-auto" style="width: 92%">
          <img
            src="../assets/candle.jpg"
            class="card-img-top h-100"
            alt="..."
          />
          <div class="card-body">
            <p class="card-text">2. Paper trade coins using the paper money</p>
          </div>
        </div>
      </div>

      <div class="col-sm-4 col-xs-6">
        <div class="card h-100 mx-auto" style="width: 92%">
          <img src="../assets/money.jpg" class="card-img-top h-100" alt="..." />
          <div class="card-body">
            <p class="card-text">
              3. Analyse and see how you fair in the crypto world
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--1. Track the prices of coins with our application 2. Paper trade coins using the paper money in your account 3. Analyse and see how you fair in the crypto world-->
    <div class="row mt-5 g-0 text-left" style="padding-left: 50px; padding-right: 50px">
      <h3 class="text-left">Top 10 Cryptocurrencies by Market Cap</h3>

      <div id="topten"></div>


    </div>

    <div class="row mt-5 bg-light pt-5">
      <div
        class="col-xs-12 col-md-8 bg-light text-start"
        style="padding-left: 62px"
      >
        <h4 style="display: inline">
          Be the last to know about
          <h3 style="display: inline"><b>crypto news everyday</b></h3>
        </h4>
        <div></div>
        <br />Get bad technical analysis, wrong news and updates right to your
        inbox! Sign up here so you don't miss our pro bono emailing service that
        does'nt always work

        <div class="col-12">
          <input
            type="email"
            class="form-control w-75 mt-4 d-inline"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <button type="button" class="btn btn-primary d-inline">Login</button>
        </div>
      </div>

      <div class="col-xs-12 col-md-4 text-center">
        <img
          class="h-75 w-75"
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
        />
      </div>
    </div>

    <!--Footer-->
    <div class="row mt-5" style="padding-left: 50px; padding-right: 50px">
      <div class="col-6 text-start">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Cryptocurrency_Logo.svg/633px-Cryptocurrency_Logo.svg.png"
            alt="Logo image"
            style="height: 50px; width: 100px"
          />
          <b class="ms-2">Coin crypto cap</b>
        </div>
      </div>

      <div class="col-6 text-start">
        <div class="row h-100 pt-3">
          <div class="col">
            <h5>Products</h5>
            <div class="mt-3 p-2 ps-0">
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
            </div>
          </div>
          <div class="col">
            <h5>The Team</h5>
            <div class="mt-3 p-2 ps-0">
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
            </div>
          </div>

          <div class="col">
            <h5>Support</h5>
            <div class="mt-3 p-2 ps-0">
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
              <p><a class="mb-1">Crypto news</a></p>
            </div>
          </div>

          <div class="col">
            <h5>Socials</h5>
            <div class="mt-3 p-2 ps-0">
              <p><a class="mb-1">Crypto news</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End of footer row-->

  </div>


</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import axios from 'axios'
import {getData} from '../data'



export default {
  data(){
    return{
      lel:"",
      data:'lolss',
      finalData:{},
 
    }
  },

  name: "Home",
  
 
  components: {
    // HelloWorld,
    
  },
  beforeMount(){
    this.getFinalData()
    
    

  },
  mount(){
    
  },

  methods:{
    getFinalData(){
      getData().then(response=>{
        this.lel = response.data
        var template= `<table class="table" v-if="lel">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col" class="text-end">Price</th>
            <th scope="col" class="text-end">Market Cap</th>
            <th scope="col" class="text-end">Volume (24h)</th>
            <th scope="col" class="text-end">Circulating Supply</th>
          </tr>
        </thead>`
        template +=`<tbody>`
        
        for (let i =0;i<10;i++){
          console.log(this.lel[i])
          var name = this.lel[i].name
          var price = this.lel[i].quote.USD.price
          var mc = this.lel[i].quote.USD.market_cap
          var vol = this.lel[i].quote.USD.volume_24h
          var circsup = this.lel[i].circulating_supply
          var symbol = this.lel[i].symbol

          template += `<tr>`
          template+=`<th scope="row" >${i+1}</th>`
          template+=`<td>${name}</td>`
          template+= `<td class="text-end">${price}</td>`
          template+= `<td class="text-end">${mc}</td>`
          template+= `<td class="text-end">${vol}</td>`
          template+= `<td class="text-end">${circsup} ${symbol}</td>`
          template+=`</tr>`
          
        template +=`</tbody>`
        }
        let target = document.getElementById("topten")
        target.innerHTML +=template
        console.log(template)

        
        
        
      })
    }   
    }

}
</script>
