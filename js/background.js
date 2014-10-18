/*global chrome */
var toggleIcons = ["img/icon32_off.png", "img/icon32_on.png"];
var current = false;

var appTrigger = function () {
  chrome.browserAction.setIcon({
    path: toggleIcons[+current]
  });

  chrome.tabs.query({ currentWindow: true, active: true }, function (tab) {
    var data = {};
    data[tab[0].url] = current;

    chrome.storage.sync.set(data);
  });

  chrome.tabs.insertCSS({
    file: 'css/grid.css'
  });

  if (current) {
    chrome.tabs.executeScript({
      file: 'js/grid-add.js'
    });
  } else {
    chrome.tabs.executeScript({
      file: 'js/grid-remove.js'
    });
  }
};

chrome.browserAction.onClicked.addListener(function () {
  current = !current;
  appTrigger();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.storage.sync.get(tab.url, function (items) {
      if (undefined !== items[tab.url] && items[tab.url]) {
        current = items[tab.url];
      } else {
        current = false;
      }

      appTrigger();
    });
  }
});
