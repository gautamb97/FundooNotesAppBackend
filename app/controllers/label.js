/**
 * @description   : It is use to taking the request from the client and gives the response.
 * @file          : label.js
 * @author        : Gautam Biswal <gautam971997@gmail.com>
*/
require('dotenv').config();
const services = require('../services/label');

class LabelController {
    /**
     * @description : It is creating a label in fundooNotes for particular user.
     * @param {httprequest} req
     * @param {httpresponse} res
     * @method       : createLabel from service.js
    */
    createLabel = (req, res) => {
      try {
        const labelDetails = {
          label: req.body.label,
          userId: req.userId,
        };
        services.createLabel(labelDetails, (error, data) => {
          if (error) {
            return res.status(400).send({
              success: false,
              message: 'Unable to create label',
            });
          }
          return res.status(200).send({
            success: true,
            message: 'label created successfully',
            data,
          });
        });
      } catch (err) {
        res.status(500).send({
          success: false,
          message: 'Internal server error',
        });
      }
    }
}

module.exports = new LabelController();