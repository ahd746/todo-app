const mongoose = require('mongoose');

const TodosSchema = new mongoose.Schema({

  title: {
    type: String,
    trim: true,
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Todos', TodosSchema)