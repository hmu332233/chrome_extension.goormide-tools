// contentScript.js



var s = document.createElement('script');
s.src = chrome.extension.getURL('build/app.js');
(document.head || document.documentElement).appendChild(s);

s.parentNode.removeChild(s);

var app = document.createElement('goormide-tools');
document.body.prepend(app);


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  switch (message.action) {
    case 'terminal_commands_palette':
      const terminalCommandsPaletteEvent = new CustomEvent('terminal_commands_palette', { detail: '' });
      document.dispatchEvent(terminalCommandsPaletteEvent);
    break;
  }
  return true;
});