const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  Message: {
    type: String,
    required: true,
  },
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
