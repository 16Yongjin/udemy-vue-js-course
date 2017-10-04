<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-myon:click="hello">Button</button>

                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <br/>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits">{{ fruit }}</li>
                </ul>
                <hr/>

                <app-list></app-list>

            </div>
        </div>
    </div>
</template>

<script>
import { fruitMixin } from './fruitMixin'

import List from './List.vue';
    export default {
        mixins: [ fruitMixin ],
        data() {
            return {
                text: 'Hello!!!'
            }
        },
        filters: {
            toUppercase(value) {
                return typeof value === 'string' ? value.toUpperCase() : value
            }
        },
        directives: {
            'myon': {
                bind(el, binding, vnode) {
                    el.addEventListener(binding.arg, binding.value)
                }
            }
        },
        methods: {
            hello() {
                console.log('Hello!');
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>
</style>
