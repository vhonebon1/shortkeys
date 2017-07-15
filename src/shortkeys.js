function Shortkeys() {
  this.atomShortcuts = [{shortcut: "Cmd + Shift + D", description: "duplicates line"}, {shortcut: "Cmd + Ctrl + Up", description: "moves line up"}];
}

Shortkeys.prototype.randomShortcut = function() {
  var choice = this.atomShortcuts[Math.floor(Math.random()*this.atomShortcuts.length)];
  return choice;
}
