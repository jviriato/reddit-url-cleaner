chrome.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    if (details.url.includes('reddit.com')) {
      try {
        const url = new URL(details.url);
        if (url.searchParams.has('tl')) {
          url.searchParams.delete('tl');
          chrome.tabs.update(details.tabId, {
            url: url.toString()
          });
        }
      } catch (error) {
        console.error('Error processing URL:', error);
      }
    }
  },
  {
    url: [{
      hostContains: 'reddit.com'
    }]
  }
);
