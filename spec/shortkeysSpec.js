describe ("Shortkeys", function() {

  var shortkeys;

  beforeEach(function() {
    shortkeys = new Shortkeys();
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
      stubbedRandomGenerator();
      expect(shortkeys.displayShortcut).toEqual("Ctrl + Shift + K")
      expect(shortkeys.displayDescription).toEqual("to delete a line")
    });
  });

  describe("_deleteShortcut", function() {
    it("deletes a shortcut that has been taught", function() {
      stubbedRandomGenerator();
      expect(shortkeys.atomShortcuts.length).toEqual(4);
    });
  });

  describe("_updateAttributes", function() {
    it("updates the display fields", function() {
      stubbedRandomGenerator();
      expect(shortkeys.displayShortcut).toEqual("Ctrl + Shift + K")
      expect(shortkeys.displayDescription).toEqual("to delete a line")
    });
  });

  describe("congratsMessage", function() {
    it("shows a message specific to test", function() {
      stubbedRandomGenerator();
      spyOn(window, 'alert');
      shortkeys.congratsMessage();
      expect(window.alert).toHaveBeenCalledWith('Well done! You learned how to delete a line!');
    });

// these two tests are not working
    it("shows a message when correct keys are pressed", function() {
      stubbedRandomGenerator();
      var e1 = jQuery.Event("keydown", {keyCode: 17});
      var e2 = jQuery.Event("keydown", {keyCode: 91});
      var e3 = jQuery.Event("keydown", {keyCode: 38});
      jQuery("body").trigger(e1).trigger(e2).trigger(e3)
      spyOn(window, 'alert');
      expect(window.alert).toHaveBeenCalledWith('Well done! You learned how to delete a line!');
    });

    it("does not show a message when wrong keys are pressed", function() {
      stubbedRandomGenerator();
      var e = jQuery.Event("keydown", {keyCode: 64});
      jQuery("body").trigger(e)
      spyOn(window, 'alert');
      expect(window.alert).not.toHaveBeenCalledWith('Well done! You learned how to delete a line!');
    });

    it("does not show a message when no keys pressed", function() {
      stubbedRandomGenerator();
      spyOn(window, 'alert');
      expect(window.alert).not.toHaveBeenCalledWith('Well done! You learned how to delete a line!');
    });
  });

  function stubbedRandomGenerator() {
    spyOn(Math, "random").and.returnValue(0.5)
    shortkeys.randomShortcut();
  }
});
