function addIcon() {
  const box = document.querySelector('div.Box > div.Box-header');
  const nav = document.querySelector('div.file-navigation');
  if (!box || !nav) return;

  const container = document.createElement('div');
  container.className = 'vscify-container';

  const url_old = window.location.href;
  const url_new = url_old.replace('github.com', 'github.dev');

  container.innerHTML = `<a style="background-color: #ffeaa7;" class="btn ml-2 vscify-button" href="${url_new}">VS Code</a>`;
  nav.appendChild(container);
}

addIcon();
