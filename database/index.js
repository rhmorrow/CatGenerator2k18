const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db')


const Cat = mongoose.model('Cat', {name: String, image: String});

const get = function(cb) {
  Cat
  .find()
  .limit(10)
  .exec(cb)
}

const save = function(data) {
  console.log(Cat.find({name: data.catName}).results);
  const newCat = new Cat({name: data.catName, image: data.catPic});
  newCat.save().then(() => console.log('meow'));
}

module.exports.get = get;
module.exports.save = save;