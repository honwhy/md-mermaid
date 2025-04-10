import { marked } from 'marked'
import mermaid from 'mermaid'
import markedKatex from 'marked-katex-extension'
export default defineUnlistedScript(() => {
  console.log(`Hello from the injected script!`)
  marked.use({
    renderer: {
      code: code => code.lang === `mermaid`
        ? `<pre class="mermaid">${code.text}</pre>`
        : `<pre><code>${code.text}</code></pre>`,
    },
  },
  )
  marked.use(markedKatex({
    throwOnError: false
  }))
  window.addEventListener(`marked-request`, (s) => {
    const cs = s as CustomEvent
    const html = marked(cs.detail as string)
    window.dispatchEvent(new CustomEvent(`marked-response`, {detail: html}))
  })
  mermaid.initialize({ startOnLoad: false, theme: `dark`, darkMode: true })
  window.addEventListener(`mermaid-run`, () => {
    mermaid.run()
  })
})