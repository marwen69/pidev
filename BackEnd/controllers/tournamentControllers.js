const tournament = require('../models/tournament');

//create a tournament
exports.createTournament = (req, res, next) => {
    try{
        const newTournament = new tournament({
            name: req.body.name,
            description: req.body.description,
            creationDate: req.body.creationDate,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            game: req.body.game,
            participants: req.body.participants,
            maxParticipants: req.body.maxParticipants,
            winner: req.body.winner,
            categoryId: req.body.categoryId,
        });
        newTournament.save();
        res.status(201).json({
            message: 'Tournament created successfully!'
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//update a tournament
exports.updateTournament = (req, res, next) => {
    try {
        const updatedTournament = new tournament({
            _id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            creationDate: req.body.creationDate,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            game: req.body.game,
            participants: req.body.participants,
            maxParticipants: req.body.maxParticipants,
            winner: req.body.winner,
            categoryId: req.body.categoryId,
        });
        tournament.updateOne({ _id: req.params.id }, updatedTournament).then(result => {
            res.status(200).json({
                message: 'Tournament updated successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//delete a tournament
exports.deleteTournament = (req, res, next) => {
    try {
        tournament.deleteOne({ _id: req.params.id }).then(result => {
            res.status(200).json({
                message: 'Tournament deleted successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get all tournaments
exports.getTournaments = (req, res, next) => {
    try{
        tournament.find().then(documents => {
            res.status(200).json({
                message: 'Tournaments fetched successfully!',
                tournaments: documents
            });
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//get a tournament by id
exports.getTournamentById = (req, res, next) => {
    try {
        tournament.findById(req.params.id).then(document => {
            res.status(200).json({
                message: 'Tournament fetched successfully!',
                tournament: document
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get all tournaments by category
exports.getTournamentsByCategory = (req, res, next) => {
    try {
        tournament.find({categoryId: req.params.id}).then(documents => {
            res.status(200).json({
                message: 'Tournaments fetched successfully!',
                tournaments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get all tournaments by game
exports.getTournamentsByGame = (req, res, next) => {
    try {
        tournament.find({game: req.params.game}).then(documents => {
            res.status(200).json({
                message: 'Tournaments fetched successfully!',
                tournaments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get tournaments by nb of participants
exports.getTournamentsByNbParticipants = (req, res, next) => {
    try {
        tournament.find({maxParticipants: req.params.nb}).then(documents => {
            res.status(200).json({
                message: 'Tournaments fetched successfully!',
                tournaments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//register to a tournament
exports.registerToTournament = (req, res, next) => {
    try {
        tournament.updateOne({ _id: req.params.id }, { $push: { participants: req.body.userId } }).then(result => {
            res.status(200).json({
                message: 'You have been registered successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//unregister from a tournament
exports.unregisterFromTournament = (req, res, next) => {
    try {
        tournament.updateOne({ _id: req.params.id }, { $pull: { participants: req.body.userId } }).then(result => {
            res.status(200).json({
                message: 'You have been unregistered successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//get all participants of a tournament
exports.getParticipants = (req, res, next) => {
    try {
        tournament.findById(req.params.id).then(document => {
            res.status(200).json({
                message: 'Participants fetched successfully!',
                participants: document.participants
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//unregister all participants from a tournament
exports.unregisterAllParticipants = (req, res, next) => {
    try {
        tournament.updateOne({ _id: req.params.id }, { $set: { participants: [] } }).then(result => {
            res.status(200).json({
                message: 'All participants have been unregistered successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//unregister a participant from a tournament by id
exports.unregisterParticipant = (req, res, next) => {
    try {
        tournament.updateOne({ _id: req.params.id }, { $pull: { participants: req.body.userId } }).then(result => {
            res.status(200).json({
                message: 'Participant has been unregistered successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//remove tournament after it is finished and add the winner to the winners list
exports.removeTournament = (req, res, next) => {
    try {
        tournament.findById(req.params.id).then(document => {
            tournament.updateOne({ _id: req.params.id }, { $set: { participants: [] } }).then(result => {
                tournament.updateOne({ _id: req.params.id }, { $set: { winner: document.participants[0] } }).then(result => {
                    res.status(200).json({
                        message: 'Tournament has been removed successfully!'
                    });
                });
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }

}
