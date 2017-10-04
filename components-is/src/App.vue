<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button @click="toLoad = 'appBlue'" class="btn btn-primary">Load Blue Template</button>
                <button @click="toLoad = 'appGreen'" class="btn btn-success">Load Green Template</button>
                <button @click="toLoad = 'appRed'" class="btn btn-danger">Load Red Template</button>
                <hr>

                <component :is="toLoad">
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data() {
            return {
                toLoad: 'blue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        } 

    }
</script>

<style>
</style>
