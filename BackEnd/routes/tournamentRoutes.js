const express = require('express');
const router = express.Router();
const tournamentController = require('../controllers/tournamentControllers');

//create a tournament
router.post('/createTournament', tournamentController.createTournament);

//update a tournament
router.put('/updateTournament/:id', tournamentController.updateTournament);

//delete a tournament
router.delete('/deleteTournament/:id', tournamentController.deleteTournament);

//get all tournaments
router.get('/getAllTournaments', tournamentController.getTournaments);
//get a tournament by id
router.get('/getTournamentById/:id', tournamentController.getTournamentById);

//register a user to a tournament
router.post('/registerUserToTournament', tournamentController.registerToTournament);

//unregister a user from a tournament
router.post('/unregisterUserFromTournament', tournamentController.unregisterFromTournament);

//get all participants of a tournament
router.get('/getParticipants/:id', tournamentController.getParticipants);

//unregister all particpants from a tournament
router.post('/unregisterAllParticipants/:id', tournamentController.unregisterAllParticipants);

//unregister a participant from a tournament by id
router.post('/unregisterParticipantById', tournamentController.unregisterParticipant);


module.exports = router;

