chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'summarize') {
        fetch('https://pagesummarizerai.onrender.com/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: message.url })
      })
        .then(response => response.json())
        .then(data => sendResponse({ summary: data.summary }))
        .catch(err => sendResponse({ summary: 'Failed to summarize the page.' }));
  
      // Return true to indicate async response
      return true;
    }
  });
  