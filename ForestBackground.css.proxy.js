// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".layer.svelte-1bktn8v{position:absolute;bottom:-100px;margin:0;width:110vw;opacity:50%;z-index:0;mix-blend-mode:overlay}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}