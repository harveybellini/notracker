chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    if (details.url.indexOf("amazon.com") != -1) {
      chrome.tabs.update(details.tabId, {
        url: details.url.replace("amazon.com", "amazon.co.uk")
      });
    }
  });
  