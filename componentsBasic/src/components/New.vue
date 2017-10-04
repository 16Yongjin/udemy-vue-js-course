<template>
<div>
    <h3>New !</h3>
    <button @click="counter++">INCREASE</button>
    <p>{{ counter }}</p>
</div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    destroyed() {
        console.log('desroyr')
    },
    deactivated() {
        console.log('Deactivated');
    },
    activated() {
        console.log('Activated')
    }
}
</script>

<style scoped>

</style>