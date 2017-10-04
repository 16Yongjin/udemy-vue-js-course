<template>
    <div>
        <div class="title">
            <slot name="title"><h2>Hello world!</h2></slot>
        </div>
        <hr>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        border: 1px, soild, #ccc;
        box-shadow: 1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h2 {
        color:darkkhaki
    }

    .title {
        color: red;
    }
</style>