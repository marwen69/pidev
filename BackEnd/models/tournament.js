const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    creationDate: { type: Date, required: true },
    startDate: { type: Date, required: true }, //date and time
    endDate: { type: Date, required: true },
    game: { type: String, required: true },
    participants: { type: Array, required: true }, //array of userIds (strings)
    maxParticipants: { type: Number, required: true }, //max number of participants
    winner: { type: String, required: true },//userId of the winner
    categoryId: {type:mongoose.Schema.Types.ObjectId, ref:'Category'},
});

module.exports = mongoose.model('Tournament', tournamentSchema);
