document.getElementById('summarize-btn').addEventListener('click', async () => {
    const loadingDiv = document.getElementById('loading');
    const summaryDiv = document.getElementById('summary');
    loadingDiv.style.display = 'block';
    summaryDiv.textContent = '';
  
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      const response = await chrome.runtime.sendMessage({ action: 'summarize', url: tab.url });
      loadingDiv.style.display = 'none';
      summaryDiv.textContent = response.summary;
    } catch (error) {
      loadingDiv.style.display = 'none';
      summaryDiv.textContent = 'Error summarizing the page.';
    }
  });
  