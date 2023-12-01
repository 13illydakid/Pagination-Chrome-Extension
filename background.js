chrome.commands.onCommand.addListener(function (command) {
  if (command === "next_page") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "window.location.href = document.querySelector('.next-page-selector').href;"
      });
    });
  } else if (command === "previous_page") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(tabs[0].id, {
        code: "window.location.href = document.querySelector('.prev-page-selector').href;"
      });
    });
  }
});
