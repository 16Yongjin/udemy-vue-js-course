import stocks from '../../data/stocks'

const state = {
    stocks: [],
    day: 1
}

const mutations = {
    'SET_STOCKS' (state, { stocks, day }) {
        state.stocks = stocks;
        state.day = day;

    },
    'RND_STOCKS' (state) {
        state.stocks.forEach(stock => {
            stock.price = ~~(stock.price * (1 + Math.random() - 0.453));
            if (stock.price !== 0) {
                stock.trends.push(stock.price)              
            }
        });
        state.day++;
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', { stocks, day: 1 })
    },
    randomizeStocks: ({ commit }) => {
        commit('RND_STOCKS')
    }
}

const getters = {
    stocks: state => state.stocks,
    day: state => state.day
}

export default {
    state,
    mutations,
    actions,
    getters
}