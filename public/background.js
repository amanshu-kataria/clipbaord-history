function genUID() {
  return Math.random().toString(16).substring(2, 8) + '-' + Math.random().toString(16).substring(2, 8);
}

function injectScript() {
  // inject script to all active tabs
  chrome.tabs.query({}, (tabs) => {
    const contentjsFile = chrome.runtime.getManifest().content_scripts[0].js[0];
    tabs.forEach((currentTab) => {
      // don't inject for tabs with url having: chrome://
      if (currentTab.url) {
        chrome.scripting.executeScript({
          target: { tabId: currentTab.id, allFrames: true },
          files: [contentjsFile]
        });
      }
    });
  });
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ clipHistory: [] });
  injectScript();
});

chrome.runtime.onMessage.addListener(function (request, sender) {
  const text = request.text && request.text.trim();
  if (text) {
    const newEntry = {
      id: genUID(),
      text,
      source: sender.url,
      time: new Date()
    };
    chrome.storage.sync.get(['clipHistory'], (result) => {
      let history = [];
      if (result) {
        history = [...result.clipHistory];
        const existingIndex = history.indexOf(text);
        if (existingIndex > 0) history.splice(existingIndex, 1);
        history.unshift(newEntry);
      } else {
        history.push(newEntry);
      }
      chrome.storage.sync.set({ clipHistory: history });
    });
  }
});
