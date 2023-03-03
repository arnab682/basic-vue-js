<template>
  <div id="app">
    
     <Navbar />
    
      <div class="container row">
        <div class="col-md-9">
          <Inventory />
        </div>
        <div class="col-md-3">
          <Cart />
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import Cart from './components/Cart'

export default {
  components: {
    Navbar, Inventory, Cart
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
