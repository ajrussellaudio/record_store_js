var RecordStore = function( name, location, balance ) {
  this.name      = name;
  this.location  = location;
  this.inventory = [];
  this.balance = balance ? balance : 1000
};

module.exports = RecordStore;