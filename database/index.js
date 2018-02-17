const mongoose = require('mongoose');
mongoose.connect('mongodb://catguy:moxie@ds137246.mlab.com:37246/heroku_r0h8h8k7')


const Cat = mongoose.model('Cat', {name: String, image: String});

const get = function(cb) {
  Cat
  .find()
  .exec(cb)
}

const save = function(data) {
  Cat.findOne({ 'name': data.catName }, function (err, cat) {
    if (err) {
      console.error(err);
    } else {
      if(cat !== null) {
        console.log(data.catName, ' is already here!')
      } else {
        const newCat = new Cat({name: data.catName, image: data.catPic});
        newCat.save().then(() => console.log('meow'));
      }
    }
  });
}

const remove = function(data) {
  Cat.remove({'name': data.catName}, function(err) {
    if(err) return handleError(err);
  })
}

module.exports.get = get;
module.exports.save = save;
module.exports.remove = remove;