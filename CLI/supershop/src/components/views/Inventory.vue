<template>
    <div v-if="!loading" class="row">
        
        <div class="card" v-for="(item, index) in items" :key="index" style="width: 13rem;">
            <router-link tag="div" :to="{path: /ItemDetails/+ item.id}">
                <img class="card-img-top" :src="item.photo" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ item.title }}</h5>
                </div>
            </router-link>
                <div class="card-footer">
                    <span class="card-text">${{ item.price }}</span>
                    <a @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+ add</a>
                </div>
        </div>
        
    </div>
    <h2 v-else>Data loading...</h2>
</template>

<script>
import axios from 'axios'
export default {
    //props: ['items'],
    data() {
        return {
            loading: true,
            //items: []
        }
    },
    computed: {
        items() {
            return this.$store.getters.getInventory
        }
    },
    mounted() {
        this.fetchInventory()
    },
    methods: {
        addToCart(item){
            //this.$emit('newItemAdded', item)
            this.$store.dispatch('addToCart', item)
        },
        fetchInventory() {
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                //console.log(response)
                setTimeout(function() {
                    //self.items = response.data
                    self.$store.commit('setInventory', response.data)
                    self.loading = false
                }, 1000)
                
            })
        }
    },
}
</script>

<style>

</style>