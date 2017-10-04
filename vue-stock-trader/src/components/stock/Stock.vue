<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success" :class="{'panel-danger': !stock.price}">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>(Price: {{ stock.price | currency }} | max: {{ maxBuy }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input 
                        type="number" 
                        class="form-control"
                        placeholder="Quantity"
                        v-model="quantity"
                        :class="{danger : insufficientFunds}"
                        >
                </div>
                <div class="pull-right">
                    <button 
                        class="btn btn-success"
                        @click="buyStock"
                        :disabled="insufficientFunds || quantity <= 0 || stock.price===0 || !Number.isInteger(Number(quantity))"
                        >{{ insufficientFunds ? 'Insufficient Fund' : 'Buy'}}</button>
                </div>
               
            </div>
             <div class="panel-body">
                 <app-graph :trends="stock.trends"></app-graph>
                 <app-dtres :data="stock.trends"></app-dtres>
            </div>
        </div>
    </div>
</template>

<script>
import Graph from './Graph.vue'
import dtres from './d3test.vue'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: null
        }
    },
     computed: {
        funds() {
            return this.$store.getters.funds
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        },
        maxBuy() {
            
            return ~~(this.funds / this.stock.price);
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: +(this.quantity),
                trends: this.stock.trends
            }
            this.$store.dispatch('buyStock', order)
            this.quantity = null
        },
        log(e) {
            console.log(e);
        }
    },
    components: {
        appGraph: Graph,
        appDtres: dtres
    }
}
</script>

<style scoped>
.danger {
    border: 1px solid red;
}
</style>