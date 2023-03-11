<template>
  <div id="app">
    <!-- <router-link :to="{path: '/'}">Hello</router-link>
    <router-link :to="{path: '/test/1'}">Test 1</router-link>
    <router-link :to="{path: '/test/2'}">Test 2</router-link>
    <router-link :to="{path: '/test/3'}">Test 3</router-link> -->
    <!-- <router-view></router-view> -->
     <Navbar @search="search" />
    
      <div class="container">
        <div class="row">
          <div class="col-md-9">
            <router-view></router-view>
            <!-- <Inventory @newItemAdded="addCartItem" :items="items" /> -->
          </div>
          <div class="col-md-3">
            <Cart @itemRemoved="removeItem" :items="cart" />
          </div>
        </div>
        
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Inventory from './components/Inventory'
import Cart from './components/Cart'
//import data from './data.js'

export default {
  components: {
    Navbar, Cart
  },

  data() {
    return {
      items: [],
      cart: []
    }
  },
  // mounted() {
  //   //console.log(data)
  //   this.items = data
  // },
  methods: {
    search(keyword) {
      this.items = data.filter(item => {
        return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addCartItem(item) {
      this.cart.push(item)
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    }
  }
}
</script>

<style>
.container {
  padding-top: 10px;
}

.card {
  margin: 2px;
}
</style>
