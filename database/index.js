const mongoose = require('mongoose');
mongoose.connect('mongodb://catguy:moxie@ds137246.mlab.com:37246/heroku_r0h8h8k7')


const Cat = mongoose.model('Cat', {name: String, image: String});

const get = function(cb) {
  Cat
  .find()
  .exec(cb)
}

const save = function(data) {
  console.log(Cat.find({name: data.catName}).results);
  const newCat = new Cat({name: data.catName, image: data.catPic});
  newCat.save().then(() => console.log('meow'));
}

module.exports.get = get;
module.exports.save = save;