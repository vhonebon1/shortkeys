describe ("Shortkeys", function() {

  var shortkeys;

  beforeEach(function() {
    shortkeys = new Shortkeys();
  });

  it("has an array of atom shortcuts with descriptions", function() {
    expect(shortkeys.atomShortcuts[0].shortcut).toEqual("Cmd + Shift + D")
    expect(shortkeys.atomShortcuts[1].description).toEqual("moves line up")
  });

  it("has a default value for display shortcut", function() {
    expect(shortkeys.displayShortcut).toEqual("Click the button below to generate a shortcut")
  });

  it("has a default value for display shortcut", function() {
    expect(shortkeys.displayDescription).toEqual(null)
  });

  describe("randomShortcut", function() {
    it("returns a random atom shortcut and its description", function() {
      spyOn(Math, "random").and.returnValue(0.5)
      shortkeys.randomShortcut();
      expect(shortkeys.displayShortcut).toEqual("Cmd + Ctrl + Up")
      expect(shortkeys.displayDescription).toEqual("moves line up")
    });
  });

  describe("_deleteShortcut", function() {
    it("should delete a shortcut that has been taught", function() {
      spyOn(Math, "random").and.returnValue(0.5)
      shortkeys.randomShortcut();
      expect(shortkeys.atomShortcuts.length).toEqual(2);
    });
  });

  describe("_updateAttributes", function() {
    it("should update the display fields", function() {
      spyOn(Math, "random").and.returnValue(0.5)
      shortkeys.randomShortcut();
      expect(shortkeys.displayShortcut).toEqual("Cmd + Ctrl + Up")
      expect(shortkeys.displayDescription).toEqual("moves line up")
    });
  });
});
