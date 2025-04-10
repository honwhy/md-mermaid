export default defineBackground(() => {
  console.log(`Hello background!`, { id: browser.runtime.id })
  browser.tabs.onUpdated.addListener((tabId, change, tab) => {
    // Check if the tab is in normal state (new tab)
    console.log(`tab.url=>`, tab.url)
    if (tab.url?.startsWith(`https://github.com`)) {
      // Update the URL to your desired URL
      //browser.tabs.update(tab.id!, { url: tab.url.replace(`https://github.com`, `https://kkgithub.com`) })
    }
    if (tab.url?.startsWith(`https://raw.githubusercontent.com`)) {
      // Update the URL to your desired URL
      //browser.tabs.update(tab.id!, { url: tab.url.replace(`https://raw.githubusercontent.com`, `https://raw.kkgithub.com`) })
    }
  })
})
