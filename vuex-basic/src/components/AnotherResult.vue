<template>
    <div>
        <p>Counter is: {{ counter }}</p>
        <p>Number of Clicks: {{ clicks }}</p>
        <p>{{ a }}</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
    computed: {
        a() {
            return 'hello'
        },
        ...mapGetters({
            counter: types.DOUBLE_COUNTER,
            clicks: types.CLICK_COUNTER
        })
    }
}
</script>