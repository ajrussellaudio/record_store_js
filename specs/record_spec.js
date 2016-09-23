var assert = require( "assert" );
var Record = require( "../record" );

describe("Record", function() {

  var record = new Record( "Beastie Boys", "Check Your Head", 19.00 )

  it("is by an artist", function() {
    assert.equal( "Beastie Boys", record.artist );
  });

  it("has a title", function() {
    assert.equal( "Check Your Head", record.title );
  });

  it("has a price", function() {
    assert.equal( 19.00, record.price );
  });

})