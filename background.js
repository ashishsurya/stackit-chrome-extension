chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "READ_FILE") {
    console.log(request.fileContents);
    sendResponse("File contents received!")
  }
})