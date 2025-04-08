<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { marked } from 'marked'
import mermaid from 'mermaid'
import { onMounted, ref } from 'vue'

marked.use({
  renderer: {
    code: code => code.lang === `mermaid`
      ? `<pre class="mermaid">${code.text}</pre>`
      : `<pre><code>${code.text}</code></pre>`,
  },
},
)
mermaid.initialize({ startOnLoad: true })
const md = `
\`\`\`mermaid
pie title 2022年中国车险市场份额前五品牌（估算）
    "人保财险" : 33
    "平安财险" : 24
    "太保财险" : 18
    "中华联合" : 10
    "国寿财险" : 8
    "其他" : 7
\`\`\`
`
const htmlContent = ref(``)
onMounted(() => {
  console.log(`onMounted`, md)
  const parsed = marked.parse(md)
  console.log(`parsed=>`, parsed)
  htmlContent.value = parsed
})
</script>

<template>
  <div>
    <a href="https://wxt.dev" target="_blank">
      <img src="@/assets/mermaid.svg" class="logo" alt="WXT logo">
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo">
    </a>
  </div>
  <HelloWorld msg="WXT + Vue" />
  <div v-html="htmlContent" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #54bc4ae0);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
