<template>
<div>

    <h1>The User {{ id }} Page</h1>
    <hr>
    <button class="btn btn-default" @click="navigateToHome">Go to Home</button>
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
export default {

    methods: {
        navigateToHome() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
