function showLoadingContent(element) {
  element.innerHTML = '';
  const html = document.createElement('div');
  html.className = 'container-loader';
  html.innerHTML = `<div class="loader__"></div><div class="loader_"></div><div id="loader-text" class="loader-text"></div>`;
  const style = document.createElement('style');
  style.textContent = `.list_notes .container div.content {display:block;} .container-loader { margin: 5cqh auto; width: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 3vh; } .loader-text { font-family: 'Poppins', sans-serif; color: #1B2E4D; display: flex; justify-content: center; align-items: center; text-transform: initial; } .words { color: #1B2E4D; font-size: 0; line-height: 1; } .words span { font-size: 1.1rem; display: inline-block; animation: move 1.5s ease-in-out infinite; font-weight: bold; } .wait:after { content: '.'; animation: dots 1.5s steps(8, end) infinite; } @keyframes dots { 0%, 20% { color: transparent; text-shadow: .25em 0 0 transparent, .5em 0 0 transparent } 40% { color: #1B2E4D; text-shadow: .25em 0 0 transparent, .5em 0 0 transparent } 60% { text-shadow: .25em 0 0 #1B2E4D, .5em 0 0 transparent } 100%, 80% { text-shadow: .25em 0 0 #1B2E4D, .5em 0 0 #1B2E4D } } @keyframes move { 0% { transform: translate(0%, 10%); } 25% { text-shadow: 0 15px 35px rgba(0, 0, 0, 0.75); } 50% { transform: translate(10%, -10%); } 75% { text-shadow: 0 15px 35px rgba(0, 0, 0, 0.75); } 100% { transform: translate(0%, 10%); } } .loader__ { width: 10%; aspect-ratio: 1; background: linear-gradient(45deg, #7CD4D1 50%, #0000 0), linear-gradient(45deg, #0000 50%, #7CD4D1 0), linear-gradient(-45deg, #7FA7FB 50%, #0000 0), linear-gradient(-45deg, #0000 50%, #7FA7FB 0), linear-gradient(#1B2E4D 0 0); background-size: 50% 50%; background-repeat: no-repeat; animation: l18 1.5s infinite; } @keyframes l18 { 0% { background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50% } 25% { background-position: 0 100%, 100% 0, 50% 50%, 50% 50%, 50% 50% } 50% { background-position: 0 100%, 100% 0, 100% 100%, 0 0, 50% 50% } 75% { background-position: 50% 50%, 50% 50%, 100% 100%, 0 0, 50% 50% } 100% { background-position: 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50% } } .loader_ { width: 35%; height: 1vh; border-radius: 40px; color: #60B99A; border: 2px solid; position: relative; overflow: hidden; } .loader_::before { content: ""; position: absolute; margin: 2px; width: 14px; top: 0; bottom: 0; left: -20px; border-radius: inherit; background: currentColor; box-shadow: -10px 0 12px 3px currentColor; clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%, -30px 50%); animation: l14 1.5s infinite linear; } @keyframes l14 { 100% { left: calc(100% + 20px) } }`;

  element.appendChild(html);
  element.appendChild(style);
  js();

  function js() {
    const text = 'Pustanotes sedang memuat';
    const loaderText = element.querySelector('#loader-text');
    const wordsContainer = document.createElement('div');
    wordsContainer.className = 'words';
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.innerHTML = char === ' ' ? '&nbsp;' : char;
      span.style.animationDelay = `${index * 0.01}s`;
      wordsContainer.appendChild(span);
    });
    const span = document.createElement('span');
    span.className = 'wait';
    wordsContainer.appendChild(span);
    loaderText.appendChild(wordsContainer);
  }
}

function loadContent() {
  const loadingElem = document.createElement('pn-loading');
  loadingElem.style.cssText = `width: 100vw;height: 100vh;background-color: #DCF2F1;z-index: 1001;position: fixed;top: 0;display: flex;justify-content: center;align-items: center;`;
  document.body.appendChild(loadingElem);
  showLoadingContent(loadingElem);
  const content = document.querySelector('pn-content');
  const contentElement = document.createElement('pn-notes-wrapper');
  content.appendChild(contentElement);
}

import '../components/pn_header.js';
import '../components/pn_notes_wrapper.js';
import '../components/pn_notelist.js';
import '../components/pn_noteitems.js';
import '../components/pn_noteItem.js';
import '../components/pn_footer.js';

loadContent();

setTimeout(() => {
  document.body.removeChild(document.querySelector('pn-loading'));
}, 3000);
