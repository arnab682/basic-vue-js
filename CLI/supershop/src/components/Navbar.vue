<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <router-link :to="{path:'/'}" class="navbar-brand text-white">Superstore</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
           
          </ul>
          <!-- <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="keyword" type="search" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> -->
          <form @submit.prevent="search" class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" v-model="keyword" type="search" placeholder="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
    </nav>
</template>


<script>
import axios from 'axios'
export default {
  // data() {
  //   return {
  //     keyword: '',
  //   } 
  // },
  // methods: {
  //   search(keyword){
  //    this.$emit('search', this.keyword)
  //   }
  // },
  data() {
    return {
      keyword: '',
    } 
  },
  methods: {
    search(){
      var self = this
      axios.get('http://localhost:3000/search/' + this.keyword).then(res => {
        //console.log(res.data)
        self.$store.commit('setInventory', res.data)
      })
    }
  },
}
</script>

<style>

</style>