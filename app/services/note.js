/**
 * @description   : It is work as a middleware between models and controller
 * @file          : note.js
 * @author        : Gautam Biswal <gautam971997@gmail.com>
*/
const models = require('../models/note');

class Service {
  /**
   * @description   : It is used to create note taking data from controller and sending to models
   * @param {data}  : it contains data which we are passing from body
   * @param {token} : its has login token and sending to helper to extract id of user
  */
  createNote = (data, callback) => {
    models.create(data, callback);
  }

  /**
   * @description   : It is used to update an existing note taking data from controller
   *                  and sending to models
   * @param {data}  : it contains data which we are passing from body
  */
  updateNote = (data, callback) => {
    models.updateNote(data, callback);
  }

  getAllNotes = (data, callback) => {
    models.getAllNotes(data, callback);
  }

  deleteNote = (data, callback) => {
    models.deleteNote(data, callback);
  }
}

module.exports = new Service();