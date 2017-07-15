describe ("Shortkeys", function() {

  var shortkeys;

  beforeEach(function() {
    shortkeys = new Shortkeys();
  });

  it("has an array of atom shortcuts with descriptions", function() {
    expect(shortkeys.atomShortcuts[0].shortcut).toEqual("Cmd + Shift + D")
    expect(shortkeys.atomShortcuts[1].description).toEqual("moves line up")
  });

  describe("randomShortcut", function() {
    it("returns a random atom shortcut", function() {
      spyOn(Math, "random").and.returnValue(0.5)
      expect(shortkeys.randomShortcut()).toEqual({shortcut: "Cmd + Ctrl + Up", description: "moves line up"})
    });
  });
});
