var RecordStore = function( name, location, balance ) {
  this.name      = name;
  this.location  = location;
  this.inventory = [];
  this.balance = balance ? balance : 1000
};

RecordStore.prototype.addStock = function( record ) {
  this.inventory.push( record );
}

module.exports = RecordStore;