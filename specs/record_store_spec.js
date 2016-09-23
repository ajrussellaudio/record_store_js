var assert = require( "assert" );
var Record = require( "../record" );

describe("Record Store", function() {

  var recordStore = new RecordStore( "Big Al's Record Store", "Glasgow" );

  it("has a name", function() {
    assert.equal( "Big Al's Record Store", recordStore.name );
  });

  it("is in the best city on planet earth", function() {
    assert.equal( "Glasgow", recordStore.location );
  });

  it("is empty at start", function() {
    assert.deepEqual( [], recordStore.inventory );
  });

})