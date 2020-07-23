/* 
write a JS function that creates html given arguments.
Example
createHTML('p', 'stuff in the p tag') => <p>stuff in the p tag</p>
*/

let createHTML = (tag, string) => {
  let container = document.createElement("div");
  container.id = "container";
  let el = document.createElement(tag);
  el.className = "element";
  let content = document.createTextNode(string);
  container.appendChild(el);
  el.appendChild(content);
  document.body.insertAdjacentElement("afterbegin", container);
  let pre = document.createElement("pre");
  let code = document.createElement("code");
  code.className = "code"
  container.appendChild(pre);
  pre.appendChild(code);
  console.log(pre);
  code.textContent = `Result: ${el.outerHTML}`;
};

createHTML("div", "this is a div");
createHTML("p", "stuff in the p tag");
