const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.stationowner');

module.exports = function () {
    router.post('/create', controller.createstationdetails);

    router.get('/:id', controller.getdetails);

    router.put('/update/:id', controller.updateDetails);


    return router;
}