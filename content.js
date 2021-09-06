const nav = document.querySelector("div.file-navigation");
const container = document.createElement("div");
container.className = "vsc-container";

const url_old = window.location.href;
const url_new = url_old.replace("github.com", "github.dev");

container.innerHTML = `<a class="btn btn-danger ml-2" href="${url_new}">VS Code</a>`;
nav.appendChild(container);
