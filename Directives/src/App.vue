<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some Text'"></p>
                <p v-html="'<strong>Some Text</strong>'"></p>
                <p v-text="'Some Text'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-local-high:background.delayed.blink="'red'">Custom Directives</h1>
                <p v-high:background.delayed="'red'">Color this</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    directives: {
        'local-high': {
            bind(el, binding, vnode) {
                var delay = 0;
                if (binding.modifiers['delayed']) {
                    delay = 3000;
                }

                if (binding.modifiers['blink']) {
                    let mainColor = binding.value;
                    let secondcolor = 'blue'
                    let currentColor = mainColor;

                    setTimeout(() => {
                        setInterval(() => {
                            currentColor == secondcolor ? currentColor = mainColor : currentColor = secondcolor

                            if (binding.arg === "background") {
                                el.style.backgroundColor = currentColor;
                            }
                            else {
                                el.style.color = currentColor;
                            }

                        }, 1000)


                    }, delay)



                } else {
                    setTimeout(() => {
                        if (binding.arg === "background") {
                            el.style.backgroundColor = binding.value;
                        }
                        else {
                            el.style.color = binding.value;
                        }

                    }, delay)
                }
            }
        }
    }
}
</script>

<style>

</style>
