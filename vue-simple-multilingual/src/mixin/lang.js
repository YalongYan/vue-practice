export default {
    methods: {
        $_t (key) {
            // this.locales已经过滤好了 是个对象
            let localeStr = this.locales[key]
            return localeStr
        }
    }
}