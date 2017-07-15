function Shortkeys() {
  this.atomShortcuts = [{shortcut: "Cmd + Shift + D", description: "to duplicate a line"}, {shortcut: "Cmd + Ctrl + Up", description: "to move a line up"}, {shortcut: "Ctrl + Shift + K", description: "to delete a line"}];
  this.displayShortcut = "Click the button below to generate a shortcut"
  this.displayDescription = null
}

Shortkeys.prototype.randomShortcut = function() {
  var choice = this.atomShortcuts[Math.floor(Math.random()*this.atomShortcuts.length)];
  this._updateAttributes(choice.shortcut, choice.description);
  this._deleteShortcut(choice);
}

Shortkeys.prototype._deleteShortcut = function(shortcut) {
  var index = this.atomShortcuts.indexOf(shortcut);
  this.atomShortcuts.splice(index, 1);
}

Shortkeys.prototype._updateAttributes = function(shortcut, description) {
  this.displayShortcut = shortcut;
  this.displayDescription = description;
}

Shortkeys.prototype.congratsMessage = function() {
  alert("Well done! You learned how " + this.displayDescription + "!")
}
