const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    content: { type: String, required: true },
    creationDate: { type: Date, required: true },
    userId: { type: String, required: true ,ref:'User'},
    tournamentId: { type: String, required: true ,ref:'Tournament'},
});
module.exports = mongoose.model('Comment', commentSchema);