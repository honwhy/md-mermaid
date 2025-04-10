// entrypoints/example-ui.content/index.ts
import { createApp } from 'vue'
import App from './popup/App.vue'

export default defineContentScript({
  matches: [`https://github.com/*`],

  async main(ctx) {
    await injectScript(`./injected.js`, {
      keepInDom: false
    })
    const ui = createIntegratedUi(ctx, {
      position: `inline`,
      anchor: `body`,
      onMount: (container) => {
        // Create the app and mount it to the UI container
        const app = createApp(App)
        app.mount(container)
        return app
      },
      onRemove: (app) => {
        // Unmount the app when the UI is removed
        app?.unmount()
      },
    })

    // Call mount to add the UI to the DOM
    ui.mount()
  },
})
