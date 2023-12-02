Functionality can be added to the popup (Optional)
1. In popup.js replace '.next-page-selector' and '.prev-page-selector' with the appropriate CSS selectors for identifying the next and previous page links within the pagination.
2. Remember to replace the placeholder icon paths ('images/icon16.png', 'images/icon48.png', 'images/icon128.png') with your extension's actual icon paths.


(Instructions)
Loading the extension into Chrome:

1. Open Chrome and go to 'chrome://extensions/'.
2. Enable Developer mode.
3. Click "Load unpacked" and select the folder containing your extension files.

This setup creates a Chrome extension that listens for keyboard shortcuts ('Ctrl+N' for next page and 'Ctrl+P' for the previous page) and navigates to the appropriate link based on the selectors provided within the current active tab.
