

var RecordStore = function( name, location, balance ) {
  this.name      = name;
  this.location  = location;
  this.inventory = [];
  this.balance = balance ? balance : 1000
};

RecordStore.prototype.addStock = function( record ) {
  this.inventory.push( record );
};

RecordStore.prototype.listInventory = function() {
  var inventoryAsStrings = this.inventory.map( function( record ) {
    var prettyString = "";
    prettyString += record.artist;
    prettyString += " - ";
    prettyString += "'" + record.title + "'";
    return prettyString;
  });
  return inventoryAsStrings.join('\n');
};

RecordStore.prototype.sell = function( record ) {
  this.balance += record.price;
  var index = this.inventory.indexOf( record );
  this.inventory.splice(index, 1);
};

RecordStore.prototype.audit = function() {
  var output = {};
  
  output.stockValue = 0;
  for( var i = 0; i < this.inventory.length; i++ ) {
    var record = this.inventory[i];
    output.stockValue += record.price;
  };
  output.balance = this.balance;
  return output;
};

RecordStore.prototype.prettyAudit = function() {
  var audit = this.audit();
  return "Balance: £" + audit.balance + "\nTotal Stock Value: £" + audit.stockValue;
};

module.exports = RecordStore;