// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#social-links.svelte-10pe7hg{width:50vmin;height:8vmin;display:flex;flex-direction:row;justify-content:center;align-items:center;padding-top:30px;z-index:1}.icon.svelte-10pe7hg{height:7vmin;width:auto;margin:0 15px}.icon.svelte-10pe7hg:hover{scale:1.1}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}