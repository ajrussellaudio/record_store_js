var Customer = function( name, funds ) {
  this.name = name;
  this.funds = funds;
  this.records = [];
}

Customer.prototype.buy = function( record, store ) {
  if( record.price < this.funds ) {
    var success = store.sell( record );
    if( success > 0 ) {
      this.funds -= record.price;
      this.records.push( record );
    }
  }
}

Customer.prototype.sell = function( record ) {
  var index = this.records.indexOf( record );
  var secondHandFactor = 0.6;
  if( index >= 0 ) {
    this.funds += ( record.price * secondHandFactor );
    this.records.splice(index, 1);
    return 1;
  } else {
    return -1;
  }
};

module.exports = Customer;