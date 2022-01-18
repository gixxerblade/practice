//Write a JavaScript program to copy a string to the clipboard.
let copy = document.getElementById("copy");
let input = document.getElementById("text");

copy.addEventListener("click", (e) => {
  document.getElementById("text").select();
  document.execCommand("copy");
  input.value = "";
  e.preventDefault();
});
let paste = document.getElementById("paste");
paste.addEventListener("click", () => {
  let pastearea = document.getElementById("pastearea");
  //thanks Google! https://developers.google.com/web/updates/2018/03/clipboardapi
  // Not working on Firefox. 😭
  navigator.clipboard
    .readText()
    .then((text) => {
      pastearea.innerText = text;
      console.log("Pasted content: ", text);
    })
    .catch((err) => {
      console.error("Failed to read clipboard contents: ", err);
    });
});
