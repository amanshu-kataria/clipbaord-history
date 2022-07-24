document.addEventListener('copy', function (e) {
  chrome.runtime.sendMessage('gkphnbdfdknmmnkkjpdobiafmapoghbj', { text: window.getSelection().toString() });
});
