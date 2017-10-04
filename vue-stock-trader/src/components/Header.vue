<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" active-class="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" active-class="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="resetLife">Go to Han River</a></li>
                    <li><a href="#" @click="end10Day">End 10 Day </a></li>                    
                    <li><a href="#" @click="endDay">End Day {{ day }}</a></li>
                    <li class="dropdown" 
                        :class="{open: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen">
                        <a 
                        href="#" 
                        class="dropdown-toggle" 
                        data-toggle="dropdown" 
                        role="button" 
                        aria-haspopup="true" 
                        aria-expanded="false">Save & Load <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            isDropdownOpen: false
        }
    },
    computed: {
        ...mapGetters([
            'funds',
            'day',
            'stockPortfolio',
            'stocks'
        ])

    },
    methods: {
        ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData',
            resetData: 'initStocks'
        }),
        endDay() {
            this.randomizeStocks()
        },
        end10Day() {
            for(var i=0;i<10;i++) {
                this.randomizeStocks()                
            }
        },
        saveData() {
            const data = {
                funds: this.funds,
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks,
                day: this.day
            };

            this.$http.put('data.json', data);
        },
        loadData() {
            this.fetchData();
        },
        resetLife() {
            const isReset = confirm('Want to reset your life?')
            if (isReset) {
                location.reload();
            }
            
        }
    }
}
</script>

<style scoped>

</style>