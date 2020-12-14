// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#intro-text.svelte-14wcflt{display:flex;justify-content:end;text-align:center;color:white;width:60vmin;height:100px;padding-bottom:25px;font-size:calc(10px + 1vmin);z-index:1}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}