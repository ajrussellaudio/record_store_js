var assert = require( "assert" );
var Customer = require( "../customer" );

describe("Customer", function() {

  var customer = new Customer( "Bob", 50 )

  it("should have a name", function() {
    assert.equal( "Bob", customer.name );
  })

  it("should have money", function() {
    assert.equal( 50, customer.cash );
  })

})