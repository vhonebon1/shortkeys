describe ("Shortkeys", function() {

  var shortkeys;

  beforeEach(function() {
    shortkeys = new Shortkeys();
  });

  beforeEach(function() {
    helper = new Helper();
  });

  it("has an array of atom shortcuts with descriptions", function() {
    expect(shortkeys.atomShortcuts[0].shortcut).toEqual("Cmd + Shift + D")
    expect(shortkeys.atomShortcuts[1].description).toEqual("to move a line up")
  });

  it("has a default value for display shortcut", function() {
    expect(shortkeys.displayShortcut).toEqual("Click the button below to generate a shortcut")
  });

  it("has a default value for display description", function() {
    expect(shortkeys.displayDescription).toEqual(null)
  });

  describe("randomShortcut", function() {
    it("returns a random atom shortcut and its description", function() {
      helper.stubbedRandomGenerator();
      expect(shortkeys.displayShortcut).toEqual("Cmd + Ctrl + Up")
      expect(shortkeys.displayDescription).toEqual("to move a line up")
    });
  });

  describe("_deleteShortcut", function() {
    it("deletes a shortcut that has been taught", function() {
      helper.stubbedRandomGenerator();
      expect(shortkeys.atomShortcuts.length).toEqual(2);
    });
  });

  describe("_updateAttributes", function() {
    it("updates the display fields", function() {
      helper.stubbedRandomGenerator();
      expect(shortkeys.displayShortcut).toEqual("Cmd + Ctrl + Up")
      expect(shortkeys.displayDescription).toEqual("to move a line up")
    });
  });

  describe("congratsMessage", function() {
    it("shows a message specific to test", function() {
      helper.stubbedRandomGenerator();
      spyOn(window, 'alert');
      shortkeys.congratsMessage();
      expect(window.alert).toHaveBeenCalledWith('Well done! You learned how to move a line up!');
    });

    // need test for when keys are all pressed
    // need test for when wrong keys are pressed

    it("does not show a message when no keys pressed", function() {
      helper.stubbedRandomGenerator();
      spyOn(window, 'alert');
      expect(window.alert).not.toHaveBeenCalledWith('Well done! You learned how to move a line up!');
    });
  });

  function Helper() {

    Helper.prototype.stubbedRandomGenerator = function() {
      spyOn(Math, "random").and.returnValue(0.5)
      shortkeys.randomShortcut();
    }
  }
});
