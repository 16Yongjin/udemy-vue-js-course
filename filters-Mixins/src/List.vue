<template>
    <div>

        <h1>Filters & Mixins</h1>
        <br/>
        <hr>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'
export default {
    mixins: [fruitMixin],
    created() {
        console.log("Compnent created!"); // 믹스인에 있는 것을 오버라이드함
    }
}
</script>

<style>

</style>
