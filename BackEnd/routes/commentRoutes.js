const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentControllers');

//create a comment
router.post('/createComment', commentController.createComment);

//update a comment
router.put('/updateComment/:id', commentController.updateComment);

//delete a comment
router.delete('/deleteComment/:id', commentController.deleteComment);

//get all comments
router.get('/getAllComments', commentController.getCommentsOfTournament);

//get all comments of a user
router.get('/getCommentsByUser/:id', commentController.getCommentsOfUserInTournament);

//delete a comment of a user in a tournament
router.delete('/deleteCommentOfUserInTournament/:userId/:tournamentId', commentController.removeCommentOfUserInTournament);

//update a comment of a user in a tournament
router.put('/updateCommentOfUserInTournament/:userId/:tournamentId', commentController.updateCommentOfUserInTournament);


module.exports = router;