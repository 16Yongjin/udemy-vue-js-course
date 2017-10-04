export const fruitMixin = {
    data() {
        return {
            fruits: ['Apple', 'Banna', 'Mango', 'Melon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((e) => e.toLowerCase().match(this.filterText.toLowerCase()))
        }
    },
    created() {
        console.log("CREATED VVV");
    }
};