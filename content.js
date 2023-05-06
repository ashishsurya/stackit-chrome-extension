window.addEventListener('dragenter', (e) => {
  e.preventDefault();
});

window.addEventListener('dragover', (e) => {
  e.preventDefault();
});

window.addEventListener('drop', async (e) => {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  const fileContents = await file.text();

  chrome.runtime.sendMessage(
    { fileContents, type: 'READ_FILE' },
    (response) => {
      console.log(response);
    }
  );
});
