document.addEventListener('copy', function (e) {
  if (chrome.runtime?.id) {
    chrome.runtime.sendMessage('gkphnbdfdknmmnkkjpdobiafmapoghbj', { text: window.getSelection().toString() });
  }
});

// var chromeRuntimePort = chrome.runtime.connect();
// chromeRuntimePort.onDisconnect.addListener(() => {
//   chromeRuntimePort = undefined;
// });

// // when using the port, always check if valid/connected
// function postToPort(msg) {
//   if (chromeRuntimePort) {
//     chromeRuntimePort.postMessage(msg);
//   }
// }

// // or
// chromeRuntimePort?.postMessage('Hey, finally no errors');
