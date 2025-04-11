# md-mermaid

demo project for intergating mermaid into marked

## issues

https://github.com/wxt-dev/wxt/issues/353

https://github.com/wxt-dev/wxt/issues/357

## ideas

[redirector extension](https://blog.csdn.net/u012223913/article/details/121271957)

[URL Auto Redirector](https://github.com/URLAutoRedirector/URLAutoRedirector)

[kkgithub faq](https://help.kkgithub.com/questions/)

[chrome插件获取window挂载的属性](https://cloud.tencent.com/developer/article/2070877)

[浏览器插件ContentScript分包问题](https://mp.weixin.qq.com/s/Tt-cJRANVxymrj1LcBco0w)

[WXT Content Script Chunking Issue](https://honwhy.wang/posts/2025-04-11-wxt-content-script-chunking-issue)

## fix

https://github.com/qiweiii/markdown-sticky-notes/blob/master/scripts/vite-plugin-to-utf8.ts

## setup recommend

add `web-ext.config.ts` at project root

```
// file web-ext.config.ts
import {defineWebExtConfig} from 'wxt'

export default defineWebExtConfig({
  disabled: true
})
```
