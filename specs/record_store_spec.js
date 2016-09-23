var assert = require( "assert" );
var RecordStore = require( "../record_store" );

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

  it("has a bank balance", function() {
    assert.equal( 1000, recordStore.balance );
  });

})

var Record = require( "../record" );

describe("Record Store with Records", function() {

  var recordStore = new RecordStore( "Big Al's Record Store", "Glasgow" );
  var record1 = new Record( "Beastie Boys", "Check Your Head", 19.00 )
  var record2 = new Record( "Michael Jackson", "Thriller", 12.00 )

  it("can add records to inventory", function() {
    recordStore.addStock( record1 );
    recordStore.addStock( record2 );
    var firstRecord = recordStore.inventory[0];
    assert( Record.prototype.isPrototypeOf( firstRecord ) );
  });

  it("can list its inventory", function() {
    var expectedReturn = "Beastie Boys - 'Check Your Head'\nMichael Jackson - 'Thriller'";
    assert.equal( expectedReturn, recordStore.listInventory() )
  });

  it("can sell a record", function() {
    recordStore.sell( record1 );
    assert.equal( 1, recordStore.inventory.length );
    assert.equal( 1019, recordStore.balance );
  });

}) 