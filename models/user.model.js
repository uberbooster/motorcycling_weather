var mongoose = require('mongoose');
    Schema = mongoose.Schema;

    // Ride Model
    var userSchema = new Schema({
      _id: {

      },
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      email: {
        type: String, //check to see if there is an email type
        required: true
      }
    });


var User = mongoose.model('User', userSchema);

module.exports = User; //CommonJS - a way of exporting little packets of functionality
