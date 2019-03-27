// contentScript.js

// inject dov
var app = document.createElement('div');
app.id = "goormide-tools";
document.body.prepend(app);

// inject script
var s = document.createElement('script');
s.src = chrome.extension.getURL('build/src.cc60f233.js');
(document.head || document.documentElement).appendChild(s);

s.parentNode.removeChild(s);