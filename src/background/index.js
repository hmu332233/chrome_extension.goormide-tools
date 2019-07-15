chrome.commands.onCommand.addListener(command => {
  if (command === 'terminal_commands_palette') {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'terminal_commands_palette' });
    });
  }
});
