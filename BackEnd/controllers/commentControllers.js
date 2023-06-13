const comment = require('../models/comment');

//create a comment
exports.createComment = (req, res, next) => {
    try{
        const newComment = new comment({
            content: req.body.content,
            creationDate: req.body.creationDate,
            userId: req.body.userId,
            tournamentId: req.body.tournamentId,
        });
        newComment.save();
        res.status(201).json({
            message: 'Comment created successfully!'
        });
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

}

//update a comment
exports.updateComment = (req, res, next) => {
    try {
        const updatedComment = new comment({
            _id: req.body.id,
            content: req.body.content,
            creationDate: req.body.creationDate,
            userId: req.body.userId,
            tournamentId: req.body.tournamentId,
        });
        comment.updateOne({ _id: req.params.id }, updatedComment).then(result => {
            res.status(200).json({
                message: 'Comment updated successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}


//delete a comment
exports.deleteComment = (req, res, next) => {
    try {
        comment.deleteOne({ _id: req.params.id }).then(result => {
            res.status(200).json({
                message: 'Comment deleted successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}


//get all comments of the user in tournament
exports.getCommentsOfUserInTournament = (req, res, next) => {
    try {
        comment.find({userId:req.params.userId,tournamentId:req.params.tournamentId}).then(documents => {
            res.status(200).json({
                message: 'Comments fetched successfully!',
                comments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//get all comments of a tournament
exports.getCommentsOfTournament = (req, res, next) => {
    try {
        comment.find({tournamentId:req.params.id}).then(documents => {
            res.status(200).json({
                message: 'Comments fetched successfully!',
                comments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}



//get all comments of a user in a tournament
exports.getCommentsOfUserInTournament = (req, res, next) => {
    try {
        comment.find({userId:req.params.userId,tournamentId:req.params.tournamentId}).then(documents => {
            res.status(200).json({
                message: 'Comments fetched successfully!',
                comments: documents
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//remove comment of a user in a tournament
exports.removeCommentOfUserInTournament = (req, res, next) => {
    try {
        comment.deleteOne({userId:req.params.userId,tournamentId:req.params.tournamentId}).then(result => {
            res.status(200).json({
                message: 'Comment deleted successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

//update comment of a user in a tournament
exports.updateCommentOfUserInTournament = (req, res, next) => {
    try {
        const updatedComment = new comment({
            _id: req.body.id,
            content: req.body.content,
            creationDate: req.body.creationDate,
            userId: req.body.userId,
            tournamentId: req.body.tournamentId,
        });
        comment.updateOne({ userId: req.params.userId,tournamentId:req.params.tournamentId }, updatedComment).then(result => {
            res.status(200).json({
                message: 'Comment updated successfully!'
            });
        });
    }catch (error) {
        res.status(500).json({
            error: error
        });
    }
}

