// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".App-header.svelte-bqhbbu{position:absolute;height:100vh;width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin);overflow:hidden}#background-image.svelte-bqhbbu{position:absolute;bottom:-100px;margin:0;width:110vw;opacity:50%;z-index:0;mix-blend-mode:overlay}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}