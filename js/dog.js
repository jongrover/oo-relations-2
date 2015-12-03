"use strict";

app.Dog = function (name, owner) {
  this.name = name;
  this.owner = owner;
  this.owner.dogs.push(this);
  this.constructor.all.push(this);
};
app.Dog.all = [];
app.Dog.prototype = new app.Mammal();
app.Dog.prototype.constructor = app.Dog;

new app.Dog("Maxine", owner1);
new app.Dog("Fido", owner1);
new app.Dog("Barkley", owner2);
