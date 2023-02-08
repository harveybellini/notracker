// background.js

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;
  
    // Your updated regex function here
    var newUrl = currentUrl.replace(/\?.*/, '');
  
    chrome.tabs.update(currentTab.id, { url: newUrl });
  });
});
