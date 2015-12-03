"use strict";

app.Owner = function (name) {
  this.name = name;
  this.dogs = [];
  this.constructor.all.push(this);
};
app.Owner.all = [];
// Inheritance
app.Owner.prototype = new app.Mammal();
app.Owner.prototype.constructor = app.Owner;

var owner1 = new app.Owner("Pete");
var owner2 = new app.Owner("Sam");