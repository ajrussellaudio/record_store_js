

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
}

// RecordStore.prototype.sell = function( record ) {
//   this.balance -= record.price;
//   this.inventory
// }

module.exports = RecordStore;