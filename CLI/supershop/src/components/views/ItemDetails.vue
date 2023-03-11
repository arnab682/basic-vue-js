<template>
    <div v-if="item" class="row">
        <div class="col-md-6">
            <img class="card-img-top" :src="item.photo" alt="Card image cap">
        </div>
        <div class="col-md-6">
            <h1>{{ item.title }}</h1>
            <h3 class="float-right">Description</h3><br><hr>
            <p>{{ item.description }}</p><hr>
            <span><b>Price:</b> {{ item.price }}</span>
            <a @click="addToCart(item)" class="btn btn-sm btn-primary float-right">+ add</a>
        </div>
    </div>
    <h4 v-else>Data loading...</h4>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            item: null
        }
    },
    mounted() {
        this.fetchItem()
    },
    methods: {
        fetchItem() {
            var self = this
            axios.get('http://localhost:3000/item/'+this.$route.params.id).then(res => {
                //console.log(res);
                this.item = res.data
            })
        },
        addToCart(item){
            //this.$emit('newItemAdded', item)
            this.$store.dispatch('addToCart', item)
        },
    },
}
</script>

<style>

</style>