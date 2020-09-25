// Write a JavaScript program to determine if the current runtime environment
// is a browser so that front-end modules can run on the server (Node) without
// throwing errors.

const isBrowser = () => {
  if (typeof _BROWSER_ !== "undefined") return true;
  return false;
};
console.log(isBrowser()); // true (browser)
console.log(isBrowser()); // false (Node)
