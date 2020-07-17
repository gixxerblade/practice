let url = document.getElementById("url");

let displayUrl = () => {
    url.innerHTML = `The full URL of this page is ${window.location.href}`;
};

displayUrl();
