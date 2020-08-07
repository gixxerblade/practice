document.addEventListener("DOMContentLoaded", () => {
  let checkURL = document.getElementById("checkURL");
  let result = document.getElementById("result")
  checkURL.addEventListener("click", () => {
    chrome.tabs.getSelected(null, function (tab) {
      result.innerHTML = tab.url
    });
  });
});
