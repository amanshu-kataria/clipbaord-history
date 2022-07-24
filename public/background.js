chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ clipHistory: [] });
});

chrome.runtime.onMessage.addListener(function (request) {
  const text = request.text && request.text.trim();
  if (text) {
    chrome.storage.sync.get(['clipHistory'], (result) => {
      let history = [];
      if (result) {
        history = [...result.clipHistory];
        const existingIndex = history.indexOf(text);
        if (existingIndex > 0) history.splice(existingIndex, 1);
        history.unshift(text);
      } else {
        history.push(text);
      }
      chrome.storage.sync.set({ clipHistory: history });
    });
  }
});
