<template>
  <div id="app">
    {{$_t('name')}}
  </div>
</template>

<script>
import mixinLang from './mixin/lang'
import locales from './../locales'
const lang = navigator.language

export default {
  name: 'App',
  data () {
    return {
       locales:  (() => {
          let useLang = /^zh/.test(lang) ? 'zh-CN' : /^en/.test(lang) ? 'en' : lang
          // Object.keys 获取可枚举的属性 如果浏览器的语言不是英语 中文， 而且传递的lang参数也不是这两种之一，就默认使用 zh-CN
          console.log(Object.keys(locales))
          if (!Object.keys(locales).includes(useLang)) useLang = 'zh-CN'
          return locales[useLang]
      })(),
    }
  },
  mixins: [mixinLang],
  methods: {
  }
}
</script>

<style lang='scss'>

</style>
