import { defineConfig } from 'wxt'
import toUtf8 from './plugins/vite-plugin-to-utf8'

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: [`@wxt-dev/module-vue`],
  manifest: {
    web_accessible_resources: [
      {
        resources: [`*.png`, `*.svg`],
        matches: [`<all_urls>`],
      },
    ],
  },
  vite: () => {
    // const contentJsPath = `.output/${env.browser}-mv${env.manifestVersion}/content-scripts`;
    return {
      plugins: [toUtf8()],
    }
  },
})
