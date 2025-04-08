# md-mermaid

demo project for intergating mermaid into marked

## issues

https://github.com/wxt-dev/wxt/issues/353

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