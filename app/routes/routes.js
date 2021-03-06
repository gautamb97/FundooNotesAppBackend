/* eslint-disable linebreak-style */

/**
 * @description   : It is use to route the APIs
 * @file          : user.js
 * @author        : Gautam Biswal <gautam971997@gmail.com>
*/
const controller = require('../controllers/user');
const noteController = require('../controllers/note');
const labelController = require('../controllers/label');
const { verifyingToken } = require('../utility/helper');
const { redisCache } = require('../utility/redisCache');

module.exports = (app) => {
  app.post('/registration', controller.create);

  app.post('/login', controller.login);

  app.post('/forgotPassword', controller.forgotPassword);

  app.post('/resetPassword/:token', verifyingToken, controller.resetPassword);

  app.post('/notes', verifyingToken, noteController.createNote);

  app.put('/notes/:noteId', verifyingToken, noteController.updateNote);

  app.get('/notes', verifyingToken, redisCache, noteController.getAllNotes);

  app.delete('/notes/:noteId', verifyingToken, noteController.deleteNote);

  app.post('/labels', verifyingToken, labelController.createLabel);

  app.put('/labels/:labelId', verifyingToken, labelController.updateLabel);

  app.delete('/labels/:labelId', verifyingToken, labelController.deleteLabel);

  app.get('/labels', verifyingToken, labelController.getAllLabels);

  app.post('/addLabelToNote', verifyingToken, noteController.addLabelToNote);

  app.delete('/removeLabelFromNote', verifyingToken, noteController.removeLabelFromNote);
};
