function Shortkeys() {
  this.atomShortcuts = [{shortcut: "Cmd + Shift + D", description: "duplicates line"}, {shortcut: "Cmd + Ctrl + Up", description: "moves line up"}];
  this.displayShortcut = "Click the button below to generate a shortcut"
  this.displayDescription = null
}

Shortkeys.prototype.randomShortcut = function() {
  var choice = this.atomShortcuts[Math.floor(Math.random()*this.atomShortcuts.length)];
  this.displayShortcut = choice.shortcut;
  this.displayDescription = choice.description;
}
