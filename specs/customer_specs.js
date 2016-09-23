var assert = require( "assert" );
var Customer = require( "../customer" );

describe("Customer", function() {

  var customer = new Customer( "Bob", 50 )

  it("should have a name", function() {
    assert.equal( "Bob", customer.name );
  });

  it("should have money", function() {
    assert.equal( 50, customer.funds );
  });

  it("has no records yet", function() {
    assert.deepEqual( [], customer.records )
  })

})

var RecordStore = require( "../record_store" );
var Record = require( "../record" );

describe("Customer at Record Store", function() {

  var customer = new Customer( "Bob", 50 );
  var store    = new RecordStore( "HMV", "Edinburgh" );

  var cheapRecord     = new Record( "Enrique Iglesias", "Hero", 5.00 );
  var crapRecord      = new Record( "Vengaboys", "Greatest Hits", 10.00 );
  var expensiveRecord = new Record( "D'Angelo", "Voodoo", 50.00 );

  before( function() {
    store.addStock( cheapRecord );
    store.addStock( expensiveRecord );
  })

  it("can buy a record", function() {
    customer.buy( cheapRecord, store );
    assert.deepEqual( [ cheapRecord ], customer.records );
    assert.equal( 45, customer.funds );
  });

  it("can't buy a record not in stock", function() {
    customer.buy( crapRecord, store );
    assert.equal(  1, customer.records.length );
    assert.equal( 45, customer.funds );
  })

  it("can't buy a record it can't afford", function() {
    customer.buy( expensiveRecord );
    assert.equal(  1, customer.records.length );
    assert.equal( 45, customer.funds );
  })

  it("can sell a record", function() {
    customer.sell( cheapRecord );
    assert.deepEqual( [], customer.records );
    assert.equal( 48, customer.funds );
  });

  it("can't sell a record it doesn't own", function() {
    assert.equal( -1, customer.sell( expensiveRecord ) )
  })

})