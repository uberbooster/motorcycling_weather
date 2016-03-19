var mongoose = require('mongoose');
    Schema = mongoose.Schema;

    // Ride Model
    var rideSchema = new Schema({
      start: {
        type: String,
        required: true
      },
      end: {
        type: String,
        required: true
      },
      stops: {
        type: Array,
        required: false
      },
      startTime: {
        type: Date,
        required: false
      },
      avoidHighways: {
        type: Boolean,
        required: false
      },
      avoidTolls: {
        type: Boolean,
        required: false
      },
      avoidFerries: {
        type: Boolean,
        required: false
      },
      mode: {
        type: String,
        required: true
      },
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    });
    

var Ride = mongoose.model('Ride', rideSchema);


module.exports = Ride; //CommonJS - a way of exporting little packets of functionality
