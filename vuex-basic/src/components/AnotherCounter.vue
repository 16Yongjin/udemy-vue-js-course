<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({ by: 150, duration: 500 })">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({ by: 50, duration: 500 })">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'asyncIncrement',
                'asyncDecrement'
            ])
        }
    }
</script>