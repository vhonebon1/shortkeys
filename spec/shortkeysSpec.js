describe ("Shortkeys", function() {
  var shortkeys;

  beforeEach(function() {
    shortkeys = new Shortkeys();
  });

  it("should return hello", function() {
    expect(shortkeys.hello()).toEqual("hello");
  });

});
