<template>
    <div id="chart">
        <g class="points">
            <div
            :point-data="trends"
            >

            </div>
        </g>
    </div>
</template>

<script>
export default {
    props: ['trends'],
    mounted() {
        d3.selectAll('#chart').data(this.trends).enter()
    }
}
</script>

<style scoped>

</style>