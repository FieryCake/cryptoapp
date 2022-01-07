<template>
    <div class="row" id="myNavbar">
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
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto" >
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Tools
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><router-link to="/calculator" class="nav-link">Swap calculator</router-link></li>
                    <li><router-link to="/portfolio" class="nav-link">Portfolio</router-link></li>
                </ul>
                </li>
                <li class="nav-item">
                 <router-link to="/guide" class="nav-link">Guide</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link">About</router-link>
                </li>
                <li class="nav-item ms-1">
                 <button type="button" class="btn btn-primary" v-on:click="clickLogin">
                      Login 
                    </button>
                 
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
</template>

<script>
export default {
  name: "TopNav",
  data(){
    return{
     
    }
  },



  methods:{
      clickLogin(){
          console.log("working")
          this.$root.loginStatus = "work"
          console.log(this.$root.loginStatus)
      }
  }
};
</script>