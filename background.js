chrome.browserAction.onClicked.addListener((tabs) =>
  chrome.tabs.sendMessage(tabs.id, "tab-click")
);

chrome.tabs.onActivated.addListener((tabs) =>
  chrome.tabs.sendMessage(tabs.tabId, "tab-active")
);

chrome.runtime.onMessage.addListener((msg) =>
  changeExtensionIcon(msg.mainTabIcon)
);
