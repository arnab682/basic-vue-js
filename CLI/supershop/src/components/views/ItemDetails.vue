<template>
    <div v-if="item" class="row">
        <div class="col-md-6">
            <img class="card-img-top" :src="item.photo" alt="Card image cap">
        </div>
        <div class="col-md-6">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <span>{{ item.price }}</span>
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
        }
    },
}
</script>

<style>

</style>