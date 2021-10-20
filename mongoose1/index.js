const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/dholikart');
//   console.log("We are connected to MongoDB...");
}

var kittySchema = new mongoose.Schema({
    name: String
  });

kittySchema.methods.speak = function speak() {
    const greeting = "Meow name is " + this.name;
    console.log(greeting);
};
  

var Kitten = mongoose.model('dholiKitty', kittySchema);

var dholiKitty = new Kitten({ name: 'dholiKitty' });
var dholiKitty2 = new Kitten({ name: 'dholiKitty2' });
// console.log(dholiKitty.name); // 'Silence'

// dholiKitty.speak();

dholiKitty.save(function(err, dholiKitty) {
    if (err) return console.error(err);
    // dholiKitty.speak();
});
dholiKitty2.save(function(err, k) {
    if (err) return console.error(err);
    // k.speak();
});

Kitten.find({name: 'dholiKitty'}, function(err,kittens){
    if (err) return console.error(err);
    console.log(kittens);
})