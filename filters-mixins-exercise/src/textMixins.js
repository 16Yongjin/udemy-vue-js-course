export const textMixin = {
    data() {
        return {
            text: 'Hello world!'
        }
    },
    computed: {
        filteredText() {
            return this.text.split('').reverse().join('')
        }
    }
}