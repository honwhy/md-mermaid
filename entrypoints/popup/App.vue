<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { onMounted, ref } from 'vue'


const md = `
## mermaid
\`\`\`mermaid
pie title 2022年中国车险市场份额前五品牌（估算）
    "人保财险" : 33
    "平安财险" : 24
    "太保财险" : 18
    "中华联合" : 10
    "国寿财险" : 8
    "其他" : 7
\`\`\`
## katex
$$
c = \\pm\\sqrt{a^2 + b^2}
$$
`
const htmlContent = ref(``)
function mdToHtml() {
  setTimeout(() => {
    window.dispatchEvent(new CustomEvent(`marked-request`, {
      detail: md
    }))
  }, 20)

}
window.addEventListener(`marked-response`, (s) => {
  const cs = s as CustomEvent
  htmlContent.value = cs.detail as string
  nextTick(() => {
    window.dispatchEvent(new CustomEvent(`mermaid-run`))
  })
})
onMounted(() => {
  console.log(`onMounted`, md)
  mdToHtml()
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
