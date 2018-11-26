var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var articleSchema = new Schema({
  title: {
    type: String,
    required: "Title Required"
  },
  content: {
    type: String
  },
  reading_time:{
    type: Number,
    required: "Reading Time Required"
  }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;