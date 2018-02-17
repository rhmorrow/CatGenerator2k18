const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db')

const Cat = mongoose.model('Cat', {name: String});

const get = function(cb) {
  Cat
  .find()
  .exec(cb)
}

const save = function(data) {
  const newCat = new Cat({name: data.catName});
  newCat.save().then(() => console.log('meow'));
}

module.exports.get = get;
module.exports.save = save;