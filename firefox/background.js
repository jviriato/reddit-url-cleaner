browserAPI.webNavigation.onBeforeNavigate.addListener(
  function(details) {
    // Check if the URL contains reddit.com
    if (details.url.includes('reddit.com')) {
      try {
        const url = new URL(details.url);
        
        // Check if the 'tl' parameter exists
        if (url.searchParams.has('tl')) {
          // Remove the 'tl' parameter
          url.searchParams.delete('tl');
          
          // Update the tab with the cleaned URL
          browserAPI.tabs.update(details.tabId, {
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

