<template>
    <div class="row">
        
        <div class="card" v-for="(item, index) in items" :key="index" style="width: 13rem;">
            <img class="card-img-top" :src="item.Photo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">${{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-primary">+Add</a>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: ['items'],
    methods: {
        addToCart(item){
            this.$emit('newItemAdded', item)
        }
    },
}
</script>

<style>

</style>