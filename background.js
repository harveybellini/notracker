chrome.tabs.onUpdated.addListener(function(activeInfo) {
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  // since only one tab should be active and in the current window at once
  // the return variable should only have one entry
  var activeTab = tabs[0];
  console.log(activeTab.url);
  alert(activeTab.url);
});
});